import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import getPost from "../mongodb";

const Home = () => {

  const [contacts, setContacts] = useState<any[]>([]);
  useEffect(() => {
    AOS.init();
    getPost({collection:'about', setResponse:setContacts});
  }, []);

  return (
    <div className="flex flex-col w-screen h-fit font-varela_round bg-black bg-profile-2 lg:bg-profile-1 
                  align-middle bg-no-repeat
                  bg-cover bg-center">
      <div className="flex flex-col items-center justify-center w-fit
                   h-screen sm:bg-gradient-to-r sm:from-black ">
        <h1 className="text-sm self-center text-white font-bold sm:text-7xl animate-ping">
          ALOUTE SANA
        </h1>
        <div className="flex w-full self-center bg-blur-bg sm:bg-transparent p-4 sm:w-2/3 rounded-lg m-2 animate-ping">
          <span className="text-xl text-justify text-white font-roboto_italic sm:text-white">
            I am fullstack developper and AI engineer. I am currently doing my
            Master research on Person re-identification at Beihang University. I
            am open to long term internship or intern position in web & mobile
            development or computer vision field.
          </span>
        </div>
        <a href="#portfolio">
        <button 
          className="bg-orange hover:bg-red mt-10 px-5 py-3 
        text-4xl rounded-lg hover:text-white self-center
        animate-pulse">
          Portfolio
        </button>
        </a>
      </div>
    </div>
  );
};

export default Home;
