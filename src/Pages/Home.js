import React from 'react';
import profile from "../Assest/i.jpg";
import { FaGithub } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import {FaMedium}from 'react-icons/fa';
import {FaYoutube}from 'react-icons/fa';
import {BsChevronDown} from 'react-icons/bs';
import heroVid from '../Assest/i.mp4';


const Home = ({ title, name, intro, social: { youtube, github, medium, facebook, twitter, email }, about:{ descr2} }) => {
  return (
    <div className='w-full h-[90vh] top-[90px] '>
      <video
        className='object-cover h-full w-full absolute -z-10'
        src={heroVid}
        autoPlay
        loop
        muted
      />


    <div className="max-w-7xl mx-auto px-3 overlay pt-12">
    <div className="w-full">
      <div className="h-[55vh] border-2 flex flex-col justify-center max-w-sm mx-auto bg-white shadow-xl rounded-xl p-5 bg-opacity-5 backdrop-blur-sm">
        <div className="">
          <img
            className=" w-[18vh] mx-auto shadow-xl rounded-full"
            src={profile}
            alt="Profile face"
          />
        </div>
        <div className="text-center mt-5">
          <p className="text-[3.5vh] font-bold text-white">{intro}</p>
          <p className="font-titillium text-[5vh] font-semibold text-blue-500">
            {name}
          </p>
          <p className="font-titillium text-[3vh] text-red-500 pt-1 pb-2 px-[8vh] w-auto inline-block border-b-2 font-Titillium Web">
            {title}
          </p>
          <div className="flex align-center justify-center mt-1">
          <a
              className="text-[3.5vh] m-1 p-1 sm:m-2 sm:p-2 text-red-600 hover:bg-red-600 rounded-full hover:text-white transition-colors duration-300"
              href={youtube} target="_blank"
            >
              <FaYoutube class="animate-pulse" />
              <span class="sr-only">Youtube</span>
            </a>
            <a
              className="text-[3.5vh] m-1 p-1 sm:m-2 sm:p-2 text-gray-400 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
              href={github} target="_blank"
            >
              <FaGithub class="animate-pulse"/>
              <span class="sr-only">Github</span>
            </a>
            <a
              className="text-[3.5vh] m-1 p-1 sm:m-2 sm:p-2 text-neutral-400 hover:bg-neutral-900 rounded-full hover:text-white transition-colors duration-300"
              href={medium} target="_blank"
            >
              <FaMedium class="animate-pulse"/>
              <span class="sr-only">Medium</span>
            </a>
            <a
              className="text-[3.5vh] m-1 p-1 sm:m-2 sm:p-2 text-blue-600 hover:bg-blue-600 rounded-full hover:text-white transition-colors duration-300"
              href={facebook} target="_blank"
            >
              <ImFacebook2 class="animate-pulse"/>
              <span class="sr-only">Facebook</span>
            </a>
            <a
              className="text-[3.5vh] m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300"
              href={twitter} target="_blank"
            >
              <FaTwitter class="animate-pulse"/>
              <span class="sr-only">Twitter</span>
            </a>
            <a
              className="text-[3.5vh] m-1 p-1 sm:m-2 sm:p-2 text-teal-500 hover:bg-teal-500 rounded-full hover:text-white transition-colors duration-300"
              href={"https://mail.google.com/mail/?view=cm&fs=1&to=" + email} target="_blank"
            >
              <FaRegEnvelope class="animate-pulse"/>
              <span class="sr-only">Email</span>
            </a>
          </div>
        </div>
      </div>
    </div>
      <p className=" md:text-[5vh] lg:text-[7vh] font-lora text-[4vh] text-center md:text-center text-white leading-relaxed mt-5 font-bold">
        {descr2} 
        <div>
        <div className="flex align-center justify-center mt-1">
          <a
              className="text-[5vh] m-1 p-1 sm:m-2 sm:p-2 text-white transition-colors duration-300"
              href={youtube} target="_blank"
            >
              <BsChevronDown class="animate-bounce w-10 h-10 items-center"/>
            </a>
            </div>
        </div>
      </p>

    </div>
    </div>
  );
};

export default Home;