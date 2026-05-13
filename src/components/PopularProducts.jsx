import React from "react";
import PopularProductCard from "./PopularProductCard";
import { products } from "../data/products";

function PopularProducts() {
  // const products = [
  //   {
  //     id: 1,
  //     images: "/main-container-images/product-img-1.jpg",
  //     category: "Snack & Munchies",
  //     title: "Haldiram's Sev Bhujia",
  //     rating: 4.3,
  //     ratingCount: 4,
  //     price: 21.6,
  //     originalPrice: 24,
  //     discountTag: "10%",
  //     tagType: "Sale", // you can use this for styling red-green badges
  //   },
  //   {
  //     id: 2,
  //     images: "/main-container-images/product-img-2.jpg",
  //     category: "Bakery & Biscuits",
  //     title: "NutriChoice Digestive",
  //     rating: 4.3,
  //     ratingCount: 4,
  //     price: 24,
  //     originalPrice: 24,
  //     discountTag: null,
  //   },
  //   {
  //     id: 3,
  //     images: "/main-container-images/product-img-3.jpg",
  //     category: "Bakery & Biscuits",
  //     title: "Cadbury 5 Star Chocolate",
  //     rating: 4.3,
  //     ratingCount: 4,
  //     price: 35,
  //     originalPrice: 35,
  //     discountTag: null,
  //     tagType: "Buy 1 Get $4.00 Off",
  //   },
  //   {
  //     id: 4,
  //     images: "/main-container-images/product-img-4.jpg",
  //     category: "Snack & Munchies",
  //     title: "Onion Flavour Potato",
  //     rating: 4.3,
  //     ratingCount: 4,
  //     price: 3,
  //     originalPrice: 5,
  //     discountTag: "40%",
  //     tagType: "Hot",
  //   },
  //   {
  //     id: 5,
  //     images: "/main-container-images/product-img-5.jpg",
  //     category: "Instant Food",
  //     title: "Salted Instant Popcorn",
  //     rating: 4.3,
  //     ratingCount: 4,
  //     price: 11.7,
  //     originalPrice: 18,
  //     discountTag: "35%",
  //     tagType: null,
  //   },
  //   {
  //     id: 6,
  //     images: "/main-container-images/product-img-3.jpg",
  //     category: "Bakery & Biscuits",
  //     title: "Cadbury 5 Star Chocolate",
  //     rating: 4.3,
  //     ratingCount: 4,
  //     price: 35,
  //     originalPrice: 35,
  //     discountTag: null,
  //     tagType: "Buy 1 Get $4.00 Off",
  //   },
  //   {
  //     id: 7,
  //     images: "/main-container-images/product-img-1.jpg",
  //     category: "Snack & Munchies",
  //     title: "Haldiram's Sev Bhujia",
  //     rating: 4.3,
  //     ratingCount: 4,
  //     price: 21.6,
  //     originalPrice: 24,
  //     discountTag: "10%",
  //     tagType: "Sale",
  //   },
  //   {
  //     id: 8,
  //     images: "/main-container-images/product-img-6.jpg",
  //     category: "Dairy, Bread & Eggs",
  //     title: "Blueberry Greek Yogurt",
  //     rating: 4.3,
  //     ratingCount: 4,
  //     price: 14.4,
  //     originalPrice: 24,
  //     discountTag: "40%",
  //     tagType: null,
  //   },
  //   {
  //     id: 9,
  //     images: "/main-container-images/product-img-7.jpg",
  //     category: "Dairy, Bread & Eggs",
  //     title: "Britannia Cheese Slices",
  //     rating: 4.3,
  //     ratingCount: 4,
  //     price: 24,
  //     originalPrice: 24,
  //     discountTag: null,
  //   },
  //   {
  //     id: 10,
  //     images: "/main-container-images/product-img-8.jpg",
  //     category: "Instant Food",
  //     title: "Kellogg's Original Cereals",
  //     rating: 4.3,
  //     ratingCount: 4,
  //     price: 29.75,
  //     originalPrice: 35,
  //     discountTag: "15%",
  //     tagType: null,
  //   },
  //   {
  //     id: 11,
  //     images: "/main-container-images/product-img-1.jpg",
  //     category: "Bakery & Biscuits",
  //     title: "NutriChoice Digestive",
  //     rating: 4.3,
  //     ratingCount: 4,
  //     price: 24,
  //     originalPrice: 24,
  //     discountTag: null,
  //   },
  //   {
  //     id: 12,
  //     images: "/main-container-images/product-img-9.jpg",
  //     category: "Snack & Munchies",
  //     title: "Slurrp Millet Chocolate",
  //     rating: 4.3,
  //     ratingCount: 4,
  //     price: 0,
  //     originalPrice: 0,
  //     discountTag: null,
  //   },
  //   {
  //     id: 13,
  //     images: "/main-container-images/product-img-7.jpg",
  //     category: "Dairy, Bread & Eggs",
  //     title: "Amul Butter - 500 g",
  //     rating: 4.3,
  //     ratingCount: 4,
  //     price: 13.5,
  //     originalPrice: 18,
  //     discountTag: "25%",
  //     tagType: null,
  //   },
  //   {
  //     id: 14,
  //     images: "/main-container-images/product-img-2.jpg",
  //     category: "Bakery & Biscuits",
  //     title: "NutriChoice Digestive",
  //     rating: 4.3,
  //     ratingCount: 4,
  //     price: 24,
  //     originalPrice: 24,
  //     discountTag: null,
  //   },
  //   {
  //     id: 15,
  //     images: "/main-container-images/product-img-9.jpg",
  //     category: "Snack & Munchies",
  //     title: "Slurrp Millet Chocolate",
  //     rating: 4.3,
  //     ratingCount: 4,
  //     price: 0,
  //     originalPrice: 0,
  //     discountTag: null,
  //   },
  // ];

  return (
    <section className="popular-product my-5 container">
      <div className="mb-4 col-12">
        <h3 className="mb-0">Popular Products</h3>
      </div>
      <div className="g-3 row row-cols-lg-5 row-cols-md-3 row-cols-2">
        {products.map((product, index) => (
          <PopularProductCard
            key={index}
            // id={product.id}
            // images={product.images}
            // category={product.category}
            // title={product.title}
            // rating={product.rating}
            // ratingCount={product.ratingCount}
            // price={product.price}
            // originalPrice={product.originalPrice}
            // discountTag={product.discountTag}
            // tagType={product.tagType}

            {...product}
          />
        ))}
      </div>
    </section>
  );
}

export default PopularProducts;
