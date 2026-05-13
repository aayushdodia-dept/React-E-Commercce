import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishList } from "../context/WishListContext";
import { products, categories } from "../data/products";

const ITEMS_PER_PAGE = 8;

function ShopPage() {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishList();

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [maxPrice, setMaxPrice] = useState(199);
  const [selectedRating, setSelectedRating] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("Featured");
  const [showCount, setShowCount] = useState(8);

  const maxProductPrice = Math.max(...products.map((p) => p.price));

  // Filter + sort
  const filtered = useMemo(() => {
    let list = [...products];
    if (selectedCategory) list = list.filter((p) => p.category === selectedCategory);
    list = list.filter((p) => p.price <= maxPrice);
    if (selectedRating) list = list.filter((p) => Math.floor(p.rating) >= selectedRating);
    if (sortBy === "Price: Low to High") list.sort((a, b) => a.price - b.price);
    if (sortBy === "Price: High to Low") list.sort((a, b) => b.price - a.price);
    if (sortBy === "Rating") list.sort((a, b) => b.rating - a.rating);
    return list;
  }, [selectedCategory, maxPrice, selectedRating, sortBy]);

  const totalPages = Math.ceil(filtered.length / showCount);
  const paginated = filtered.slice((currentPage - 1) * showCount, currentPage * showCount);

  return (
    <div className="container my-5">
      {/* Breadcrumb */}
      <nav className="mb-4">
        <small>
          <a href="/" className="text-success text-decoration-none">Home</a>
          {" / "}
          <span className="text-muted">Shop</span>
        </small>
      </nav>

      <div className="row g-4">
        {/* ── Sidebar ── */}
        <div className="col-lg-3">

          {/* Categories */}
          <div className="mb-4">
            <h6 className="fw-bold mb-3">Categories</h6>
            <ul className="list-unstyled">
              <li
                className="py-1"
                style={{ cursor: "pointer", color: !selectedCategory ? "#0aad0a" : "inherit", fontWeight: !selectedCategory ? 500 : 400 }}
                onClick={() => { setSelectedCategory(null); setCurrentPage(1); }}
              >
                All
              </li>
              {categories.map((cat) => (
                <li
                  key={cat}
                  className="py-1"
                  style={{ cursor: "pointer", color: selectedCategory === cat ? "#0aad0a" : "inherit", fontWeight: selectedCategory === cat ? 500 : 400 }}
                  onClick={() => { setSelectedCategory(cat); setCurrentPage(1); }}
                >
                  {cat}
                </li>
              ))}
            </ul>
          </div>

          <hr />

          {/* Price range */}
          <div className="mb-4">
            <h6 className="fw-bold mb-3">Price</h6>
            <input
              type="range"
              className="form-range"
              min={0}
              max={Math.ceil(maxProductPrice) + 10}
              value={maxPrice}
              onChange={(e) => { setMaxPrice(Number(e.target.value)); setCurrentPage(1); }}
            />
            <small className="text-muted">Price: $0 – ${maxPrice}</small>
          </div>

          <hr />

          {/* Rating filter */}
          <div className="mb-4">
            <h6 className="fw-bold mb-3">Rating</h6>
            {[5, 4, 3, 2, 1].map((star) => (
              <div key={star} className="d-flex align-items-center gap-2 mb-2">
                <input
                  type="checkbox"
                  id={`star-${star}`}
                  checked={selectedRating === star}
                  onChange={() => {
                    setSelectedRating(selectedRating === star ? null : star);
                    setCurrentPage(1);
                  }}
                  style={{ accentColor: "#0aad0a" }}
                />
                <label htmlFor={`star-${star}`} className="d-flex gap-1 mb-0" style={{ cursor: "pointer" }}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <i
                      key={i}
                      className={`fa-${i < star ? "solid" : "regular"} fa-star`}
                      style={{ color: "#ffc107", fontSize: "13px" }}
                    ></i>
                  ))}
                </label>
              </div>
            ))}
          </div>

          <hr />

          {/* Promo banner */}
          <div
            className="rounded p-3"
            style={{
              background: "#f0f8e8",
              border: "1px solid #d4edba",
            }}
          >
            <h6 className="fw-bold">Fresh Fruits</h6>
            <small className="text-muted d-block mb-2">Get Upto 25% Off</small>
            <a href="#" className="btn btn-dark btn-sm">
              Shop Now <i className="fa-solid fa-arrow-right ms-1"></i>
            </a>
          </div>
        </div>

        {/* ── Product grid ── */}
        <div className="col-lg-9">
          {/* Banner */}
          <div
            className="rounded mb-4 p-4 d-flex align-items-center"
            style={{ background: "#f0f4f8", minHeight: "80px" }}
          >
            <h4 className="fw-bold mb-0">
              {selectedCategory ?? "Snacks & Munchies"}
            </h4>
          </div>

          {/* Controls */}
          <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
            <small className="text-muted">
              <strong>{filtered.length}</strong> Products found
            </small>
            <div className="d-flex gap-2 align-items-center">
              <select
                className="form-select form-select-sm"
                style={{ width: "120px" }}
                value={showCount}
                onChange={(e) => { setShowCount(Number(e.target.value)); setCurrentPage(1); }}
              >
                {[4, 8, 12, 16].map((n) => (
                  <option key={n} value={n}>Show: {n}</option>
                ))}
              </select>
              <select
                className="form-select form-select-sm"
                style={{ width: "160px" }}
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                {["Featured", "Price: Low to High", "Price: High to Low", "Rating"].map((s) => (
                  <option key={s} value={s}>Sort by: {s}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Cards */}
          <div className="row row-cols-lg-4 row-cols-md-3 row-cols-2 g-3">
            {paginated.map((product) => (
              <div key={product.id} className="col">
                <div className="product-card card card-product h-100">
                  <div className="card-body">
                    <div className="text-center position-relative">
                      <div className="sale-off position-absolute top-0 start-0">
                        <div className="d-flex gap-1 flex-column">
                          {product.tagType && <span className="bg-danger badge">{product.tagType}</span>}
                          {product.discountTag && <span className="bg-success badge">{product.discountTag}</span>}
                        </div>
                      </div>
                      {/* ✅ Click image → product detail */}
                      
                       <a  href="#"
                        onClick={(e) => { e.preventDefault(); navigate(`/product/${product.id}`); }}>
                      
                        <img src={product.images} alt={product.title} className="mb-3 img-fluid" style={{ height: "140px", objectFit: "contain" }} />
                      </a>
                    </div>

                    <small className="text-muted d-block mb-1">{product.category}</small>

                    <h6
                      className="text-dark mb-2"
                      style={{ cursor: "pointer" }}
                      onClick={() => navigate(`/product/${product.id}`)}
                    >
                      {product.title}
                    </h6>

                    <div className="d-flex align-items-center gap-1 mb-2">
                      <small className="text-warning">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <i key={i} className={`fa-${i < Math.floor(product.rating) ? "solid" : i < product.rating ? "solid fa-star-half-stroke" : "regular"} fa-star`}></i>
                        ))}
                      </small>
                      <small className="text-muted">{product.rating} ({product.ratingCount})</small>
                    </div>

                    <div className="d-flex justify-content-between align-items-center mt-2">
                      <div>
                        <span className="fw-semibold text-dark">${product.price}</span>
                        {product.originalPrice !== product.price && (
                          <span className="text-decoration-line-through text-muted ms-1">${product.originalPrice}</span>
                        )}
                      </div>
                      <button
                        className="btn btn-success btn-sm"
                        onClick={() => addToCart(product)}
                      >
                        <i className="fa-solid fa-plus me-1"></i>Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <nav className="mt-4">
              <ul className="pagination justify-content-center">
                <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                  <button className="page-link" onClick={() => setCurrentPage((p) => p - 1)}>
                    <i className="fa-solid fa-chevron-left"></i>
                  </button>
                </li>
                {Array.from({ length: totalPages }).map((_, i) => (
                  <li key={i} className={`page-item ${currentPage === i + 1 ? "active" : ""}`}>
                    <button className="page-link" onClick={() => setCurrentPage(i + 1)}>{i + 1}</button>
                  </li>
                ))}
                <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                  <button className="page-link" onClick={() => setCurrentPage((p) => p + 1)}>
                    <i className="fa-solid fa-chevron-right"></i>
                  </button>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>
    </div>
  );
}

export default ShopPage;