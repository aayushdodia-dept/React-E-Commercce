import React from "react";
import { useWishList } from "../context/WishListContext";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function WishList() {
  const { wishList = [], removeFromWishlist } = useWishList();
  const { addToCart } = useCart();

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  return (
    <main className="container my-5">
      <h2 className="fw-bold mb-1">My Wishlist</h2>
      <p className="text-muted mb-4">
        There are {wishList.length} product{wishList.length !== 1 ? "s" : ""} in this wishlist.
      </p>

      {wishList.length === 0 ? (
        <div className="text-center text-muted py-5">
          <span className="material-symbols-outlined" style={{ fontSize: "3rem", color: "#ccc" }}>favorite</span>
          <p className="mt-2">Your wishlist is empty.</p>
          <Link to="/" className="btn btn-success mt-2">Continue Shopping</Link>
        </div>
      ) : (
        <div className="table-responsive">
          <table className="table align-middle">
            <thead className="table-light">
              <tr>
                <th><input type="checkbox" /></th>
                <th colSpan={2}>Product</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Actions</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {wishList.map((item) => (
                <tr key={item.id}>
                  <td><input type="checkbox" /></td>
                  <td style={{ width: 70 }}>
                    <img src={item.images} alt={item.title} style={{ width: 55, height: 55, objectFit: "contain" }} />
                  </td>
                  <td>
                    <div className="fw-semibold">{item.title}</div>
                    <small className="text-muted">1kg</small>
                  </td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>
                    {item.price > 0 ? (
                      <span className="text-white bg-success font-sm rounded px-2 py-1 fw-bold" style={{ backgroundColor: "#198754" }}>
                        In Stock
                      </span>
                    ) : (
                      <span className="text-white px-3 py-2" style={{ backgroundColor: "#dc3545", borderRadius: "20px" }}>
                        Out of Stock
                      </span>
                    )}
                  </td>
                  <td>
                    {item.price > 0 ? (
                      <button
                        className="btn btn-success btn-sm px-3"
                        onClick={() => handleAddToCart(item)}
                      >
                        Add to cart
                      </button>
                    ) : (
                      <button className="btn btn-dark btn-sm px-3">Contact us</button>
                    )}
                  </td>
                  <td>
                    <button
                      className="border-0 bg-white text-muted p-0"
                      onClick={() => removeFromWishlist(item.id)}
                    >
                      <span className="material-symbols-outlined">delete</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}

export default WishList;