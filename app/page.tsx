import React from "react";
import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";
import Work from "./_components/Work";
import Marquee from "./_components/Marquee";
import ImpactSection from "./_components/ImpactSection";
import ServicesSection from "./_components/ServicesSection";
import Projects from "./_components/Projects";
import Process from "./_components/Process";
import Testimonials from "./_components/Testimonials";
import Pricing from "./_components/Pricing";
import Faq from "./_components/Faq";
import Blog from "./_components/Blog";
import CTAFooter from "./_components/Cta";


export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Work/>
      <Marquee />
      <ImpactSection/>
      <ServicesSection/>
      <Projects/>
      <Process/>
      <Testimonials/>
      <Pricing/>
      <Faq/>
      <Blog/>
      <CTAFooter/>

    </div>
  );
}