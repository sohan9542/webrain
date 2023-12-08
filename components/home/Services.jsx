import React from "react";
import Link from "next/link";
const Services = () => {
  return (
    <>
      <div className="container-fluid  wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div
            className="text-center position-relative pb-3 mb-5 mx-auto"
            style={{ maxWidth: "600px" }}
          >
            <h5 className="fw-bold text-primary text-uppercase">
              Our Services
            </h5>
            <h1 className="mb-0 text-[32px] lg:text-[56px] text-white" >We're a full service digital agency</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-[50px] w-full">
            <div className="service-item  bg-dark w-full border-[1px] border-pr rounded d-flex flex-column align-items-center justify-content-center text-center">
              <div className="service-icon ">
                {/* <i className="bi bi-amd text-white"></i> */}
                <i className="fa fa-chart-pie text-white"></i>
              </div>
              <h4 className="mb-3 text-white">Web Design</h4>
              <p className="m-0 text-white">
                Responsive & interactive design with engaging web experiences.
              </p>
              <Link href="/services" className="btn btn-lg bg-dark btn-primary rounded" >
                <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
            <div className="service-item w-full border-[1px] border-pr  bg-dark rounded d-flex flex-column align-items-center justify-content-center text-center">
              <div className="service-icon">
                <i className="fa fa-code text-white"></i>
              </div>
              <h4 className="mb-3 text-white">Web Development</h4>
              <p className="m-0 text-white">
                Custom web application & websites development that will help you
                to grow up.
              </p>
              <Link href="/services" className="btn btn-lg bg-dark btn-primary rounded" >
                <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
            <div className="service-item border-[1px] border-pr  bg-dark rounded d-flex flex-column align-items-center justify-content-center text-center">
              <div className="service-icon">
                <i className="fa fa-chart-line text-white"></i>
              </div>
              <h4 className="mb-3 text-white">Upgrade Website</h4>
              <p className="m-0 text-white">
                Make your existing website even better & add new custom
                features.
              </p>
              <Link href="/services" className="btn btn-lg bg-dark btn-primary rounded">
                <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
            <div className="service-item border-[1px] border-pr bg-dark rounded d-flex flex-column align-items-center justify-content-center text-center">
              <div className="service-icon">
                <i className="fa fa-bug text-white"></i>
              </div>
              <h4 className="mb-3 text-white">Bug Fixing</h4>
              <p className="m-0 text-white">
                We can help you to make your product totally bug free & secure.
              </p>
              <Link href="/services" className="btn btn-lg bg-dark btn-primary rounded" >
                <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
            <div className="service-item border-[1px] border-pr bg-dark rounded d-flex flex-column align-items-center justify-content-center text-center">
              <div className="service-icon">
                <i className="fa fa-home text-white"></i>
              </div>
              <h4 className="mb-3 text-white">Support & Maintenance</h4>
              <p className="m-0 text-white">
                We offer monthly / annually support for your website & help you
                to maintain.
              </p>
              <Link href="/services" className="btn btn-lg bg-dark btn-primary rounded" >
                <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
            <a href="https://calendly.com/d/5cz-73r-4nv" target="_blank" style={{height:"100%"}} className="bg-dark btn btn-primary w-full cursor-pointer   h-full ">
              <div style={{height:"100%"}} className="flex items-center justify-center flex-col h-full w-full">
                <div className="service-icon flex items-center justify-center">
                  <i className="fa fa-plus  text-[28px]  text-white"></i>
                </div>
                <h4 className="mb-3 text-white">Get A Quote</h4>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
