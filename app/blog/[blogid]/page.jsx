"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Navbar from '@/layouts/Navbar'
import Footer from '@/layouts/Footer'
import PortableText from 'react-portable-text'
import { get__all__categories, get__latest__post, get__post__by__slug } from '@/sanity/api'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import BlogSidebar from '@/components/blog/BlogSidebar'
const SingleBlog = () => {
    const { blogid } = useParams()
    // console.log("blogid", blogid)
    const [posts, setPosts] = useState(null)

    useEffect(() => {
        async function getpost() {
            const post = await get__post__by__slug(blogid);
            // console.log("posts", posts)
            setPosts(post)
        }
        if (blogid) {
            getpost()
        }

  
    }, [blogid])

    return (
        <div className='min-h-screen w-full relative'>
            <Navbar />
            <div className="container ">


                <div className=" w-full pt-[80px] grid grid-cols-1 lg:grid-cols-3 gap-[20px]">
                    <div className="lg:col-span-2">

                        <div className="mb-5 custom_div">

                            {posts && <PortableText
                                // Pass in block content straight from Sanity.io
                                content={posts?.content}
                                projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                                dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                                // Optionally override marks, decorators, blocks, etc. in a flat
                                // structure without doing any gymnastics
                                serializers={{
                                    h1: (props) => <h1  {...props} />,
                                    h2: (props) => <h2 className='mt-[30px] mb-3' {...props} />,
                                    normal: (props) => <p className='my-[6px]' {...props} />,
                                    li: ({ children }) => <li className="my-[3px]">{children}</li>,

                                }}
                            />}

                        </div>

                        {/* <div className="mb-5">
                <div className=" -sm position-relative pb-3 mb-4">
                    <h3 className="mb-0">3 Comments</h3>
                </div>
                <div className="d-flex mb-4">
                    <img src="img/user.jpg" className="img-fluid rounded" style="width: 45px; height: 45px;">
                    <div className="ps-3">
                        <h6><a href="">John Doe</a> <small><i>01 Jan 2045</i></small></h6>
                        <p>Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore
                            accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed eirmod</p>
                        <button className="btn btn-sm btn-light">Reply</button>
                    </div>
                </div>
                <div className="d-flex mb-4">
                    <img src="img/user.jpg" className="img-fluid rounded" style="width: 45px; height: 45px;">
                    <div className="ps-3">
                        <h6><a href="">John Doe</a> <small><i>01 Jan 2045</i></small></h6>
                        <p>Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore
                            accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed eirmod</p>
                        <button className="btn btn-sm btn-light">Reply</button>
                    </div>
                </div>
                <div className="d-flex ms-5 mb-4">
                    <img src="img/user.jpg" className="img-fluid rounded" style="width: 45px; height: 45px;">
                    <div className="ps-3">
                        <h6><a href="">John Doe</a> <small><i>01 Jan 2045</i></small></h6>
                        <p>Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore
                            accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed eirmod</p>
                        <button className="btn btn-sm btn-light">Reply</button>
                    </div>
                </div>
            </div>
    
            <div className="bg-light rounded p-5">
                <div className=" -sm position-relative pb-3 mb-4">
                    <h3 className="mb-0">Leave A Comment</h3>
                </div>
                <form>
                    <div className="row g-3">
                        <div className="col-12 col-sm-6">
                            <input type="text" className="form-control bg-white border-0" placeholder="Your Name" style="height: 55px;">
                        </div>
                        <div className="col-12 col-sm-6">
                            <input type="email" className="form-control bg-white border-0" placeholder="Your Email" style="height: 55px;">
                        </div>
                        <div className="col-12">
                            <input type="text" className="form-control bg-white border-0" placeholder="Website" style="height: 55px;">
                        </div>
                        <div className="col-12">
                            <textarea className="form-control bg-white border-0" rows="5" placeholder="Comment"></textarea>
                        </div>
                        <div className="col-12">
                            <button className="btn btn-primary w-100 py-3" type="submit">Leave Your Comment</button>
                        </div>
                    </div>
                </form>
            </div>
         */}
                    </div>


                  <BlogSidebar/>

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default SingleBlog