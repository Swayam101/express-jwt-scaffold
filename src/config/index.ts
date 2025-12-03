import dotenv from 'dotenv';
import path from 'path';

// Determine which .env file to load based on NODE_ENV
const nodeEnv = process.env.NODE_ENV || 'development';
const envFile = nodeEnv === 'production' ? '.env' : `.env.${nodeEnv}`;

// Load environment-specific .env file
dotenv.config({ path: path.resolve(process.cwd(), envFile) });

// Log which environment file is being used
console.log(`📄 Loading environment from: ${envFile}`);

export const config = {
  port: parseInt(process.env.PORT || '3000', 10),
  nodeEnv,
  corsOrigin: process.env.CORS_ORIGIN || '*',
  apiVersion: process.env.API_VERSION || 'v1',

  database: {
    url: process.env.DATABASE_URL,
  },

  jwt: {
    secret: process.env.JWT_SECRET || 'your-secret-key',
    expiresIn: process.env.JWT_EXPIRES_IN || '7d',
  },
};

export default config;
