
import { get__all__categories, get__latest__post } from '@/sanity/api'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
const BlogSidebar = () => {
    const [categories, setCategories] = useState([])
    const [recentPosts, setRecentPosts] = useState([])

    useEffect(() => {
        async function getcategory() {
            const categories = await get__all__categories();
            console.log("categories", categories)

            setCategories(categories)
        }
        getcategory()

        async function get__new__post() {
            const posts = await get__latest__post();
            setRecentPosts(posts);
        }
        get__new__post();
    }, [])

    return (
        <div className='w-full'>

            {/* <div className="mb-5 wow slideInUp" data-wow-delay="0.1s">
        <div className="input-group">
            <input type="text" className="form-control p-3" placeholder="Keyword" />
            <button className="btn bg-dark btn-primary px-4"><i className="bi bi-search"></i></button>
        </div>
    </div> */}

            <div className="mb-5 wow slideInUp" data-wow-delay="0.1s">
                <div className="= -sm position-relative pb-3 mb-4">
                    <h3 className="mb-0">Categories</h3>
                </div>
                <div className="link-animated d-flex flex-column justify-content-start">
                    {categories?.map((item, ind) => (
                        <Link key={ind} className="h5 fw-semi-bold bg-light rounded py-2 px-3 mb-2" href={`/blog?category=${item?.description}`}>
                            <i className="bi bi-arrow-right me-2"></i>{item?.title}
                        </Link>

                    ))}

                </div>
            </div>

            <div className="mb-5" >
                <div className=" -sm position-relative pb-3 mb-4">
                    <h3 className="mb-0">Recent Posts</h3>
                </div>
                {recentPosts?.map((item, ind) => (
                    <Link href={`/blog/${item?.slug?.current}`} key={ind} className="flex items-center rounded bg-[#FAF5E2] hover:text-pr overflow-hidden mb-3">
                        <Image
                            width={500}
                            height={500}
                            alt={item?.title}
                            src={item?.mainImage}
                            className="img-fluid object-cover"
                            style={{ width: "100px", height: "100px" }}
                        />

                        <p className="h5 fw-semi-bold d-flex align-items-center bg-light px-3 mb-0">{item?.title}
                        </p>
                    </Link>
                ))}


            </div>

            {/* <div className="mb-5 wow slideInUp" data-wow-delay="0.1s">
<img src="img/blog-1.jpg" alt="" className="img-fluid rounded">
</div> */}

            {/* <div className="mb-5 wow slideInUp" data-wow-delay="0.1s">
        <div className=" -sm position-relative pb-3 mb-4">
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
    </div> */}

            <div className="wow slideInUp" data-wow-delay="0.1s">
                <div className=" -sm position-relative pb-3 mb-4">
                    <h3 className="mb-0">Description</h3>
                </div>
                <div className="bg-light text-center p-[30px]" >
                    <p>We provide all the service that you learn here. <br /> Let's build a best product together. </p>
                    <a href="https://calendly.com/d/5cz-73r-4nv" target='_blank' className="btn btn-primary py-2 px-4 mt-4">Schedule a Meeting</a>
                </div>
            </div>

        </div>
    )
}

export default BlogSidebar