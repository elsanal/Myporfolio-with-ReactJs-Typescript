import { useEffect, useState } from "react";
import Aos from "aos";
import { Link } from "react-router-dom";
import getPost from "../mongodb";
import Loading from "./Loading";

const Recent = () => {
  const [posts, setPosts] = useState<any>([]);
  const getDate = (createdate: string) => {
    var date = new Date(createdate.substring(0, 9));
    return date.toDateString();
  };

  const setMax = (length: number) => {
    var max = 3;
    if(length < max) {
      max = length
    }
    return max
  }

  useEffect(() => {
    Aos.init();
    getPost({ collection: "project", setResponse: setPosts });
  }, []);

  return (
    <div className="flex flex-col pb-5 items-center bg-recent-bg text-black w-full h-fit">
      <span className="pt-24 text-5xl font-varela_round font-bold">
        Recent Projects
      </span>
      <span className="h-1.5 w-24 mt-3 rounded bg-orange self-center"></span>
      <span
        className="w-full p-3 text-justify break-keep font-roboto_italic text-xl mt-4
                        sm:w-4/5 "
      >
        Recently, I am working on three projects. The first project is about a
        Shopping mobile app to help west African to shop online. The second
        project is my master research project in which I am building person
        re-identification AI model. And the last project is about a bus tracker.
      </span>
      {
        posts.length>0?
        <div
        className="flex flex-row flex-wrap px-2 mt-4 
       self-around "
      >
        {posts.slice(0,setMax(posts.length)).map((item: any) => (
          <div
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            data-aos-mirror="true"
            className="flex flex-col w-80 shadow shadow-gray rounded bg-white text-black 
            font-roboto m-2 p-2 lg:max-w-md "
          >
            <Link to={"/details/" + item.id} key={item.id}>
              <span className="self-start text-2xl">{item.title}</span>
              <div className="self-start text-xl">
                Published : {getDate(item.createdate)}
              </div>
              <img
                className="self-center pt-2"
                src={item.image[0].base64String}
                alt="#"
              />
            </Link>
          </div>
        ))}
      </div>
        :<div className="flex h-screen w-full bg-black justify-center items-center"><Loading/></div>
      }
    </div>
  );
};

export default Recent;
