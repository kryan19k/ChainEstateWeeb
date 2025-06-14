import { type NextRequest, NextResponse } from 'next/server';
import { signupSchema, hashPassword, generateVerificationToken } from '@/lib/auth';
import { verifyRecaptcha } from '@/lib/recaptcha';
import { sendVerificationEmail } from '@/lib/email';
import { db } from '@/lib/database';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { recaptchaToken, ...formData } = body;

    // Verify reCAPTCHA (only if configured)
    if (process.env.RECAPTCHA_SECRET_KEY) {
      if (!recaptchaToken) {
        return NextResponse.json(
          { error: 'reCAPTCHA verification required' },
          { status: 400 }
        );
      }

      const isRecaptchaValid = await verifyRecaptcha(recaptchaToken);
      if (!isRecaptchaValid) {
        return NextResponse.json(
          { error: 'reCAPTCHA verification failed' },
          { status: 400 }
        );
      }
    }

    // Validate form data
    const validationResult = signupSchema.safeParse(formData);
    if (!validationResult.success) {
      return NextResponse.json(
        { error: 'Validation failed', details: validationResult.error.issues },
        { status: 400 }
      );
    }

    const { email, password, name } = validationResult.data;

    // Check if user already exists
    const existingUser = await db.findUserByEmail(email);
    if (existingUser) {
      return NextResponse.json(
        { error: 'User with this email already exists' },
        { status: 409 }
      );
    }

    // Hash password
    const hashedPassword = await hashPassword(password);

    // Generate verification token
    const verificationToken = generateVerificationToken();

    // Create user
    const user = {
      id: Math.random().toString(36).substring(2) + Date.now().toString(36),
      email,
      name,
      hashedPassword,
      isVerified: false,
      verificationToken,
      createdAt: new Date(),
    };

    // Save user to database
    await db.saveUser(user);

    // Send verification email
    const emailSent = await sendVerificationEmail(email, name, verificationToken);

    if (!emailSent) {
      console.error('Failed to send verification email');
      // Don't fail the signup if email fails, just log it
    }

    return NextResponse.json({
      success: true,
      message: 'Account created successfully! Please check your email to verify your account.',
      emailSent,
    });

  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
