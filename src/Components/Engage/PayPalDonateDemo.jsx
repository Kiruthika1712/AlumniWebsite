import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import SectionHeader from "./SectionHeader"; 

const Donate = () => {
  return (
    <div className=" bg-white text-gray-800 ">

      <div className="max-w-3xl mx-auto mt-12 bg-blue-50 p-8 rounded-xl shadow-md">
        
        {/* PayPal Integration */}
        <PayPalScriptProvider options={{ "client-id": "AfuXCbl6RLrPZVo9VbZv_vwHmaJxWOvV3uc2splSCLbhdqSMMkVG7T7C8vC0-hPxi2ZCOm-lGVRmeJgU" }}>
          <PayPalButtons
            style={{ layout: "vertical", color: "blue", shape: "pill", label: "donate" }}
            forceReRender={[{ layout: "vertical" }]}
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: "100.00", // Default donation value
                    },
                  },
                ],
              });
            }}
            onApprove={(data, actions) => {
              return actions.order.capture().then((details) => {
                alert("Donation successful! Thank you, " + details.payer.name.given_name + "!");
              });
            }}
          />
        </PayPalScriptProvider>
      </div>
    </div>
  );
};

export default Donate;
