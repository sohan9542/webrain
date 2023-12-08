"use client";

import About from "@/components/home/About";
import BlogSection from "@/components/home/BlogSection";
import Hero from "@/components/home/Hero";
import Explore from "@/components/home/Projects";
import Services from "@/components/home/Services";
import Testimonials from "@/components/home/Testimonial";
import Footer from "@/layouts/Footer";
import Navbar from "@/layouts/Navbar";

import { useEffect } from "react";
export default function Home() {
  // useEffect(() => {

  //   document.addEventListener('contextmenu', function(e) {
  //     e.preventDefault();
  //   });
  // }, [])

  return (
    <main className="relative bg-[#143022] min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Explore />
      <BlogSection />
      <Footer/>
    </main>
  );
}
