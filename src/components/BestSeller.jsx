import React from "react";
import BestSellerCard from "./BestSellerCard";

const products = [
  {
    id: 101,
    images: "/main-container-images/product-img-11.jpg",
    category: "Tea, Coffee & Drinks",
    title: "Roast Ground Coffee",
    price: 13.5,
    originalPrice: 18,
    rating: 4.3,
    ratingCount: 4,
    dealEnds: new Date(Date.now() + 888 * 24 * 60 * 60 * 1000), // 888 days from now
  },
  {
    id: 102,
    images: "/main-container-images/product-img-11.jpg",
    category: "Fruits & Vegetables",
    title: "Crushed Tomatoes",
    price: 13.5,
    originalPrice: 18,
    rating: 4.3,
    ratingCount: 4,
    dealEnds: new Date(Date.now() + 888 * 24 * 60 * 60 * 1000),
  },
  {
    id: 103,
    images: "/main-container-images/product-img-11.jpg",
    category: "Fruits & Vegetables",
    title: "Golden Pineapple",
    price: 14.4,
    originalPrice: 18,
    rating: 4.3,
    ratingCount: 4,
    dealEnds: new Date(Date.now() + 888 * 24 * 60 * 60 * 1000),
  },
];

function BestSeller() {
  return (
    <section className="container best-seller container">
      <div className="row">
        <h3 className="mb-6 col-md-12">Daily Best Sells</h3>
      </div>
      <div className="g-4 row flex-nowrap row-cols-lg-4 row-cols-md-2 row-cols-1 responsive">
        <div className="col">
          <div className="pt-8 px-1 rounded px-xl-8 banner-deals ">
            <div className="p-4">
              <h3 className="fw-bold text-white">100% Organic Coffee Beans.</h3>
              <p className="text-white">Get the best deal before close.</p>
              <a href="#" className="btn btn-primary">
                Shop Now <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
        
        {products.map((product) => (
          <BestSellerCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
}

export default BestSeller;
