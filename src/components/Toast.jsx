import React, { useEffect } from "react";

function Toast({ message, show, onHide }) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(onHide, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onHide]);

  return (
    <div
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        zIndex: 9999,
        transform: show ? "translateY(0)" : "translateY(120%)",
        opacity: show ? 1 : 0,
        transition: "all ease 0.3s",
      }}
    >
      <div
        className="d-flex align-items-center gap-2 px-4 py-3 rounded shadow"
        style={{
          backgroundColor: "#fff",
          border: "1px solid #e5e5e5",
          fontSize: "0.9rem",
          minWidth: "220px",
          fontWeight: 500,
        }}
      >
        <span className="material-symbols-outlined" style={{color:"#22c55e", fontSize: "1.3rem"}}>check_circle</span>
        {message || "Product added to cart"}
      </div>
    </div>
  );
}

export default Toast;
