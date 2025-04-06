import React from "react";

const SectionHeader = ({ title, subtitle }) => {
  return (
    <div className="bg-LightBlue py-20 text-center">
      <h1 className="text-4xl font-extrabold text-DarkBlue py-5">{title}</h1>
      {subtitle && <p className="text-lg text-gray-700 mt-2">{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;
