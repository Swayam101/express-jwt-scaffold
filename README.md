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
```bash
cp env.example .env
```

4. Update the `.env` file with your configuration:
```env
PORT=3000
NODE_ENV=development
DATABASE_URL=mongodb://localhost:27017/express-scaffold
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRES_IN=7d
CORS_ORIGIN=*
```

### Running the Application

**Development mode** (with hot reload):
```bash
yarn dev
```

**Production mode**:
```bash
# Build the project
yarn build

# Start the server
yarn start
```

The server will start on `http://localhost:3000` (or your configured PORT).

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

- `yarn dev` - Run the app in development mode with ts-node
- `yarn build` - Compile TypeScript to JavaScript
- `yarn start` - Run the compiled JavaScript app
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

All configuration is managed through environment variables. See `env.example` for all available options.

## 🤝 Contributing

Feel free to fork this project and customize it for your needs. This is a scaffold meant to be adapted to your specific requirements.

## 📄 License

ISC

## 👤 Author

swayam

---

**Happy Coding! 🚀**

