import React from "react";
import Image from "next/image";
const Startup = () => {
  return (
    <div className="grid grid-cols-1  lg:grid-cols-3">
      <div className="lg:col-span-2 overflow-hidden">
        <Image
          width={1200}
          height={600}
          className="w-full h-[400px] lg:h-[550px] s_img object-cover"
          src={"/img/carousel-2.jpg"}
        />
      </div>
      <a target="_blank" href="https://calendly.com/ges-guglielmo/30min?month=2023-11" className="w-full h-[400px] lg:h-full md_rv overflow-hidden relative bg-[#193E2C]">
        <div className="absolute rv -bottom-[700px]   -left-[300px] w-full bg-[#43AA13] opacity-[0.08] h-full"></div>
        <div className="absolute top-0 left-0 z-20 w-full h-full p-[24px]">
          <p  className="text-[40px] popins  text-[#FCFAF2] font-[300] leading-[48px]">
            Ignite Your Startup Journey.
          </p>
          <p  className="text-[40px] popins mt-1  text-[#43AA13] font-[500] leading-[48px]">
          Learn, launch, raise
          </p>
        </div>
        <div className="absolute bottom-[40px] right-[40px] z-20">
        <svg xmlns="http://www.w3.org/2000/svg" className="sv_vv" width="48" height="48" viewBox="0 0 48 48" fill="none">
  <path d="M32.3432 21.9998L21.6152 11.2718L24.4436 8.44336L40 23.9998L24.4436 39.556L21.6152 36.7276L32.3432 25.9998H8V21.9998H32.3432Z" fill="#43AA13"/>
</svg>
        </div>
      </a>
    </div>
  );
};

export default Startup;
