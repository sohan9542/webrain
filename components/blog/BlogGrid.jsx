import React, { useEffect, useState } from 'react'
import BlogComponent from './BlogComponent'
import Image from 'next/image'
import { get__all__post } from '@/sanity/api'
import BlogSidebar from './BlogSidebar'

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
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-[20px]">

                    <div className=" lg:col-span-2">

                        <div className='grid grid-cols-1 gap-[20px] lg:grid-cols-2'>
                            {
                                posts?.map((item, ind) => (
                                    <BlogComponent key={ind} item={item} />
                                ))
                            }

                        </div>
                    </div>

                  <BlogSidebar/>

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