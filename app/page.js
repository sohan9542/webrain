"use client";

import About from "@/components/home/About";
import BlogSection from "@/components/home/BlogSection";
import Hero from "@/components/home/Hero";
import Explore from "@/components/home/Projects";
import Services from "@/components/home/Services";
import Testimonials from "@/components/home/Testimonial";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <main className="relative bg-[#143022] min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Explore />
      <Services />
      <Testimonials />
      <BlogSection />
      <Footer />
    </main>
  );
}
