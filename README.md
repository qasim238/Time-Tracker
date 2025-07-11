# Time Tracker

A full-stack time tracking application built with React (frontend) and Node.js/Express/MongoDB (backend).

---

## Features

- Add, view, and delete time entries with description and duration
- Simple, clean UI built with React and TailwindCSS
- RESTful API with Express and MongoDB (via Mongoose)
- Modern development setup with Vite (frontend) and dotenv (backend)

---

## Tech Stack

### Frontend
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/)

### Backend
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/)
- [dotenv](https://github.com/motdotla/dotenv)
- [CORS](https://github.com/expressjs/cors)

---

## Project Structure

```
Time-Tracker/
  backend/      # Express API server
    models/     # Mongoose models & controllers
    routes/     # API routes
    server.js   # Entry point
  frontend/     # React app (Vite)
    src/        # React source code
    components/ # Main UI components
```

---

## Backend Setup

1. **Install dependencies:**
   ```bash
   cd backend
   npm install
   ```
2. **Configure environment variables:**
   - Create a `.env` file in `backend/` with:
     ```env
     MONGO_URI=your_mongodb_connection_string
     PORT=5000 # or any port
     ```
3. **Start the backend server:**
   ```bash
   npm start
   ```
   The API will run on `http://localhost:5000` by default.

### API Endpoints
- `GET    /api/time`         - List all time entries
- `POST   /api/time`         - Add a new time entry (`{ description, duration }`)
- `DELETE /api/time/:id`     - Delete a time entry by ID

---

## Frontend Setup

1. **Install dependencies:**
   ```bash
   cd frontend
   npm install
   ```
2. **Start the development server:**
   ```bash
   npm run dev
   ```
   The app will run on `http://localhost:5173` by default (see Vite docs).

3. **Build for production:**
   ```bash
   npm run build
   ```

---

## Usage

- Open the frontend in your browser (default: [http://localhost:5173](http://localhost:5173))
- Add a time entry with a description and duration (in minutes)
- View all entries and delete as needed

---

## Screenshots

> _You can add screenshots here to showcase the UI._

---

## License

This project is licensed under the ISC License. 