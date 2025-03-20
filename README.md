# DietPal

DietPal is a fitness and nutrition tracking application built with **React (Vite), Node.js (Express), and MongoDB**. It allows users to track their meals and food intake, with full authentication and CRUD functionality.

## Features
- **User Authentication** (Sign Up, Login, Logout) with JWT
- **Food Tracking** (Create, Read, Update, Delete Foods)
- **Meal Management** (Track meals consisting of multiple foods)
- **Authorization** (Guests can only view data, while logged-in users can modify data)
- **Invite a Friend** (Copy invite link to clipboard for easy sharing)
- **Responsive UI** with a **Chocolate & Grey theme**

## Tech Stack
### Backend:
- Node.js + Express.js
- MongoDB + Mongoose
- JWT Authentication
- Deployed on **Heroku**

### Frontend:
- React (Vite)
- React Router
- Tailwind CSS for styling
- Deployed on **Netlify/Vercel**

## Installation & Running Locally
### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/your-username/dietpal.git
cd dietpal
```

### **2️⃣ Backend Setup**
```sh
cd backend
npm install
npm run dev
```
Set up a **.env** file in the `backend/` directory with:
```env
MONGO_URI=your_mongodb_atlas_url
JWT_SECRET=your_secret_key
```

### **3️⃣ Frontend Setup**
```sh
cd ../frontend
npm install
npm run dev
```
Access the frontend at **http://localhost:5173/**

## Deployment
### **Backend Deployment (Heroku)**
```sh
heroku login
heroku create dietpal-backend
heroku config:set MONGO_URI=your_mongodb_atlas_url
heroku config:set JWT_SECRET=your_secret_key
git push heroku main
```

### **Frontend Deployment (Netlify)**
```sh
npm run build
netlify deploy --prod
```

## API Endpoints
| Method | Endpoint          | Description | Access |
|--------|------------------|-------------|--------|
| POST   | `/api/auth/signup` | Register a user | Public |
| POST   | `/api/auth/login`  | Login user | Public |
| GET    | `/api/auth/me`     | Get logged-in user | Private |
| POST   | `/api/foods`       | Add food | Private |
| GET    | `/api/foods`       | Get all foods | Public |
| PUT    | `/api/foods/:id`   | Update food | Private |
| DELETE | `/api/foods/:id`   | Delete food | Private |
| POST   | `/api/meals`       | Create a meal | Private |
| GET    | `/api/meals`       | Get all meals | Private |

## License
MIT License

## Contributors
- **Your Name** dushimeodon14@gmail.com

---

Enjoy using **DietPal** to track your meals and improve your nutrition! 🚀

