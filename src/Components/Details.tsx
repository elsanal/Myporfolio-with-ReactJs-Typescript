import { useEffect, useState } from "react";
import { Project } from "../models";
import { Link, useParams } from "react-router-dom";
import ReactHtmlParser from "html-react-parser";
import {
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { project } from "../firebase";

interface Post {
  id: string;
  content: Project;
}

const Details = () => {
  const [detail, setDetail] = useState<Post[]>([]);
  const { id } = useParams();

  

  useEffect(() => {
    const getPost = async () => {
      const getQuery = query(project, where("id", "==", id));
      const postDocs = await getDocs(getQuery);
      setDetail(
        postDocs.docs.map((doc) => {
          return { id: doc.id, content: doc.data() };
        })
      );
    };
    getPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="pt-14 max-w-6xl">
      {detail.map((item) => (
        <div className="flex flex-col justify-center  p-2 bg-recent-bg">
          <span className="font-roboto_italic text-2xl">
            {item.content.title}
          </span>
          <div className="flex flex-row flex-wrap justify-around sm:flex-nowrap">
            <div className="flex flex-col w-full sm:w-1/4 sm:min-w-sm">
              <div
                className="flex flex-col bg-blur-bg p-2 mb-3 
              rounded text-white items-start font-roboto_italic"
              >
                <div>
                  Published : {item.content.createdate.toDate().toDateString()}
                </div>
                <div>Platform : {item.content.platform}</div>
              </div>
              <div className="bg-blur-bg mb-5 rounded text-white">
                <div className=" bg-white text-black font-bold w-full">
                  Technologies
                </div>
                <p className="p-3">
                  {ReactHtmlParser(item.content.technologie)}
                </p>
              </div>
              <div className="bg-blur-bg mb-5 sm:mb-0 pb-2 rounded text-white">
                <div className=" bg-white text-black font-bold w-full">
                  Social network
                </div>
                {item.content.socials.map((social) => (
                  <div>
                    <Link className="text-orange-clair" to={social.link}>
                      {social.social}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div className="ml-0 p-2 bg-gray text-white rounded sm:ml-2">
              {ReactHtmlParser(item.content.description.toString())}
            </div>
          </div>
          <div className="flex flex-row mt-5 flex-wrap">
            {item.content.images.map((image) => (
              <img src={image.src.src} alt="" className="w-96 m-2 rounded-md" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Details;
