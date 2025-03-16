"use client"; // Ensure client-side rendering

import { useState } from "react";

export default function Newsletter() {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const formData = new FormData(e.target);
      const email = formData.get("email");

      console.log("Subscribed email:", email);

      // Example of API call (if needed)
      // const response = await fetch('/api/subscribe', {
      //   method: 'POST',
      //   body: JSON.stringify({ email }),
      //   headers: { 'Content-Type': 'application/json' },
      // });

      // if (!response.ok) throw new Error('Failed to subscribe');

      setIsSubscribed(true);

      // Clear input after submission
      e.target.reset();

      // Hide message after 3 seconds
      setTimeout(() => {
        setIsSubscribed(false);
      }, 3000);
    } catch (error) {
      console.error("Subscription failed:", error);
    }
  };

  return (
    <div className="col-lg-3 col-md-6 col-12">
      <div className="single-footer">
        <h2>Join Our Smile Community</h2>
        <p>
          Subscribe to our newsletter for the latest dental tips, exclusive
          offers, and expert advice to keep your smile healthy and bright.
        </p>
        <form onSubmit={handleSubmit} className="newsletter-inner">
          <input
            name="email"
            placeholder="Your email address"
            className="common-input"
            required
            type="email"
          />
          <button type="submit" className="button">
            <i className="icofont icofont-paper-plane"></i>
          </button>
        </form>
        {isSubscribed && (
          <p style={{ color: "green", marginTop: "10px" }}>
            Your email has been registered successfully. Thank you!
          </p>
        )}
      </div>
    </div>
  );
}
