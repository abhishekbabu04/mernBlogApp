Full Stack Blog App
A full-stack blog application built with the MERN stack — MongoDB, Express.js, React, and Node.js. The frontend uses Vite and Tailwind CSS, while the backend provides REST API functionality.
✨ Tech Stack
Frontend
- React 19
- Vite
- Tailwind CSS 4
- React Router
- Axios
- React Hook Form
- React Icons
- React Hot Toast / React Toastify
Backend
- Node.js
- Express 5
- MongoDB with Mongoose
- JWT for authentication
- bcryptjs for password hashing
- Cloudinary for cloud media storage
- express-fileupload for handling file uploads
- CORS, cookie-parser, dotenv, and validator
🚀 Features
- React-based responsive user interface
- Frontend routing with React Router
- REST API powered by Express.js
- MongoDB database integration with Mongoose
- Authentication support using JSON Web Tokens (JWT)
- Password hashing with bcryptjs
- Cloudinary integration for media storage
- Form handling and toast notifications
Available pages and functionality depend on the implementation in the source code. Update this list to reflect the exact features of your application.

📁 Project Structure
project-root/
├── frontend/          # React + Vite application
│   ├── src/
│   ├── public/
│   └── package.json
├── backend/            # Express API
│   ├── index.js
│   └── package.json
└── README.md
Your actual folders may differ; adjust this structure to match your repository.
✅ Prerequisites
Install the following before running the project:
- Node.js
- npm (included with Node.js)
- A MongoDB database (local or MongoDB Atlas)
- A Cloudinary account if the app uses Cloudinary uploads
⚙️ Getting Started
1. Clone the repository
git clone <YOUR_GITHUB_REPOSITORY_URL>
cd <YOUR_PROJECT_FOLDER>
Replace the placeholders with your repository URL and folder name.
2. Install frontend dependencies
cd frontend
npm install
Create a frontend/.env file if your frontend reads an API URL from an environment variable:
VITE_API_URL=http://localhost:5000
Use the exact environment variable name expected by your frontend code.
3. Install backend dependencies
Open a separate terminal from the project root and run:
cd backend
npm install
Create a backend/.env file. The example below uses common variable names; make sure they match the names referenced in your backend source code.
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_strong_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
Security: Never commit .env files, database credentials, JWT secrets, or Cloudinary API secrets to GitHub. Add .env to .gitignore.
4. Run the application
Start the backend:
cd backend
npm start
Start the frontend in another terminal:
cd frontend
npm run dev
Vite will print the local frontend URL in the terminal (commonly http://localhost:5173). The backend runs on the port configured in your environment file.
🏗️ Build the Frontend
cd frontend
npm run build
To preview the production build locally:
npm run preview
🔐 Environment Variables
Variable	Purpose
PORT	Backend server port
MONGO_URI	MongoDB connection string
JWT_SECRET	Secret used to sign/verify JWTs
CLOUDINARY_CLOUD_NAME	Cloudinary cloud name
CLOUDINARY_API_KEY	Cloudinary API key
CLOUDINARY_API_SECRET	Cloudinary API secret
VITE_API_URL	Frontend API base URL, if used by the code


The names above are examples. Check your code for the exact environment variable names and remove any variables your project does not use.
🌐 Deployment
You can deploy the frontend to a static hosting provider and the backend to a Node.js hosting provider. Before deployment:
1. Configure the production MongoDB connection and Cloudinary credentials.
2. Set the frontend API base URL to the deployed backend URL.
3. Configure backend CORS to allow the deployed frontend domain.
4. Add all required environment variables through the hosting provider's settings.
5. Never expose secret environment variables in frontend code; Vite variables prefixed with VITE_ are bundled for the browser.
🧑‍💻 Available Scripts
Frontend
Command	Description
npm run dev	Start the Vite development server
npm run build	Build the production frontend
npm run lint	Run ESLint
npm run preview	Preview the production build locally


Backend
Command	Description
npm start	Start the backend using node index.js


🤝 Contributing
Contributions, issues, and feature suggestions are welcome. For substantial changes, open an issue first to discuss what you would like to change.
