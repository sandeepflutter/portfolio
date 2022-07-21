
import { IoIosColorPalette } from "react-icons/io";
import { BsGlobe } from "react-icons/bs";
import { GoDeviceMobile } from "react-icons/go";
import {MdTabletMac} from 'react-icons/md'
import {BiDesktop} from 'react-icons/bi'

const Services = () => {
  return (

<section id="service" class="text-gray-400 body-font bg-gray-900">
  <div class="container px-5 py-16 mx-auto">
    <div class="flex flex-wrap w-full mb-5 flex-col items-center text-center">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white text-center">My Services</h1>
    </div>
    <div class="flex flex-wrap -m-4">
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="border border-gray-700 border-opacity-75 p-6 rounded-lg">
          <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-2">
          <BsGlobe class="w-9 h-9 rounded-full"/>
          </div>
          <h2 class="text-lg text-white font-medium title-font mb-2">Website Design & Development</h2>
          <p class="leading-relaxed text-base">I can develop and design creative and responsive websites.</p>
        </div>
      </div>
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="border border-gray-700 border-opacity-75 p-6 rounded-lg">
          <div class="w-10 h-10 inline-flex items-center justify-center bg-transparent text-indigo-400 mb-4">
          <GoDeviceMobile class="w-10 h-10" />
          </div>
          <h2 class="text-lg text-white font-medium title-font mb-2">Mobile App Design & Development</h2>
          <p class="leading-relaxed text-base">I'm capable of creating elegant and user-friendly mobile applications.</p>
        </div>
      </div>
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="border border-gray-700 border-opacity-75 p-6 rounded-lg">
          <div class="w-10 h-10 inline-flex items-center justify-center bg-transparent text-indigo-400 mb-4">
          <MdTabletMac class="w-10 h-10" />
          </div>
          <h2 class="text-lg text-white font-medium title-font mb-2">Tablet App Design & Development</h2>
          <p class="leading-relaxed text-base">I can create simple and optimized tablet applications.</p>
        </div>
      </div>
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="border border-gray-700 border-opacity-75 p-6 rounded-lg">
          <div class="w-10 h-10 inline-flex items-center justify-center bg-transparent text-indigo-400 mb-4">
          <BiDesktop class="w-10 h-10" />
          </div>
          <h2 class="text-lg text-white font-medium title-font mb-2">Desktop App Design & Development</h2>
          <p class="leading-relaxed text-base">I am capable of creating desktop programs that are both responsive and excellent.</p>
        </div>
      </div>
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="border border-gray-700 border-opacity-75 p-6 rounded-lg">
          <div class="w-10 h-10 inline-flex items-center justify-center bg-transparent text-indigo-400 mb-4">
          <IoIosColorPalette class="w-10 h-10" />
          </div>
          <h2 class="text-lg text-white font-medium title-font mb-2">Graphic Design</h2>
          <p class="leading-relaxed text-base">I utilize a variety of graphical tools to create visually appealing and innovative graphics.</p>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Services;