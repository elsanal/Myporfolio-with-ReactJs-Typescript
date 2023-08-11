import React, { useEffect, useState } from "react";
import { HashLink} from "react-router-hash-link";
import Aos from "aos";


import DownloadPDF from "./Download";
import getPost from "../mongodb";


type Props = {
  names: string[];
  tos: string[];
};



const Header: React.FC<Props> = ({ names, tos }: Props) => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [cv, setCV] = useState<any[]>([]);


  useEffect(() => {
    Aos.init();
    getPost({collection:'resume', setResponse:setCV});
  }, []);
// console.log(cv[0].image[0].base64String)
// console.log(cv[0].image[0].name)
  return (
      <nav  className={`bg-orange fixed w-full px-2 sm:px-4 py-2.5 dark:bg-gray-900`}>
      <div className="container flex flex-wrap items-center justify-between mx-auto">
      {
        cv.length > 0 ?
        <DownloadPDF url={cv[0].image[0].base64String}
                        filename={cv[0].image[0].name}/>
        : <div>Loading...</div>
      }
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={()=> setToggle(!toggle)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        {toggle ? (
          <div
            className="sm:hidden lg:hidden md:hidden w-full  sm:w-auto bg-orange"
            id="navbar-default"
          >
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
              {names.map((name, index) => (
                <li>
                <HashLink
                  onClick={()=>{setToggle(false)}}
                  to={`/#${tos[index]}`}
                  scroll={(el)=> el.scrollIntoView({behavior: 'smooth'})}
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                >
                  {name}
                </HashLink>
              </li>
              ))}
            </ul>
          </div>
        ) : (
          ""
        )}
        <div className="hidden w-full sm:block sm:w-auto" id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white sm:p-0">
            {names.map((name, index) => (
              <li>
                {
                  activeIndex === index ?(
                    <HashLink
                onClick={()=>{setActiveIndex(index)}}
                  to={`/#${tos[index]}`}
                  scroll={(el)=> el.scrollIntoView({behavior: 'smooth'})}
                  className={`block py-2 pl-3 pr-4 text-gray-700 rounded sm:bg-black sm:text-white sm:hover:text-white sm:p-3  sm:hover:bg-black`}>
                  {name}
                </HashLink>
                  ):(
                    <HashLink
                onClick={()=>{setActiveIndex(index)}}
                  to={`/#${tos[index]}`}
                  scroll={(el)=> el.scrollIntoView({behavior: 'smooth'})}
                  className={`block py-2 pl-3 pr-4 text-gray-700 rounded sm:hover:text-white sm:p-3  sm:hover:bg-blur-bg`}>
                  {name}
                </HashLink>
                  )
                }
                
              </li>
            ))}
          </ul>
        </div>
        
      </div>
    </nav>

  );
};

export default Header;
