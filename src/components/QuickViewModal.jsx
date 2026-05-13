// import React, { useEffect, useState } from "react";
// import { useCart } from "../context/CartContext";
// import { useWishList } from "../context/WishListContext";

// function QuickViewModal({ product, onClose }) {
//   const { addToCart } = useCart();
//   const { addToWishlist, removeFromWishlist, isInWishlist } = useWishList();

//   const [quantity, setQuantity] = useState(1);
//   const [selectedSize, setSelectedSize] = useState("1kg");
//   const [mainImage, setMainImage] = useState("");

//   useEffect(() => {
//     if (product) {
//       setMainImage(product.images);
//       document.body.style.overflow = "hidden";
//     }
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [product]);

//   if (!product) return null;

//   const handleWishlist = () => {
//     isInWishlist(product.id)
//       ? removeFromWishlist(product.id)
//       : addToWishlist(product);
//   };

//   const handleAddToCart = () => {
//     addToCart({ ...product, quantity });
//     onClose();
//   };

//   return (
//     <>
//       {/* Backdrop */}
//       <div className="modal-backdrop-custom" onClick={onClose}></div>

//       {/* Modal */}
//       <div className="modal-wrapper">
//         <div className="modal-content-custom">
          
//           <button onClick={onClose} className="btn-close close-btn" />

//           <div className="row g-0 p-4">
            
//             {/* LEFT */}
//             <div className="col-md-6 pe-md-4">
//               <div className="image-box">
//                 <img src={mainImage} alt={product.title} />
//               </div>

//               {product.thumbnails?.length > 0 && (
//                 <div className="d-flex gap-2">
//                   {product.thumbnails.map((thumb, i) => (
//                     <img
//                       key={i}
//                       src={thumb}
//                       onClick={() => setMainImage(thumb)}
//                       className={`thumb ${
//                         mainImage === thumb ? "active" : ""
//                       }`}
//                       alt=""
//                     />
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* RIGHT */}
//             <div className="col-md-6">
//               <div className="text-success fw-semibold mb-1">
//                 {product.category}
//               </div>

//               <h4 className="fw-bold">{product.title}</h4>

//               <div className="mb-3 text-muted">
//                 ({product.ratingCount ?? 4} reviews)
//               </div>

//               <div className="mb-3">
//                 <span className="fw-bold fs-5">
//                   ${product.price?.toFixed(2)}
//                 </span>
//               </div>

//               {/* Size */}
//               <div className="d-flex gap-2 mb-3">
//                 {["250g", "500g", "1kg"].map((size) => (
//                   <button
//                     key={size}
//                     onClick={() => setSelectedSize(size)}
//                     className={`btn btn-sm ${
//                       selectedSize === size ? "btn-dark" : "btn-outline-dark"
//                     }`}
//                   >
//                     {size}
//                   </button>
//                 ))}
//               </div>

//               {/* Quantity */}
//               <div className="d-flex gap-3 mb-3 align-items-center">
//                 <button
//                   onClick={() => setQuantity((q) => Math.max(1, q - 1))}
//                   className="btn btn-outline-secondary btn-sm"
//                 >
//                   -
//                 </button>
//                 <span>{quantity}</span>
//                 <button
//                   onClick={() => setQuantity((q) => q + 1)}
//                   className="btn btn-outline-secondary btn-sm"
//                 >
//                   +
//                 </button>
//               </div>

//               {/* Actions */}
//               <div className="d-flex gap-2">
//                 <button
//                   className="btn btn-success flex-grow-1"
//                   onClick={handleAddToCart}
//                 >
//                   Add to Cart
//                 </button>

//                 <button
//                   className="btn btn-outline-secondary"
//                   onClick={handleWishlist}
//                 >
//                   ❤️
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* CSS */}
//       <style>{`
//         .modal-backdrop-custom {
//           position: fixed;
//           inset: 0;
//           background: rgba(0,0,0,0.5);
//           z-index: 1040;
//         }

//         .modal-wrapper {
//           position: fixed;
//           inset: 0;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           z-index: 1050;
//         }

//         .modal-content-custom {
//           background: white;
//           border-radius: 12px;
//           width: 100%;
//           max-width: 860px;
//           animation: fadeScale 0.3s ease;
//           position: relative;
//         }

