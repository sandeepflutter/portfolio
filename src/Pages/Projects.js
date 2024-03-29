import wt from "../Assest/wt.jpg";
import ag from "../Assest/ag.jpg";
import sam from "../Assest/sam.jpg";
import bg from "../Assest/bg.jpg";
import port from "../Assest/port.jpg";
import cg1 from "../Assest/cg.jpg"

const Projects = ({app: { bol, wot, aog,som,web,wotd,cg},}) => {
  return (

<section id="project" class="text-gray-400 bg-gray-900 body-font pt-5">
  <div class="container px-5 mx-auto">
    <div class="flex flex-col text-center w-full mb-5">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white text-center font-hahmlet">My Projects</h1>
    </div>
    <div class="flex flex-wrap -m-4">
      <div class="lg:w-1/4 sm:w-1/2 p-4">
      <a href={wot} target="_blank" rel="noreferrer">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={wt}/>
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100 duration-500">
            <h2 class="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1 font-lora">Mobile App</h2>
            <h1 class="title-font text-lg font-medium text-white mb-3 font-lora">World Tour</h1>
            <p class="leading-relaxed text-justify font-crimson">World Tour is a tourist guide mobile application which gives details about different countries and it's tourist destination.</p>
          </div>
        </div>
        </a>
      </div>
      
      <div class="lg:w-1/4 sm:w-1/2 p-4">
      <a href={bol} target="_blank" rel="noreferrer">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={bg}/>
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100 duration-500">
            <h2 class="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1 font-lora">Mobile App</h2>
            <h1 class="title-font text-lg font-medium text-white mb-3 font-lora">BolChitra</h1>
            <p class="leading-relaxed font-crimson text-justify">The Bolchitra application allows users to share stories from across the world and convey ideas using visual and combine with text.</p>
          </div>
        </div>
        </a>
      </div>
      <div class="lg:w-1/4 sm:w-1/2 p-4">
      <a href={som} target="_blank" rel="noreferrer">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={sam}/>
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100 duration-500">
            <h2 class="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1 font-lora">Mobile App</h2>
            <h1 class="title-font text-lg font-medium text-white mb-3 font-lora">Samrajya</h1>
            <p class="leading-relaxed text-justify font-crimson">Samrajya is an online shopping app that is dedicated to serve its users by delivering the products right to their front doors.</p>
          </div>
        </div>
        </a>
      </div>
      <div class="lg:w-1/4 sm:w-1/2 p-4">
      <a href={aog} target="_blank" rel="noreferrer">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={ag}/>
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100 duration-500">
            <h2 class="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1 font-lora">Mobile App</h2>
            <h1 class="title-font text-lg font-medium text-white mb-3 font-lora">ArabGhar</h1>
            <p class="leading-relaxed text-justify font-crimson">ArabGhar is a mobile App to provide information about room available for rent and Information about Qatar.</p>
          </div>
        </div>
        </a>
      </div>
      <div class="lg:w-1/4 sm:w-1/2 p-4">
      <a href={wotd} target="_blank" rel="noreferrer">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={wt}/>
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100 duration-500">
            <h2 class="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1 font-lora">Desktop App</h2>
            <h1 class="title-font text-lg font-medium text-white mb-3 font-lora">World Tour</h1>
            <p class="leading-relaxed font-crimson text-justify">World Tour is a tourist guide Desktop application which gives details about countries and it's tourist destination.</p>
          </div>
        </div>
        </a>
      </div>
      <div class="lg:w-1/4 sm:w-1/2 p-4">
      <a href={web} target="_blank" rel="noreferrer">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={port}/>
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100 duration-500">
            <h2 class="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1 font-lora">Website</h2>
            <h1 class="title-font text-lg font-medium text-white mb-3 font-lora">Ashraya Engineering</h1>
            <p class="leading-relaxed font-crimson text-justify">Using the Javascript and CSS framework, React JS, and Tailwind CSS, a Ashraya Engineering website was created.</p>
          </div>
        </div>
        </a>
      </div>
      <div class="lg:w-1/4 sm:w-1/2 p-4">
      <a href={cg} target="_blank" rel="noreferrer">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={cg1}/>
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100 duration-500">
            <h2 class="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1 font-lora">Website</h2>
            <h1 class="title-font text-lg font-medium text-white mb-3 font-lora">Code Gorkha</h1>
            <p class="leading-relaxed font-crimson text-justify">Using the Javascript and CSS framework, React JS, and Tailwind CSS, a Code Gorkha website was created.</p>
          </div>
        </div>
        </a>
      </div>
    </div>
  </div>
</section>
  )
}

export default Projects;