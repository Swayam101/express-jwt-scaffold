import { Response } from 'express';
import { register as registerService } from '../../services/auth';
import { AuthRequest } from '../../types';
import { jsonResponse, asyncWrapper } from '../../utils';

export const register = asyncWrapper(async (req: AuthRequest, res: Response): Promise<void> => {
  const { email, password } = req.body;

  if (!email || !password) {
    return jsonResponse(res, 400, false, undefined, 'Email and password are required');
  }

  const result = await registerService(email, password);
  jsonResponse(res, 201, true, result, undefined, 'User registered successfully');
});