//         @keyframes fadeScale {
//           from {
//             opacity: 0;
//             transform: scale(0.9) translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: scale(1) translateY(0);
//           }
//         }

//         .image-box {
//           height: 300px;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           background: #f9f5f0;
//           border-radius: 8px;
//           margin-bottom: 10px;
//         }

//         .image-box img {
//           max-height: 100%;
//         }

//         .thumb {
//           width: 70px;
//           cursor: pointer;
//           border: 1px solid #ddd;
//           border-radius: 6px;
//           padding: 4px;
//         }

//         .thumb.active {
//           border: 2px solid green;
//         }

//         .close-btn {
//           position: absolute;
//           top: 10px;
//           right: 10px;
//         }
//       `}</style>
//     </>
//   );
// }

// export default QuickViewModal;

//Claude 2.0 - QuickViewModal.jsx
// import React, { useEffect, useState } from "react";
// import { useCart } from "../context/CartContext";
// import { useWishList } from "../context/WishListContext";

// function QuickViewModal({ product, onClose }) {
//   const { addToCart } = useCart();
//   const { addToWishlist, removeFromWishlist, isInWishlist } = useWishList();
//   const [quantity, setQuantity] = useState(1);
//   const [selectedSize, setSelectedSize] = useState("1kg");
//   const [mainImage, setMainImage] = useState(product?.images);

//   // Lock scroll when open
//   useEffect(() => {
//     document.body.style.overflow = "hidden";
//     return () => { document.body.style.overflow = ""; };
//   }, []);

//   if (!product) return null;

//   const handleWishlist = () => {
//     if (isInWishlist(product.id)) {
//       removeFromWishlist(product.id);
//     } else {
//       addToWishlist(product);
//     }
//   };

//   const handleAddToCart = () => {
//     addToCart({ ...product, quantity });
//     onClose();
//   };

//   return (
//     <>
//       {/* Backdrop */}
//       <div
//         onClick={onClose}
//         style={{
//           position: "fixed", inset: 0,
//           backgroundColor: "rgba(0,0,0,0.5)",
//           zIndex: 1040,
//         }}
//       />

//       {/* Modal */}
//       <div
//         style={{
//           position: "fixed", inset: 0,
//           zIndex: 1050,
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           padding: "1rem",
//         }}
//       >
//         <div
//           style={{
//             background: "var(--bs-body-bg, #fff)",
//             borderRadius: "12px",
//             maxWidth: "860px",
//             width: "100%",
//             maxHeight: "90vh",
//             overflowY: "auto",
//             position: "relative",
//           }}
//         >
//           {/* Close button */}
//           <button
//             onClick={onClose}
//             className="btn-close position-absolute"
//             style={{ top: "16px", right: "16px", zIndex: 10 }}
//           />

//           <div className="row g-0 p-4">
//             {/* Left — images */}
//             <div className="col-md-6 pe-md-4">
//               <div
//                 className="rounded overflow-hidden mb-3 d-flex align-items-center justify-content-center"
//                 style={{ background: "#f9f5f0", height: "340px" }}
//               >
//                 <img
//                   src={mainImage}
//                   alt={product.title}
//                   style={{ maxHeight: "300px", maxWidth: "100%", objectFit: "contain" }}
//                 />
//               </div>
//               {/* Thumbnails — if product has multiple images */}
//               {product.thumbnails?.length > 0 && (
//                 <div className="d-flex gap-2">
//                   {product.thumbnails.map((thumb, i) => (
//                     <img
//                       key={i}
//                       src={thumb}
//                       alt=""
//                       onClick={() => setMainImage(thumb)}
//                       style={{
//                         width: 72, height: 72, objectFit: "contain",
//                         borderRadius: 8, cursor: "pointer", padding: 4,
//                         border: mainImage === thumb
//                           ? "2px solid #0aad0a"
//                           : "1px solid #e0e0e0",
//                         background: "#f9f5f0",
//                       }}
//                     />
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Right — details */}
//             <div className="col-md-6">
//               {/* Category */}
//               <div className="text-success fw-semibold mb-1" style={{ fontSize: "0.875rem" }}>
//                 {product.category}
//               </div>

//               {/* Title */}
//               <h4 className="fw-bold mb-2">{product.title}</h4>

