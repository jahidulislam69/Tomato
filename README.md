# 🍔 Tomato (MERN Stack)

Welcome to the **Food Delivery Website (TOMATO) ** – a fully-functional, user-friendly food ordering platform built with the **MERN Stack**. This project empowers users to explore restaurant menus, add items to their cart, place orders securely via **Stripe**, and track their order status in real time.

An integrated **Admin Panel** allows restaurant managers to seamlessly manage menu items, track orders, and keep everything up-to-date. This project leverages modern web technologies to deliver a smooth and intuitive user experience.
- For Live preview please visit the link and give a try
**Due to render free trial it takes around 60 sec to update the data so refresh after 60 sec**
- **https://tomato-frontend-bice.vercel.app**

## 🌟 Features

### 🚀 User Features
- **Browse Menu:** Users can explore a variety of delicious food items with images, descriptions, and prices.
- **Add to Cart:** Seamlessly add items to the cart for a quick checkout.
- **Secure Checkout:** Users can securely place orders using **Stripe Payment Integration**.
- **User Authentication:** Sign up, log in, and manage accounts securely using **JWT Authentication**.
- **Order Tracking:** View order history and track current order statuses directly from the user dashboard.

### 🔐 Admin Features
- **Order Management:** View and track all incoming orders in real time.
- **Menu Management:** Add, update, and delete food items with options for images, descriptions, categories, and prices.
- **User Management:** Manage and view customer details to provide personalized service.

### 🛠️ Tech Stack

**Frontend:**
- React.js (with React Router for navigation)
- Context API (for global state management and avoiding prop drilling)
- Axios (for API communication)
- Stripe (for secure payment processing)
- React Toastify (for notifications)

**Backend:**
- Node.js + Express.js
- MongoDB (for data storage)
- JWT (for secure authentication)
- Bcrypt (for password encryption)
- Multer (for handling image uploads)

## 📊 Project Structure

### 1. **Frontend (User Interface)**
The user-facing side allows visitors to explore the restaurant, add food to their cart, and place orders.

Key Components:
- **Navbar:** Navigation bar with dynamic login/logout functionality.
- **Home:** Displays available food items and their details.
- **Cart:** Users can view and manage their selected items.
- **PlaceOrders:** Handles the Stripe payment process and order submission.
- **MyOrders:** Users can track their order status and view past orders.
- **LoginPopup:** Provides secure user authentication.

**State Management:**
Implemented **React Context API** to manage global states like user authentication, cart details, and order information – reducing prop drilling across components.

### 2. **Admin Panel**
A separate admin interface to manage orders and food listings effectively.

Key Components:
- **Add:** Admins can add new food items with image upload.
- **List:** Displays and manages the menu with delete and update functionality.
- **Orders:** View and update order statuses in real-time.
- **Sidebar & Navbar:** Provides easy navigation across admin features.

### 3. **Backend (API + Database)**
Built with Node.js and Express, the backend handles user authentication, food management, cart, and orders.

Core Routes:
- `/api/food`: Handles menu items (CRUD operations).
- `/api/user`: Manages user authentication (sign-up, login, JWT generation).
- `/api/cart`: Handles cart management.
- `/api/order`: Processes orders and updates status.

**Database:**
- MongoDB stores user data, food items, and orders.

## 🧑‍💻 How to Run the Project

1. **Clone the Repository:**
```bash
  git clone https://github.com/jahidulislam69/Tomato.git
  cd Tomato
```

2. **Setup Backend:**
```bash
  cd backend
  npm install
  npm start
```

3. **Setup Frontend (User & Admin Panels):**
```bash
  cd frontend
  npm install
  npm start

  cd admin
  npm install
  npm start
```

4. **Environment Variables:**
Create a `.env` file in the backend with the following:
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret
```

## 📷 Screenshots
![Image](https://github.com/user-attachments/assets/6e49a5ad-8cfc-40cd-ace8-095cab6d1946)
![Image](https://github.com/user-attachments/assets/06b33f73-0fcd-483a-86a8-95ff102ff1b2)
Frontend
![Image](https://github.com/user-attachments/assets/761a04cc-fd68-466a-bfd6-fb18687c848c)
![Image](https://github.com/user-attachments/assets/8b933fef-92e8-423d-95bb-5f5075f88e93)
FilerByCategory

![Image](https://github.com/user-attachments/assets/550f29f4-82cb-44e0-8271-7287fca93124)
![Image](https://github.com/user-attachments/assets/05279a9e-ef9f-4d17-85a7-080f2cf0ae3a)
![Image](https://github.com/user-attachments/assets/a293c67c-273e-4cdf-8d48-38291aab2992)
![Image](https://github.com/user-attachments/assets/a5020ff7-6ef9-4677-bcf9-1771b7eef688)
![Image](https://github.com/user-attachments/assets/c42208e4-d090-4b1b-8f80-563883b9414d)

## 📌 Future Enhancements
- Implement real-time order status updates with WebSockets.
- Enhance user profiles with saved addresses and preferences.
- Add review and rating features for food items.
- Improve mobile responsiveness and UI/UX.

## 🤝 Contributing
Feel free to open issues and submit pull requests. Your contributions are welcome!

## 📞 Contact
For any inquiries or feedback, reach out to me via:
- LinkedIn: [https://www.linkedin.com/in/jahidul-shouvo]
- Email: [jahidulhassa777@gmail.com]

---

Enjoy using the **Tomato** – to bringing delicious meals right to your doorstep! 🚀

