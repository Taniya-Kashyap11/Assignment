import React from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // Retrieve payment details from URL query params (or state)
  const referenceNum = searchParams.get("reference") || "PAY123456789";

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.iconCircle}>
          <span style={styles.checkmark}>✓</span>
        </div>
        <h1 style={styles.title}>Payment Successful!</h1>
        <p style={styles.subtitle}>
          Thank you for your purchase. Your transaction has been completed successfully.
        </p>

        <div style={styles.detailsBox}>
          <p style={styles.detailText}>
            <strong>Reference ID:</strong> {referenceNum}
          </p>
        </div>

        <button onClick={() => navigate("/")} style={styles.button}>
          Go to Home
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "80vh",
    backgroundColor: "#f4f6f9",
    padding: "20px",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    padding: "40px 30px",
    maxWidth: "450px",
    width: "100%",
    textAlign: "center",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
  iconCircle: {
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    backgroundColor: "#28a745",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 20px",
  },
  checkmark: {
    color: "#ffffff",
    fontSize: "36px",
    fontWeight: "bold",
  },
  title: {
    color: "#333333",
    fontSize: "1.8rem",
    marginBottom: "10px",
  },
  subtitle: {
    color: "#666666",
    fontSize: "1rem",
    lineHeight: "1.5",
    marginBottom: "20px",
  },
  detailsBox: {
    backgroundColor: "#f8f9fa",
    border: "1px solid #e9ecef",
    borderRadius: "6px",
    padding: "12px",
    marginBottom: "25px",
  },
  detailText: {
    margin: "0",
    color: "#495057",
    fontSize: "0.95rem",
  },
  button: {
    backgroundColor: "#3399cc",
    color: "#ffffff",
    border: "none",
    padding: "12px 24px",
    fontSize: "1rem",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "600",
    transition: "background-color 0.2s",
  },
};

export default PaymentSuccess;