//               {/* Rating */}
//               <div className="d-flex align-items-center gap-2 mb-3">
//                 <small className="text-warning">
//                   <i className="fa-solid fa-star"></i>
//                   <i className="fa-solid fa-star"></i>
//                   <i className="fa-solid fa-star"></i>
//                   <i className="fa-solid fa-star"></i>
//                   <i className="fa-solid fa-star-half-stroke"></i>
//                 </small>
//                 <small className="text-muted">({product.ratingCount ?? 4} reviews)</small>
//               </div>

//               {/* Price */}
//               <div className="d-flex align-items-center gap-2 mb-4">
//                 <span className="fw-bold fs-5">${product.price?.toFixed(2)}</span>
//                 {product.originalPrice !== product.price && (
//                   <span className="text-decoration-line-through text-muted">
//                     ${product.originalPrice?.toFixed(2)}
//                   </span>
//                 )}
//               </div>

//               {/* Size selector */}
//               <div className="d-flex gap-2 mb-3">
//                 {["250g", "500g", "1kg"].map((size) => (
//                   <button
//                     key={size}
//                     onClick={() => setSelectedSize(size)}
//                     className="btn btn-sm"
//                     style={{
//                       border: selectedSize === size ? "2px solid #333" : "1px solid #ccc",
//                       background: selectedSize === size ? "#333" : "transparent",
//                       color: selectedSize === size ? "#fff" : "#333",
//                       borderRadius: "6px",
//                       minWidth: "52px",
//                     }}
//                   >
//                     {size}
//                   </button>
//                 ))}
//               </div>

//               {/* Quantity */}
//               <div className="d-flex align-items-center gap-3 mb-4">
//                 <button
//                   className="btn btn-outline-secondary btn-sm"
//                   style={{ width: 32, height: 32, padding: 0 }}
//                   onClick={() => setQuantity(q => Math.max(1, q - 1))}
//                 >-</button>
//                 <span className="fw-semibold">{quantity}</span>
//                 <button
//                   className="btn btn-outline-secondary btn-sm"
//                   style={{ width: 32, height: 32, padding: 0 }}
//                   onClick={() => setQuantity(q => q + 1)}
//                 >+</button>
//               </div>

//               {/* Actions */}
//               <div className="d-flex gap-2 mb-4">
//                 <button className="btn btn-success flex-grow-1" onClick={handleAddToCart}>
//                   <i className="fa-solid fa-cart-shopping me-2"></i>Add to cart
//                 </button>
//                 <button
//                   className="btn btn-outline-secondary"
//                   style={{ width: 42 }}
//                   title="Compare"
//                 >
//                   <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>sync_alt</span>
//                 </button>
//                 <button
//                   className="btn btn-outline-secondary"
//                   style={{ width: 42 }}
//                   onClick={handleWishlist}
//                   title="Wishlist"
//                 >
//                   <span
//                     className="material-symbols-outlined"
//                     style={{
//                       fontSize: "18px",
//                       color: isInWishlist(product.id) ? "red" : "inherit",
//                       fontVariationSettings: isInWishlist(product.id) ? "'FILL' 1" : "'FILL' 0",
//                     }}
//                   >favorite</span>
//                 </button>
//               </div>

//               {/* Product details table */}
//               <table className="w-100" style={{ fontSize: "0.875rem", borderTop: "1px solid #eee" }}>
//                 <tbody>
//                   {[
//                     { label: "Product Code", value: product.code ?? "FBB00255" },
//                     { label: "Availability", value: product.price > 0 ? "In Stock" : "Out of Stock" },
//                     { label: "Type", value: product.category },
//                     { label: "Shipping", value: "01 day shipping. (Free pickup today)" },
//                   ].map(({ label, value }) => (
//                     <tr key={label} style={{ borderBottom: "1px solid #eee" }}>
//                       <td className="py-2 text-muted" style={{ width: "140px" }}>{label}:</td>
//                       <td className="py-2 fw-semibold">{value}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default QuickViewModal;

import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { useWishList } from "../context/WishListContext";

