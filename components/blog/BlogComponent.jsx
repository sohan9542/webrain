import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
export const format__date = (isoDate) => {
  const date = new Date(isoDate);

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  const formattedDate = `${date.getDate()} ${months[date.getMonth()]}, ${date.getFullYear()}`;
  return formattedDate
}
const BlogComponent = ({ item }) => {
console.log(item)
  return (
    <Link href={`/blog/${item?.slug?.current}`}  className="w-full">
      <div className="blog-item bg-[#FAF5E2] rounded overflow-hidden">
        <div className="blog-img position-relative h-[332px] overflow-hidden">
          <Image
            width={500}
            height={500}
            src={item?.mainImage}
            className="img-fluid "
          />
          {/* <img className="img-fluid" src="img/blog-1.jpg" alt=""> */}
          <p
            className="position-absolute top-0 start-0 bg-dark text-white rounded-end mt-5 py-2 px-4"
           
          >
            {item?.categories?.[0]?.title}
          </p>
        </div>
        <div className="p-4">
          <div className="d-flex mb-3">
            <small className="me-3 text-dark">
              <i className="far fa-user text-dark me-2"></i>{item?.author?.name}
            </small>
            <small className='text-dark'>
              <i className="far fa-calendar-alt text-dark me-2"></i>
              {format__date(item?.publishedAt)}
            </small>
          </div>

          
          <h4 className="mb-3 text-[25px]">{item?.title}</h4>
          <p className="pb-3 text-dark">
            Dolor et eos labore stet justo sed est sed sed sed dolor stet
            amet
          </p>
          <p className="text-uppercase text-dark" >
            Read More <i className="bi bi-arrow-right"></i>
          </p>
        </div>
      </div>
    </Link>
  )
}

export default BlogComponent