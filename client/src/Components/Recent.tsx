import { useEffect, useState } from 'react'
import Aos from 'aos';
import {Project} from "../models";
import {project} from "../firebase";
import { getDocs, orderBy, limit, query } from 'firebase/firestore';
import { Link } from 'react-router-dom';

interface Post{
  id : string;
  content: Project;
}

const Recent = () => {

  const [posts, setPosts] = useState<Post[]>([]);
  const getPost = async ()=>{
    const getQuery = query(project, orderBy("createdate", "asc"), limit(4))
    const postDocs = await getDocs(getQuery);
    setPosts(postDocs.docs.map((doc)=>{
      return {id: doc.id, content:doc.data()}
    }))

  }

  useEffect(() => {Aos.init();getPost();}, []);

  return (
    <div className="flex flex-col pb-5 items-center bg-recent-bg text-black w-full h-fit">
      <span className="pt-24 text-3xl font-varela_round font-bold" >Recent Projects</span>
      <span className="h-1.5 w-24 mt-3 rounded bg-orange self-center"></span>
      <span className="w-full p-3 text-justify break-keep font-roboto_italic text-xl mt-4
                        sm:w-4/5 ">
        Recently, I am working on three projects. The first project is about 
        a Shopping mobile app to help west African to shop online. The second project 
        is my master research project in which I am building person re-identification 
        AI model. And the last project is about a bus tracker.
      </span>
      <div className="flex flex-row flex-wrap px-2 mt-4 
       self-around ">
        {
          posts.map((item)=>(
            <div
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            data-aos-mirror="true"
            className="flex flex-col w-80 shadow shadow-gray rounded bg-white text-black 
            font-roboto m-2 p-2 lg:max-w-md "
          >
            <Link to={"/details/" + item.id} key={item.id}>
            <span className="self-start text-2xl">{item.content.title}</span>
            <div className="self-start text-xl">Published : {item.content.createdate.toDate().toLocaleDateString()}</div>
            <img className="self-center pt-2" src={item.content.images[0].src.src} alt="#" />
            </Link>
          </div>
          ))
        }
      </div>
    </div>
  )
}

export default Recent