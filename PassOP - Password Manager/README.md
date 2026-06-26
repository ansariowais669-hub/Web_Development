# 🔐 PassOP - Password Manager

PassOP is a modern and responsive **Password Manager** built with **React**, **Vite**, and **Tailwind CSS**. It enables users to securely organize their website credentials in one place with an intuitive interface. Passwords are stored locally in the browser using the **Local Storage API**, allowing data to persist across browser sessions.

> **Note:** This project is intended for learning and demonstration purposes. Passwords are stored in the browser's local storage and are **not encrypted**.

---

## 🚀 Features

* 🌐 Save website URLs
* 👤 Store usernames
* 🔑 Save passwords
* 👁️ Toggle password visibility
* ✏️ Edit saved credentials
* 🗑️ Delete credentials
* 💾 Persistent storage using Local Storage
* 🆔 Unique identifier for every saved credential using UUID
* 📱 Fully responsive user interface
* 🎨 Clean and modern design built with Tailwind CSS

---

## 🛠️ Tech Stack

* React.js
* Vite
* Tailwind CSS
* JavaScript (ES6+)
* UUID
* Local Storage API

---

## 📂 Project Structure

```text
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   └── Manager.jsx
│
├── App.jsx
├── App.css
├── index.css
├── main.jsx
│
public/
│   └── icons/
│       ├── eye.png
│       ├── eyecross.png
│       ├── edit.png
│       ├── delete.png
│       └── github.png
│
package.json
vite.config.js
```

---

## ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/YourUsername/passop.git
```

Navigate to the project directory

```bash
cd passop
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

Open your browser and visit:

```text
http://localhost:5173
```

---

## 💡 What I Learned

Building this project helped me strengthen my understanding of:

* React Functional Components
* React Hooks (`useState`, `useEffect`, `useRef`)
* Component-based architecture
* Form handling in React
* State management
* Local Storage API
* CRUD operations
* Conditional rendering
* Responsive UI development
* Tailwind CSS utility classes
* Generating unique IDs using UUID

---

## 🔮 Future Improvements

* 🔐 Encrypt passwords before storing them
* 👤 User authentication and login
* ☁️ Cloud database integration (MongoDB/Firebase)
* 🔍 Search and filter credentials
* 🏷️ Organize passwords using categories or tags
* 📋 One-click copy to clipboard
* 🔒 Password strength indicator
* 🎲 Built-in password generator
* 🌙 Dark/Light mode toggle
* 📱 Progressive Web App (PWA) support

---

## 🤝 Contributing

Contributions, suggestions, and feedback are always welcome.

Feel free to fork the repository, create a feature branch, and submit a pull request.

---

## 👨‍💻 Author

**Mohammad Owais Ansari**

---

## ⭐ Support

If you found this project useful or enjoyed exploring it, consider giving the repository a **⭐ Star**. Your support is greatly appreciated!
