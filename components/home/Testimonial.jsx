import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import 'swiper/css/effect-coverflow';
import { get__reviews } from "@/sanity/api";
const Testimonials = () => {
  const [active, setActive] = useState(100);

  const [reviews, setReviews] = useState([])
  useEffect(() => {
    async function get__new__reviesw() {
      const reiveew = await get__reviews();
      setReviews(reiveew);
    }
    get__new__reviesw();
  }, []);
  return (
    <div className="px-3 lg:container mx-auto ">
      <div className="flex flex-col mt-20 lg:flex-row lg:items-end  lg:pl-[50px]  lg:gap-[40px]">
        <div className="relative ">
          <h1 className="font-[300] leading-[32px] text-white lg:leading-[64px] relative z-20 onest text-txt text-[32px] lg:text-[56px]">
            What Clients Say <br /> About Our Service
          </h1>
          <div className="-top-6 lg:-top-1 absolute right-7 lg:-right-5 z-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
            >
              <path
                d="M9.8152 0L56 9.81796L46.1847 56L0 46.182L9.8152 0Z"
                fill="#193E2C"
              />
            </svg>
          </div>
        </div>
      </div>
  {reviews?.length > 0 &&     <div className="w-full mt-[40px] mb-20 hidden lg:block  gap-[12px]">
       <Swiper
          slidesPerView={3}
          spaceBetween={16}
          effect={'coverflow'}
          loop={true}
          className="mySwiper"
          speed={3000}
          autoplay={{
            delay: 1000,
            disableOnInteraction: true,
          }}
          modules={[Autoplay, EffectCoverflow]}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}


        // centeredSlides={true}
        // ref={swiperRef}
        >
          {reviews.map((item, ind) => (
            <SwiperSlide key={ind}>
              <div className="w-full overflow-hidden parent_h relative">
                <Image
                  alt={item?.name}
                  src={item?.mainImage}
                  width={800}
                  height={550}
                  className="w-full object-cover object-top hv_img h-[300px]"
                />
                <div className="h-[200px] relative z-20 w-full">
                  <div className="p-[24px] absolute bottom-0 left-0 w-full">

                    <div className="mt-[16px] flex items-center justify-between">
                      <div>
                        <p className="text-[18px] onest mt-[16px] font-[500] text-[#FCFAF2]">
                          {item?.name}
                        </p>
                        <div className="flex items-center gap-[12px]">
                          <p className="text-[16px] onest font-[400] opacity-80 text-[#FCFAF2]">
                            {item?.position}
                          </p>
                          {/* <p className="text-[16px] onest font-[400] opacity-80 text-[#FCFAF2]">
                   Raised 7M
                 </p> */}
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Image
                          alt={item?.name}
                          src={item?.logo}
                          width={200}
                          height={200}
                          className="  object-top h-[40px]  w-[100px]"
                        />
                      </div>
                      {/* <div className="flex items-center gap-2">
                        <a
                          href="https://www.linkedin.com/in/matthew-reali-079a9732/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="24"
                            viewBox="0 0 25 24"
                            fill="none"
                          >
                            <path
                              d="M7.27544 4.99993C7.27507 5.81424 6.78104 6.54702 6.0263 6.85273C5.27156 7.15845 4.40683 6.97605 3.83986 6.39155C3.27289 5.80704 3.11691 4.93715 3.44546 4.19207C3.77402 3.44699 4.5215 2.9755 5.33544 2.99993C6.41651 3.03238 7.27593 3.91837 7.27544 4.99993ZM7.33544 8.47993H3.33544V20.9999H7.33544V8.47993ZM13.6555 8.47993H9.67544V20.9999H13.6155V14.4299C13.6155 10.7699 18.3855 10.4299 18.3855 14.4299V20.9999H22.3355V13.0699C22.3355 6.89993 15.2755 7.12993 13.6155 10.1599L13.6555 8.47993Z"
                              fill="#FCFAF2"
                            />
                          </svg>
                        </a>
                      </div> */}
                    </div>
                  </div>
                </div>

                <div className=" absolute top-[300px] move_body left-0 w-full p-[16px] h-full bg-[#193E2C] z-10">
                  <h3 className="text-[#FCFAF2] text-[18px] lg:text-[24px]">
                    “{item?.review?.slice(0,90)}<span className="l1">...</span><span className="l2">{item?.review?.slice(100, 100000)}”
                    </span>
                  </h3>
                  <div
                    style={{ transform: "rotate(2deg)" }}
                    className="absolute -bottom-4 -left-2 w-[700px] h-[190px] bg-[#FCFAF2] opacity-[0.06]"
                  ></div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper> 
      </div>}
      <div className="w-full mt-[40px] mb-20  lg:hidden  ">

        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          effect={'coverflow'}
          loop={true}
          className="mySwiper"
          speed={3000}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, EffectCoverflow]}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
        >

          {[1, 2, 3, 4, 5].map((item, ind) => (
            <SwiperSlide>
              <div className="w-full overflow-hidden  relative">
                <Image
                  alt="logo"
                  src={"/img/core.jpg"}
                  width={800}
                  height={550}
                  className="w-full object-cover hv_img h-[250px]"
                />
                <div className="h-[250px] relative z-20 w-full">
                  <div className="p-[24px] absolute bottom-0 left-0 w-full">
                    {active === ind ? (
                      <p
                        onClick={() => setActive(100)}
                        className="text-[#7FAFD5]  text-center justify-center cursor-pointer text-[14px]  flex items-center gap-1"
                      >
                        Show Less
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="17"
                          viewBox="0 0 17 17"
                          fill="none"
                        >
                          <path
                            d="M8.50033 8.55235L6.61469 10.438L5.67188 9.49515L8.50033 6.66675L11.3287 9.49515L10.3859 10.438L8.50033 8.55235Z"
                            fill="#7FAFD5"
                          />
                        </svg>
                      </p>
                    ) : (
                      <p
                        onClick={() => setActive(ind)}
                        className="text-[#7FAFD5]  text-center justify-center cursor-pointer text-[14px]  flex items-center gap-1"
                      >
                        Read more
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="17"
                          viewBox="0 0 16 17"
                          fill="none"
                        >
                          <path
                            d="M8.00033 10.334L5.17188 7.50558L6.11469 6.56274L8.00033 8.44838L9.88593 6.56274L10.8287 7.50558L8.00033 10.334Z"
                            fill="#7FAFD5"
                          />
                        </svg>
                      </p>
                    )}

                    <p className="text-[18px] mt-3 onest  font-[500] text-[#FCFAF2]">
                      Matthew Reali
                    </p>
                    <div className="flex items-center gap-[12px]">
                      <p className="text-[16px] onest font-[400] opacity-80 text-[#FCFAF2]">
                        Co founder at Ponera - €3.5 mln raised
                      </p>
                      {/* <p className="text-[16px] onest font-[400] opacity-80 text-[#FCFAF2]">
                 Raised 7M
               </p> */}
                    </div>
                    <div className="mt-[16px] flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="140"
                          height="32"
                          viewBox="0 0 140 32"
                          fill="none"
                        >
                          <path
                            d="M46.7197 13.9307C46.7197 11.7537 44.813 10.6652 40.9997 10.6652C40.5205 10.6652 40.2151 10.7045 40.0836 10.7832C39.9181 10.9146 39.8356 11.1769 39.836 11.5701V17.2947C40.3808 17.3469 41.0329 17.373 41.7923 17.373C45.0772 17.373 46.72 16.2256 46.7206 13.9307M48.4545 13.8914C48.4545 15.0588 47.992 16.0227 47.0671 16.7832C46.0436 17.6227 44.3431 18.0424 41.9657 18.0422C41.0249 18.0422 40.3151 18.0291 39.8363 18.0028V21.8979C39.8363 22.6981 40.0426 23.262 40.4552 23.5897C40.8016 23.8651 41.462 24.029 42.4363 24.0815V24.4749H35.9219V24.0815C36.8958 24.0028 37.5397 23.7799 37.8537 23.4126C38.1341 23.0979 38.2744 22.5012 38.2746 21.6225V12.4357C38.2746 11.6488 38.1178 11.1308 37.804 10.8816C37.5068 10.6455 36.8794 10.4816 35.9219 10.3898V9.99634H42.2121C44.0116 9.99634 45.4643 10.298 46.5702 10.9013C47.8264 11.5965 48.4545 12.5932 48.4545 13.8914Z"
                            fill="white"
                          />
                          <path
                            d="M63.5624 17.1962C63.5624 14.8618 62.8773 13.0455 61.5071 11.7471C60.3679 10.6979 59.0388 10.1733 57.5197 10.1733C56.0174 10.1733 54.7049 10.6979 53.5823 11.7471C52.2117 13.0455 51.5264 14.8618 51.5264 17.1962C51.5264 19.4923 52.1871 21.2759 53.5085 22.547C54.6143 23.6222 55.9516 24.1599 57.5203 24.1601C59.0891 24.1603 60.4429 23.6226 61.5818 22.547C62.9028 21.2759 63.5632 19.4923 63.563 17.1962M65.2965 17.2159C65.2965 19.485 64.5454 21.321 63.043 22.7241C61.5903 24.0618 59.7494 24.7306 57.5203 24.7306C55.308 24.7306 53.4754 24.0618 52.0225 22.7241C50.5034 21.3208 49.7439 19.4848 49.7441 17.2159C49.7441 14.8424 50.5532 12.9538 52.1714 11.5504C53.6241 10.2914 55.4071 9.66187 57.5203 9.66187C59.6502 9.66187 61.4415 10.2914 62.8944 11.5504C64.4956 12.9407 65.2963 14.8292 65.2965 17.2159Z"
                            fill="white"
                          />
                          <path
                            d="M83.0795 10.3505C82.2044 10.4425 81.6597 10.5867 81.4452 10.7833C81.1313 11.1113 80.9745 11.8785 80.9749 13.0849V24.6717H80.9249L69.7065 12.239H69.4589V21.0717C69.4589 22.2127 69.6405 22.9794 70.0037 23.3718C70.3505 23.778 70.986 24.014 71.9103 24.08V24.4735H66.5117V24.08C67.568 23.988 68.2201 23.647 68.468 23.0571C68.5671 22.821 68.6167 22.1587 68.6169 21.0702V11.4128C68.2039 10.9013 67.8571 10.5865 67.5764 10.4685C67.4114 10.4031 67.0565 10.3638 66.5117 10.3505V9.95703H69.9295L80.182 21.4848V13.0849C80.182 11.9046 79.9756 11.1374 79.563 10.7833C79.282 10.5613 78.6545 10.4171 77.6806 10.3505V9.95703H83.0795V10.3505Z"
                            fill="white"
                          />
                          <path
                            d="M97.7688 20.934L96.7289 24.4749H83.8262V24.0815C84.7178 24.0155 85.3204 23.8844 85.6342 23.6881C86.0631 23.3989 86.2777 22.8542 86.2779 22.0538V12.4357C86.2779 11.5965 86.0633 11.0392 85.6342 10.7635C85.3531 10.5801 84.7505 10.4556 83.8262 10.3898V9.99634H96.5304L96.6048 12.9471H96.0849C95.8867 11.9383 95.573 11.3088 95.1436 11.0586C94.7143 10.7963 93.798 10.6652 92.3947 10.6652H88.8286C88.3827 10.6652 88.135 10.6783 88.0856 10.7045C87.9208 10.7703 87.8383 11.0064 87.8381 11.4127V16.4669H91.8996C92.9558 16.4669 93.6574 16.3227 94.0045 16.0341C94.2851 15.7981 94.4998 15.2669 94.6485 14.4407H95.1687V19.3405H94.6485C94.5 18.4487 94.2688 17.8848 93.9548 17.6487C93.6247 17.3996 92.9397 17.2751 91.8996 17.2753H87.8381V22.7441C87.8381 23.2158 88.0526 23.5175 88.4818 23.649C88.8942 23.7535 90.05 23.8059 91.9492 23.8061C93.4846 23.8061 94.6073 23.6094 95.3173 23.2159C96.0274 22.8225 96.6712 22.0618 97.2488 20.934H97.7688Z"
                            fill="white"
                          />
                          <path
                            d="M109.484 13.7537C109.484 12.39 108.725 11.4785 107.206 11.0193C106.347 10.7308 105.349 10.6127 104.21 10.6652C103.549 10.6918 103.137 10.7377 102.972 10.8029C102.707 10.9342 102.575 11.2031 102.575 11.6094V16.9996C104.54 16.9869 105.976 16.8492 106.884 16.5865C108.618 16.1022 109.485 15.158 109.485 13.7537M113.942 24.4749H110.526L104.654 17.6094L102.574 17.6881V21.8979C102.574 22.6721 102.755 23.2168 103.119 23.5322C103.465 23.8336 104.118 24.0172 105.075 24.083V24.4764H98.6373V24.083C99.5947 24.0043 100.23 23.7945 100.544 23.4535C100.858 23.1258 101.014 22.5161 101.014 21.6243V12.6127C101.014 11.7855 100.833 11.215 100.47 10.9013C100.172 10.639 99.5612 10.4685 98.6367 10.3898V9.99634H105.224C106.76 9.99634 108.023 10.2062 109.014 10.6258C110.483 11.2553 111.217 12.3111 111.217 13.793C111.217 15.0391 110.631 15.9703 109.459 16.5865C108.799 16.9406 107.849 17.2093 106.611 17.3927L111.615 23.2946C111.945 23.7008 112.721 23.9631 113.943 24.0815L113.942 24.4749Z"
                            fill="white"
                          />
                          <path
                            d="M125.561 19.0062L122.441 11.7866L119.172 19.0062H125.561ZM131.084 24.4751H125.215V24.0816C125.858 24.0552 126.312 24.0027 126.576 23.9242C126.989 23.7796 127.195 23.5042 127.195 23.098C127.195 22.7706 127.055 22.2985 126.774 21.6819L125.883 19.7341H118.949L117.711 22.2324C117.577 22.5012 117.509 22.7979 117.512 23.098C117.512 23.5179 117.711 23.7933 118.107 23.9242C118.288 24.0029 118.635 24.0554 119.147 24.0816V24.4751H114.615V24.0816C114.829 24.0552 115.044 24.0224 115.259 23.9833C115.457 23.9429 115.647 23.8314 115.829 23.6488C116.291 23.1767 116.893 22.1406 117.637 20.5407L122.639 9.74072H122.738L128.607 22.1538C128.97 22.9406 129.367 23.4718 129.796 23.7472C130.044 23.9046 130.473 24.016 131.084 24.0816V24.4751Z"
                            fill="white"
                          />
                          <path
                            d="M23.8765 5.24848C23.4981 5.24832 23.1262 5.34724 22.7979 5.53539L15.9499 9.47645C15.6208 9.66658 15.3475 9.93982 15.1572 10.2688C14.967 10.5978 14.8665 10.971 14.8658 11.351V18.4953C14.8667 18.832 14.9458 19.1639 15.0968 19.4648C15.2479 19.7656 15.4668 20.0273 15.7362 20.2292L23.2909 24.8521L23.8807 25.2168L24.4627 24.8518L32.0007 20.2334C32.2713 20.0316 32.4912 19.7696 32.643 19.4682C32.7948 19.1667 32.8744 18.834 32.8754 18.4965V11.3492C32.8748 10.9694 32.7745 10.5963 32.5844 10.2674C32.3943 9.93851 32.1211 9.66534 31.7922 9.47524L24.9567 5.5363C24.628 5.34753 24.2555 5.24829 23.8765 5.24848ZM15.2066 20.98C14.8167 20.6935 14.4996 20.3194 14.2809 19.8877C14.0622 19.4561 13.948 18.9792 13.9476 18.4953V11.351V11.3096C13.9476 11.0351 13.9476 10.6386 13.9476 10.6386C13.9476 10.4207 13.9494 9.96734 13.746 9.51095C13.5308 9.02672 12.1172 6.27264 11.6811 5.64646C11.2619 5.0451 10.8682 4.54271 10.2974 4.48854C10.2766 4.48655 10.2556 4.48564 10.2347 4.48581C9.62217 4.48581 8.61708 5.27269 8.01663 5.7424L7.90072 5.8332C7.58415 6.07955 7.03243 6.5432 6.54577 6.95299C6.18441 7.25563 5.8515 7.53588 5.65872 7.69054C5.21383 8.04645 5.06614 8.13997 4.7989 8.17114C4.77217 8.1742 4.7453 8.17581 4.71839 8.17598C4.52531 8.17598 4.37338 8.0867 4.22478 7.88695C4.06771 7.6751 3.90428 7.30133 3.89489 6.99687C3.88491 6.66214 4.08102 6.30986 4.4787 5.94941C4.91088 5.55597 5.6799 5.00485 6.48585 4.5073C7.33471 3.98587 8.22496 3.53503 9.14762 3.15932C9.68452 2.94413 10.0289 2.85667 10.3373 2.85667C10.5455 2.85667 10.7495 2.89662 10.9995 2.9862C11.6681 3.2265 12.2174 4.18105 12.6589 4.94796C13.3172 6.09044 14.4188 8.73103 14.6334 9.24916L14.6788 9.35872L14.7587 9.27126C14.9709 9.03834 15.2178 8.83967 15.4908 8.68231L22.3406 4.74004C22.8085 4.47183 23.3384 4.33072 23.8777 4.33072C24.417 4.33072 24.947 4.47183 25.4149 4.74004L32.2507 8.67958C32.5226 8.83703 32.7687 9.03525 32.9804 9.26732L33.0603 9.35479L33.1057 9.24523C33.3203 8.7268 34.424 6.08348 35.0796 4.94553C35.5211 4.17863 36.0707 3.22438 36.739 2.98378C36.989 2.89299 37.1929 2.85425 37.4015 2.85425C37.7093 2.85425 38.054 2.94232 38.5909 3.15689C39.514 3.53265 40.4047 3.98349 41.2542 4.50488C42.0595 5.00213 42.8279 5.55446 43.2613 5.94699C43.6587 6.30744 43.8554 6.65972 43.8451 6.99445C43.8357 7.29952 43.672 7.67328 43.5152 7.88453C43.3666 8.08428 43.2144 8.17356 43.0213 8.17356C42.9945 8.1734 42.9677 8.17178 42.9411 8.16872C42.6736 8.13845 42.5262 8.04403 42.081 7.68811C41.8891 7.53407 41.5577 7.25563 41.1982 6.95359C40.71 6.5432 40.1568 6.07834 39.839 5.83138L39.7228 5.74059C39.1223 5.27058 38.1187 4.4843 37.505 4.4843C37.4842 4.48413 37.4634 4.48504 37.4426 4.48702C36.8715 4.5412 36.4781 5.04359 36.0589 5.64495C35.6243 6.2684 34.2098 9.02339 33.9937 9.50944C33.7909 9.96583 33.7918 10.4192 33.7924 10.6371C33.7924 10.6371 33.7924 11.0133 33.7924 11.2754L33.7945 11.3483V18.4965C33.7937 18.9809 33.6791 19.4582 33.4599 19.8901C33.2408 20.322 32.9232 20.6964 32.5328 20.9831L32.5068 21.0003L24.888 25.6829L23.8711 26.286L15.2066 20.98Z"
                            fill="white"
                          />
                          <path
                            d="M23.5989 22.8283V23.8952C23.5989 23.9302 23.6058 23.9648 23.6192 23.9972C23.6326 24.0295 23.6522 24.0589 23.677 24.0837C23.7017 24.1085 23.7311 24.1281 23.7635 24.1415C23.7958 24.1549 23.8305 24.1618 23.8655 24.1618C23.9005 24.1618 23.9352 24.1549 23.9676 24.1415C23.9999 24.1281 24.0293 24.1085 24.0541 24.0837C24.0788 24.0589 24.0985 24.0295 24.1119 23.9972C24.1253 23.9648 24.1321 23.9302 24.1321 23.8952V22.8283C24.1321 22.7933 24.1253 22.7586 24.1119 22.7263C24.0985 22.6939 24.0788 22.6645 24.0541 22.6398C24.0293 22.615 23.9999 22.5954 23.9676 22.582C23.9352 22.5686 23.9005 22.5617 23.8655 22.5617C23.8305 22.5617 23.7958 22.5686 23.7635 22.582C23.7311 22.5954 23.7017 22.615 23.677 22.6398C23.6522 22.6645 23.6326 22.6939 23.6192 22.7263C23.6058 22.7586 23.5989 22.7933 23.5989 22.8283ZM23.5989 20.6947V21.7603C23.5989 21.7953 23.6058 21.83 23.6192 21.8623C23.6326 21.8947 23.6522 21.9241 23.677 21.9488C23.7017 21.9736 23.7311 21.9932 23.7635 22.0066C23.7958 22.02 23.8305 22.0269 23.8655 22.0269C23.9005 22.0269 23.9352 22.02 23.9676 22.0066C23.9999 21.9932 24.0293 21.9736 24.0541 21.9488C24.0788 21.9241 24.0985 21.8947 24.1119 21.8623C24.1253 21.83 24.1321 21.7953 24.1321 21.7603V20.6947C24.1321 20.6597 24.1253 20.625 24.1119 20.5926C24.0985 20.5603 24.0788 20.5309 24.0541 20.5061C24.0293 20.4814 23.9999 20.4617 23.9676 20.4483C23.9352 20.4349 23.9005 20.428 23.8655 20.428C23.8305 20.428 23.7958 20.4349 23.7635 20.4483C23.7311 20.4617 23.7017 20.4814 23.677 20.5061C23.6522 20.5309 23.6326 20.5603 23.6192 20.5926C23.6058 20.625 23.5989 20.6597 23.5989 20.6947ZM23.5989 18.561V19.6275C23.5989 19.6626 23.6058 19.6972 23.6192 19.7296C23.6326 19.7619 23.6522 19.7913 23.677 19.8161C23.7017 19.8408 23.7311 19.8605 23.7635 19.8739C23.7958 19.8873 23.8305 19.8942 23.8655 19.8942C23.9005 19.8942 23.9352 19.8873 23.9676 19.8739C23.9999 19.8605 24.0293 19.8408 24.0541 19.8161C24.0788 19.7913 24.0985 19.7619 24.1119 19.7296C24.1253 19.6972 24.1321 19.6626 24.1321 19.6275V18.561C24.1321 18.526 24.1253 18.4913 24.1119 18.459C24.0985 18.4266 24.0788 18.3972 24.0541 18.3725C24.0293 18.3477 23.9999 18.3281 23.9676 18.3147C23.9352 18.3013 23.9005 18.2944 23.8655 18.2944C23.8305 18.2944 23.7958 18.3013 23.7635 18.3147C23.7311 18.3281 23.7017 18.3477 23.677 18.3725C23.6522 18.3972 23.6326 18.4266 23.6192 18.459C23.6058 18.4913 23.5989 18.526 23.5989 18.561ZM17.1292 11.9682C17.1487 11.9391 17.1622 11.9064 17.169 11.8721C17.1759 11.8377 17.1759 11.8024 17.169 11.768C17.1622 11.7337 17.1487 11.701 17.1292 11.6719C17.1098 11.6428 17.0848 11.6178 17.0557 11.5983L16.1689 11.0055C16.1398 10.986 16.1071 10.9724 16.0728 10.9656C16.0384 10.9587 16.0031 10.9587 15.9687 10.9655C15.9344 10.9723 15.9017 10.9859 15.8726 11.0053C15.8434 11.0247 15.8184 11.0497 15.7989 11.0788C15.7795 11.108 15.7659 11.1406 15.7591 11.175C15.7522 11.2093 15.7522 11.2447 15.759 11.279C15.7658 11.3134 15.7793 11.3461 15.7988 11.3752C15.8182 11.4043 15.8432 11.4294 15.8723 11.4488L16.7591 12.0417C16.818 12.0809 16.89 12.0951 16.9593 12.0813C17.0287 12.0675 17.0898 12.0269 17.1292 11.9682ZM18.9027 13.1539C18.942 13.0952 18.9564 13.0232 18.9427 12.9539C18.9289 12.8845 18.8882 12.8234 18.8295 12.7841L17.9424 12.1912C17.8836 12.1519 17.8116 12.1376 17.7423 12.1514C17.6729 12.1652 17.6119 12.206 17.5726 12.2648C17.5333 12.3236 17.519 12.3956 17.5328 12.4649C17.5466 12.5343 17.5873 12.5953 17.6461 12.6346L18.5329 13.2275C18.562 13.247 18.5946 13.2605 18.629 13.2674C18.6633 13.2742 18.6987 13.2743 18.7331 13.2674C18.7674 13.2606 18.8001 13.2471 18.8292 13.2276C18.8583 13.2081 18.8833 13.1831 18.9027 13.1539ZM20.6768 14.3397C20.6963 14.3106 20.7099 14.278 20.7167 14.2437C20.7236 14.2093 20.7236 14.174 20.7168 14.1397C20.7099 14.1053 20.6964 14.0727 20.6769 14.0436C20.6574 14.0145 20.6324 13.9896 20.6033 13.9702L19.7165 13.377C19.6577 13.3377 19.5857 13.3233 19.5163 13.3371C19.447 13.3508 19.3859 13.3916 19.3466 13.4504C19.3072 13.5092 19.2929 13.5812 19.3066 13.6506C19.3204 13.72 19.3611 13.781 19.4199 13.8204L20.307 14.4132C20.3506 14.4427 20.4021 14.4584 20.4547 14.4583C20.4986 14.4584 20.5419 14.4476 20.5806 14.4269C20.6194 14.4062 20.6524 14.3762 20.6768 14.3397ZM22.4506 15.5258C22.4701 15.4966 22.4836 15.464 22.4904 15.4296C22.4972 15.3953 22.4972 15.3599 22.4903 15.3256C22.4835 15.2912 22.4699 15.2586 22.4504 15.2295C22.431 15.2004 22.4059 15.1754 22.3768 15.1559L21.49 14.5631C21.4313 14.5238 21.3593 14.5094 21.2899 14.5232C21.2205 14.537 21.1595 14.5778 21.1202 14.6366C21.0809 14.6954 21.0666 14.7674 21.0804 14.8368C21.0942 14.9061 21.135 14.9671 21.1938 15.0064L22.0808 15.599C22.1244 15.6285 22.1759 15.6442 22.2285 15.6441C22.2724 15.6442 22.3157 15.6334 22.3544 15.6128C22.3932 15.5922 22.4262 15.5623 22.4506 15.5258ZM24.7656 16.1916C24.7957 16.1726 24.8216 16.1478 24.8419 16.1186C24.8623 16.0894 24.8766 16.0564 24.8839 16.0216C24.8913 15.9868 24.8917 15.9509 24.885 15.9159C24.8783 15.881 24.8646 15.8478 24.8449 15.8182C24.8251 15.7886 24.7997 15.7632 24.77 15.7437C24.7403 15.7241 24.707 15.7106 24.672 15.7041C24.637 15.6976 24.6011 15.6981 24.5663 15.7057C24.5316 15.7133 24.4987 15.7277 24.4696 15.7482L23.8667 16.1513L23.2639 15.7485C23.2348 15.7278 23.2019 15.7131 23.167 15.7053C23.1322 15.6975 23.0961 15.6968 23.061 15.7032C23.0259 15.7096 22.9924 15.7231 22.9626 15.7426C22.9327 15.7622 22.9071 15.7876 22.8873 15.8173C22.8674 15.847 22.8538 15.8803 22.847 15.9154C22.8403 15.9505 22.8407 15.9865 22.8482 16.0214C22.8557 16.0563 22.8701 16.0894 22.8906 16.1186C22.9111 16.1479 22.9373 16.1727 22.9676 16.1916L23.5989 16.6153V17.493C23.5989 17.528 23.6058 17.5627 23.6192 17.595C23.6326 17.6274 23.6522 17.6568 23.677 17.6815C23.7017 17.7063 23.7311 17.7259 23.7635 17.7393C23.7958 17.7527 23.8305 17.7596 23.8655 17.7596C23.9005 17.7596 23.9352 17.7527 23.9676 17.7393C23.9999 17.7259 24.0293 17.7063 24.0541 17.6815C24.0788 17.6568 24.0985 17.6274 24.1119 17.595C24.1253 17.5627 24.1321 17.528 24.1321 17.493V16.6153L24.7656 16.1916ZM26.5394 15.0061C26.5685 14.9867 26.5935 14.9617 26.613 14.9326C26.6324 14.9035 26.6459 14.8708 26.6528 14.8364C26.6596 14.8021 26.6596 14.7668 26.6528 14.7324C26.6459 14.6981 26.6324 14.6654 26.6129 14.6363C26.5935 14.6072 26.5685 14.5822 26.5394 14.5627C26.5103 14.5433 26.4776 14.5298 26.4433 14.5229C26.4089 14.5161 26.3736 14.5161 26.3392 14.5229C26.3049 14.5298 26.2722 14.5433 26.2431 14.5628L25.3564 15.1556C25.3261 15.1746 25.2999 15.1994 25.2794 15.2286C25.2589 15.2578 25.2445 15.2909 25.237 15.3258C25.2295 15.3607 25.2291 15.3968 25.2358 15.4318C25.2425 15.4669 25.2562 15.5003 25.2761 15.5299C25.2959 15.5596 25.3215 15.585 25.3514 15.6046C25.3812 15.6242 25.4147 15.6376 25.4498 15.644C25.4849 15.6504 25.521 15.6497 25.5558 15.6419C25.5907 15.6342 25.6236 15.6195 25.6526 15.5987L26.5394 15.0061ZM28.3132 13.8201C28.3696 13.7798 28.4081 13.7191 28.4206 13.651C28.433 13.5828 28.4184 13.5125 28.3799 13.4548C28.3414 13.3972 28.282 13.3569 28.2142 13.3424C28.1464 13.3278 28.0757 13.3402 28.0169 13.377L27.1302 13.9702C27.0999 13.9891 27.0737 14.0139 27.0532 14.0431C27.0327 14.0724 27.0183 14.1054 27.0108 14.1403C27.0033 14.1752 27.0029 14.2113 27.0096 14.2464C27.0164 14.2814 27.03 14.3148 27.0499 14.3445C27.0697 14.3741 27.0953 14.3995 27.1252 14.4191C27.155 14.4387 27.1885 14.4521 27.2236 14.4585C27.2587 14.465 27.2948 14.4643 27.3296 14.4565C27.3645 14.4487 27.3974 14.434 27.4265 14.4132L28.3132 13.8201ZM30.0873 12.6343C30.1164 12.6148 30.1414 12.5898 30.1609 12.5607C30.1803 12.5315 30.1938 12.4989 30.2006 12.4645C30.2075 12.4301 30.2074 12.3948 30.2006 12.3604C30.1937 12.3261 30.1802 12.2934 30.1607 12.2643C30.1412 12.2352 30.1162 12.2102 30.0871 12.1908C30.058 12.1713 30.0253 12.1578 29.9909 12.151C29.9566 12.1442 29.9212 12.1442 29.8868 12.151C29.8525 12.1579 29.8198 12.1714 29.7907 12.1909L28.904 12.7838C28.8561 12.8156 28.8198 12.8619 28.8004 12.916C28.781 12.9701 28.7796 13.029 28.7965 13.0839C28.8133 13.1389 28.8474 13.1869 28.8937 13.2209C28.94 13.2549 28.996 13.273 29.0535 13.2726C29.1061 13.2726 29.1575 13.2569 29.2012 13.2275L30.0873 12.6343ZM31.9335 11.0787C31.914 11.0496 31.889 11.0246 31.8599 11.0051C31.8308 10.9857 31.7981 10.9722 31.7638 10.9653C31.7294 10.9585 31.6941 10.9585 31.6597 10.9653C31.6254 10.9722 31.5927 10.9857 31.5636 11.0051L30.6766 11.598C30.629 11.6299 30.593 11.6761 30.5738 11.73C30.5546 11.7839 30.5532 11.8425 30.5699 11.8972C30.5865 11.9519 30.6203 11.9998 30.6663 12.0339C30.7123 12.0679 30.768 12.0863 30.8252 12.0862C30.8779 12.0864 30.9294 12.0708 30.9732 12.0414L31.8599 11.4485C31.8891 11.4291 31.9141 11.4041 31.9336 11.375C31.953 11.3459 31.9666 11.3132 31.9734 11.2789C31.9802 11.2445 31.9802 11.2091 31.9734 11.1748C31.9665 11.1405 31.953 11.1078 31.9335 11.0787Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <div className="flex items-center gap-2">
                        <a
                          href="https://www.linkedin.com/in/matthew-reali-079a9732/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="24"
                            viewBox="0 0 25 24"
                            fill="none"
                          >
                            <path
                              d="M7.27544 4.99993C7.27507 5.81424 6.78104 6.54702 6.0263 6.85273C5.27156 7.15845 4.40683 6.97605 3.83986 6.39155C3.27289 5.80704 3.11691 4.93715 3.44546 4.19207C3.77402 3.44699 4.5215 2.9755 5.33544 2.99993C6.41651 3.03238 7.27593 3.91837 7.27544 4.99993ZM7.33544 8.47993H3.33544V20.9999H7.33544V8.47993ZM13.6555 8.47993H9.67544V20.9999H13.6155V14.4299C13.6155 10.7699 18.3855 10.4299 18.3855 14.4299V20.9999H22.3355V13.0699C22.3355 6.89993 15.2755 7.12993 13.6155 10.1599L13.6555 8.47993Z"
                              fill="#FCFAF2"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={` absolute ${active === ind ? "top-[0px]" : "top-[250px]"
                    } move_body left-0 w-full p-[16px] lg:p-[24px] h-full bg-[#193E2C] z-10`}
                >
                  <h3 className="text-[#FCFAF2] text-[18px] lg:text-[24px]">
                    “It was great to have met and mentored such inspiring founders. I
                    hope you’ll{" "}
                    {active === ind && (
                      <span>
                        get your ideas built and let them help your customers”
                      </span>
                    )}
                  </h3>
                  <div
                    style={{ transform: "rotate(2deg)" }}
                    className="absolute -bottom-4 -left-2 w-[700px] h-[190px] bg-[#FCFAF2] opacity-[0.06]"
                  ></div>
                </div>
              </div>
            </SwiperSlide>
          ))}

        </Swiper>

      </div>
    </div>
  );
};

export default Testimonials;
