import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
 
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./Testimonial.css";

// import required modules
import { Pagination } from "swiper";
import TestimonialCardItem from "./TestimonialCardItem";

export default function App() {
  return (
    <>
    <div className="testi">
    <h1><span className='hotel-text'>Roswell</span> Hotel Testimonials</h1>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><TestimonialCardItem 
            image="images/p1.jpg"
            name="Mark Cabael"
            title="Software Engineer"
            rate="The hotel is so beautiful"
          /> </SwiperSlide>

        <SwiperSlide><TestimonialCardItem 
            image="images/p2.jpg"
            name="Rhiane Peralta"
            title="Manager"
            rate="I love the ambiance of hotel"
          /> </SwiperSlide>


        <SwiperSlide><TestimonialCardItem 
            image="images/p3.jpg"
            name="Rachel Jane"
            title="Teacher"
            rate="Better Hotel than other"
          /> </SwiperSlide>


        <SwiperSlide><TestimonialCardItem 
            image="images/p4.jpg"
            name="Prince Balbin"
            title="Programmer"
            rate="Enjoy and relaxing hotel"
          /> </SwiperSlide>

        <SwiperSlide><TestimonialCardItem 
            image="images/p5.jpg"
            name="Ariane Balbin"
            title="Architect"
            rate="Staffs are handled us politely"
          /> </SwiperSlide>
       
     
      </Swiper>
      </div>
    </>
  );
}
