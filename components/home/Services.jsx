import React from "react";

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
            <h1 className="mb-0 text-[32px] lg:text-[56px]" >We're a full service digital agency</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-[50px] w-full">
            <div className="service-item bg-[#FAF5E2] w-full rounded d-flex flex-column align-items-center justify-content-center text-center">
              <div className="service-icon ">
                {/* <i className="bi bi-amd text-white"></i> */}
                <i className="fa fa-chart-pie text-white"></i>
              </div>
              <h4 className="mb-3">Web Design</h4>
              <p className="m-0">
                Responsive & interactive design with engaging web experiences.
              </p>
              <a className="btn btn-lg bg-dark btn-primary rounded" href="">
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
            <div className="service-item w-full bg-[#FAF5E2] rounded d-flex flex-column align-items-center justify-content-center text-center">
              <div className="service-icon">
                <i className="fa fa-code text-white"></i>
              </div>
              <h4 className="mb-3">Web Development</h4>
              <p className="m-0">
                Custom web application & websites development that will help you
                to grow up.
              </p>
              <a className="btn btn-lg btn-primary  bg-dark  rounded" href="">
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
            <div className="service-item bg-[#FAF5E2] rounded d-flex flex-column align-items-center justify-content-center text-center">
              <div className="service-icon">
                <i className="fa fa-chart-line text-white"></i>
              </div>
              <h4 className="mb-3">Upgrade Website</h4>
              <p className="m-0">
                Make your existing website even better & add new custom
                features.
              </p>
              <a className="btn btn-lg btn-primary  bg-dark  rounded" href="">
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
            <div className="service-item bg-[#FAF5E2] rounded d-flex flex-column align-items-center justify-content-center text-center">
              <div className="service-icon">
                <i className="fa fa-bug text-white"></i>
              </div>
              <h4 className="mb-3">Bug Fixing</h4>
              <p className="m-0">
                We can help you to make your product totally bug free & secure.
              </p>
              <a className="btn btn-lg btn-primary  bg-dark  rounded" href="">
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
            <div className="service-item bg-[#FAF5E2] rounded d-flex flex-column align-items-center justify-content-center text-center">
              <div className="service-icon">
                <i className="fa fa-home text-white"></i>
              </div>
              <h4 className="mb-3">Support & Maintenance</h4>
              <p className="m-0">
                We offer monthly / annually support for your website & help you
                to maintain.
              </p>
              <a className="btn btn-lg btn-primary  bg-dark  rounded" href="">
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
            <div style={{height:"100%"}} className="bg-dark btn btn-primary w-full cursor-pointer   h-full ">
              <div style={{height:"100%"}} className="flex items-center justify-center flex-col h-full w-full">
                <div className="service-icon pb-3">
                  <i className="fa fa-plus  text-[28px]  text-white"></i>
                </div>
                <h4 className="mb-3 text-white">Get A Quote</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
