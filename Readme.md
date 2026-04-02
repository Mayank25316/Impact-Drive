# 🌐 ImpactDrive: Global Impact Protocol

![MERN Stack](https://img.shields.io/badge/Stack-MERN-blue?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Bundler-Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![MongoDB](https://img.shields.io/badge/Database-MongoDB_Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

ImpactDrive is a premium, high-performance subscription platform built on the MERN stack. It transforms user performance metrics into entries for monthly draws, while actively deploying capital to vital global charities. 

## 🚀 Live Access

- **Frontend Deployment:** [https://impact-drive-delta.vercel.app](https://impact-drive-delta.vercel.app)
- **Backend API:** [https://impact-drive-backend.vercel.app](https://impact-drive-backend.vercel.app)

### 🔐 Evaluator / Admin Credentials
To review the System Analytics and Platform Command Center, please authenticate using the following credentials:
- **Network Address (Email):** `admin@impactdrive.com`
- **Passphrase:** `Admin@123`

---

## ⚡ Core Features

- **Secure Identity Nodes:** JWT-based authentication system with encrypted passphrases and role-based access control (Sys Admin vs User Node).
- **Global Telemetry Dashboard:** Real-time analytics engine displaying active network nodes, deployed charity funds, and pending payouts.
- **Premium UI/UX:** Built with React, Tailwind CSS, and Framer Motion for a sleek, dark-mode, enterprise-grade interface.
- **Automated Data Seeding:** Custom Node.js scripts to generate clean, professional mock data for testing environments.
- **Cloud Database:** Fully integrated with MongoDB Atlas for scalable, remote data storage.

---

## 🛠️ Technical Architecture

### Frontend (User Interface Node)
- **Framework:** React.js (via Vite for optimized build speeds)
- **Styling:** Tailwind CSS + Custom Glassmorphism UI
- **Animations:** Framer Motion
- **State Management & Routing:** React Router DOM, Context API
- **HTTP Client:** Axios (Configured with automated token interception)

### Backend (Command Server)
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB Atlas (accessed via Mongoose ORM)
- **Security:** bcryptjs (password hashing), jsonwebtoken (auth), CORS

---

## 💻 Local Execution Protocol

To run this platform on your local machine, follow these steps:

### 1. Clone the Repository
```bash
git clone https://github.com/Mayank25316/Impact-Drive.git
cd Impact-Drive
```
### 2. Initialize Backend (Command Server)
```bash
cd backend
npm install
```
Create a .env file in the backend directory:
```bash
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_super_secret_key
SEED_ADMIN_EMAIL=admin@impactdrive.com
SEED_ADMIN_PASSWORD=Admin@123
```
Optional: Run the seed script to populate the database with premium mock data:

```bash
node scripts/seed.js
```
Start the server:
```bash
npm run dev
```
### 3. Initialize Frontend (User Interface)
Open a new terminal window:

```bash
cd frontend
npm install
```
Start the development server:
```bash
npm run dev
```
The platform will be accessible at http://localhost:5173.