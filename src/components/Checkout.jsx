import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useAsyncError, useNavigate } from "react-router-dom";

const TAX_RATE = 0.18;
const SHIPPING_FEE = 0;

const deliverySlots = [
  { label: "Within 2 Hours", price: 4.0, type: "Paid" },
  { label: "Within 3 Hours", price: 3.5, type: "Paid" },
  { label: "1pm - 2pm", price: 0.0, type: "Free" },
  { label: "2pm - 3pm", price: 3.99, type: "Paid" },
  { label: "3pm - 4pm", price: 3.99, type: "Paid" },
];

const addresses = [
  {
    id: 1,
    label: "Home",
    name: "Jitu Chauhan",
    address: "4450 North Avenue Oakland,",
    city: "Nebraska United States",
    phone: "402-776-1106",
    isDefault: true,
  },
  {
    id: 2,
    label: "Office",
    name: "Nitu Chauhan",
    address: "3853 Coal Road, Tannersville",
    city: "Pennsylvania 18372 United States",
    phone: "402-776-1106",
    isDefault: false,
  },
];

const getDays = () => {
  const days = [];
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  for (let i = 0; i < 7; i++) {
    const d = new Date();
    d.setDate(d.getDate() + i);
    days.push({
      label: i === 0 ? "Today" : dayNames[d.getDate()],
      date: `${monthNames[d.getMonth()]} ${d.getDate()}`,
    });
  }
  return days;
};

const STEPS = ["address", "delivery", "payment", "instructions", "review"];

function Checkout() {
  const { cart, total, clearCart } = useCart();
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState("address");
  const [selectedAddress, setSelectedAddress] = useState(1);
  const [seletedDay, setSelectedDay] = useState(0);
  const [seletedSlot, setSelectedSlot] = useState(null);
  const [instructions, setInstructions] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("credit");
  const [cardDetails, setCardDeatails] = useState({
    number: "",
    name: "",
    expiry: "",
    cvv: "",
  });
  const [orderPlaced, setOrderPlaced] = useState(false);

  const days = getDays();
  const subTotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const tax = subTotal * TAX_RATE;
  const grandTotal = subTotal + tax + SHIPPING_FEE;

  const goNext = () => {
    const idx = STEPS.indexOf(activeStep);
    if (idx < STEPS.length - 1) setActiveStep(STEPS[idx + 1]);
  };

  const goPrev = () => {
    const idx = STEPS.indexOf(activeStep);
    if (idx > 0) setActiveStep(STEPS[idx - 1]);
  };

  const handlePlaceOrder = () => {
    setOrderPlaced(true);
    clearCart();
    setTimeout(() => navigate("/"), 3000);
  };

  if (orderPlaced) {
    return (
      <div className="container my-5 text-center py-5">
        <div style={{ fontSize: "4rem" }}>🎉</div>
        <h3 className="fw-bold mt-3">Order Placed Successfully!</h3>
        <p className="text-muted">
          Thank you for your order. Redirecting you to home...
        </p>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <h3 className="fw-bold mb-1">Checkout</h3>
      <p className="text-muted mb-4" style={{ fontSize: "0.9rem" }}>
        Already have an account?{" "}
        <a href="/signin" className="text-decoration-none text-success">
          Click here for Sign in.
        </a>
      </p>

      <div className="row g-4">
        <div className="col-lg-8">
          <div className="border rounded mb-3 overflow-hidden">
            <div
              className="d-flex align-items-center justify-content-between p-3"
              style={{
                cursor: "pointer",
                background: activeStep === "address" ? "#fff" : "#fafafa",
              }}
              onClick={() => setActiveStep("address")}
            >
              <div className="d-flex align-items-center gap-2">
                <span
                  className="material-symbols-outlined text-muted"
                  style={{ fontSize: "20px" }}
                >
                  location_on
                </span>
                <span className="fw-semibold">Add delivery address</span>
              </div>
              <button
                className="btn btn-sm btn-outline-success"
                style={{ fontSize: "0.8rem" }}
              >
                Add a new address
              </button>
            </div>
            {activeStep === "address" && (
              <div className="p-3 border-top">
                <div className="row g-3">
                  {addresses.map((addr) => (
                    <div className="col-md-6" key={addr.id}>
                      <div
                        className="border roundedp-3 h-100"
                        style={{
                          cursor: "pointer",
                          borderColor:
                            selectedAddress === addr.id ? "#0aada" : "#dee2e6",
                        }}
                        onClick={() => selectedAddress(addr.id)}
                      >
                        <div className="d-flex align-items-center gap-2 mb-2">
                          <input
                            type="radio"
                            checked={selectedAddress === addr.id}
                            onChange={() => setSelectedAddress(addr.id)}
                            style={{ accentColor: "#0aad0a" }}
                          />
                          <span className="fw-semibold">{addr.label}</span>
                        </div>
                        <div style={{ fontSize: "0.875rem", color: "#555" }}>
                          <div>{addr.name}</div>
                          <div>{addr.address}</div>
                          <div>{addr.city}</div>
                          <div>{addr.phone}</div>
                        </div>
                        <div className="mt-2" style={{ fontSize: "0.875rem" }}>
                          {addr.isDefault ? (
                            <span className="text-danger">Default address</span>
                          ) : (
                            <span
                              className="text-success"
                              style={{ cursor: "pointer" }}
                            >
                              Set as Default
                            </span>
                          )}
                          <span
                            className="ms-3 text-muted"
                            style={{ cursor: "pointer" }}
                          >
                            Edit
                          </span>
                          <span
                            className="ms-3 text-danger"
                            style={{ cursor: "pointer" }}
                          >
                            Delete
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="d-flex justify-content-end gap-2 mt-3">
                  <button
                    className="btn btn-success btn-sm px-4"
                    onClick={goNext}
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="border rounded mb-3 overflow-hidden">
            <div
              className="d-flex align-items-center p-3 gap-2"
              style={{
                cursor: "pointer",
                background: activeStep === "delivery" ? "#fff" : "#fafafa",
              }}
              onClick={() => setActiveStep("delivery")}
            >
              <span
                className="material-symbols-outlined text-muted"
                style={{ fontSize: "20px" }}
              >
                schedule
              </span>
              <span className="fw-semibold">Delivery time</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
