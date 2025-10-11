# Kukreja's WAStec Bio-Gas Website

A professional, modern, and eco-tech themed website for Kukreja's WAStec Bio-Gas Private Limited, a BARC-incubated startup specializing in biogas purification and waste upcycling.

## Project Structure
```
.
├── frontend/             # React frontend application
│   ├── src/              # Source code
│   │   ├── components/   # Reusable UI components
│   │   ├── pages/        # Page components
│   │   ├── services/     # API service functions
│   │   ├── App.jsx       # Main application component
│   │   └── main.jsx      # Entry point
│   └── ...
├── backend/              # Node.js backend API
│   ├── controllers/      # Business logic
│   ├── models/           # MongoDB models
│   ├── routes/           # API routes
│   ├── server.js         # Entry point
│   └── ...
└── ...
```

## Technologies Used

### Frontend
- React.js with Vite
- Tailwind CSS for styling
- React Router for navigation
- Responsive design for all devices

### Backend
- Node.js with Express
- MongoDB with Mongoose ODM
- RESTful API architecture
- Environment variable configuration

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud instance)

### Frontend Setup
1. Navigate to the `frontend` directory
2. Run `npm install` to install dependencies
3. Run `npm run dev` to start the development server
4. Visit `http://localhost:5173` in your browser

### Backend Setup
1. Navigate to the `backend` directory
2. Run `npm install` to install dependencies
3. Create a `.env` file based on `.env.example`
4. Run `npm run dev` to start the development server
5. The API will be available at `http://localhost:5000`

## Features
- Responsive design for all device sizes
- Interactive sustainability impact calculator
- Live biogas output counters
- Contact form with backend integration
- Career application form with backend integration
- Detailed pages for technology, projects, and impact
- BARC incubation branding and credentials

## API Endpoints
- **POST** `/api/contact` - Submit contact form
- **POST** `/api/careers` - Submit career application

## Deployment
- Frontend: Can be deployed to Vercel, Netlify, or similar static hosting
- Backend: Can be deployed to Heroku, AWS, or similar cloud platforms
- MongoDB: Can use MongoDB Atlas for cloud database hosting

## Development
This project follows modern web development practices with a clean separation between frontend and backend concerns.