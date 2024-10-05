import { useRouter } from "next/router";

const Success = () => {
  const router = useRouter();
  const { name, email, mobileNumber, session_id } = router.query; // Extract all query parameters

  return (
    <section className="success-section">
      <div className="success-container">
        <h2 className="success-title">Purchase Complete!</h2>
        <p className="success-message">
          Thank you for your purchase, {name}! An email with your ticket details
          has been sent to {email}.
        </p>
        <p className="success-order">Order ID: {session_id}</p>
        <p className="success-mobile">Mobile Number: {mobileNumber}</p>{" "}
        {/* Display mobile number */}
        <button onClick={() => router.push("/")} className="success-button">
          Return to Home
        </button>
      </div>
    </section>
  );
};

export default Success;
