import React from "react";
import PayPalDonateDemo from "./PayPalDonateDemo";

const Contributions = () => {
  // Set donation details
  const donationAmount = "50.00";
  const donationDescription = "Donate to support student scholarships";

  return (
    <div className="contributions-container">
      <h1>Contribute to the Alumni Network</h1>
      <p>Your donations help us build better resources and opportunities for students and alumni.</p>

      {/* Passing donationAmount and donationDescription as props to PayPalDonateDemo */}
      <PayPalDonateDemo
        donationAmount={donationAmount}
        donationDescription={donationDescription}
      />
    </div>
  );
};

export default Contributions;
