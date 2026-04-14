<<<<<<< HEAD
# Food Ordering System

## Project Overview
This project is a full-stack web application developed as part of IFN636. It allows users to manage food items using CRUD operations through a React frontend and Node.js backend.

## Features
- Create, Read, Update, Delete (CRUD) operations for food items
- RESTful API using Express.js
- MongoDB database integration
- React-based user interface

## Technologies Used
- Node.js
- Express.js
- MongoDB
- React.js
=======
# Food Ordering System – IFN636

## Description
This project is a full-stack Food Ordering System developed as part of the IFN636 unit. The application demonstrates the implementation of a complete web-based system integrating both frontend and backend technologies.

The system allows users to browse food items and perform CRUD (Create, Read, Update, Delete) operations through a responsive and user-friendly interface. The frontend is developed using React.js, while the backend is built using Node.js and Express, providing RESTful APIs for communication.

The project follows a modular and scalable structure with separate frontend and backend directories. GitHub is used for version control, including proper branching strategies, commits, and pull request workflows. The application is deployed on AWS EC2, with PM2 used as a process manager to maintain backend services. Additionally, a CI/CD pipeline has been implemented using GitHub Actions to automate the build and deployment process.

Overall, this project demonstrates practical knowledge of full-stack development, deployment, and DevOps practices aligned with industry standards.
>>>>>>> 86d61879 (Final README update)

## Project Structure
- backend/ → API, routes, controllers, database
- frontend/ → React UI components and pages

## Author
<<<<<<< HEAD
Tejas Kothanur Somanna

Last updated
=======
**Tejas Kothanur Somanna**

---

## Tech Stack
- Frontend: React.js  
- Backend: Node.js, Express.js  
- Database: MongoDB Atlas  
- Version Control: GitHub  
- Deployment: AWS EC2  
- Process Manager: PM2  
- CI/CD: GitHub Actions  

---

## Features
- User Authentication (Login & Registration)  
- View Food Menu  
- Add Food Items  
- Update Food Items  
- Delete Food Items  
- REST API integration between frontend and backend  

---

## Project Structure
/backend → API, routes, controllers, models  
/frontend → React UI  

---

## How to Run Locally

### Backend
cd backend  
npm install  
node server.js  

### Frontend
cd frontend  
npm install  
npm start  

---

## Deployment (AWS EC2)

### EC2 Configuration
- Instance ID: i-04b7db45bc1f6dd71  
- Key Pair: MYKEYPAIR24  
- Public IPv4: http://13.236.85.40  

---

### Deployment Steps
1. Connect to EC2 using PuTTY  
2. Clone the repository  
   git clone https://github.com/tejas-somanna/food-ordering-system-ifn636.git  

3. Install dependencies  
   cd backend  
   npm install  

   cd ../frontend  
   npm install  

4. Start backend using PM2  
   pm2 start server.js  
   pm2 save  

5. Run frontend  
   npm run build  
   serve -s build -l 3000  

---


## Database Configuration
MongoDB Atlas connection string used in the project:  
mongodb+srv://Admin:Admin123@cluster0.c3yep88.mongodb.net/?appName=Cluster0  

---

## CI/CD Pipeline
A CI/CD pipeline has been implemented using GitHub Actions. The workflow is triggered on push and pull requests to the main branch. It installs dependencies, runs tests, and deploys the application to the EC2 instance using a self-hosted runner.

---

## GitHub Repository
https://github.com/tejas-somanna/food-ordering-system-ifn636  

---

## Conclusion
This project successfully demonstrates the development of a full-stack application with proper integration between frontend and backend components. It also highlights the use of version control, deployment strategies, and CI/CD automation, reflecting real-world software development practices.
>>>>>>> 86d61879 (Final README update)
