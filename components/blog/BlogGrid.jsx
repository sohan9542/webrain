import React, { useEffect, useState } from 'react'
import BlogComponent from './BlogComponent'
import Image from 'next/image'
import { get__all__post } from '@/sanity/api'

const BlogGrid = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        async function getpost() {
            const posts = await get__all__post();
            // console.log("posts", posts)
            setPosts(posts)
        }
        getpost()
    }, [])

    // console.log("posts", posts)
    return (
        <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="row g-5">

                    <div className="col-lg-8">

                        <div className='grid grid-cols-1 gap-[20px] lg:grid-cols-2'>
                            {
                                posts?.map((item, ind) => (
                                    <BlogComponent key={ind} item={item} />
                                ))
                            }

                        </div>
                    </div>

                    <div className="col-lg-4">

                        <div className="mb-5 wow slideInUp" data-wow-delay="0.1s">
                            <div className="input-group">
                                <input type="text" className="form-control p-3" placeholder="Keyword" />
                                <button className="btn btn-primary px-4"><i className="bi bi-search"></i></button>
                            </div>
                        </div>

                        <div className="mb-5 wow slideInUp" data-wow-delay="0.1s">
                            <div className="section-title section-title-sm position-relative pb-3 mb-4">
                                <h3 className="mb-0">Categories</h3>
                            </div>
                            <div className="link-animated d-flex flex-column justify-content-start">
                                <a className="h5 fw-semi-bold bg-light rounded py-2 px-3 mb-2" href="#"><i className="bi bi-arrow-right me-2"></i>Web Design</a>
                                <a className="h5 fw-semi-bold bg-light rounded py-2 px-3 mb-2" href="#"><i className="bi bi-arrow-right me-2"></i>Web Development</a>
                                <a className="h5 fw-semi-bold bg-light rounded py-2 px-3 mb-2" href="#"><i className="bi bi-arrow-right me-2"></i>Web Development</a>
                                <a className="h5 fw-semi-bold bg-light rounded py-2 px-3 mb-2" href="#"><i className="bi bi-arrow-right me-2"></i>Keyword Research</a>
                                <a className="h5 fw-semi-bold bg-light rounded py-2 px-3 mb-2" href="#"><i className="bi bi-arrow-right me-2"></i>Email Marketing</a>
                            </div>
                        </div>

                        <div className="mb-5 wow slideInUp" data-wow-delay="0.1s">
                            <div className="section-title section-title-sm position-relative pb-3 mb-4">
                                <h3 className="mb-0">Recent Post</h3>
                            </div>
                            <div className="d-flex rounded overflow-hidden mb-3">
                                <Image
                                    width={500}
                                    height={500}
                                    alt='hello'
                                    src={"/img/blog-1.jpg"}
                                    className="img-fluid object-cover"
                                    style={{ width: "100px", height: "100px" }}
                                />
                                {/* <img className="img-fluid" src="img/blog-1.jpg" style="width: 100px; height: 100px; object-fit: cover;" alt=""> */}
                                <a href="" className="h5 fw-semi-bold d-flex align-items-center bg-light px-3 mb-0">Lorem ipsum dolor sit amet adipis elit
                                </a>
                            </div>

                        </div>

                        {/* <div className="mb-5 wow slideInUp" data-wow-delay="0.1s">
                    <img src="img/blog-1.jpg" alt="" className="img-fluid rounded">
                </div> */}

                        <div className="mb-5 wow slideInUp" data-wow-delay="0.1s">
                            <div className="section-title section-title-sm position-relative pb-3 mb-4">
                                <h3 className="mb-0">Tag Cloud</h3>
                            </div>
                            <div className="d-flex flex-wrap m-n1">
                                <a href="" className="btn btn-light m-1">Design</a>
                                <a href="" className="btn btn-light m-1">Development</a>
                                <a href="" className="btn btn-light m-1">Marketing</a>
                                <a href="" className="btn btn-light m-1">SEO</a>
                                <a href="" className="btn btn-light m-1">Writing</a>
                                <a href="" className="btn btn-light m-1">Consulting</a>
                                <a href="" className="btn btn-light m-1">Design</a>
                                <a href="" className="btn btn-light m-1">Development</a>
                                <a href="" className="btn btn-light m-1">Marketing</a>
                                <a href="" className="btn btn-light m-1">SEO</a>
                                <a href="" className="btn btn-light m-1">Writing</a>
                                <a href="" className="btn btn-light m-1">Consulting</a>
                            </div>
                        </div>


                        <div className="wow slideInUp" data-wow-delay="0.1s">
                            <div className="section-title section-title-sm position-relative pb-3 mb-4">
                                <h3 className="mb-0">Plain Text</h3>
                            </div>
                            <div className="bg-light text-center p-[30px]" >
                                <p>Vero sea et accusam justo dolor accusam lorem consetetur, dolores sit amet sit dolor clita kasd justo, diam accusam no sea ut tempor magna takimata, amet sit et diam dolor ipsum amet diam</p>
                                <a href="" className="btn btn-primary py-2 px-4">Read More</a>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}
// export async function getServerSideProps() {
//     // Fetch data from an API, database, or any other source
//     const posts = await get__all__post();

//     // console.log("my assets", work);

//     // Pass data to the page component as props
//     return {
//       props: {
//         posts: posts,

//       },
//     };
//   }
export default BlogGrid