import Aos from "aos";
import { useEffect, useState } from "react";
import ReactHtmlParser from "html-react-parser";
import getPost from "../mongodb";
import Loading from "./Loading";

const Services = () => {
  const [services, setServices] = useState<any>([]);
  useEffect(() => {
    Aos.init();
    getPost({ collection: "service", setResponse: setServices });
    console.log("service");
  }, []);

  return (
    <div className="flex flex-col items-center bg-grey text-black w-full h-fit">
      <span className="pt-20 text-5xl font-varela_round font-bold">
        Services
      </span>
      <span className="h-1.5 w-24 mt-3 rounded bg-orange self-center"></span>
      <span className="w-full sm:w-4/5 lg:w-3/5 text-justify p-3 break-keep font-roboto_italic text-xl mt-4">
        Us a freelancer, you can hire me to build different kind of apps or
        others services that are listed below.
      </span>
      {services.length > 0 ? (
        <div
          className="flex flex-row flex-wrap px-2 mt-4 
        self-around w-full justify-between items-start"
        >
          {services.map((item: any, index: number) => (
            <div
              data-aos="flip-left"
              data-aos-duration="1000"
              data-aos-mirror="true"
              className="flex flex-col bg-blur-bg text-black 
          font-roboto m-2 w-full md:w-[30%] rounded h-fit hover:scale-95"
            >
              <div className="self-center text-2xl p-2 bg-white w-full">
                {item.title}
              </div>
              <div className="flex justify-center items-center ">
                <img
                  src={`/images/${item.icon_id}.jpg`}
                  alt="Description of the image"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div className="self-start text-left text-sm bg-gray text-white p-2 rounded-b-md">
                {ReactHtmlParser(item.description)}
              </div>
            </div>
          ))}
        </div>
      ) : <div className="flex h-screen w-full bg-black justify-center items-center"><Loading/></div>
      }
    </div>
  );
};

export default Services;
