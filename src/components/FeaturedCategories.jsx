import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import FeatureCategoryCard from "./FeatureCategoryCard.jsx";

function FeaturedCategories() {
  const swiperRef = useRef(null);
  const [category, setCategory] = useState([]);

  // useEffect(() => {

  //   fetch("https://fakestoreapi.com/products?limit=20")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const formatted = data.map((item) => ({
  //         image: item.image,
  //         title: item.title
  //       }));
  //       setCategories(formatted);
  //     });
  // }, []);

  // useEffect(() => {
  //   const API_ID = "fe6675aa";
  //   const API_KEY = "49ded5f5d7f52b5bcffcbba1fe358c2b";

  //   fetch(
  //     `https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=${API_ID}&app_key=${API_KEY}&from=0&to=20`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const formatted = data.hits.map((hit) => ({
  //         image: hit.recipe.image,
  //         title: hit.recipe.label,
  //       }));
  //       setCategories(formatted)
  //     });
  // }, []);

  // const options = {
  //   loop: true,
  //   margin: 15,
  //   smartSpeed: 600,
  //   autoplay: true,
  //   autoplayTimeout: 3000,
  //   autoplayHoverPause: false,
  //   responsive: {
  //     0: {
  //       items: 2,
  //     },
  //     820: {
  //       items: 4,
  //       slideBy: 4,
  //     },
  //     1400: {
  //       items: 6,
  //       slideBy: 2,
  //     },
  //   },
  //   nav: false,
  //   dots: false,
  // };
  // useEffect(() => {
  //     //scroll button behaviour
  //     // })
  //     //   $("#backBtn").on("click", function(){
  //     //      $(".product-list").animate({scrollLeft: "-=400"}, 500);
  //     // });
  //     //   $("#frontBtn").on("click", function(){
  //     //      $(".product-list").animate({scrollLeft: "+=400"}, 500);
  //     // });
  //   });

  //   $("#backBtn").click(function () {
  //     owl.trigger("prev.owl.carousel");
  //   });
  //   $("#frontBtn").click(function () {
  //     owl.trigger("next.owl.carousel");
  //   });
  // }, []);

  const categories = [
    { image: "/category-images/category-atta-rice-dal.jpg", title: "Atta, Rice & Dal" },
    { image: "/category-images/category-baby-care.jpg", title: "Baby Care" },
    { image: "/category-images/category-bakery-biscuits.jpg", title: "Bakery & Biscuits" },
    { image: "/category-images/category-chicken-meat-fish.jpg", title: "Chicken, Meat & Fish" },
    { image: "/category-images/category-cleaning-essentials.jpg", title: "Cleaning Essentials" },
    { image: "/category-images/category-cold-drinks-juices.jpg", title: "Cold Drinks & Juices" },
    { image: "/category-images/category-dairy-bread-eggs.jpg", title: "Dairy, Bread & Eggs" },
    { image: "/category-images/category-fruits-vegetables.jpg", title: "Fruits & Vegetables" },
    { image: "/category-images/category-instant-food.jpg", title: "Instant Food" },
    { image: "/category-images/category-pet-care.jpg", title: "Pet Care" },
    { image: "/category-images/category-snack-munchies.jpg", title: "Snack & Munchies" },
    { image: "/category-images/category-tea-coffee-drinks.jpg", title: "Tea, Coffee & Drinks" }
  ];

  return (
    <div className="feature-category container mb-lg-10 my-4 mt-lg-4">
      <div className="feature-text d-flex align-items-center justify-content-between">
        <h2>Featured Categories</h2>
        <div className="icons">
          <button
            className="fa-solid fa-angle-left next-btn"
            id="backBtn"
            onClick={() => swiperRef.current?.slidePrev()}
          ></button>
          <button
            className="fa-solid fa-angle-right next-btn"
            id="frontBtn"
            onClick={() => swiperRef.current?.slideNext()}
          ></button>
        </div>
      </div>

      <div className="product-list d-flex flex-row overflow-auto owl-carousel">
        <Swiper
          // ref={carouselRef}
          // options={options}
          // className="owl-theme"
          modules={[Autoplay, Navigation]}
          spaceBetween={15}
          slidesPerView={6}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          speed={1000}
          breakpoints={{
            0: { slidesPerView: 2, slidesPerGroup: 1 },
            820: { slidesPerView: 4, slidesPerGroup: 4 },
            1300: { slidesPerView: 6, slidesPerGroup: 2 },
            1400: { slidesPerView: 6, slidesPerGroup: 2 },
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {categories.map((category, index) => (
            <SwiperSlide key={index}>
              <FeatureCategoryCard
                image={category.image}
                title={category.title}
              />
            </SwiperSlide>
          ))}
          {/* {Array.from({length: 12}).map((_, index) => (
            
          ))} */}
        </Swiper>
        {/* <FeatureCategoryCard />
        <FeatureCategoryCard />
        <FeatureCategoryCard />
        <FeatureCategoryCard />
        <FeatureCategoryCard />
        <FeatureCategoryCard />
        <FeatureCategoryCard />
        <FeatureCategoryCard />
        <FeatureCategoryCard />
        <FeatureCategoryCard />
        <FeatureCategoryCard />
        <FeatureCategoryCard /> */}
      </div>
    </div>
  );
}

export default FeaturedCategories;