function QuickViewModal({ product, onClose }) {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishList();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("1kg");
  const [mainImage, setMainImage] = useState(product?.images);
  const [visible, setVisible] = useState(false); // ✅ animation state

  // Trigger entrance animation
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 10);
    return () => clearTimeout(t);
  }, []);

  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  if (!product) return null;

  // ✅ Animate out before closing
  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 300);
  };

  const handleWishlist = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
    handleClose();
  };

  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        .qv-backdrop {
          position: fixed; inset: 0;
          background: rgba(0,0,0,0.5);
          z-index: 1040;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.3s ease, visibility 0.3s ease;
        }
        .qv-backdrop.show {
          opacity: 1;
          visibility: visible;
        }
        .qv-wrapper {
          position: fixed; inset: 0;
          z-index: 1050;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }
        .qv-modal {
          background: #fff;
          border-radius: 12px;
          max-width: 860px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          transform: translateY(40px);
          opacity: 0;
          transition: transform 0.35s ease, opacity 0.35s ease;
        }
        .qv-modal.show {
          transform: translateY(0);
          opacity: 1;
        }
      `}</style>

      {/* Backdrop */}
      <div
        className={`qv-backdrop ${visible ? "show" : ""}`}
        onClick={handleClose}
      />

      {/* Modal wrapper */}
      <div className="qv-wrapper">
        <div className={`qv-modal ${visible ? "show" : ""}`}>

          {/* Close button */}
          <button
            onClick={handleClose}
            className="btn-close position-absolute"
            style={{ top: "16px", right: "16px", zIndex: 10 }}
          />

          <div className="row g-0 p-4">
            {/* Left — image */}
            <div className="col-md-6 pe-md-4">
              <div
                className="rounded overflow-hidden mb-3 d-flex align-items-center justify-content-center"
                style={{ background: "#f9f5f0", height: "340px" }}
              >
                <img
                  src={mainImage}
                  alt={product.title}
                  style={{ maxHeight: "300px", maxWidth: "100%", objectFit: "contain" }}
                />
              </div>

              {product.thumbnails?.length > 0 && (
                <div className="d-flex gap-2">
                  {product.thumbnails.map((thumb, i) => (
                    <img
                      key={i}
                      src={thumb}
                      alt=""
                      onClick={() => setMainImage(thumb)}
                      style={{
                        width: 72, height: 72, objectFit: "contain",
                        borderRadius: 8, cursor: "pointer", padding: 4,
                        border: mainImage === thumb ? "2px solid #0aad0a" : "1px solid #e0e0e0",
                        background: "#f9f5f0",
                      }}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Right — details */}
            <div className="col-md-6">
              <div className="text-success fw-semibold mb-1" style={{ fontSize: "0.875rem" }}>
                {product.category}
              </div>

              <h4 className="fw-bold mb-2">{product.title}</h4>

              <div className="d-flex align-items-center gap-2 mb-3">
                <small className="text-warning">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star-half-stroke"></i>
                </small>
                <small className="text-muted">({product.ratingCount ?? 4} reviews)</small>
              </div>

              <div className="d-flex align-items-center gap-2 mb-4">
                <span className="fw-bold fs-5">${product.price?.toFixed(2)}</span>
                {product.originalPrice !== product.price && (
                  <span className="text-decoration-line-through text-muted">
                    ${product.originalPrice?.toFixed(2)}
                  </span>
                )}
              </div>

              {/* Size selector */}
              <div className="d-flex gap-2 mb-3">
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
                      minWidth: "52px",
                    }}
                  >
                    {size}
                  </button>
                ))}
              </div>

              {/* Quantity */}
              <div className="d-flex align-items-center gap-3 mb-4">
                <button
                  className="btn btn-outline-secondary btn-sm"
                  style={{ width: 32, height: 32, padding: 0 }}
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                >-</button>
                <span className="fw-semibold">{quantity}</span>
                <button
                  className="btn btn-outline-secondary btn-sm"
                  style={{ width: 32, height: 32, padding: 0 }}
                  onClick={() => setQuantity(q => q + 1)}
                >+</button>
              </div>

              {/* Actions */}
              <div className="d-flex gap-2 mb-4">
                <button className="btn btn-success flex-grow-1" onClick={handleAddToCart}>
                  <i className="fa-solid fa-cart-shopping me-2"></i>Add to cart
                </button>
                <button className="btn btn-outline-secondary" style={{ width: 42 }} title="Compare">
                  <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>sync_alt</span>
                </button>
                <button
                  className="btn btn-outline-secondary"
                  style={{ width: 42 }}
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
        </div>
      </div>
    </>
  );
}

export default QuickViewModal;