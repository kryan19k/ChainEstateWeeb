// Verify reCAPTCHA token on server side
export const verifyRecaptcha = async (token: string): Promise<boolean> => {
  try {
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;

    if (!secretKey) {
      console.error('reCAPTCHA secret key not configured');
      return false;
    }

    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${secretKey}&response=${token}`,
    });

    const data = await response.json();

    // For reCAPTCHA v2: just check success
    // For reCAPTCHA v3: check success and score
    if (data.score !== undefined) {
      // reCAPTCHA v3 Enterprise - check score
      return data.success && data.score >= 0.5;
    } else {
      // reCAPTCHA v2 - just check success
      return data.success;
    }
  } catch (error) {
    console.error('reCAPTCHA verification failed:', error);
    return false;
  }
};

// Client-side reCAPTCHA configuration
export const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '';
