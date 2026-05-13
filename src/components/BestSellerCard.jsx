import React, { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { useWishList } from "../context/WishListContext";
import { useNavigate } from "react-router-dom";
import QuickViewModal from "./QuickViewModal";

function useCoundown(targetDate) {
  const getTimeLeft = () => {
    const diff = targetDate - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, mins: 0, secs: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      mins: Math.floor((diff / (1000 * 60)) % 60),
      secs: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(getTimeLeft);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return timeLeft;
}

function BestSellerCard({
  id,
  images,
  category,
  title,
  price,
  originalPrice,
  rating,
  ratingCount,
  dealEnds,
}) {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishList();
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const { days, hours, mins, secs } = useCoundown(dealEnds);

  const product = {
    id,
    images,
    category,
    title,
    price,
    originalPrice,
    rating,
    ratingCount,
    dealEnds,
  };

  const handleWishlist = () => {
    if (isInWishlist(id)) {
      removeFromWishlist(id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <div className="col">
      <div className="product-card card card-product">
        <div className="card-body">
          <div className="text-center position-relative">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                navigate(`/product/${id}`);
              }}
            >
              <img src={images} className="mb-3 img-fluid" alt={title} />
            </a>
            <div className="card-product-action d-flex gap-1 justify-content-center">
              <a
                href="#"
                className="btn-action eye"
                onClick={(e) => {
                  e.preventDefault();
                  setShowModal(true);
                }}
              >
                <span className="material-symbols-outlined" title="Quick View">
                  visibility
                </span>
              </a>
              <a
                href="#"
                className="btn-action eye"
                onClick={(e) => {
                  e.preventDefault();
                  handleWishlist();
                }}
              >
                <span
                  className="material-symbols-outlined"
                  style={{
                    color: isInWishlist(id) ? "red" : "inherit",
                    fontVariationSettings: isInWishlist(id)
                      ? "'FILL' 1"
                      : "'FILL' 0",
                  }}
                >
                  favorite
                </span>
              </a>
              <a href="#" className="btn-action eye">
                <span className="material-symbols-outlined">sync_alt</span>
              </a>
            </div>
          </div>
          <div className="text-small mb-1">
            <a href="#" className="text-muted text-decoration-none">
              {category}
            </a>
          </div>
          <h2 className="fs-6">
            <a
              href="#"
              className="text-dark text-decoration-none"
              onClick={(e) => {
                e.preventDefault();
                navigate(`/product/${id}`);
              }}
            >
              {title}
            </a>
          </h2>
          <div className="d-flex justify-content-between mt-3 align-items-center">
            <div>
              <span className="text-dark">${price.toFixed(2)}</span>
              <span className="text-decoration-line-through text-muted">
                ${originalPrice.toFixed(2)}
              </span>
            </div>
            <div className="d-flex align-items-center gap-1">
              <small className="text-warning">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star-half-stroke"></i>
              </small>
              <span>
                <small>{rating.toFixed(1)}</small>
              </span>
            </div>
          </div>
          <div className="d-grid mt-2">
            <button
              onClick={() => addToCart(product)}
              className="btn btn-primary"
            >
              <i className="fa-solid fa-plus"></i> Add to cart
            </button>
          </div>

          {/* Live countdown */}
          <div className="d-flex justify-content-center text-center mt-3">
            <div className="deals-countdown w-100">
              {[
                { value: days, label: "Days" },
                { value: hours, label: "Hours" },
                { value: mins, label: "Mins" },
                { value: secs, label: "Secs" },
              ].map(({ value, label }) => (
                <span key={label} className="countdown-section text-center">
                  <span className="countdown-amount hover-up fw-bold">
                    {String(value).padStart(2, "0")}
                  </span>
                  <span className="countdown-period text-muted">{label}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <QuickViewModal product={product} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
}

export default BestSellerCard;
