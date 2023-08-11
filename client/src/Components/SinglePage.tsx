import React, { useEffect, useState } from "react";
import Home from "./Home";
import Recent from "./Recent";
import Portfolio from "./Portfolio";
import Services from "./Services";
import Contact from "./Contact";
import Aos from "aos";



const SinglePage = () => {
  useEffect(() => {
    Aos.init();
  }, []);
   
  return (
    <div>
      <section id="home" data-aos="zoom-in-up" data-aos-duration="1000" data-aos-mirror="true">
        <Home />
      </section>
      <section id="recent" data-aos="fade-right" data-aos-duration="1000" data-aos-mirror="true">
        <Recent />
      </section>
      <section id="portfolio" data-aos="fade-down" data-aos-duration="1000" data-aos-mirror="true">
        <Portfolio/>
      </section>
      <section id="services" data-aos="zoom-in" data-aos-duration="1000" data-aos-mirror="true">
        <Services />
      </section>
      <section id="contact" data-aos="fade-up" data-aos-duration="1000" data-aos-mirror="true">
        <Contact />
      </section>
    </div>
  );
};

export default SinglePage;

