University Insight - Backend

📌 Live Demo

🔗 Backend API: University Insight Backend

📌 Project Overview

This is the backend for the University Insight web application, which provides authentication, role-based access, and application tracking functionalities. The backend is built using Node.js, Express.js, and MongoDB.

📌 Tech Stack

Backend: Node.js, Express.js

Database: MongoDB (Mongoose)

Authentication: JWT (JSON Web Token)

Deployment: Render

Environment Management: dotenv

📌 Setup Instructions

1️⃣ Clone the Repository

   git clone https://github.com/AyushTiwari-123/University-Insight-backend.git
   cd University-Insight-backend

2️⃣ Install Dependencies

Run the following command to install the necessary dependencies:

   npm install

3️⃣ Set Up Environment Variables

Create a .env file in the root directory and add the following variables:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000

🔹 Replace your_mongodb_connection_string with your MongoDB Atlas connection string.🔹 Replace your_secret_key with a strong secret key for JWT authentication.

4️⃣ Run the Server

To start the backend server locally, run:

   npm start

Or, for development with auto-restart (nodemon):

   npm run dev

The server should now be running at: http://localhost:5000

📌 API Endpoints

🔹 Authentication Routes

Method

Endpoint

Description

POST

/api/auth/register

Register a new user

POST

/api/auth/login

Login and get a JWT token

🔹 Scholarship Routes

Method

Endpoint

Description

GET

/api/scholarships

Get all available scholarships

POST

/api/scholarships

Add a new scholarship (Admin only)

🔹 Application Tracking Routes

Method

Endpoint

Description

GET

/api/applications

Get all user applications

POST

/api/applications

Submit a new application

📌 Dependencies

Package

Description

express

Web framework for Node.js

mongoose

MongoDB ODM for schema modeling

dotenv

Manage environment variables

jsonwebtoken

Handle JWT authentication

bcryptjs

Hash passwords securely

cors

Enable cross-origin requests

nodemon

Auto-restart server during development

📌 Deployment on Render

This backend is deployed on Render. To deploy your own instance:

Create a new web service on Render.

Connect your GitHub repository.

Set the build command:

npm install && npm run build

Set the start command:

npm start

Add environment variables in Render’s settings.

Deploy and get the live API URL!

📌 Future Improvements

Implement email notifications for applications.

Add OAuth (Google, Facebook) login options.

Optimize database queries for better performance.

🚀 Developed by Ayush Tiwari📌 GitHub: University Insight Backend
