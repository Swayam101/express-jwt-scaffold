# Express TypeScript Scaffold

A modular and production-ready scaffold for building Node.js Express applications with TypeScript. This scaffold includes authentication, database integration, and a well-structured architecture to kickstart your API development.

## ✨ Features

- **TypeScript** - Full TypeScript support with strict mode
- **Authentication** - JWT-based authentication with bcrypt password hashing
- **Database** - MongoDB integration with Mongoose ODM
- **Error Handling** - Centralized error handling middleware
- **CORS** - Configurable CORS support
- **Modular Architecture** - Clean separation of concerns (routes, controllers, services, models)
- **Graceful Shutdown** - Handles SIGTERM and SIGINT signals properly
- **Health Check** - Built-in health check endpoint
- **Environment Configuration** - dotenv for environment variables
- **Async Wrapper** - Utility for handling async route errors

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: MongoDB (Mongoose)
- **Authentication**: JWT + bcrypt
- **Development**: ts-node

## 📁 Project Structure

```
src/
├── config/          # Configuration files (database, env)
├── controllers/     # Request handlers
├── middleware/      # Custom middleware (auth, error handling)
├── models/          # Database models
├── routes/          # API routes
├── services/        # Business logic layer
├── types/           # TypeScript type definitions
├── utils/           # Utility functions (logger, response helpers)
├── app.ts           # Express app setup
└── index.ts         # Server entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or remote instance)
- Yarn or npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd node-express-scaffold
```

2. Install dependencies:
```bash
yarn install
# or
npm install
```

3. Set up environment variables:

**For Development:**
```bash
cp .env.development.example .env.development
```

**For Production:**
```bash
cp env.example .env
```

4. Update the environment files with your configuration:

**Development (`.env.development`):**
```env
PORT=3000
NODE_ENV=development
DATABASE_URL=mongodb://localhost:27017/express-scaffold-dev
JWT_SECRET=dev-secret-key-change-this
JWT_EXPIRES_IN=7d
CORS_ORIGIN=*
```

**Production (`.env`):**
```env
PORT=3000
NODE_ENV=production
DATABASE_URL=mongodb://your-production-db-url
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRES_IN=7d
CORS_ORIGIN=https://yourdomain.com
```

### Running the Application

**Development mode** (uses `.env.development`):
```bash
yarn dev
```

**Production mode** (uses `.env`):
```bash
# Build the project
yarn build

# Start the server
yarn start
```

**Run built code in development** (uses `.env.development`):
```bash
yarn start:dev
```

The server will start on `http://localhost:3000` (or your configured PORT).

> **Note:** The application automatically loads the correct environment file based on `NODE_ENV`:
> - `development` → `.env.development`
> - `production` → `.env`

## 📡 API Endpoints

### Health Check
```
GET /health
```
Returns server health status.

### Authentication

#### Register
```
POST /api/auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "securepassword"
}
```

#### Login
```
POST /api/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "securepassword"
}
```

#### Get Profile (Protected)
```
GET /api/auth/profile
Authorization: Bearer <your-jwt-token>
```

## 🔐 Authentication

This scaffold uses JWT (JSON Web Tokens) for authentication. After successful login or registration, you'll receive a token that must be included in the `Authorization` header for protected routes:

```
Authorization: Bearer <your-jwt-token>
```

## 📝 Available Scripts

- `yarn dev` - Run the app in development mode with ts-node (uses `.env.development`)
- `yarn build` - Compile TypeScript to JavaScript
- `yarn start` - Run the compiled app in production mode (uses `.env`)
- `yarn start:dev` - Run the compiled app in development mode (uses `.env.development`)
- `yarn clean` - Remove the dist folder
- `yarn test` - Run tests (to be implemented)

## 🏗️ Architecture

This scaffold follows a layered architecture:

- **Routes** - Define API endpoints and map them to controllers
- **Controllers** - Handle HTTP requests/responses
- **Services** - Contain business logic
- **Models** - Define database schemas
- **Middleware** - Handle cross-cutting concerns (auth, error handling)
- **Utils** - Reusable utility functions

## 🔧 Configuration

All configuration is managed through environment-specific files:

### Environment Files

- **`.env.development`** - Used when `NODE_ENV=development` (for local development)
- **`.env`** - Used when `NODE_ENV=production` (for production deployments)
- **`env.example`** - Template for production environment
- **`.env.development.example`** - Template for development environment

The application automatically loads the correct file based on the `NODE_ENV` variable. This is handled in `src/config/index.ts`.

### Configuration Variables

See the example files for all available configuration options:
- Server configuration (PORT, NODE_ENV)
- Database connection (DATABASE_URL)
- JWT settings (JWT_SECRET, JWT_EXPIRES_IN)
- CORS settings (CORS_ORIGIN)
- API versioning (API_VERSION)

## 🤝 Contributing

Feel free to fork this project and customize it for your needs. This is a scaffold meant to be adapted to your specific requirements.

## 📄 License

ISC

## 👤 Author

swayam

---

**Happy Coding! 🚀**

