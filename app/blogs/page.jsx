"use client"
import BlogGrid from '@/components/blog/BlogGrid'
import BlogHero from '@/components/blog/BlogHero'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import React from 'react'

const Blog = () => {
  return (
    <div className='relative  min-h-screen w-full'>
<Navbar/>
<BlogHero/>
<BlogGrid/>
<Footer/>
    </div>
  )
}

export default Blog