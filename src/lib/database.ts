import type { User } from './auth';

// Simple in-memory database for demo purposes
// In production, replace with a real database like PostgreSQL, MongoDB, etc.
class InMemoryDatabase {
  private users: Map<string, User> = new Map();
  private verificationTokens: Map<string, string> = new Map(); // token -> userId

  // Save user to database
  async saveUser(user: User): Promise<void> {
    this.users.set(user.id, user);
    if (user.verificationToken) {
      this.verificationTokens.set(user.verificationToken, user.id);
    }
  }

  // Find user by email
  async findUserByEmail(email: string): Promise<User | null> {
    for (const user of this.users.values()) {
      if (user.email === email) {
        return user;
      }
    }
    return null;
  }

  // Find user by ID
  async findUserById(id: string): Promise<User | null> {
    return this.users.get(id) || null;
  }

  // Find user by verification token
  async findUserByVerificationToken(token: string): Promise<User | null> {
    const userId = this.verificationTokens.get(token);
    if (userId) {
      return this.users.get(userId) || null;
    }
    return null;
  }

  // Verify user email
  async verifyUser(userId: string): Promise<boolean> {
    const user = this.users.get(userId);
    if (user) {
      user.isVerified = true;
      if (user.verificationToken) {
        this.verificationTokens.delete(user.verificationToken);
        user.verificationToken = undefined;
      }
      this.users.set(userId, user);
      return true;
    }
    return false;
  }

  // Get all users (for admin purposes)
  async getAllUsers(): Promise<User[]> {
    return Array.from(this.users.values());
  }
}

// Export singleton instance
export const db = new InMemoryDatabase();
