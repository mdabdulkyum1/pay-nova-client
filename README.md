## PayNova 

## Mobile Financial Service (MFS) Application

This is a Mobile Financial Service (MFS) web application built using Node.js, Express, MongoDB (Mongoose), and React. It provides features similar to bKash or Nagad, allowing users to send money, cash-out, cash-in, and check balances securely.

## Features

User Features

User registration with unique Mobile Number, Email, and NID.

40 Taka bonus upon registration.

Secure login with Mobile Number/Email and PIN.

Send Money with a minimum amount of 50 Taka (Fee: 5 Taka for transactions over 100 Taka).

Cash-out via agents with a 1.5% fee.

Balance inquiry with click-to-view feature.

## Agent Features

Agent registration (requires Admin approval).

Gets 100,000 Taka upon registration.

Can request balance recharge from the Admin.

Earns 1% per user cash-out transaction.

Cash-in for users with zero fee.

## Admin Features

Can approve/reject agent registration.

Can block users/agents.

Monitor total money in the system.

Add money to agent accounts.

Earns:

0.5% of user cash-out income.

5 Taka per money operation.

Tech Stack

Frontend: React, Tailwind CSS

Backend: Node.js, Express.js

Database: MongoDB with Mongoose

Authentication: JWT & bcrypt for PIN hashing

Installation & Setup

Prerequisites

Node.js (v16+ recommended)

MongoDB (local or cloud-based like MongoDB Atlas)

1. Clone the repository

 git clone https://github.com/your-username/mfs-app.git
 cd mfs-app

2. Install dependencies

Backend Setup

 cd server
 npm install

Frontend Setup

 cd client
 npm install

3. Environment Variables Setup

Create a .env file inside the server directory and add the following:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

4. Run the Application

Start Backend

 cd server
 npm run dev

Start Frontend

 cd client
 npm start

5. API Endpoints

Method

Endpoint

Description

POST

/api/auth/register

Register a new user/agent

POST

/api/auth/login

User/Agent/Admin login

POST

/api/transaction/send-money

Send money transaction

POST

/api/transaction/cash-out

User cash-out transaction

POST

/api/transaction/cash-in

Agent cash-in transaction

GET

/api/user/balance

Get user/agent balance

GET

/api/admin/users

Admin fetches all users

PATCH

/api/admin/block-user/:id

Admin blocks a user

PATCH

/api/admin/approve-agent/:id

Admin approves an agent

Folder Structure

/mfs-app
│── /client  # React Frontend
│    ├── src/
│    ├── public/
│    ├── package.json
│    └── ...
│
│── /server  # Express Backend
│    ├── models/
│    ├── routes/
│    ├── controllers/
│    ├── middleware/
│    ├── config/
│    ├── server.js
│    ├── package.json
│    ├── .env
│    └── ...
│
└── README.md

Security Measures

JWT Authentication for secure access.

Bcrypt PIN hashing for storing user credentials securely.

Role-based route protection (User, Agent, Admin).

Device-based login restriction (users & agents can log in only from one device at a time).

Future Enhancements

Implement SMS/Email notifications.

Improve UI/UX for a better user experience.

Add transaction history pagination.

License

This project is MIT Licensed.