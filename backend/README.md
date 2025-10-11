# WAStec Bio-Gas Backend API

This is the backend API for the WAStec Bio-Gas website, built with Node.js, Express, and MongoDB.

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud instance)

### Installation
1. Clone the repository
2. Navigate to the `backend` directory
3. Run `npm install` to install dependencies
4. Create a `.env` file based on `.env.example`
5. Run `npm run dev` to start the development server

### Environment Variables
Create a `.env` file in the root of the backend directory with the following variables:
```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
NODE_ENV=development
```

## API Endpoints

### Contact Form
- **POST** `/api/contact`
  - Submit contact form data
  - Request body: `{ name, email, company, phone, subject, message }`

### Career Applications
- **POST** `/api/careers`
  - Submit career application data
  - Request body: `{ name, email, phone, position, experience, message }`

## Project Structure
```
backend/
├── controllers/          # Business logic
├── models/               # MongoDB models
├── routes/               # API routes
├── .env                  # Environment variables
├── server.js             # Entry point
└── package.json          # Dependencies and scripts
```

## Dependencies
- express: Web framework
- mongoose: MongoDB ODM
- cors: Cross-origin resource sharing
- dotenv: Environment variable management

## Development
- Run `npm run dev` for development with nodemon
- Run `npm start` for production