import bcrypt from 'bcryptjs';
import { z } from 'zod';

// Password hashing utilities
export const hashPassword = async (password: string): Promise<string> => {
  const rounds = Number.parseInt(process.env.BCRYPT_ROUNDS || '12');
  return await bcrypt.hash(password, rounds);
};

export const verifyPassword = async (password: string, hashedPassword: string): Promise<boolean> => {
  return await bcrypt.compare(password, hashedPassword);
};

// Validation schemas
export const signupSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
      'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
    ),
  confirmPassword: z.string(),
  name: z.string().min(2, 'Name must be at least 2 characters long'),
  acceptTerms: z.boolean().refine(val => val === true, 'You must accept the terms and conditions'),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

export type SignupFormData = z.infer<typeof signupSchema>;

// User type for verification
export interface User {
  id: string;
  email: string;
  name: string;
  hashedPassword: string;
  isVerified: boolean;
  verificationToken?: string;
  createdAt: Date;
}

// Generate verification token
export const generateVerificationToken = (): string => {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
};
