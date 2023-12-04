import React,{useState} from "react";
import { EffectCreative, Autoplay } from 'swiper/modules';
import 'swiper/css/effect-creative';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image";
const About = () => {

  const [hoverActive, setHoverActive] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  const handleMouseLeave = () => {
    if (clicked) {
      setClicked(false);
    }
  };
 <button
            onMouseOver={() => setHoverActive(true)}
            onMouseOut={() => setHoverActive(false)}
            onMouseDown={handleClick}
            onMouseUp={handleMouseLeave}
            className={`flex justify-center w-full lg:w-auto wtkwu uppercase items-center gap-2 px-[24px] py-[12px]   border ${clicked ? 'text-[#FCFAF2] bg-[#0B2217] border-[#0B2217]': 'text-[#193E2C] border-[#193E2C] hover:bg-[#193E2C] hover:text-white'}`}
          >
            Want to know why us?
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M13.477 9.16658L9.00698 4.69657L10.1855 3.51807L16.6673 9.99992L10.1855 16.4817L9.00698 15.3032L13.477 10.8332H3.33398V9.16658H13.477Z"
                fill={hoverActive ? "#fff" : "#193E2C"}
              />
            </svg>
          </button>
  return (
    <div className="w-full  min-h-screen flex flex-col items-center justify-center" >
      <div className="grid container grid-cols-1 lg:grid-cols-12 gap-5">
        <div className="lg:col-span-5" style={{ minHeight: "500px" }}>
        <Swiper
             effect={'creative'}
            //  creativeEffect={{
            //    prev: {
            //      shadow: true,
            //      translate: [0, 0, -800],
            //      rotate: [180, 0, 0],
            //    },
            //    next: {
            //      shadow: true,
            //      translate: [0, 0, -800],
            //      rotate: [-180, 0, 0],
            //    },
            //  }}
            creativeEffect={{
                prev: {
                  shadow: true,
                  translate: ['-125%', 0, -800],
                  rotate: [0, 0, -90],
                },
                next: {
                  shadow: true,
                  translate: ['125%', 0, -800],
                  rotate: [0, 0, 90],
                },
              }}
              speed={2000}
                   autoplay={{
                     delay: 2000,
                     disableOnInteraction: false,
                   }}
           loop={true}
              modules={[EffectCreative, Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <Image
                  width={1000}
                  height={1000}
                  alt=""
                  src="/img/h2.jpg"
                  className="w-full h-[550px] object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={1000}
                  height={1000}
                  alt=""
                  src="/img/h1.jpg"
                  className="w-full h-[550px] object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={1000}
                  height={1000}
                  alt=""
                  src="/img/h3.jpg"
                  className="w-full h-[550px] object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={1000}
                  height={1000}
                  alt=""
                  src="/img/h2.jpg"
                  className="w-full h-[550px] object-cover"
                />
              </SwiperSlide>
            </Swiper>
        </div>
        <div className="lg:col-span-7">
          <div className="position-relative pb-3 ">
            <h5 className="fw-bold text-pr text-uppercase">About WEBRAIN</h5>
            <h1 className="mb-0 text-[32px] lg:text-[56px]">
              The Best Web Development Agency for Startups.
            </h1>
          </div>
          <p className="mb-4">
          Welcome to WeBrain, where innovation meets excellence in web development tailored specifically for startups. At WeBrain, we understand the pivotal role that a robust online presence plays in shaping the success trajectory of burgeoning businesses.
          </p>
          <div className="row g-0 mb-3">
            <div className="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
              <h5 className="mb-3">
                <i className="fa fa-check text-pr me-3"></i>Planning and
                Proposal
              </h5>
              <h5 className="mb-3">
                <i className="fa fa-check text-primary me-3"></i>Design and Wireframing
              </h5>
              <h5 className="mb-3">
                <i className="fa fa-check text-primary me-3"></i>Development & Testing
              </h5>
            </div>
            <div className="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
              <h5 className="mb-3">
                <i className="fa fa-check text-primary me-3"></i>Client Involvement
              </h5>
              <h5 className="mb-3">
                <i className="fa fa-check text-primary me-3"></i>Deployment and Launch
              </h5>
              <h5 className="mb-3">
                <i className="fa fa-check text-primary me-3"></i>Support and Maintenance
              </h5>
            </div>
          </div>
          {/* <div
            className="d-flex align-items-center mb-4 wow fadeIn"
            data-wow-delay="0.6s"
          >
            <div
              className="bg-pr d-flex align-items-center justify-content-center rounded"
              style={{ width: "60px", height: "60px" }}
            >
              <i className="fa fa-phone-alt text-white"></i>
            </div>
            <div className="ps-4">
              <h5 className="mb-2">Call to ask any question</h5>
              <h4 className="text-primary mb-0">+012 345 6789</h4>
            </div>
          </div> */}
     
  
 <button
            onMouseOver={() => setHoverActive(true)}
            onMouseOut={() => setHoverActive(false)}
            onMouseDown={handleClick}
            onMouseUp={handleMouseLeave}
            className={`flex justify-center w-full lg:w-auto wtkwu uppercase items-center gap-2 px-[24px] py-[12px]    ${clicked ? 'text-[#FCFAF2] bg-[#0B2217] border-[#0B2217] ': 'text-[#193E2C] border-[#193E2C] border-[1px] hover:bg-[#193E2C] hover:text-white'}`}
          >
            Schedule A Meeting
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M13.477 9.16658L9.00698 4.69657L10.1855 3.51807L16.6673 9.99992L10.1855 16.4817L9.00698 15.3032L13.477 10.8332H3.33398V9.16658H13.477Z"
                fill={hoverActive ? "#fff" : "#193E2C"}
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
