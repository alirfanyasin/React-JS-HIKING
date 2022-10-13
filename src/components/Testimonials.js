// import Swiper core and required modules
import { Navigation, Pagination, Autoplay, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Image
import avatar1 from "../assets/image/avatar-1.png";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';


const Testimonials = () => {
  return (
    <div id="testimonials-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col text-center">
            <p>Happy Hikers</p>
            <h2 className="fw-semibold">Client's Say About Us</h2>
          </div>
        </div>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Autoplay, A11y]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          // navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide className="d-flex justify-content-center">
            <div className="card slider-card p-5 shadow border-0">
              <div className="row">
                <div className="col text-center">
                  <img src={avatar1} alt="avatar" className="mb-4" />
                  <h5 className="fw-semibold">Omar Gause</h5>
                  <p className="text-danger">Happy Client</p>

                  <p className="fw-light">“Everyone working in the office is very knowledgeable about all types of dental work and options for your individual needs.”</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="d-flex justify-content-center">
            <div className="card slider-card p-5 shadow border-0">
              <div className="row">
                <div className="col text-center">
                  <img src={avatar1} alt="avatar" className="mb-4" />
                  <h5 className="fw-semibold">Omar Gause</h5>
                  <p className="text-danger">Happy Client</p>

                  <p className="fw-light">“Everyone working in the office is very knowledgeable about all types of dental work and options for your individual needs.”</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="d-flex justify-content-center">
            <div className="card slider-card p-5 shadow border-0">
              <div className="row">
                <div className="col text-center">
                  <img src={avatar1} alt="avatar" className="mb-4" />
                  <h5 className="fw-semibold">Omar Gause</h5>
                  <p className="text-danger">Happy Client</p>

                  <p className="fw-light">“Everyone working in the office is very knowledgeable about all types of dental work and options for your individual needs.”</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="d-flex justify-content-center">
            <div className="card slider-card p-5 shadow border-0">
              <div className="row">
                <div className="col text-center">
                  <img src={avatar1} alt="avatar" className="mb-4" />
                  <h5 className="fw-semibold">Omar Gause</h5>
                  <p className="text-danger">Happy Client</p>

                  <p className="fw-light">“Everyone working in the office is very knowledgeable about all types of dental work and options for your individual needs.”</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;