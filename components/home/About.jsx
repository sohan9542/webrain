import React, { useState } from "react";
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
    className={`flex justify-center w-full lg:w-auto wtkwu uppercase items-center gap-2 px-[24px] py-[12px]   border ${clicked ? 'text-[#FCFAF2] bg-[#0B2217] border-[#0B2217]' : 'text-[#193E2C] border-[#193E2C] hover:bg-[#193E2C] hover:text-white'}`}
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
      <div className="grid px-3 lg:container items-center grid-cols-1 lg:grid-cols-12 gap-5">
        <div className=" hidden lg:block lg:col-span-5" style={{ minHeight: "500px" }}>
          <Image
            width={1000}
            height={1000}
            alt=""
            src="/img/about.svg"
            className="w-full h-[550px] transform scale-110"
          />
          {/* <Swiper
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
            </Swiper> */}
        </div>
        <div className="lg:col-span-7 mt-40 lg:mt-0">
          <div className="position-relative pb-3 ">
            <h5 className="fw-bold text-pr text-uppercase">About WEBRAIN</h5>
            <h1 className="mb-0 text-[32px] text-white lg:text-[56px]">
            Achieve your business goals with web development solutions
            </h1>
          </div>
          <p className="mb-4 text-white">
          At WeBrain, we don't just help startups; we also enhance existing websites by fixing bugs and making improvements. Whether you're just starting out or already have a website, we're here to make it better and smoother for you.
          </p>
          <div className="row g-0 mb-3">
            <div className="col-sm-6 ">
              <h5 className="mb-3 text-white">
                <i className="fa fa-check text-pr me-3"></i>Planning and
                Proposal
              </h5>
              <h5 className="mb-3 text-white">
                <i className="fa fa-check text-primary me-3"></i>Design and Wireframing
              </h5>
              <h5 className="mb-3 text-white">
                <i className="fa fa-check text-primary me-3"></i>Development & Testing
              </h5>
            </div>
            <div className="col-sm-6 " >
              <h5 className="mb-3 text-white">
                <i className="fa fa-check text-primary me-3"></i>Client Involvement
              </h5>
              <h5 className="mb-3 text-white">
                <i className="fa fa-check text-primary me-3"></i>Deployment and Launch
              </h5>
              <h5 className="mb-3 text-white">
                <i className="fa fa-check text-primary me-3"></i>Support and Maintenance
              </h5>
            </div>
          </div>
     


       <div className="flex ">
       <a href="https://calendly.com/d/5cz-73r-4nv"
            target="_blank"
            onMouseOver={() => setHoverActive(true)}
            onMouseOut={() => setHoverActive(false)}

            className={`flex justify-center w-full lg:w-auto wtkwu uppercase items-center gap-2 px-[24px] py-[12px]    ${clicked ? 'text-[#FCFAF2] bg-[#0B2217] border-[#0B2217] ' : 'text-white border-white border-[1px] hover:bg-[#193E2C] hover:text-white'}`}
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
                fill={hoverActive ? "#fff" : "#fff"}
              />
            </svg>
          </a>
       </div>
        </div>
        <div className="  lg:hidden lg:col-span-5 " >
          <Image
            width={1000}
            height={1000}
            alt=""
            src="/img/about.svg"
            className="w-full  transform scale-110"
          />
          {/* <Swiper
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
            </Swiper> */}
        </div>
      </div>
    </div>
  );
};

export default About;
