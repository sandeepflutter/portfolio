import React from 'react';
import profile from "../Assest/ii.png";
import fb from "../Assest/san.jpg";



const About = ({about:{ descr1, descr4,descr3} }) => {
  return (

<section id="about" class="text-gray-400 bg-gray-900 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-col">
    <div class="lg:w-4/6 mx-auto">
      <div class="rounded-lg h-64 overflow-hidden">
        <img alt="content" class="object-cover object-center h-full w-full" src={fb}/>
      </div>
      <div class="flex flex-col sm:flex-row mt-10">
        <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
          <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-800 text-gray-600"> 
          <img
            className="shadow-xl rounded-full"
            src={profile}
            alt="Profile face"
          />
          </div>

          <div class="flex flex-col items-center text-center justify-center">
            <h2 class="font-medium title-font mt-4 text-white text-lg">Sandeep Budha</h2>
            <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
            <div class="new-line text-base text-gray-400">{descr4}</div>
          </div>
        </div>
  
        <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-800 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
          <p class="leading-relaxed text-lg mb-4 text-justify">{descr1}</p>
          <p class="leading-relaxed text-lg mb-4 text-justify pb-5">{descr3}</p>
          <a href="#_" class="relative px-6 py-3 font-bold text-black group">
            <span class="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2  bg-indigo-500 group-hover:translate-x-0 group-hover:translate-y-0"></span>
            <span class="absolute inset-0 w-full h-full border-4 border-white"></span>
            <span class="relative">RESUME</span>
          </a>
          
        </div>
      </div>
    </div>
  </div>
</section>
  );
};

export default About;