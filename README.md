# FoodHub 🍕  
A Full-Stack Food Ordering Application

FoodHub is a full-stack web application developed to demonstrate frontend–backend
integration, database modeling, and order processing workflows using modern web
technologies.

---

## 📌 Project Overview

FoodHub allows users to browse food items, add them to a cart, provide delivery
details, and place orders. The application is built with a modular backend and
a clean frontend structure, focusing on learning real-world application design.

---

## ✅ Features Implemented

### Frontend
- Login and Signup page UI
- Cart page displaying selected items and total amount
- Checkout page with delivery details form
- Order summary section
- Automatic redirect to home page after order placement

### Backend
- RESTful API using Node.js and Express
- MongoDB database connection using Mongoose
- Schema design for Users, Items, Orders, and Chats
- Async error handling using middleware
- Dynamic page rendering using EJS

---

## 🔄 Checkout & Order Flow

1. User selects items and proceeds to checkout
2. User enters delivery details:
   - Name
   - Mobile number
   - Email
   - Address
   - City, State, Pincode
   - Delivery instructions
3. On clicking *Place Order*:
   - Order success alert is displayed
   - User is redirected to:
     
     http://localhost:8080/home
     

---

## 🗄 Database Design

### User Schema
- username
- email
- mobile
- password
- created_at
- updated_at

### Item Schema
- name
- category (pizza, breads, cold drink)
- price
- currentPrice
- discount
- description
- foodType (veg / non-veg)
- stock
- created_at
- updated_at

### Order Structure
- orderId
- customer:
  - name
  - email
  - phone
  - address
- items:
  - name
  - quantity
  - price
- totalPrice

### Chat Schema
- from
- to
- msg
- created_at
- updated_at



## 👥 Demo Users

| Username | Email |
|--------|------|
| atlas | atlas@gmail.com |
| bob | bob@gmail.com |
| jin | jin@gmail.com |



## 🍔 Items & Categories

### Categories
- Pizza
- Breads
- Cold Drinks

### Sample Items
- FarmHouse Pizza
- Cheese Burst Pizza
- Garlic Bread
- Butter Toast
- Pepsi
- Coca Cola
- Sprite
- Cold Coffee

---

## Database Queries Implemented

- Fetch all chats
- Retrieve unique item categories
- Create and store orders linked with users
- Seed items and orders for testing

---

## 🗂 Project Structure


---

##  Tech Stack

- *Frontend:* HTML, CSS, JavaScript
- *Backend:* Node.js, Express.js
- *Database:* MongoDB, Mongoose
- *Templating Engine:* EJS
- *Tools:* Async middleware, Git

---

##  Installation & Setup

1. Clone the repository
   ```bash
   git clone <repository-url>