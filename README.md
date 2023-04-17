Support Desk
Support Desk is a MERN stack (MongoDB, Express.js, React.js, and Node.js) web application that offers a simple and efficient ticketing system for handling user support requests. It allows users to create, view, and manage tickets while providing a clean and user-friendly interface.

Features
User authentication and registration
Create, view, and manage support tickets
Role-based access control for different user types
RESTful API for handling user and ticket operations
Responsive design for optimal user experience on various devices
Getting Started
Prerequisites
To run this application, you will need:

Node.js (v14.x or higher)
MongoDB (v4.x or higher) or MongoDB Atlas account
Installation
Clone the repository:
bash
Copy code
git clone https://github.com/yourusername/support-desk.git
Install the server dependencies:
bash
Copy code
cd support-desk/backend
npm install
Install the frontend dependencies:
bash
Copy code
cd ../frontend
npm install
Create a .env file in the backend folder and add the following variables:
makefile
Copy code
MONGO_URI=<your_mongodb_uri>
JWT_SECRET=<your_jwt_secret>
PORT=5000
NODE_ENV=development
Run the application:
To start both the frontend and backend concurrently, run the following command in the backend folder:
bash
Copy code
npm run dev
To start the frontend and backend separately, run the following commands in the respective folders:
bash
Copy code
npm start
The application should now be running on http://localhost:3000.

Deployment
To deploy the application, follow the instructions provided by your preferred hosting provider, such as Heroku or Render. Make sure to set the environment variables as specified in the .env file for production.

Built With
MongoDB - The NoSQL database used
Express.js - The web application framework for Node.js
React.js - The frontend JavaScript library
Node.js - The JavaScript runtime environment
Contributing
Contributions, issues, and feature requests are welcome. Feel free to open an issue or create a pull request.

License
This project is licensed under the MIT License. See the LICENSE file for more information.
