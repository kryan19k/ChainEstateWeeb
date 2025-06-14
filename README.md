# CMS Platform - Landing Page with Secure Signup

A modern, responsive landing page for a CMS platform featuring a comprehensive signup system with automated verification, password hashing, and reCAPTCHA security measures.

## ✨ Features

### Security Features
- **Password Hashing**: Secure password storage using bcrypt with 12 rounds
- **Form Validation**: Strong password requirements with Zod schema validation
- **reCAPTCHA Protection**: Google reCAPTCHA v2 integration for spam protection
- **Email Verification**: Automated email verification system
- **Input Sanitization**: Comprehensive form input validation

### User Experience
- **Responsive Design**: Mobile-first design that works on all devices
- **Modern UI**: Built with shadcn/ui components and Tailwind CSS
- **Real-time Validation**: Instant feedback on form inputs
- **Loading States**: Clear loading indicators during form submission
- **Error Handling**: User-friendly error messages and notifications

### Technical Features
- **Next.js 15**: Latest version with App Router
- **TypeScript**: Full type safety throughout the application
- **Server-Side API**: RESTful API endpoints for signup and verification
- **Email Integration**: SMTP email sending with HTML templates
- **Demo Mode**: Works without external services for testing

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ or Bun
- Git

### Installation

1. **Clone and setup the project:**
   ```bash
   git clone <repository-url>
   cd cms-landing-page
   bun install
   ```

2. **Configure environment variables:**
   Copy `.env.local` and update with your values:
   ```bash
   # reCAPTCHA (optional for demo)
   NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key
   RECAPTCHA_SECRET_KEY=your_secret_key

   # Email (optional for demo)
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your_email@gmail.com
   SMTP_PASS=your_app_password

   # Security
   JWT_SECRET=your_random_secret
   BCRYPT_ROUNDS=12
   ```

3. **Start the development server:**
   ```bash
   bun run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000`

## 🔧 Configuration

### reCAPTCHA Setup (Optional)
1. Go to [Google reCAPTCHA](https://www.google.com/recaptcha/)
2. Create a new site with reCAPTCHA v2
3. Add your domain (localhost:3000 for development)
4. Copy the site key and secret key to your `.env.local`

### Email Setup (Optional)
For Gmail:
1. Enable 2-factor authentication
2. Generate an app password
3. Use the app password in `SMTP_PASS`

## 📋 API Endpoints

### POST /api/signup
Creates a new user account with email verification.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "SecurePass123!",
  "confirmPassword": "SecurePass123!",
  "acceptTerms": true,
  "recaptchaToken": "token_from_recaptcha"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Account created successfully!",
  "emailSent": true
}
```

### GET /api/verify-email?token=xxx
Verifies a user's email address using the verification token.

**Response:**
```json
{
  "success": true,
  "message": "Email verified successfully!",
  "verified": true
}
```

## 🛡️ Security Features

### Password Requirements
- Minimum 8 characters
- At least one uppercase letter
- At least one lowercase letter
- At least one number
- At least one special character

### Password Hashing
- Uses bcrypt with 12 rounds (configurable)
- Salted hashing for maximum security
- No plain text passwords stored

### reCAPTCHA Protection
- Prevents automated bot signups
- Score-based verification (threshold: 0.5)
- Graceful fallback when not configured

### Email Verification
- Unique verification tokens
- HTML email templates
- Automatic token cleanup after verification

## 🏗️ Architecture

### Frontend
- **Next.js 15** with App Router
- **React Hook Form** for form management
- **Zod** for schema validation
- **shadcn/ui** for components
- **Tailwind CSS** for styling
- **TypeScript** for type safety

### Backend
- **Next.js API Routes** for server-side logic
- **bcrypt** for password hashing
- **nodemailer** for email sending
- **In-memory database** for demo (easily replaceable)

### File Structure
```
cms-landing-page/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── signup/route.ts
│   │   │   └── verify-email/route.ts
│   │   ├── verify-email/page.tsx
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── ui/              # shadcn/ui components
│   │   ├── signup-form.tsx
│   │   └── demo-notice.tsx
│   └── lib/
│       ├── auth.ts          # Authentication utilities
│       ├── database.ts      # Database abstraction
│       ├── email.ts         # Email sending
│       ├── recaptcha.ts     # reCAPTCHA verification
│       └── utils.ts         # Utility functions
├── .env.local               # Environment variables
└── package.json
```

## 🧪 Testing

### Manual Testing
1. Fill out the signup form with various inputs
2. Test password validation requirements
3. Try submitting without reCAPTCHA (if enabled)
4. Check email verification flow
5. Test responsive design on different devices

### Test Accounts
The application uses an in-memory database, so all data resets when the server restarts.

## 🔄 Production Deployment

### Database
Replace the in-memory database with a real database:
- PostgreSQL (recommended)
- MongoDB
- MySQL

### Email Service
Consider using:
- SendGrid
- Mailgun
- Amazon SES

### Security Enhancements
- Rate limiting
- CSRF protection
- Input sanitization
- SQL injection prevention (with real database)

## 📦 Dependencies

### Core Dependencies
- `next` - React framework
- `react` - UI library
- `typescript` - Type safety
- `tailwindcss` - Styling
- `@shadcn/ui` - UI components

### Authentication & Security
- `bcryptjs` - Password hashing
- `zod` - Schema validation
- `react-google-recaptcha` - reCAPTCHA integration

### Forms & Validation
- `react-hook-form` - Form management
- `@hookform/resolvers` - Form validation

### Email
- `nodemailer` - Email sending

### UI & UX
- `lucide-react` - Icons
- `sonner` - Toast notifications

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

If you encounter any issues:
1. Check the environment variables are configured correctly
2. Ensure all dependencies are installed
3. Check the browser console for errors
4. Review the server logs

For additional help, please open an issue in the repository.
