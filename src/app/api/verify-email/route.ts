import { type NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/database';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const token = searchParams.get('token');

    if (!token) {
      return NextResponse.json(
        { error: 'Verification token is required' },
        { status: 400 }
      );
    }

    // Find user by verification token
    const user = await db.findUserByVerificationToken(token);
    if (!user) {
      return NextResponse.json(
        { error: 'Invalid or expired verification token' },
        { status: 400 }
      );
    }

    // Check if user is already verified
    if (user.isVerified) {
      return NextResponse.json({
        success: true,
        message: 'Email address has already been verified',
        alreadyVerified: true,
      });
    }

    // Verify the user
    const verificationSuccess = await db.verifyUser(user.id);
    if (!verificationSuccess) {
      return NextResponse.json(
        { error: 'Failed to verify email address' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Email address verified successfully! You can now log in to your account.',
      verified: true,
    });

  } catch (error) {
    console.error('Email verification error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
