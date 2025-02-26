# MFS-WebAPP Backend

A backend service for the Money Flow System (MFS) Web Application.

## Description

This project serves as the backend API for managing financial transactions, user accounts, and money flow tracking in the MFS system.

## Technologies

- Node.js
- Express.js
- MongoDB
- TypeScript

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

## Setup

1. Clone the repository

```bash
git clone https://github.com/kolinabir/MFS-Backend
cd MFS-WebAPP-Backend
```

2. Install dependencies

```bash
npm install
```

3. Configure environment variables

```bash
cp .env.example .env
```

Edit the `.env` file with your configuration

4. Start the development server

```bash
npm run dev
```

## API Documentation

The API endpoints are available at `http://localhost:5000`

### Main Endpoints

- `/auth` - Authentication routes
- `/users` - User management
- `/transactions` - Transaction operations

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm test` - Run tests

## Contributing

Please read CONTRIBUTING.md for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the LICENSE file for details
