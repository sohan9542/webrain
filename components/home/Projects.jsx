import Image from "next/image";
import React, { useState } from "react";
// import Swiper from "swiper";
import "swiper/css/effect-creative";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, EffectCreative, Navigation } from "swiper/modules";
import "swiper/css/navigation";
const Explore = () => {
  const [hover1, sethover1] = useState(100);

  return (
    <div className="px-[16px] lg:px-[40px] pb-[24px]  lg:py-[80px]">
      <div className="flex items-center justify-center w-full lg:pl-[50px]  lg:gap-[40px]">
        <div className="relative  ">
          <h1 className="font-[300] leading-[32px] lg:leading-[64px] relative z-20 onest text-txt text-[32px] lg:text-[56px]">
            Explore Recent Projects.
          </h1>
          <div className="-top-4 lg:-top-1 absolute right-3 lg:-right-8 z-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
            >
              <path
                d="M9.8152 0L56 9.81796L46.1847 56L0 46.182L9.8152 0Z"
                fill="#E5EBDD"
              />
            </svg>
          </div>
        </div>
      </div>

      <Swiper
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -800],
            rotate: [180, 0, 0],
          },
          next: {
            shadow: true,
            translate: [0, 0, -800],
            rotate: [-180, 0, 0],
          },
        }}
        loop={true}
        speed={1000}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        navigation={true}
        modules={[Autoplay, EffectCreative, Navigation]}
        className="mySwiper"
      >
        {[1, 2, 3, 4, 5].map((item, ind) => (
          <SwiperSlide>
            <div
              className={`pt-[16px] px-[80px] lg:pt-[40px] grid grid-cols-1 ${
                hover1 === ind && "n_parent"
              } lg:grid-cols-2`}
            >
              <div className="w-full overflow-hidden  h-full">
                <Image
                  alt="logo"
                  src={"/img/carousel-1.jpg"}
                  width={1000}
                  height={700}
                  className="w-full object-cover n_img h-[250px] lg:h-[600px]"
                />
              </div>
              <div
                onMouseOver={() => sethover1(ind)}
                onMouseOut={() => sethover1(100)}
                className="bg-[#193E2C] overflow-hidden flex flex-col relative h-full w-full justify-between p-[16px] lg:p-[40px]"
              >
                <div>
                  <h1 className="text-[32px] leading-[32px]  lg:text-[40px] text-[#FCFAF2] onest font-[500] lg:leading-[48px]">
                    Global Startup Program
                  </h1>
                  <div className="mt-[16px] flex flex-wrap  items-center gap-x-[16px] gap-y-[8px] lg:gap-[16px]">
                    <div className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M18.364 17.364L12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364ZM12 15C14.2091 15 16 13.2091 16 11C16 8.79086 14.2091 7 12 7C9.79086 7 8 8.79086 8 11C8 13.2091 9.79086 15 12 15ZM12 13C10.8954 13 10 12.1046 10 11C10 9.89543 10.8954 9 12 9C13.1046 9 14 9.89543 14 11C14 12.1046 13.1046 13 12 13Z"
                          fill="#FCFAF2"
                        />
                      </svg>
                      <p className="text-[#FCFAF2] text-[16px] font-[400] leading-[24px]">
                        USA - Europe
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M6 4H4V2H20V4H18V6C18 7.61543 17.1838 8.91468 16.1561 9.97667C15.4532 10.703 14.598 11.372 13.7309 12C14.598 12.628 15.4532 13.297 16.1561 14.0233C17.1838 15.0853 18 16.3846 18 18V20H20V22H4V20H6V18C6 16.3846 6.81616 15.0853 7.8439 14.0233C8.54682 13.297 9.40202 12.628 10.2691 12C9.40202 11.372 8.54682 10.703 7.8439 9.97667C6.81616 8.91468 6 7.61543 6 6V4ZM8 4V6C8 6.68514 8.26026 7.33499 8.77131 8H15.2287C15.7397 7.33499 16 6.68514 16 6V4H8ZM12 13.2219C10.9548 13.9602 10.008 14.663 9.2811 15.4142C9.09008 15.6116 8.92007 15.8064 8.77131 16H15.2287C15.0799 15.8064 14.9099 15.6116 14.7189 15.4142C13.992 14.663 13.0452 13.9602 12 13.2219Z"
                          fill="#FCFAF2"
                        />
                      </svg>
                      <p className="text-[#FCFAF2] text-[16px] font-[400] leading-[24px]">
                        1 year
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13Z"
                          fill="#FCFAF2"
                        />
                      </svg>
                      <p className="text-[#FCFAF2] text-[16px] font-[400] leading-[24px]">
                        15 Students
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full hidden lg:block  tbt pt-[40px] lg:pt-0 ">
                  <div className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12.0008 17L6.12295 20.5902L7.72105 13.8906L2.49023 9.40983L9.35577 8.85942L12.0008 2.5L14.6458 8.85942L21.5114 9.40983L16.2806 13.8906L17.8787 20.5902L12.0008 17Z"
                        fill="#FCFAF2"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12.0008 17L6.12295 20.5902L7.72105 13.8906L2.49023 9.40983L9.35577 8.85942L12.0008 2.5L14.6458 8.85942L21.5114 9.40983L16.2806 13.8906L17.8787 20.5902L12.0008 17Z"
                        fill="#FCFAF2"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12.0008 17L6.12295 20.5902L7.72105 13.8906L2.49023 9.40983L9.35577 8.85942L12.0008 2.5L14.6458 8.85942L21.5114 9.40983L16.2806 13.8906L17.8787 20.5902L12.0008 17Z"
                        fill="#FCFAF2"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12.0008 17L6.12295 20.5902L7.72105 13.8906L2.49023 9.40983L9.35577 8.85942L12.0008 2.5L14.6458 8.85942L21.5114 9.40983L16.2806 13.8906L17.8787 20.5902L12.0008 17Z"
                        fill="#FCFAF2"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12.0008 14.6564L14.8175 16.3769L14.0517 13.1664L16.5583 11.0192L13.2683 10.7554L12.0008 7.70792V14.6564ZM12.0008 17L6.12295 20.5902L7.72105 13.8906L2.49023 9.40983L9.35577 8.85942L12.0008 2.5L14.6458 8.85942L21.5114 9.40983L16.2806 13.8906L17.8787 20.5902L12.0008 17Z"
                        fill="#FCFAF2"
                      />
                    </svg>
                  </div>
                  <p className="text-[24px] leading-[32px] pb-[16px] lg:pb-[110px] text-[#FCFAF2] pt-[8px]">
                    Rated by the 15 students joining our program
                  </p>
                  <p className="text-[18px] lg:hidden leading-[24px] lg:text-[24px]  text-[#FCFAF2] pt-[8px]">
                    Study in the US at Georgetown University and in Europe at
                    the University of Genoa. Earn a prestigious European
                    Master's degree.
                  </p>
                </div>
                <div className="w-full block lg:hidden   pt-[40px] lg:pt-0 ">
                  <div className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12.0008 17L6.12295 20.5902L7.72105 13.8906L2.49023 9.40983L9.35577 8.85942L12.0008 2.5L14.6458 8.85942L21.5114 9.40983L16.2806 13.8906L17.8787 20.5902L12.0008 17Z"
                        fill="#FCFAF2"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12.0008 17L6.12295 20.5902L7.72105 13.8906L2.49023 9.40983L9.35577 8.85942L12.0008 2.5L14.6458 8.85942L21.5114 9.40983L16.2806 13.8906L17.8787 20.5902L12.0008 17Z"
                        fill="#FCFAF2"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12.0008 17L6.12295 20.5902L7.72105 13.8906L2.49023 9.40983L9.35577 8.85942L12.0008 2.5L14.6458 8.85942L21.5114 9.40983L16.2806 13.8906L17.8787 20.5902L12.0008 17Z"
                        fill="#FCFAF2"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12.0008 17L6.12295 20.5902L7.72105 13.8906L2.49023 9.40983L9.35577 8.85942L12.0008 2.5L14.6458 8.85942L21.5114 9.40983L16.2806 13.8906L17.8787 20.5902L12.0008 17Z"
                        fill="#FCFAF2"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12.0008 14.6564L14.8175 16.3769L14.0517 13.1664L16.5583 11.0192L13.2683 10.7554L12.0008 7.70792V14.6564ZM12.0008 17L6.12295 20.5902L7.72105 13.8906L2.49023 9.40983L9.35577 8.85942L12.0008 2.5L14.6458 8.85942L21.5114 9.40983L16.2806 13.8906L17.8787 20.5902L12.0008 17Z"
                        fill="#FCFAF2"
                      />
                    </svg>
                  </div>
                  <p className="text-[24px] leading-[32px] pb-[16px] lg:pb-[110px] text-[#FCFAF2] pt-[8px]">
                    Rated by the 15 students joining our program
                  </p>
                  <p className="text-[18px] lg:hidden leading-[24px] lg:text-[24px]  text-[#FCFAF2] pt-[8px]">
                    Study in the US at Georgetown University and in Europe at
                    the University of Genoa. Earn a prestigious European
                    Master's degree.
                  </p>
                </div>
                <div className="-bottom-[700px] hidden lg:block main_d rotate-2 -left-8  w-[1600px] opacity-[0.06] h-full absolute z-10  bg-[#FCFAF2]"></div>
                <div className="absolute open_d hidden lg:block -bottom-[220px] h-full z-20 left-0 w-full">
                  <p className="text-[18px] lg:text-[24px] px-[40px] text-[#FCFAF2]   pt-[40px]">
                    Embark on a transformative journey with our "Global Startup
                    Odyssey" program. Spend a semester in the dynamic ecosystem
                    of the United States at Georgetown University and another
                    semester in the heart of entrepreneurial Europe at the
                    University of Genoa. Upon completion, you'll graduate with a
                    prestigious European Master's degree.
                  </p>
                </div>
                <div className="w-full flex mt-[40px] lg:mt-0 relative lg:absolute lg:p-[40px] bottom-0 left-0 z-20 items-center justify-end">
                  <button
                    className={`text-[#FCFAF2] wtkwu uppercase hover:bg-[#54b825] bg-[#43AA13] border-[#43AA13]  text-[16px] flex items-center justify-center gap-2 w-full lg:w-auto lg:px-[64px] py-[12px]`}
                  >
                    Live Preview
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M16.0032 9.41421L7.39663 18.0208L5.98242 16.6066L14.589 8H7.00324V6H18.0032V17H16.0032V9.41421Z"
                        fill="#FCFAF2"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Explore;
