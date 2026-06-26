# 🔐 PassOP - Full Stack Password Manager

PassOP is a **full-stack Password Manager** built using **React**, **Node.js**, **Express.js**, and **MongoDB**. It allows users to securely manage website credentials through a clean and responsive interface while storing data persistently in a MongoDB database.

This project was built to strengthen my understanding of full-stack web development by integrating a React frontend with a RESTful Express backend and MongoDB database.

---

# 🚀 Features

* 🌐 Save website credentials
* 👤 Store usernames
* 🔑 Store passwords
* ✏️ Edit saved passwords
* 🗑️ Delete passwords
* 👁️ Toggle password visibility
* 💾 Persistent storage using MongoDB
* 🔗 REST API built with Express.js
* 📱 Responsive user interface
* 🎨 Modern design with Tailwind CSS

---

# 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* JavaScript (ES6+)
* Axios

### Backend

* Node.js
* Express.js

### Database

* MongoDB

### Other Libraries

* UUID
* CORS
* Body Parser
* Dotenv

---

# 📂 Project Structure

```text
PassOP/
│
├── backend/
│   ├── server.js
│   ├── package.json
│   └── ...
│
├── public/
│   └── icons/
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── Manager.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
│
├── package.json
├── vite.config.js
└── README.md
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone the repository

```bash
git clone https://github.com/YourUsername/PassOP.git
```

## 2️⃣ Navigate to the project

```bash
cd PassOP
```

## 3️⃣ Install frontend dependencies

```bash
npm install
```

## 4️⃣ Install backend dependencies

```bash
cd backend
npm install
```

---

# ▶️ Running the Project

## Step 1: Start MongoDB

Make sure your local MongoDB server is running.

---

## Step 2: Start the backend server

Navigate to the backend folder:

```bash
cd backend
```

Run:

```bash
npm start
```

The Express server will start on:

```text
http://localhost:3000
```

This backend connects to the MongoDB database and exposes the REST API used by the frontend.

---

## Step 3: Start the frontend

Open a **new terminal**.

Navigate back to the project root:

```bash
cd ..
```

Run:

```bash
npm run dev
```

Open:

```text
http://localhost:5173
```

---

# 📡 API Endpoints

| Method | Endpoint | Description                  |
| ------ | -------- | ---------------------------- |
| GET    | `/`      | Retrieve all saved passwords |
| POST   | `/`      | Save a new password          |
| DELETE | `/`      | Delete an existing password  |

---

# 💡 What I Learned

Through this project, I gained practical experience with:

* React Functional Components
* React Hooks (`useState`, `useEffect`, `useRef`)
* REST API Development
* Express.js
* MongoDB CRUD Operations
* Database Connectivity
* Backend Routing
* Axios for API communication
* CORS configuration
* Environment Variables using Dotenv
* Full-Stack Project Structure
* Component-Based Architecture
* Responsive UI Design

---

# 🔮 Future Improvements

* 🔐 Encrypt passwords before storing them in the database
* 👤 User Authentication (JWT)
* 🔑 Password hashing
* 📋 Copy password to clipboard
* 🔍 Search passwords
* 🏷️ Categories and tags
* 🌙 Dark Mode
* ☁️ Deploy backend on Render/Railway
* ☁️ Deploy frontend on Vercel
* 🌍 Use MongoDB Atlas instead of local MongoDB
* 🔒 Protected API routes
* 📱 Progressive Web App (PWA)

---

# 🤝 Contributing

Contributions, suggestions, and feedback are always welcome.

Feel free to fork this repository, create a new feature branch, and submit a pull request.

---

# 👨‍💻 Author

**Mohammad Owais Ansari**

---

# ⭐ Support

If you found this project useful or learned something from it, consider giving it a **⭐ Star**.

It motivates me to continue building more real-world projects and improving my skills in full-stack web development.
