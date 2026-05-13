import React from 'react'
import { SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import { useEffect } from 'react';

function HeroSlider() {
  // Initialize Swiper after component mounts
  useEffect(() => {
    let swiper1 = new Swiper(".mySwiper1", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      modules: [Autoplay, Pagination, Navigation],
    });
  },[])

  return (
    <main>
      <div className="container pb-4">
        <div className="swiper mySwiper1 rounded-3 slick-slider hero-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img src="/main-container-images/hero-img-1.jpg" className="img-fluid w-100"/>
              <div className="slide-text px-8 py-lg-16 col-md-7 col-xxl-5 ps-1g-12 text-xs-center">
                <span className="custom-badge text-bg-warning rounded-pill">Opening Sale Discount 50%</span>
                <h2 className="fw-bold mt-3 text-dark display-5"> 
                  SuperMarket For
                  Fresh Grocery
                </h2>
                <p className="lead">
                  Introduced a new model for online grocery shopping and convenient home delivery.
                </p>
                <a href="#" role="button" className="mt-2 btn btn-dark">Shop Now <i className="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>
            <div className="swiper-slide">
              <img src="/main-container-images/hero-img-2.jpg" alt="Hero-img-2" className="img-fluid w-100"/>
              <div className="slide-text px-8 py-lg-16 col-md-7 col-xxl-5 ps-1g-12 text-xs-center">
                <span className="custom-badge text-bg-warning rounded-pill">Free Shipping - orders over $100</span>
                <h2 className="fw-bold mt-3 text-dark display-5">
                 Free Shipping on orders over <span className="text-green">$100</span>
                </h2>
                <p className="lead">
                  Introduced a new model for online grocery shopping and convenient home delivery.
                </p>
                <a href="#" role="button" className="mt-2 btn btn-dark">Shop Now <i className="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </main>
  )
}

export default HeroSlider
