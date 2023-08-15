import React, { useEffect, useState } from "react";
import getPost from "../mongodb";
import Aos from "aos";
import Loading from "./Loading";


function Resume() {
  const [cv, setCV] = useState<any[]>([]);
  useEffect(() => {
    Aos.init();
    getPost({ collection: "resume", setResponse: setCV });
  }, []);

  const makeLevel = (level: string) => {
    if(level === "Fluent"){return '90%'}
    else if(level === "Native"){return '94%'}
    else{return '70%'}
  };

  return (
    <div className="flex flex-col items-center bg-recent-bg text-black w-full h-fit">
      <span className="pt-24 text-5xl font-varela_round font-bold">Resume</span>
      <span className="h-1.5 w-24 mt-3 mb-6 rounded bg-orange self-center"></span>
      {cv.length > 0 ? (
        <div className="flex flex-row flex-wrap mb-3 items-start justify-around w-full">
          <div className="flex flex-col w-full p-2 rounded-md bg-blur-bg text-white m-1 md:w-[30%]"
                data-aos="fade-right" data-aos-duration="1000" data-aos-mirror="true">
            <div className="flex flex-col text-3xl font-bold ">Experiences</div>
            {cv[0].experiences.map((sk: any) => (
              <div className="mb-5">
                <div className="flex w-full justify-between">
                  <span><span className="text-white text-xl">☀</span> {sk.experience}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col w-full p-2 rounded-md bg-blur-bg text-white m-1 md:w-[30%]"
                data-aos="zoom-in-down" data-aos-duration="1000" data-aos-mirror="true">
            <div className="flex flex-col text-3xl font-bold ">Skills</div>
            {cv[0].skills.map((sk: any, index: number) => (
              <div className="mb-5">
                <div className="flex w-full justify-between">
                  <span>{sk.name}</span>
                  <span>{sk.level}</span>
                </div>
                <div className="w-full h-3 bg-white">
                  <div className={` bg-black h-3`}
                        style={{width: `${sk.level}`}}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col w-full p-2 rounded-md bg-blur-bg text-white m-1 md:w-[30%]"
              data-aos="fade-right" data-aos-duration="1000" data-aos-mirror="true">
            <div className="flex flex-col text-3xl font-bold ">Languages</div>
            {cv[0].languages.map((sk: any, index: number) => (
              <div className="mb-5">
                <div className="flex w-full justify-between">
                  <span>{sk.name}</span>
                  <span>{sk.level}</span>
                </div>
                <div className="w-full h-3 bg-white">
                  <div className={`bg-black h-3`} style={{width: `${makeLevel(sk.level)}`}}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : <div className="flex h-screen w-full bg-black justify-center items-center"><Loading/></div>
      }
    </div>
  );
}

export default Resume;
