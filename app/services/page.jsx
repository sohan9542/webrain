"use client"

import ServiceHero from '@/components/service/ServiceHero'
import Footer from '@/layouts/Footer'
import Navbar from '@/layouts/Navbar'
import React from 'react'
import HomeServices from "@/components/home/Services"
const Services = () => {
    return (
        <div className='w-full min-h-screen relative'>
            <Navbar/>
            <ServiceHero/>
            <HomeServices/>
            <Footer/>
        </div>
    )
}

export default Services