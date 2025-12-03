import { AuthResponse } from '../../types';
import { findUserByEmail, createUser } from '../../dao';
import { generateToken } from './generateToken';

export const register = async (email: string, password: string): Promise<AuthResponse> => {
  const existingUser = await findUserByEmail(email);
  if (existingUser) {
    throw new Error('User already exists with this email');
  }

  const user = await createUser(email, password);
  const token = generateToken(user);

  return {
    user: {
      id: user._id.toString(),
      email: user.email,
    },
    token,
  };
};

