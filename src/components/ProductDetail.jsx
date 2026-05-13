import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishList } from "../context/WishListContext";
import { products } from "../data/products";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishList();

  const product = products.find((p) => p.id === Number(id));
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("1kg");

  if (!product) {
    return (
      <div className="container my-5 text-center">
        <h4>Product not found</h4>
        <button className="btn btn-success mt-3" onClick={() => navigate("/")}>
          Go back home
        </button>
      </div>
    );
  }

  const handleWishlist = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  // Related products — same category, exclude current
  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="container my-5">
      {/* Breadcrumb */}
      <nav className="mb-4">
        <small>
          <a href="/" className="text-success text-decoration-none">Home</a>
          {" / "}
          <a href="/shop" className="text-success text-decoration-none">Shop</a>
          {" / "}
          <span className="text-muted">{product.title}</span>
        </small>
      </nav>

      <div className="row g-4">
        {/* Left — image */}
        <div className="col-md-6">
          <div
            className="rounded d-flex align-items-center justify-content-center"
            style={{ background: "#f9f5f0", height: "400px" }}
          >
            <img
              src={product.images}
              alt={product.title}
              style={{ maxHeight: "360px", maxWidth: "100%", objectFit: "contain" }}
            />
          </div>
        </div>

        {/* Right — details */}
        <div className="col-md-6">
          <div className="text-success fw-semibold mb-1" style={{ fontSize: "0.875rem" }}>
            {product.category}
          </div>

          <h3 className="fw-bold mb-2">{product.title}</h3>

          {/* Rating */}
          <div className="d-flex align-items-center gap-2 mb-3">
            <small className="text-warning">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star-half-stroke"></i>
            </small>
            <small className="text-muted">({product.ratingCount} reviews)</small>
          </div>

          {/* Price */}
          <div className="d-flex align-items-center gap-2 mb-4">
            <span className="fw-bold fs-4 text-dark">${product.price?.toFixed(2)}</span>
            {product.originalPrice !== product.price && (
              <span className="text-decoration-line-through text-muted fs-5">
                ${product.originalPrice?.toFixed(2)}
              </span>
            )}
            {product.discountTag && (
              <span className="badge bg-success ms-2">{product.discountTag} off</span>
            )}
          </div>

          {/* Size */}
          <div className="mb-3">
            <small className="fw-semibold d-block mb-2">Size</small>
            <div className="d-flex gap-2">
              {["250g", "500g", "1kg"].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className="btn btn-sm"
                  style={{
                    border: selectedSize === size ? "2px solid #333" : "1px solid #ccc",
                    background: selectedSize === size ? "#333" : "transparent",
                    color: selectedSize === size ? "#fff" : "#333",
                    borderRadius: "6px",
                    minWidth: "54px",
                  }}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="d-flex align-items-center gap-3 mb-4">
            <small className="fw-semibold">Qty</small>
            <button
              className="btn btn-outline-secondary btn-sm"
              style={{ width: 32, height: 32, padding: 0 }}
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            >-</button>
            <span className="fw-semibold">{quantity}</span>
            <button
              className="btn btn-outline-secondary btn-sm"
              style={{ width: 32, height: 32, padding: 0 }}
              onClick={() => setQuantity((q) => q + 1)}
            >+</button>
          </div>

          {/* Action buttons */}
          <div className="d-flex gap-2 mb-4">
            <button
              className="btn btn-success flex-grow-1"
              onClick={() => addToCart({ ...product, quantity })}
            >
              <i className="fa-solid fa-cart-shopping me-2"></i>Add to cart
            </button>
            <button
              className="btn btn-outline-secondary"
              style={{ width: 46 }}
              onClick={handleWishlist}
              title="Wishlist"
            >
              <span
                className="material-symbols-outlined"
                style={{
                  fontSize: "18px",
                  color: isInWishlist(product.id) ? "red" : "inherit",
                  fontVariationSettings: isInWishlist(product.id) ? "'FILL' 1" : "'FILL' 0",
                }}
              >favorite</span>
            </button>
          </div>

          {/* Details table */}
          <table className="w-100" style={{ fontSize: "0.875rem", borderTop: "1px solid #eee" }}>
            <tbody>
              {[
                { label: "Product Code", value: product.code ?? "FBB00255" },
                { label: "Availability", value: product.price > 0 ? "In Stock" : "Out of Stock" },
                { label: "Type", value: product.category },
                { label: "Shipping", value: "01 day shipping. (Free pickup today)" },
              ].map(({ label, value }) => (
                <tr key={label} style={{ borderBottom: "1px solid #eee" }}>
                  <td className="py-2 text-muted" style={{ width: "140px" }}>{label}:</td>
                  <td className="py-2 fw-semibold">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <div className="mt-5">
          <h5 className="fw-bold mb-4">Related Products</h5>
          <div className="row row-cols-lg-4 row-cols-2 g-3">
            {related.map((p) => (
              <div key={p.id} className="col">
                <div
                  className="product-card card card-product h-100"
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate(`/product/${p.id}`)}
                >
                  <div className="card-body text-center">
                    <img src={p.images} alt={p.title} className="img-fluid mb-2" style={{ height: "120px", objectFit: "contain" }} />
                    <small className="text-muted d-block">{p.category}</small>
                    <p className="fw-semibold mb-1" style={{ fontSize: "0.875rem" }}>{p.title}</p>
                    <span className="text-dark fw-bold">${p.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetail;