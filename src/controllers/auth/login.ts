import { Response } from 'express';
import { login as loginService } from '../../services/auth';
import { AuthRequest } from '../../types';
import { jsonResponse, asyncWrapper } from '../../utils';

export const login = asyncWrapper(async (req: AuthRequest, res: Response): Promise<void> => {
  const { email, password } = req.body;

  if (!email || !password) {
    return jsonResponse(res, 400, false, undefined, 'Email and password are required');
  }

  const result = await loginService(email, password);
  jsonResponse(res, 200, true, result, undefined, 'Login successful');
});

