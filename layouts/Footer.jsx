import Image from "next/image";
import Link from "next/link";
import React,{useState} from "react";

const Footer = () => {
  const [active, setactive] = useState(0)
  return (
    <div className="mt-[40px] bg-[#143022]   w-full px-[16px] lg:px-[80px]">
      <div className="h-[1px] w-full bg-dark"></div>
      <div className="py-[80px] hidden lg:flex items-start flex-col lg:flex-row justify-between w-full">
        <div>
        <Image
            width={100}
            height={100}
            className="w-[180px]"
            alt=""
            src={"/logo.svg"}
          />
          {/* <p className="mt-[12px] leading-[16px] text-txt font-[400] text-[16px]">
            Schedays Associazione culturale e di promozione sociale <br />{" "}
            Piazza Santa Maria in Via Lata 11, 16128 Genoa, Italy
          </p> */}
          <div className="py-[20px]">
            <p className=" leading-[16px] text-white font-[400] text-[16px]">
              Mail : <span className="text-[#43AA13]">webrainp@gmail.com</span>
            </p>
            {/* <p className=" leading-[16px] mt-[12px] text-txt font-[400] text-[16px]">
              Tel : +453 555 444 55
            </p> */}
          </div>
          <div className="flex items-center ">
        <a
          className=" text-pr hover:bg-darkpy-1 px-2 me-2"
          href=""
        >
          <i className="fa fa-envelope-open -ml-[1px] "></i>
        </a>
        <a
         className=" text-pr hover:bg-darkpy-1 flex items-center justify-center pl-2 me-2"
          href=""
        >
          <i className="fa fa-phone-alt me-2"></i>
        </a>
        <a
         className=" text-pr hover:bg-darkpy-1 px-2 me-2"
          href=""
        >
          <i className="fab fa-linkedin-in fw-normal"></i>
        </a>
        <a
         className=" text-pr hover:bg-darkpy-1 px-2 me-2"
          href=""
        >
          <i className="fab fa-instagram fw-normal"></i>
        </a>
        <a
         className=" text-pr hover:bg-darkpy-1 px-2 me-2"
          href=""
        >
          <i className="fab -ml-[2px] fa-youtube fw-normal"></i>
        </a>
      </div>
        </div>
        <div className="flex items-start gap-[80px]">
          <p className="onest text-[16px] text-white leading-[16px] font-[300] text-txt">
            Navigation
          </p>
          <div>
            <div className="gap-[40px] flex items-center">
              <Link
                href="/"
                className="flex items-center underline text-pr  leading-[16px] text-txt text-[14px] gap-[10px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                >
                  <path
                    d="M4.16806 9.33343L4.16797 3.33352L5.5013 3.3335L5.50138 8.0001L12.2826 8.00016L9.64944 5.36701L10.5922 4.4242L14.8349 8.66683L10.5922 12.9095L9.64944 11.9667L12.2826 9.3335L4.16806 9.33343Z"
                    fill="#fff"
                  />
                </svg>
                Home
              </Link>
              <Link
                href="/about"
                className="flex items-center text-pr underline leading-[16px] text-txt text-[14px] gap-[10px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                >
                  <path
                    d="M4.16806 9.33343L4.16797 3.33352L5.5013 3.3335L5.50138 8.0001L12.2826 8.00016L9.64944 5.36701L10.5922 4.4242L14.8349 8.66683L10.5922 12.9095L9.64944 11.9667L12.2826 9.3335L4.16806 9.33343Z"
                    fill="#fff"
                  />
                </svg>
                About Us
              </Link>
              <Link
                href="/services"
                className="flex items-center text-pr  underline leading-[16px] text-txt text-[14px] gap-[10px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                >
                  <path
                    d="M4.16806 9.33343L4.16797 3.33352L5.5013 3.3335L5.50138 8.0001L12.2826 8.00016L9.64944 5.36701L10.5922 4.4242L14.8349 8.66683L10.5922 12.9095L9.64944 11.9667L12.2826 9.3335L4.16806 9.33343Z"
                    fill="#fff"
                  />
                </svg>
                Services
              </Link>
            </div>
            <div className="gap-[40px] mt-4 flex items-center">
              <Link
                href="/blogs"
                className="flex items-center text-pr underline leading-[16px] text-txt text-[14px] gap-[10px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                >
                  <path
                    d="M4.16806 9.33343L4.16797 3.33352L5.5013 3.3335L5.50138 8.0001L12.2826 8.00016L9.64944 5.36701L10.5922 4.4242L14.8349 8.66683L10.5922 12.9095L9.64944 11.9667L12.2826 9.3335L4.16806 9.33343Z"
                    fill="#fff"
                  />
                </svg>
                Blog
              </Link>
              <Link
                href="/contact"
                className="flex items-center text-pr underline leading-[16px] text-txt text-[14px] gap-[10px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                >
                  <path
                    d="M4.16806 9.33343L4.16797 3.33352L5.5013 3.3335L5.50138 8.0001L12.2826 8.00016L9.64944 5.36701L10.5922 4.4242L14.8349 8.66683L10.5922 12.9095L9.64944 11.9667L12.2826 9.3335L4.16806 9.33343Z"
                    fill="#fff"
                  />
                </svg>
                Contact
              </Link>
       
            </div>
        
          </div>
        </div>
        <div className="transform rotate-90 mt-10">
            <h1 className="onest font-[200] text-[40px] text-white leading-[40px]">2023 ©</h1>
            <p className="text-[16px] leading-[16px] pt-[4px]  text-white">All rights reserved</p>
        </div>
      </div>
      <div className="py-[40px] relative flex lg:hidden items-start flex-col lg:flex-row justify-between w-full">
      <div className=" relative w-full">
      <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="133"
            height="18"
            viewBox="0 0 133 18"
            fill="none"
          >
            <path
              d="M12.3491 15.287C11.8258 16.5652 10.7269 18 7.50886 18C2.564 18 0 14.6348 0 9C0 3.54782 3.19192 0 9.05249 0C14.5206 0 17.1631 2.71304 17.1631 6.80869V6.9913H11.9043V6.91304C11.9043 5.32174 11.224 4.77391 8.71237 4.77391C6.12221 4.77391 5.28498 5.47826 5.28498 9C5.28498 12.887 6.22686 13.487 9.15715 13.487C11.695 13.487 12.3491 13.0696 12.4276 12H8.29376V8.32174H17.1893V17.7391H12.5845V15.287H12.3491Z"
              fill="#43AA13"
            />
            <path
              d="M33.0256 13.3304V17.7391H18.8713V0.260869H33.0256V4.66956H23.79V6.78261H32.6332V11.1652H23.79V13.3304H33.0256Z"
              fill="#43AA13"
            />
            <path
              d="M39.7138 10.4609V17.7391H34.7951V0.260869H40.0539L44.9465 8.11304L46.0976 10.2522H46.4378L46.1761 8.11304V0.260869H51.0687V17.7391H45.836L41.2051 10.4609L39.7923 7.98261H39.4522L39.7138 10.4609Z"
              fill="#43AA13"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M70.2339 9C70.2339 14.4522 66.9896 18 61.443 18C55.8702 18 52.626 14.4522 52.626 9C52.626 3.54782 55.8702 0 61.443 0C66.9896 0 70.2339 3.54782 70.2339 9ZM57.911 9C57.911 12.3652 58.722 13.2261 61.443 13.2261C64.1378 13.2261 64.9489 12.3652 64.9489 9C64.9489 5.63478 64.1378 4.77391 61.443 4.77391C58.722 4.77391 57.911 5.63478 57.911 9Z"
              fill="#43AA13"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M76.0607 14.3739L74.9357 17.7391H69.86L75.9561 0.260869H83.0986L89.1685 17.7391H83.7789L82.7062 14.3739H76.0607ZM79.2526 4.51304L77.8137 9.07826L77.4735 10.0957H81.3195L81.0056 9.07826L79.6189 4.51304H79.2526Z"
              fill="#43AA13"
            />
            <path
              d="M103.824 13.3304V17.7391H89.6695V0.260869H103.824V4.66956H94.5882V6.78261H103.431V11.1652H94.5882V13.3304H103.824Z"
              fill="#43AA13"
            />
            <path
              d="M120.224 12.313C120.224 15.3652 118.13 18 112.872 18C107.848 18 105.337 15.6522 105.337 12V11.6609H110.177V11.8696C110.177 13.3043 110.7 13.5913 113.055 13.5913C114.912 13.5913 115.305 13.3043 115.305 12.5478C115.305 11.7391 115.043 11.4783 113.84 11.2957L110.02 10.6957C106.462 10.1478 104.996 8.26956 104.996 5.55652C104.996 2.45217 107.377 0 112.532 0C117.424 0 119.753 2.45217 119.753 5.71304V6.15652H114.912V5.84348C114.912 4.82609 114.415 4.40869 112.218 4.40869C110.36 4.40869 109.889 4.72174 109.889 5.37391C109.889 5.92174 110.229 6.15652 111.25 6.33913L115.069 7.01739C118.785 7.66956 120.224 9.6 120.224 12.313Z"
              fill="#43AA13"
            />
            <path
              d="M124.634 7.95653L132.632 9.65176L130.932 17.6259L122.935 15.9306L124.634 7.95653Z"
              fill="#43AA13"
            />
          </svg>
          {/* <p className="mt-[12px] leading-[16px] text-txt font-[400] text-[16px]">
          +453 555 444 55
          </p> */}
          <div className="py-[40px]">
            <p className=" leading-[16px] text-txt font-[400] text-[16px]">
              Mail : <span className="text-[#43AA13]">admission@genoaes.com</span>
            </p>
            {/* <p className=" leading-[16px] mt-[12px] text-txt font-[400] text-[16px]">
              Tel : +453 555 444 55
            </p> */}
          </div>
          <div className="flex items-center gap-[16px]">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M13.0291 2.00098C14.1545 2.00284 14.7248 2.00879 15.2176 2.02346L15.4117 2.02981C15.6359 2.03778 15.8571 2.04778 16.1238 2.06028C17.1879 2.10944 17.9138 2.27778 18.5513 2.52528C19.2104 2.77944 19.7671 3.12278 20.3229 3.67861C20.8779 4.23444 21.2213 4.79278 21.4763 5.45028C21.7229 6.08694 21.8913 6.81361 21.9413 7.87778C21.9532 8.14444 21.9628 8.36564 21.9707 8.58989L21.977 8.78397C21.9916 9.27672 21.9983 9.8471 22.0004 10.9725L22.0012 11.7182C22.0013 11.8093 22.0013 11.9033 22.0013 12.0003L22.0012 12.2824L22.0006 13.0281C21.9987 14.1535 21.9928 14.7238 21.9781 15.2166L21.9717 15.4107C21.9638 15.6349 21.9538 15.8561 21.9413 16.1228C21.8921 17.1869 21.7229 17.9128 21.4763 18.5503C21.2221 19.2094 20.8779 19.7661 20.3229 20.3219C19.7671 20.8769 19.2079 21.2203 18.5513 21.4753C17.9138 21.7219 17.1879 21.8903 16.1238 21.9403C15.8571 21.9522 15.6359 21.9618 15.4117 21.9697L15.2176 21.976C14.7248 21.9906 14.1545 21.9973 13.0291 21.9994L12.2834 22.0002C12.1923 22.0003 12.0983 22.0003 12.0013 22.0003L11.7192 22.0002L10.9735 21.9996C9.84807 21.9977 9.27769 21.9918 8.78494 21.9771L8.59086 21.9707C8.36661 21.9628 8.14541 21.9528 7.87875 21.9403C6.81458 21.8911 6.08958 21.7219 5.45125 21.4753C4.79291 21.2211 4.23541 20.8769 3.67958 20.3219C3.12375 19.7661 2.78125 19.2069 2.52625 18.5503C2.27875 17.9128 2.11125 17.1869 2.06125 16.1228C2.04937 15.8561 2.03968 15.6349 2.03183 15.4107L2.02554 15.2166C2.01091 14.7238 2.00424 14.1535 2.00208 13.0281L2.00195 10.9725C2.00381 9.8471 2.00976 9.27672 2.02443 8.78397L2.03078 8.58989C2.03875 8.36564 2.04875 8.14444 2.06125 7.87778C2.11041 6.81278 2.27875 6.08778 2.52625 5.45028C2.78041 4.79194 3.12375 4.23444 3.67958 3.67861C4.23541 3.12278 4.79375 2.78028 5.45125 2.52528C6.08875 2.27778 6.81375 2.11028 7.87875 2.06028C8.14541 2.0484 8.36661 2.03871 8.59086 2.03086L8.78494 2.02457C9.27769 2.00994 9.84807 2.00327 10.9735 2.00111L13.0291 2.00098ZM12.0013 7.00028C9.23835 7.00028 7.00125 9.23981 7.00125 12.0003C7.00125 14.7632 9.24078 17.0003 12.0013 17.0003C14.7642 17.0003 17.0013 14.7607 17.0013 12.0003C17.0013 9.23738 14.7617 7.00028 12.0013 7.00028ZM12.0013 9.00028C13.6582 9.00028 15.0013 10.3429 15.0013 12.0003C15.0013 13.6572 13.6586 15.0003 12.0013 15.0003C10.3444 15.0003 9.00125 13.6576 9.00125 12.0003C9.00125 10.3434 10.3439 9.00028 12.0013 9.00028ZM17.2513 5.50028C16.562 5.50028 16.0013 6.06018 16.0013 6.74943C16.0013 7.43867 16.5612 7.99944 17.2513 7.99944C17.9405 7.99944 18.5013 7.43954 18.5013 6.74943C18.5013 6.06018 17.9396 5.49941 17.2513 5.50028Z"
                  fill="#202020"
                />
              </svg>
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M18.3372 18.339H15.6717V14.1622C15.6717 13.1662 15.6515 11.8845 14.2827 11.8845C12.893 11.8845 12.6807 12.9683 12.6807 14.0887V18.339H10.0152V9.75H12.5757V10.9207H12.6102C12.968 10.2457 13.838 9.53325 15.1377 9.53325C17.8385 9.53325 18.338 11.3108 18.338 13.6245L18.3372 18.339ZM7.0047 8.57475C6.1467 8.57475 5.45745 7.88025 5.45745 7.026C5.45745 6.1725 6.14745 5.47875 7.0047 5.47875C7.8597 5.47875 8.5527 6.1725 8.5527 7.026C8.5527 7.88025 7.85895 8.57475 7.0047 8.57475ZM8.3412 18.339H5.6682V9.75H8.3412V18.339ZM19.6707 3H4.3302C3.59595 3 3.00195 3.5805 3.00195 4.29675V19.7033C3.00195 20.4202 3.59595 21 4.3302 21H19.6685C20.402 21 21.002 20.4202 21.002 19.7033V4.29675C21.002 3.5805 20.402 3 19.6685 3H19.6707Z"
                  fill="#202020"
                />
              </svg>
            </a>
      
          </div>
        </div>
        <div className="transform absolute -right-[10px] top-[16px] z-10 rotate-90  ">
            <h1 className="onest font-[200] text-[32px] text-txt whitespace-nowrap leading-[40px]">2023 ©</h1>
            <p className="text-[14px] leading-[16px] pt-[4px] text-txt">All rights reserved</p>
        </div>
      </div>
        <div className="flex items-start flex-col mt-[40px] gap-[24px] lg:gap-[80px]">
          <p className="onest text-[16px] leading-[16px] font-[300] text-txt">
            Navigation
          </p>
          <div>
            <div className="gap-[40px] flex items-center">
              <Link
                href="/about"
                className="flex items-center underline leading-[16px] text-txt text-[14px] gap-[10px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                >
                  <path
                    d="M4.16806 9.33343L4.16797 3.33352L5.5013 3.3335L5.50138 8.0001L12.2826 8.00016L9.64944 5.36701L10.5922 4.4242L14.8349 8.66683L10.5922 12.9095L9.64944 11.9667L12.2826 9.3335L4.16806 9.33343Z"
                    fill="#202020"
                  />
                </svg>
                About us
              </Link>
              <Link
                href="/master"
                className="flex items-center underline leading-[16px] text-txt text-[14px] gap-[10px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                >
                  <path
                    d="M4.16806 9.33343L4.16797 3.33352L5.5013 3.3335L5.50138 8.0001L12.2826 8.00016L9.64944 5.36701L10.5922 4.4242L14.8349 8.66683L10.5922 12.9095L9.64944 11.9667L12.2826 9.3335L4.16806 9.33343Z"
                    fill="#202020"
                  />
                </svg>
                Master Program
              </Link>
          
            </div>
            <div className="gap-[40px] pt-[24px] flex items-center">
            <Link
                href="/our network"
                className="flex items-center  underline leading-[16px] text-txt text-[14px] gap-[10px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                >
                  <path
                    d="M4.16806 9.33343L4.16797 3.33352L5.5013 3.3335L5.50138 8.0001L12.2826 8.00016L9.64944 5.36701L10.5922 4.4242L14.8349 8.66683L10.5922 12.9095L9.64944 11.9667L12.2826 9.3335L4.16806 9.33343Z"
                    fill="#202020"
                  />
                </svg>
                Our network
              </Link>
        
           
            </div>
          
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Footer;
