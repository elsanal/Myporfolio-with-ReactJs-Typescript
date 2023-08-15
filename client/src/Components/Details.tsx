import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactHtmlParser from "html-react-parser";
import Loading from "./Loading";


const Details = () => {

  const { id } = useParams();

  const getDate = (createdate:string)=>{
    var date = new Date(createdate);
    return date.toDateString()
  }
  
  const [detail, setDetail] = useState<any>({});

  useEffect(() => {
    const getPost = async (postId:string|undefined) => {
      await fetch(`${process.env.REACT_APP_API_URL}/project/${postId}`)
      .then(((response: { json: () => any; }) => response.json())) 
      .then((data: any) => {
        setDetail(data)
      })
    };
   getPost(id);
  },[detail]);

  return (
    <div className="pt-14 w-full h-fit">
      {
        detail.technology?
        <div className="flex flex-col justify-center h-full p-2 bg-recent-bg">
          <span className="font-roboto_italic text-2xl font-bold my-10 md:text-5xl">
            {detail.title}
          </span>
          <div className="flex flex-col justify-around h-full md:justify-between
          md:flex-row md:flex-nowrap md:items-center md:bg-blur-bg">
            <div className="flex flex-col w-full md:max-w-md md:ml-[1%] 
            text-xl md:h-full md:justify-around">  
              <div
                className="flex flex-col bg-blur-bg p-2 mb-3 text-sm
              rounded text-white items-start font-roboto_italic">
                <div>
                  Published : {getDate(detail.createdate)}
                </div>
                <div>Platform : {detail.platform}</div>
                <div>
                  <a href={detail.github} className="underline text-blue">Click here to access Github</a></div>
              </div>

              <div className="bg-blur-bg mb-5 rounded text-white">
                <div className=" bg-white text-black font-bold w-full">
                  Technologies
                </div>
                <p className="p-3">
                  {ReactHtmlParser(detail.technology)}
                </p>
              </div>

              <div className="bg-blur-bg mb-5 sm:mb-0 pb-2 rounded text-white">
                <div className=" bg-white text-black font-bold w-full">
                  Social network
                </div>
                {detail.socials.map((social:any) => (
                  <div>
                    <Link className="text-orange-clair" to={social.link}>
                      {social.name}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div className="ml-0 p-2 w-full bg-gray text-justify text-white text-xl rounded md:ml-2 md:max-w-2xl">
              {ReactHtmlParser(detail.description)}
            </div>
          </div>
          <div className="flex flex-row mt-5 flex-wrap">
            {detail.image.map((image:any) => (
              <img src={image.base64String} alt="" className=" m-2 rounded-md" />
            ))}
          </div>
        </div>
        :<div className="flex h-screen w-full bg-black justify-center items-center"><Loading/></div>
      }
      
    </div>
  );
};

export default Details;
