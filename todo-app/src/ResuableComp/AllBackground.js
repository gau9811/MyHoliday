import React from "react";

const AllBackground = ({ children }) => {
  let BackGroundStyles = {
    background: "linear-gradient(to right, #5bc4e2 0%, #971ce9 100%)",
    height: "100vh",
  };
  return <div style={BackGroundStyles}>{children}</div>;
};

export default AllBackground;
