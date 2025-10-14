# Voice of the Wild

Voice of the Wild is a React-based web application dedicated to wildlife conservation and community engagement. It provides a platform for volunteers, members, and ambassadors to connect, share stories, and contribute to wildlife protection efforts.

## Features

- **Hero Section**: Engaging landing page with key messaging.
- **About Us**: Information about the organization's mission and goals.
- **Members Showcase**: Display of community members and their contributions.
- **Volunteer Registration**: Form for individuals to register as volunteers.
- **Ambassador Program**: Dedicated section for committee members and ambassadors.
- **Community Gallery**: Showcase of volunteer stories and photos.
- **Statistics**: Key metrics and achievements.
- **Contact Form**: Easy way for visitors to get in touch.
- **Responsive Design**: Optimized for all devices using Tailwind CSS.

## Tech Stack

### Frontend
- **React 19**: Modern JavaScript library for building user interfaces.
- **Vite**: Fast build tool and development server.
- **React Router**: Client-side routing for navigation.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Firebase Storage**: Cloud storage for images and media.
- **Swiper**: Touch-enabled slider library for carousels.
- **FontAwesome**: Icon library for UI elements.

### Backend
- **Express.js**: Web application framework for Node.js.
- **MongoDB**: NoSQL database for storing user and member data.
- **Mongoose**: ODM for MongoDB.
- **CORS**: Cross-origin resource sharing middleware.

## Prerequisites

- Node.js (version 16 or higher)
- MongoDB (local installation or cloud service like MongoDB Atlas)
- npm or yarn package manager

## Installation

### Frontend Setup

1. Navigate to the `voice_of_wild` directory:
   ```bash
   cd voice_of_wild
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root of `voice_of_wild` and add your Firebase configuration:
   ```
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
   ```

### Backend Setup

1. Navigate to the `server` directory:
   ```bash
   cd ../server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the `server` directory and add your MongoDB connection string:
   ```
   PORT=5000
   MONGO_DB=your_mongodb_connection_string
   ```

## Running the Application

### Development Mode

1. Start the backend server:
   ```bash
   cd server
   npm start
   ```

2. In a new terminal, start the frontend:
   ```bash
   cd voice_of_wild
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173` (or the port shown in the terminal).

### Production Build

1. Build the frontend:
   ```bash
   cd voice_of_wild
   npm run build
   ```

2. The built files will be in the `dist` directory. Serve them using any static file server or deploy to your preferred hosting platform.

## API Endpoints

The backend provides the following API endpoints:

- `GET /api` - Health check endpoint
- `POST /api/users` - Register a new volunteer
- `GET /api/users` - Fetch all registered volunteers
- `POST /api/ambassador` - Add a new ambassador member
- `GET /api/ambassador` - Fetch all ambassador members

## Project Structure

```
voice_of_wild/
├── public/          # Static assets
├── src/
│   ├── components/  # Reusable React components
│   ├── pages/       # Page components
│   └── ...
├── server/          # Backend Express server
│   ├── server.js    # Main server file
│   └── ...
└── package.json
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
