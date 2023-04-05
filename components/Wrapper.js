import React from "react";

function Wrapper({ children, style }) {
  return (
    <div style={{ ...style }} className="wrapper">
      {children}
    </div>
  );
}

export default Wrapper;
