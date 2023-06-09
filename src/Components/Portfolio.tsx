import { useEffect, useState } from "react";
import Aos from "aos";
import {project} from "../firebase";
import {  getDocs } from "firebase/firestore";
import {Project} from "../models";
import { Link } from "react-router-dom";

interface Post{
  id : string;
  content: Project;
}

const Portfolio = () => {
  
  const [posts, setPosts] = useState<Post[]>([]);
  const getPost = async ()=>{
    const postDocs = await getDocs(project);
    setPosts(postDocs.docs.map((doc)=>{
      return {id: doc.id, content:doc.data()}
    }))
  }



  useEffect(() => {
    Aos.init();
    getPost();
    
  }, []);

  return (
    <div className="flex flex-col items-center bg-blur-bg pb-3 text-white w-full h-fit">
      <span className="pt-20 text-5xl font-varela_round font-bold">
        My portfolio
      </span>
      <span className="h-1.5 w-24 mt-3 rounded bg-orange self-center"></span>
      <span className="w-full sm:w-4/5 lg:w-3/5 text-justify p-3 break-keep font-roboto_italic text-xl mt-4">
        I have developed several web and mobile applications in different
        programming languages such as Python, Java, and JavaScript. I am very
        familiar with many frameworks included ReactJs, Tkinter, Android studio,
        Flutter etc. My favorites databases are Postgres, MySQL, Firebase and
        MongoDB. I am currently doing my Master research on Person
        re-identification (Computer Vision).
      </span>
      <div className="flex flex-row flex-wrap px-2 mt-4 
       self-around ">
        {posts.map((item) => (
          <div
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            data-aos-mirror="true"
            className="flex flex-col w-80 shadow shadow-gray rounded bg-white text-black 
          font-roboto m-2 p-2 lg:max-w-md "
          >
            <Link to={"/details/" + item.id} key={item.id}>
            <span className="self-start text-2xl">{item.content.title}</span>
            <div className="self-start text-xl">Platform : {item.content.platform}</div>
            <img className="self-center w-full pt-2" src={item.content.images[0].src.src} alt="#" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
