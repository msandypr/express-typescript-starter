# Express TypeScript Starter

A minimal boilerplate for building web applications using **Express.js** and **TypeScript**.

## 📦 Features

- Express.js with TypeScript support
- Environment configuration using `dotenv`
- Authentication with `bcrypt` and `jsonwebtoken`
- Database integration with **Prisma** and many DBMS supported
- Development mode with `nodemon` and `ts-node`

## 📚 Requirements

- Node.js (v18+ recommended)
- `npm` or `bun` for package manager

## 🚀 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/msandypr/express-typescript-starter.git

   cd express-typescript-starter
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   bun install
   ```

3. Set up environment variables:

   Create a `.env` file in the root directory and add the following:

   ```env
   APPLICATION_NAME="your application name"
   PORT=3000
   ```

## 📌 Usage

### Development Mode

```bash
npm run dev
```

### Build and Run

1. Compile TypeScript to JavaScript:

   ```bash
   npm run build
   ```

2. Run the compiled app:

   ```bash
   npm start
   ```

## 📁 Project Structure

```
.
├── public               # Static assets
├── src                  # Source code
│   └── index.ts         # Entry point
├── .env                 # Environment variables
├── package.json         # Dependencies and scripts
└── LICENSE              # BSD 3-Clause License
```

## 📜 License

This project is licensed under the **BSD 3-Clause License**. See the [LICENSE](./LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## 📧 Contact

For any questions, reach out to [Muhammad Sandy Putra Riyadi](mailto:msandypr.dev@gmail.com).

