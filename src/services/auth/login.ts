import { AuthResponse } from '../../types';
import { findUserByEmailWithPassword } from '../../dao';
import { generateToken } from './generateToken';

export const login = async (email: string, password: string): Promise<AuthResponse> => {
  const user = await findUserByEmailWithPassword(email);
  if (!user) {
    throw new Error('Invalid email or password');
  }

  const isPasswordValid = await user.comparePassword(password);
  if (!isPasswordValid) {
    throw new Error('Invalid email or password');
  }

  const token = generateToken(user);

  return {
    user: {
      id: user._id.toString(),
      email: user.email,
    },
    token,
  };
};

