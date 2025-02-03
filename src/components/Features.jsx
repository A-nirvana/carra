import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation } from "swiper";
const MyNextButton = ({ swiper }) => {
  return (
    <button onClick={() => swiper.slideNext()}>
      {/* Your custom next button content here */}
      <i className="fas fa-chevron-right"></i>
    </button>
  );
};

const data = ["one", "two", "three","four","five"]
 const Features = () => {
  return (
    <section className="h-screen w-screen bg-[#002D2D] flex justify-center  ">
      <div className="">
        <p className="font-semibold text-6xl lora text-white pt-7">OUR <span className="margarine text-[#848426]">FEATURED</span> VEHICLES</p>
        <div className="flex mt-28 rotate-180">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            loop 
            navigation
            modules={[ Navigation]}
            className="mySwiper max-w-[80vw] flex justify-center"
          >
            {data.map((item, index) => (
            <SwiperSlide className=" rounded-3xl bg-slate-500 max-w-96">
              <div className="rotate-180">
              <div>
                <img className="p-2 w-[402px] h-[294px] rounded-3xl" src='/assests/features.png' />
              </div>
              <div className="pt-3 pb-14 pl-6">
                <p className="text-5xl playfair ">Heading</p>
                <p>Rs.318/hr</p>
                <p>Manual,petrol,5 seats</p>
              </div>
              </div>
            </SwiperSlide>))}
            {/* {data.map((item, index) => (
              <Card />
            ))} */}
          </Swiper>
        </div>
      </div>


    </section>
  )
}


const Card = () => {
  return (
    <SwiperSlide className=" rounded-3xl bg-slate-500 w-96">
      <div>

        <img className="p-2 w-[402px] h-[294px] rounded-3xl" src='/assests/features.png' />
      </div>
      <div className="pt-3 pb-14 pl-6">
        <p className="text-5xl playfair ">Heading</p>
        <p>Rs.318/hr</p>
        <p>Manual,petrol,5 seats</p>
      </div>
    </SwiperSlide>
  )
}




export default Features
