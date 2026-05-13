import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useWishList } from "../context/WishListContext";
import QuickViewModal from "./QuickViewModal";
import { useNavigate } from "react-router-dom";

function PopularProductCard({
  id, category, title, rating, ratingCount,
  price, originalPrice, discountTag, tagType, images,
}) {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishList();
  const [showModal, setShowModal] = useState(false); // ✅ state declared at top level
  const navigate = useNavigate();

  const product = { id, category, title, rating, ratingCount, price, originalPrice, discountTag, tagType, images };

  const handleAdd = () => addToCart(product);

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
            <div className="sale-off position-absolute top-0 start-0">
              <div className="d-flex gap-1 flex-column">
                {tagType && <span className="bg-danger badge">{tagType}</span>}
                {discountTag && <span className="bg-success badge">{discountTag}</span>}
              </div>
            </div>

            {/* ✅ Image is just a normal link — NOT the modal trigger */}
            <a href="#" onClick={(e) => {e.preventDefault(); navigate(`/product/${id}`)}}>
              <img src={images} className="mb-3 img-fluid" alt={title} />
            </a>

            <div className="d-flex justify-content-center gap-1 card-product-action">
              {/* ✅ Eye icon is the modal trigger */}
              <a href="#" className="btn-action eye"
                onClick={(e) => { e.preventDefault(); setShowModal(true); }}>
                <span className="material-symbols-outlined">visibility</span>
              </a>

              <a href="#" className="btn-action eye"
                onClick={(e) => { e.preventDefault(); handleWishlist(); }}>
                <span
                  className="material-symbols-outlined"
                  style={{
                    color: isInWishlist(id) ? "red" : "inherit",
                    fontVariationSettings: isInWishlist(id) ? "'FILL' 1" : "'FILL' 0",
                  }}
                >favorite</span>
              </a>

              <a href="#" className="btn-action eye">
                <span className="material-symbols-outlined">sync_alt</span>
              </a>
            </div>
          </div>

          <div className="text-small mb-1">
            <a href="#" className="text-decoration-none text-muted">
              <small>{category}</small>
            </a>
          </div>
          <h2 className="fs-6">
            <a href="#" className="text-decoration-none text-dark" onClick={(e) => {e.preventDefault(); navigate(`/product/${id}`)}}>{title}</a>
          </h2>
          <div className="d-inline-flex align-items-center gap-1 review">
            <small className="text-warning">
              <div className="d-flex gap-1">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star-half-stroke"></i>
              </div>
            </small>
            <span className="small">{rating} ({ratingCount})</span>
          </div>
          <div className="justify-content-between d-flex mt-3 align-items-center">
            <div className="price">
              <span className="text-dark">${price}</span>
              {originalPrice !== price && (
                <span className="text-decoration-line-through ms-1 text-muted">${originalPrice}</span>
              )}
            </div>
            <div className="add-btn">
              <button role="button" className="btn btn-primary" onClick={handleAdd}>
                <i className="fa-solid fa-plus"></i>&nbsp;&nbsp;Add
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Modal renders outside the card div, only when showModal is true */}
      {showModal && (
        <QuickViewModal
          product={product}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}

export default PopularProductCard;