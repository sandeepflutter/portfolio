import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Nav from "./components/Navbar/Nav";
import About from "./Pages/About";
import data from "./data";

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  });

  return (
    <div>
        <Nav /*name={data.name} title={data.title} social={data.social}*/ />
        <About name={data.name} title={data.title} social={data.social} about={data.about} />
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* <!-- Replace with your content --> */}
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
          </div>
          {/* <!-- /End replace --> */}
        </div>
      </main>
    </div>
  );
}

export default App;
