import { Request } from 'express';
import { JwtPayload } from 'jsonwebtoken';

// User type
export interface IUser {
  _id: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

// Auth request types
export interface RegisterRequest {
  email: string;
  password: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

// JWT payload type
export interface IJwtPayload extends JwtPayload {
  userId: string;
  email: string;
}

// Extended Express Request with user
export interface AuthRequest extends Request {
  user?: IJwtPayload;
}

// API Response types
export interface ApiResponse<T = any> {
  success: boolean;
  message?: string;
  data?: T;
  error?: string;
}

export interface AuthResponse {
  user: {
    id: string;
    email: string;
  };
  token: string;
}

