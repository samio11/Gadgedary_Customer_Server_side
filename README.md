# 🛒 **Customer Management System**

A robust **Customer Management System** built with **NestJS** and **TypeScript** that delivers advanced e-commerce functionalities like account management, product browsing, reviews, shopping cart, and order processing.

## 🚀 **Features**

### **1. Account Management**
- Create, view, edit, and delete customer account information.
- Secure login with **multi-factor authentication**.
- Social media integration for **login** and product sharing.

### **2. Product Management**
- Browse products with advanced features:
  - Search by name.
  - Filter by price, category, or availability.
  - Sort products in ascending/descending order.

### **3. Shopping Cart**
- Add or remove products.
- Update product quantities.

### **4. Wishlist**
- Save favorite products for future reference.

### **5. Order Management**
- Place orders with **multiple payment options**.
- Track orders in real-time.
- Access and **download invoices** for completed purchases.
- Manage returns and refunds with valid reasons.

### **6. Product Reviews**
- Add, edit, and view product ratings and reviews.

### **7. Notifications**
- Receive timely notifications for:
  - Special offers and promotions.
  - Order updates.
  - Personalized recommendations.

### **8. Customer Support**
- Raise queries or issues via a **ticketing system**.
- Live chat with customer support.

### **9. Feedback & Recommendations**
- Submit platform and service feedback.
- Receive personalized product recommendations based on user behavior.

---

## 🛠️ **Tech Stack**

- **Framework**: NestJS (Node.js)
- **Language**: TypeScript
- **Database**: PostgreSQL (via TypeORM)
- **Authentication**: JWT (Passport)
- **Tools**: ESLint, Prettier, Jest

---

## 📦 **Project Setup**

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-repo-link.git
   cd your-project-folder
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Environment setup**:
   Create a `.env` file with the required configurations:
   ```
   DATABASE_URL=your_database_url
   JWT_SECRET=your_jwt_secret
   ```

4. **Run the app**:
   - Development mode:
     ```bash
     npm run start:dev
     ```
   - Production mode:
     ```bash
     npm run build
     npm run start:prod
     ```

5. **Run tests**:
   ```bash
   npm run test
   ```

---

## 📄 **API Endpoints**
Here are key endpoints for testing the features using **Postman**:

| **Method** | **Endpoint**                        | **Description**                       |
|------------|-------------------------------------|---------------------------------------|
| `POST`     | `/login`                            | Login a customer                      |
| `POST`     | `/register`                         | Register a new customer               |
| `GET`      | `/products`                         | View all products                     |
| `POST`     | `/cart`                             | Add a product to the shopping cart    |
| `GET`      | `/orders`                           | View order history                    |
| `POST`     | `/payment/{id}`                     | Process payment                       |

---

## 🧩 **Scripts**

| **Command**       | **Description**                               |
|-------------------|-----------------------------------------------|
| `npm run start`   | Start the application in production mode      |
| `npm run start:dev` | Run the application in development mode     |
| `npm run lint`    | Run ESLint to format and lint the code        |
| `npm run test`    | Run the test suite                            |

---

## 🔗 **Postman Collection**
Import the provided Postman collection to test all features seamlessly.

> **Screenshots & Endpoints Demo**
![Postman Screenshot](./assets/postman-demo.png)

---

## 📧 **Contact**
For queries, feature requests, or collaborations, reach out:

- **Name**: Samio
- **Email**: samiohasan6@gmail.com
- **GitHub**: [Your GitHub Profile](https://github.com/samio11)

---

## 🎯 **Contributing**
Contributions are welcome! Fork this project, make your changes, and submit a pull request.

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your feature"
   ```
4. Push your branch:
   ```bash
   git push origin feature/your-feature-name
   ```

---

**Enjoy building with NestJS! 🛠️**
