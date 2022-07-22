import React, { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Nav from "./components/Navbar/Nav";
import data from "./data";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Serices from "./Pages/Services";
import Projects from "./Pages/Projects";
import Footer from "./components/Footer/footer";
import Contact from "./Pages/Contact";
import {Link} from 'react-scroll';
import {IoMdRocket} from 'react-icons/io';

function App() {


  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };

  window.addEventListener('scroll', toggleVisible);

  useEffect(() => {
    AOS.init({
      once: true,
    });
  });

  return (
    <div>
      <Link href="#" to="home" spy={true} smooth={true} duration={500} offset={-100}>
      <button  id="myBtn" style={{display: visible ? 'inline' : 'none'}}
      class="fixed z-50 bottom-10 right-8 bg-transparent w-20 h-20 drop-shadow-lg flex justify-center items-center text-blue-500 text-6xl hover:drop-shadow-2xl hover:animate-bounce duration-900">
        <IoMdRocket/></button>
        </Link>
        <Nav /*name={data.name} title={data.title} social={data.social}*/ />
      <Home name={data.name} title={data.title} social={data.social} about={data.about} intro={data.intro}/>
      <About className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8" about={data.about}/>
      <Skills Skills={data.skills} />
      <Projects app={data.app}/>
      <Serices/>
      <Contact/>
      <Footer social={data.social} className="bg-white shadow"/>

     

    </div>
  );
}



export default App;
