# Learn tRPC with TypeScript, Express, and Modular Structure (basic-tRPC)

> ℹ️ **Info**: This project is intended for learning purposes and aims to provide a foundational understanding of how to set up and use tRPC in a TypeScript environment with Express and having Modular Structure.

<br/>

![License](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)

This repository contains a basic implementation of tRPC, a framework for building typesafe APIs using TypeScript. The project is structured to follow the Model-View-Controller (MVC) pattern and is modularized for scalability and maintainability. It demonstrates how to set up a tRPC server with Express, handle API routes, manage environment variables, and validate inputs using `zod`.

## Project Structure

```
basic/
├── .env
├── .gitignore
├── README.md
├── index.ts
├── package.json
├── tsconfig.json
├── src/
│   ├── client.ts
│   ├── config/
│   │   └── env.ts
│   ├── controllers/
│   │   ├── index.ts
│   │   ├── message.controller.ts
│   │   └── post.controller.ts
│   ├── db.ts
│   ├── events.ts
│   ├── inputs/
│   │   ├── index.ts
│   │   └── procedures.ts
│   ├── routes/
│   │   ├── index.ts
│   │   ├── message.routes.ts
│   │   └── post.routes.ts
│   ├── server.ts
│   └── trpc-server.ts
```

## Description

This project demonstrates a basic setup of tRPC with an MVC and modular structure. It includes the following components:

- **Controllers**: Handle the business logic for messages and posts.
- **Routes**: Define the API endpoints for messages and posts.
- **Inputs**: Define the input validation schemas using `zod`.
- **Events**: Manage events and event-driven architecture.
- **Database**: Simulate a simple in-memory database.
- **Configuration**: Manage environment variables.
- **Client**: Demonstrates how to interact with the tRPC server.
- **Server**: Sets up an Express server with tRPC middleware.

## Getting Started

1. **Install Dependencies**:

   ```sh
   bun install
   ```

2. **Run the Server**:

   ```sh
   bun run dev:server
   ```

3. **Run the Client**:
   ```sh
   bun run dev:client
   ```

## Scripts

- `dev:server`: Run the server in watch mode.
- `dev:client`: Run the client in watch mode.
- `dev`: Run both server and client concurrently.
- `type-check`: Check TypeScript types.
- `build`: Build the project.
- `lint`: Lint the source code.
- `start`: Start the development server.
- `test-dev`: Run tests in development mode.
- `test-start`: Run tests in production mode.

## Environment Variables

- `PORT`: The port on which the server runs (default: 9000).
- `SERVER_ENDPOINT`: The server endpoint URL (default: `http://localhost:9000`).

## Dependencies

- `@trpc/client`: tRPC client library.
- `@trpc/react-query`: tRPC React Query integration.
- `@trpc/server`: tRPC server library.
- `dotenv`: Environment variable management.
- `express`: Web framework for Node.js.
- `zod`: TypeScript-first schema declaration and validation library.

## Dev Dependencies

- `@types/bun`: Type definitions for Bun.
- `@types/dotenv`: Type definitions for dotenv.
- `@types/express`: Type definitions for Express.
- `typescript`: TypeScript language.

## License

This project is licensed under the MIT License.
