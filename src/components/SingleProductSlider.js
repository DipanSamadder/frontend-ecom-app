import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import SingleProductZoom from "./SingleProductZoom";

export default function SingleProductSlider() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
        modules={[FreeMode, Navigation, Thumbs]}
        className="bigSingleImage"
      >
        <SwiperSlide>
          <SingleProductZoom src="/images/product-2.webp" alt="nature-1" />
        </SwiperSlide>
        <SwiperSlide>
          <SingleProductZoom src="/images/product-2.webp" alt="nature-1" />
        </SwiperSlide>
        <SwiperSlide>
          <SingleProductZoom src="/images/product-3.webp" alt="nature-1" />
        </SwiperSlide>
        <SwiperSlide>
          <SingleProductZoom src="/images/product-4.webp" alt="nature-1" />
        </SwiperSlide>
        <SwiperSlide>
          <SingleProductZoom src="/images/product-5.webp" alt="nature-1" />
        </SwiperSlide>
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="smallProductImages"
      >
        <SwiperSlide>
          <img src="/images/product-1.webp" alt="nature-1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/product-2.webp" alt="nature-1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/product-3.webp" alt="nature-1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/product-4.webp" alt="nature-1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/product-5.webp" alt="nature-1" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
