import React from 'react'
import axios from "axios";
const Product = ({products}) => {
    const handlePayment =async (amount) => {
    // Replace with your Razorpay / backend checkout handler
    console.log("Initiating payment for:",amount);
    const {data:keyData}=await axios.get("/api/v1/getKey");
    const {key}=keyData;
    console.log(key);
    const {data:orderData}= await axios.post("/api/v1/payment/process",{amount});
    const {order}=orderData;
    console.log(order);
    const options = {
  key: key, // Your Razorpay API Key ID
  amount: amount,      // Received from backend
  currency: 'INR',
  name: "My Store",
  description: "Product Purchase",
  order_id: order.id,        
callback_url:'/api/v1/paymentVerification',
  prefill: {
    name: "Taniya",
    email: "taniyaKashyap2005@gmail.com",
      contact: "9876543210"
    
  },
  theme: {
    color: "#3399cc",
  },
};

const rzp = new Razorpay(options);
rzp.open();
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>All Products</h1>
      <div style={styles.grid}>
        {products && products.map((product) => (
          <div key={product.id} style={styles.card}>
            <img
              src={product.image}
              alt={product.title}
              style={styles.image}
            />
            <h3 style={styles.title}>{product.title}</h3>
            <p style={styles.price}>₹{product.price}</p>
            <button
              onClick={() => handlePayment(product.price)}
              style={styles.button}
            >
              Pay Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

// Simple inline styling
const styles = {
  container: {
    padding: "20px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  heading: {
    textAlign: "center",
    marginBottom: "30px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
    gap: "20px",
  },
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    textAlign: "center",
    backgroundColor: "#fff",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  image: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
    borderRadius: "4px",
  },
  title: {
    margin: "12px 0 8px",
    fontSize: "1.1rem",
  },
  price: {
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: "12px",
  },
  button: {
    padding: "8px 16px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
}

export default Product