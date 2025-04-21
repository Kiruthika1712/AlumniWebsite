import React, { useEffect, useRef, useState } from "react";

const PayPalDonateDemo = ({
  donationAmount = "50.00",
  donationDescription = "Support Alumni Initiatives",
}) => {
  const paypalRef = useRef(null);
  const [paypalLoaded, setPaypalLoaded] = useState(false);

  useEffect(() => {
    // Dynamically load PayPal SDK only if not already loaded
    if (window.paypal) {
      setPaypalLoaded(true);
      return;
    }

    const script = document.createElement("script");
    script.src = 
      "https://www.paypal.com/sdk/js?client-id=AfuXCbl6RLrPZVo9VbZv_vwHmaJxWOvV3uc2splSCLbhdqSMMkVG7T7C8vC0-hPxi2ZCOm-lGVRmeJgU&currency=USD&intent=capture&components=buttons&commit=true";
    script.async = true;
    script.defer = true;

    script.onload = () => {
      console.log("PayPal SDK loaded successfully");
      setPaypalLoaded(true);
    };

    script.onerror = () => {
      console.error("PayPal SDK failed to load.");
      alert("Error loading PayPal SDK. Please try again later.");
    };

    document.body.appendChild(script);

    return () => {
      // Cleanup PayPal script on unmount
      const existingScript = document.querySelector("script[src*='paypal.com/sdk/js']");
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  useEffect(() => {
    if (!paypalLoaded || !paypalRef.current) return;

    window.paypal
      .Buttons({
        createOrder: (data, actions) => {
          console.log("Creating Order with data:", data);
          return actions.order
            .create({
              purchase_units: [
                {
                  amount: {
                    value: donationAmount,
                  },
                  description: donationDescription,
                },
              ],
            })
            .then((orderId) => {
              console.log("Order created successfully:", orderId);
              return orderId;
            })
            .catch((err) => {
              console.error("Error creating order:", err);
              alert("Error creating order. Please try again.");
            });
        },
        onApprove: (data, actions) => {
          console.log("Order approved, transaction data:", data);
          return actions.order
            .capture()
            .then((details) => {
              console.log("Transaction details:", details);
              alert(`Transaction completed by ${details.payer.name.given_name}`);
            })
            .catch((err) => {
              console.error("Error capturing the order:", err);
              alert("Error completing transaction. Please try again.");
            });
        },
        onError: (err) => {
          console.error("PayPal Checkout Error:", err);
          alert("Something went wrong with the payment. Please try again.");
        },
      })
      .render(paypalRef.current);
  }, [paypalLoaded, donationAmount, donationDescription]);

  return <div ref={paypalRef} id="paypal-button-container" />;
};

export default PayPalDonateDemo;
