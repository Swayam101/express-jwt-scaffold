import User, { IUserDocument } from '../models/User';

export const findUserByEmail = async (email: string): Promise<IUserDocument | null> => {
  return await User.findOne({ email });
};

export const findUserByEmailWithPassword = async (email: string): Promise<IUserDocument | null> => {
  return await User.findOne({ email }).select('+password');
};

export const findUserById = async (userId: string): Promise<IUserDocument | null> => {
  return await User.findById(userId);
};

export const createUser = async (email: string, password: string): Promise<IUserDocument> => {
  return await User.create({ email, password });
};

