import nodemailer from 'nodemailer';

// Create transporter for sending emails
const createTransporter = () => {
  return nodemailer.createTransporter({
    host: process.env.SMTP_HOST,
    port: Number.parseInt(process.env.SMTP_PORT || '587'),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

// Send verification email
export const sendVerificationEmail = async (
  email: string,
  name: string,
  verificationToken: string
): Promise<boolean> => {
  try {
    const transporter = createTransporter();
    const verificationUrl = `${process.env.NEXTAUTH_URL}/verify-email?token=${verificationToken}`;

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: email,
      subject: 'Verify Your Email Address - CMS Platform',
      html: `
        <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 20px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px;">Welcome to CMS Platform</h1>
          </div>

          <div style="padding: 40px 20px; background: #f8f9fa;">
            <h2 style="color: #333; margin-bottom: 20px;">Hello ${name}!</h2>

            <p style="color: #666; line-height: 1.6; margin-bottom: 30px;">
              Thank you for signing up for our CMS platform. To complete your registration and activate your account,
              please verify your email address by clicking the button below.
            </p>

            <div style="text-align: center; margin: 40px 0;">
              <a href="${verificationUrl}"
                 style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                        color: white;
                        padding: 15px 30px;
                        text-decoration: none;
                        border-radius: 8px;
                        font-weight: bold;
                        display: inline-block;">
                Verify Email Address
              </a>
            </div>

            <p style="color: #666; line-height: 1.6; font-size: 14px;">
              If the button doesn't work, you can copy and paste this link into your browser:
              <br>
              <a href="${verificationUrl}" style="color: #667eea; word-break: break-all;">
                ${verificationUrl}
              </a>
            </p>

            <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">

            <p style="color: #999; font-size: 12px; text-align: center;">
              This verification link will expire in 24 hours. If you didn't create an account,
              please ignore this email.
            </p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error('Failed to send verification email:', error);
    return false;
  }
};
