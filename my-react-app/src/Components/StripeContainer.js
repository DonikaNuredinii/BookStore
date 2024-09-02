import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../Main/CheckoutForm";

// Initialize Stripe with your publishable key
const stripePromise = loadStripe(
  "pk_test_51PsqJbAisV4NVcvAJKmjBKntncWv6IFS8V1tNsPTAdmdSCKzowbGhvrncDt3OQAueanMXhitgVo7FtoXyNIIUDLE00cN4xtINa"
);

const StripeContainer = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default StripeContainer;
