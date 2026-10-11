"use client"

import ServiceHero from '@/components/service/ServiceHero'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import React from 'react'

import DescribeService from '@/components/service/DescribeService'
const Services = () => {
    return (
        <div className='w-full bg-[#143022] min-h-screen relative'>
            <Navbar/>
            <ServiceHero/>
            <DescribeService/>
     
            <Footer/>
        </div>
    )
}

export default Services