import React, { useEffect, useState } from "react";
import Home from "./Home";
import Recent from "./Recent";
import Portfolio from "./Portfolio";
import Services from "./Services";
import Contact from "./Contact";
import Aos from "aos";
import connect_to_database from "../mongodb";


const SinglePage = () => {
  const [posts, setPosts] = useState<any>([]);
  var i = 0
  var text = ''
  while (i < 10) {
    text += "The number is " + i;
    i++;
  }
  useEffect(() => {
    Aos.init();
    console.log("SinglePage")
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

