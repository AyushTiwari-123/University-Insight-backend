Development Process Report
1. Introduction
The University Insights web application was developed as part of a Full Stack Developer Internship assignment. The project aimed to build an EdTech platform that provides scholarship tracking and user authentication using React.js, Tailwind CSS v4, Node.js/Express.js, and MongoDB/MySQL. The backend was deployed on Render, while the frontend was hosted on Netlify.

2. Project Planning & Technology Stack
The first step involved defining the project scope, features, and technology stack. Based on the requirements, the following technologies were chosen:

Frontend: React.js, React Router, Tailwind CSS v4
Backend: Node.js, Express.js
Database: MongoDB (via Mongoose ORM)
Authentication: JWT (JSON Web Token)
Deployment: Netlify (Frontend) & Render (Backend)
Version Control: GitHub
3. Backend Development
The backend was developed using Node.js and Express.js to handle API requests and perform CRUD operations. The key features included:

Authentication System: Implemented JWT-based authentication with password hashing (bcrypt.js).
Role-Based Access Control: Restricted routes based on user roles (e.g., Admin, Student).
Database Integration: Used MongoDB with Mongoose ORM for data modeling.
RESTful API Design: Created API endpoints for user registration, login, and scholarships.
Error Handling & Middleware: Implemented middleware for authentication and error handling.
Challenges & Solutions
Issue: JWT secret key misconfiguration led to authentication failures.
Solution: Stored secrets in a .env file and ensured proper access.
Issue: MongoDB connection timeout errors on Render.
Solution: Adjusted MongoDB URI settings and added retry logic.
4. Frontend Development
The frontend was built using React.js with a focus on component-based architecture. Key features included:

Routing with React Router: Implemented protected routes for authenticated users.
State Management: Used React's Context API for user authentication state.
UI Design with Tailwind CSS: Ensured a responsive, modern design.
Form Handling & API Integration: Implemented login/register forms with API requests using Axios.
Challenges & Solutions
Issue: CORS issues while connecting frontend and backend.
Solution: Configured CORS middleware on the Express server.
Issue: Deployment issues on Netlify (incorrect API URLs).
Solution: Used environment variables for dynamic API endpoint management.
5. Deployment & Final Testing
Once the application was functional, it was deployed:

Backend (Render): Hosted on Render.
Frontend (Netlify): Hosted on Netlify.
Testing: Conducted unit tests and manual testing to ensure smooth functionality.
6. Conclusion
The project provided a hands-on experience in full-stack web development, covering backend API design, frontend UI development, authentication, and deployment. Despite challenges such as deployment errors, authentication bugs, and database connection issues, strategic debugging and research helped resolve them efficiently. The final application is a functional, responsive, and secure EdTech platform that meets the project requirements.
