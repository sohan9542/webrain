import Image from "next/image";
import Link from "next/link";
import React from "react";

// // Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// // Import Swiper styles
import 'swiper/css/effect-cube';
import { MdOutlineArrowRightAlt } from "react-icons/md";

// // import './styles.css';

// // import required modules
import { EffectCube, Autoplay } from "swiper/modules";
const Hero = () => {
  return (
    <section className="w-full   relative min-h-screen    h-full flex items-center justify-center ">
      {/* <video
        // ref={videoRef}
        width="100%"
        autoPlay={true}
        muted={true}
        loop={true}
        height="920px"
        className="object-cover w-full h-screen "
      >
        <source
          src="https://res.cloudinary.com/dbv8pmgj4/video/upload/v1701107160/stp_lzqb0f.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video> */}

      <div className="relative z-40 top-0 left-0 min-h-screen w-full h-full   ">
        <div className=" w-[300px] absolute lg:w-[700px] top-[300px]  lg:top-20 right-10 lg:right-0 z-10">
          <Image
            width={400}
            alt=""
            height={400}
            className="  w-full "
            src={"/home/bg3.png"}
          />
        </div>

        <div className=" min-h-screen flex items-center justify-center  h-full mt-20  lg:mt-10 px-3 lg:px-[50px] ">
          <div className="w-full grid relative z-20 items-center h-full grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
            <div className="relative">
              <p className="text-white uppercase text-[18px]  pb-2">
                Transforming Your Ideas
              </p>
              <h1 className="text-white text-[40px] lg:text-[90px]    leading-[1.05] font-[800]">
                {" "}
                Into Powerful Web Solutions.
              </h1>
              <p className="text-tbt text-[28px] my-[10px] font-[200] text-white leading-[28px]">
              Web Applications, Websites, Products, APIs
              </p>

              <a
                href="https://calendly.com/d/5cz-73r-4nv"
                target="_blank"
                className="btn btn-primary py-md-3 mt-4 px-md-5 me-3 animated slideInLeft"
              >
                Contact Us
              </a>
              <Link
                href="/services"
                className="btn btn-outline-light py-md-3 mt-4 px-md-5 animated slideInRight"
              >
                Our Services
              </Link>

              <Image
                width={50}
                height={50}
                alt=""
                src="/home/mb.png"
                className="absolute  bottom-2 lg:hidden right-24  lg:w-auto duration-750 ease-in-out"
              />

              <Image
                width={100}
                height={100}
                alt=""
                src="/home/barrow.png"
                className="absolute top-0 lg:top-10 right-5 lg:right-0 w-[60px] lg:w-auto duration-750 ease-in-out animated-image"
              />
            </div>

            <div className=" w-full  lg:pr-[100px]">
            <Swiper
              effect={"cube"}
              grabCursor={true}
              loop={true}
              cubeEffect={{
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
              }}
              spaceBetween={0}
              speed={3000}
                   autoplay={{
                     delay: 2000,
                     disableOnInteraction: false,
                   }}
           
              modules={[EffectCube, Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <Image
                  width={2000}
                  height={2000}
                  alt=""
                  src="/img/home.jpg"
                  className="w-full h-[500px] lg:h-[500px] xl:h-[600px] object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={2000}
                  height={2000}
                  alt=""
                  src="/img/home1.jpg"
                  className="w-full h-[500px] lg:h-[500px] xl:h-[600px] object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={2000}
                  height={2000}
                  alt=""
                  src="/img/home2.svg"
                  className="w-full h-[500px] bg-white lg:h-[500px] xl:h-[600px] object-cover"
                />
              </SwiperSlide>
           
            </Swiper>
            </div>
       
          </div>
        </div>
      </div>
    </section>
  );
};

// const Cubes = ()=> {
//     return  <>

//   </>
// }

export default Hero;
