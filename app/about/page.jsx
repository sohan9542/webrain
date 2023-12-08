"use client";

import AboutHero from '@/components/about/AboutHero'
import Empower from '@/components/about/Empowering';
import Footer from '@/layouts/Footer';
import Navbar from '@/layouts/Navbar'
import React from 'react'
import AboutHome from "@/components/home/About"
import Startup from '@/components/about/Startup';
const About = () => {
  return (
    <main className="relative bg-[#143022] min-h-screen">
        <Navbar/>
        <AboutHero/>
        <Empower/>
        <AboutHome/>
        <Startup/>
        <Footer/>
        </main>
  )
}

export default About