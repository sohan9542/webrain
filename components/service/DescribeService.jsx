import React from 'react'

const DescribeService = () => {
    return (
        <div className='min-h-screen py-[80px] w-full'>
            <div className="container">
                <h1 className="mb-0 text-end text-[32px] text-white lg:text-[56px]">
                    WEB DESIGN
                </h1>
                <div className=' grid grid-cols-1 lg:grid-cols-3 bg-dark divide-x-[1px] divide-pr w-full border-[1px] border-pr rounded'>
                    <div className='py-[10px] w-full border-b-[1px] border-pr'>
                        <p className='text-center text-pr'>CATEGORY</p>
                    </div>
                    <div className='py-[10px] w-full border-b-[1px] border-pr'>
                        <p className='text-center text-pr'>SERVICES</p>
                    </div>
                    <div className='py-[10px] w-full border-b-[1px] border-pr'>
                        <p className='text-center text-pr'>TECHNOLOGY</p>
                    </div>

                    {/* web design */}
                    <div className='py-[80px] px-[60px] flex flex-col items-center'>
                        <div className="service-icon ">
                            {/* <i className="bi bi-amd text-white"></i> */}
                            <i className="fa fa-chart-pie text-white"></i>
                        </div>
                        <h4 className="mb-3 text-white">Web Design</h4>
                        <p className="m-0 text-white text-center">
                            Responsive & interactive design with engaging web experiences.
                        </p>

                    </div>
                    <div className='py-[80px] px-[60px] flex flex-col items-start justify-center'>
                        <h5 className="mb-3 text-white">
                            <i className="fa fa-check text-pr me-3"></i>Smooth & Interactive Design
                        </h5>
                        <h5 className="mb-3 text-white">
                            <i className="fa fa-check text-primary me-3"></i>Design and Wireframing
                        </h5>
                        <h5 className="mb-3 text-white">
                            <i className="fa fa-check text-primary me-3"></i>UI / UX Design
                        </h5>
                        <h5 className="mb-3 text-white">
                            <i className="fa fa-check text-primary me-3"></i>Desktop, Tablet, Mobile Screens
                        </h5>
                        <h5 className="mb-3 text-white">
                            <i className="fa fa-check text-primary me-3"></i>Engaging web experiences.
                        </h5>

                    </div>
                    <div className='py-[80px] px-[60px] flex flex-col items-start justify-center'>
                        <h5 className="mb-3 text-white">
                            <i className="fa fa-check text-pr me-3"></i>Figma
                        </h5>
                        <h5 className="mb-3 text-white">
                            <i className="fa fa-check text-pr me-3"></i>Canva
                        </h5>
                        <h5 className="mb-3 text-white">
                            <i className="fa fa-check text-pr me-3"></i>Adobi XD
                        </h5>


                    </div>
                    {/* end of web design */}
                </div>
                <h1 className="mb-0 mt-5 text-end text-[32px] text-white lg:text-[56px]">
                    WEB DEVELOPMENT
                </h1>
                <div className=' grid grid-cols-1 lg:grid-cols-3 bg-dark items-center divide-x-[1px] divide-pr w-full border-[1px] border-pr rounded'>
                    <div className='py-[10px] w-full border-b-[1px] border-pr'>
                        <p className='text-center text-pr'>CATEGORY</p>
                    </div>
                    <div className='py-[10px] w-full border-b-[1px] border-pr'>
                        <p className='text-center text-pr'>SERVICES</p>
                    </div>
                    <div className='py-[10px] w-full border-b-[1px] border-pr'>
                        <p className='text-center text-pr'>TECHNOLOGY</p>
                    </div>


                    <div className='py-[80px] px-[60px] flex flex-col items-center'>
                        <div className="service-icon ">
                            <i className="fa fa-code text-white"></i>
                        </div>
                        <h4 className="mb-3 text-white">Web Development</h4>
                        <p className="m-0 text-white text-center">
                            Custom web application & websites development with CMS (Content Management System)
                        </p>

                    </div>
                    <div className='py-[80px] px-[60px] flex flex-col items-start justify-center'>
                        <h5 className="mb-3 text-white">
                            <i className="fa fa-check text-pr me-3"></i>Corporate Website
                        </h5>
                        <h5 className="mb-3 text-white">
                            <i className="fa fa-check text-primary me-3"></i>E-commerce Solutions
                        </h5>
                        <h5 className="mb-3 text-white">
                            <i className="fa fa-check text-primary me-3"></i>Landing Pages
                        </h5>
                        <h5 className="mb-3 text-white">
                            <i className="fa fa-check text-primary me-3"></i>Portfolio Websites
                        </h5>
                        <h5 className="mb-3 text-white">
                            <i className="fa fa-check text-primary me-3"></i>Educational Platforms
                        </h5>
                        <h5 className="mb-3 text-white">
                            <i className="fa fa-check text-primary me-3"></i>Real Estate Websites
                        </h5>
                        <h5 className="mb-3 text-white">
                            <i className="fa fa-check text-primary me-3"></i>Booking and Reservation
                        </h5>
                        <h5 className="mb-3 text-white">
                            <i className="fa fa-check text-primary me-3"></i>Custom Solutions
                        </h5>

                    </div>
                    <div className='py-[80px] h-full px-[60px] grid grid-cols-2 items-start '>
                        <div className='flex flex-col items-start justify-center'>
                        <h5 className="mb-3 text-white">
                            <i className="fa fa-check text-pr me-3"></i>Html & Css
                        </h5>
                        <h5 className="mb-3 text-white">
                            <i className="fa fa-check text-pr me-3"></i>Javascript
                        </h5>
                        <h5 className="mb-3 text-white">
                            <i className="fa fa-check text-pr me-3"></i>React Js
                        </h5>
                        <h5 className="mb-3 text-white">
                            <i className="fa fa-check text-pr me-3"></i>Next Js
                        </h5>
                        <h5 className="mb-3 text-white">
                            <i className="fa fa-check text-pr me-3"></i>Sanity
                        </h5>
                        <h5 className="mb-3 text-white">
                            <i className="fa fa-check text-pr me-3"></i>Express js
                        </h5>
                        <h5 className="mb-3 text-white">
                            <i className="fa fa-check text-pr me-3"></i>Mongodb
                        </h5>
                        <h5 className="mb-3 text-white">
                            <i className="fa fa-check text-pr me-3"></i>And more
                        </h5>
                        </div>
                        <div className='flex flex-col items-start justify-center'>
                        <h5 className="mb-3 text-white">
                            <i className="fa fa-check text-pr me-3"></i>Tailwind Css
                        </h5>
                        <h5 className="mb-3 text-white">
                            <i className="fa fa-check text-pr me-3"></i>Bootstrap
                        </h5>
                        <h5 className="mb-3 text-white">
                            <i className="fa fa-check text-pr me-3"></i>Php 
                        </h5>
                        <h5 className="mb-3 text-white">
                            <i className="fa fa-check text-pr me-3"></i>My sql
                        </h5>
                        <h5 className="mb-3 text-white">
                            <i className="fa fa-check text-pr me-3"></i>Wordpress
                        </h5>
                     
                        </div>
                     
                    


                    </div>

                </div>
                <div className='mt-5 grid grid-cols-1 gap-[20px] lg:grid-cols-3'>
                <div className="service-item border-[1px] border-pr  bg-dark rounded d-flex flex-column align-items-center justify-content-center text-center">
              <div className="service-icon">
                <i className="fa fa-chart-line text-white"></i>
              </div>
              <h4 className="mb-3 text-white">Upgrade Website</h4>
              <p className="m-0 text-white">
                Make your existing website even better & add new custom
                features.
              </p>
              <a className="btn btn-lg btn-primary  bg-dark  rounded" href="">
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
            <div className="service-item border-[1px] border-pr bg-dark rounded d-flex flex-column align-items-center justify-content-center text-center">
              <div className="service-icon">
                <i className="fa fa-bug text-white"></i>
              </div>
              <h4 className="mb-3 text-white">Bug Fixing</h4>
              <p className="m-0 text-white">
                We can help you to make your product totally bug free & secure.
              </p>
              <a className="btn btn-lg btn-primary  bg-dark  rounded" href="">
                <i className="bi bi-arrow-right"></i>
              </a>
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
              <a className="btn btn-lg btn-primary  bg-dark  rounded" href="">
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
                </div>
            </div>
        </div>
    )
}

export default DescribeService