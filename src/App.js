import React, { useEffect } from "react";
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

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  });

  return (
    <div>
        <Nav /*name={data.name} title={data.title} social={data.social}*/ />
      <Home name={data.name} title={data.title} social={data.social} about={data.about} intro={data.intro}/>
      <About className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8" about={data.about}/>
      <Skills Skills={data.skills} />
      <Projects app={data.app}/>
      <Serices/>
      <Contact/>
      <Footer className="bg-white shadow"/>
    </div>
  );
}

export default App;
