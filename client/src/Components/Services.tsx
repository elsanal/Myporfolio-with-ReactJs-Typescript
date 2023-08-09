import Aos from "aos";
import { useEffect, useState } from "react";
import { Service } from "../models";
import { service } from "../firebase";
import {
  getDocs,
  orderBy,
  query
} from "firebase/firestore";
import ReactHtmlParser from "html-react-parser";
import connect_to_database from "../mongodb";



const Services = () => {
  const [services, setServices] = useState<any>([]);
  
  const getPost = async () => {
    try {
      connect_to_database({collection:'service', setResponse:setServices});
    } catch (error) {
      alert("there is an error");
    }
  };
  getPost();
  useEffect(() => {
    Aos.init();
  
  }, []);

  return (
    <div className="flex flex-col items-center bg-recent-bg text-black w-full h-fit">
      <span className="pt-20 text-5xl font-varela_round font-bold">
        Services
      </span>
      <span className="h-1.5 w-24 mt-3 rounded bg-orange self-center"></span>
      <span className="w-full sm:w-4/5 lg:w-3/5 text-justify p-3 break-keep font-roboto_italic text-xl mt-4">
        Us a freelancer, you can hire me to build different kind of apps or
        others services that are listed below.
      </span>
      <div
        className="flex flex-row flex-wrap px-2 mt-4 
        self-around w-full"
      >
        {services.map((item:any, index:number) => (
          <div
            data-aos="flip-left"
            data-aos-duration="1000"
            data-aos-mirror="true"
            className="flex flex-col bg-blur-bg text-black 
          font-roboto m-2 w-80 rounded hover:scale-95"
          >
            <div className="self-center text-2xl p-2 bg-white w-full">
              {item.title}
            </div>
            <svg
              xmlns={item.icon_id}
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1"
              stroke="orange"
              className=" fill-current self-center"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
              />
            </svg>
            <div className="self-start text-left text-sm bg-gray text-white p-2 rounded-b-md">
              {ReactHtmlParser(item.description)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
