import { Transition } from "@headlessui/react";
import React,{useState} from "react";
import {MdDeveloperMode} from 'react-icons/md';
import {Link} from 'react-scroll';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="sticky top-0 z-50">
      <nav className="bg-gray-800 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href="#" to="home" spy={true} smooth={true} duration={500} offset={-100}>
                <MdDeveloperMode class="w-10 h-10 text-red-500"/>
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link to="about" spy={true} smooth={true} offset={-60} duration={600} activeClass="bg-gray-700"
                  onClick={()=>setIsOpen(false)}
                  href="#"
                    className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    About Me
                  </Link>

                  <Link to="skill" spy={true} smooth={true} offset={-60} duration={600} activeClass="bg-gray-700"
                  onClick={()=>setIsOpen(false)}
                  href="#"
                    className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Skills
                  </Link>

                  <Link to="project" spy={true} smooth={true} offset={-60} duration={600} activeClass="bg-gray-700"
                  onClick={()=>setIsOpen(false)}
                    href="#"
                    className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Projects
                  </Link>

                  <Link to="service" spy={true} smooth={true} offset={-40} duration={600} activeClass="bg-gray-700"
                  onClick={()=>setIsOpen(false)}
                  href="#"
                    className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    My services
                  </Link>

                  <Link to="contact" spy={true} smooth={true} offset={-40} duration={600} activeClass="bg-gray-700"
                  onClick={()=>setIsOpen(false)}
                  href="#"
                    className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link to="about" spy={true} smooth={true} offset={-250} duration={600} activeClass="bg-gray-700"
                  onClick={()=>setIsOpen(false)}
                  href="#"
                  className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  About Me
                </Link>

                <Link to="skill" spy={true} smooth={true} offset={-280} duration={600} activeClass="bg-gray-700"
                  onClick={()=>setIsOpen(false)}
                  href="#"
                  className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                   Skills
                </Link>

                <Link to="project" spy={true} smooth={true} offset={-320} duration={600} activeClass="bg-gray-700"
                  onClick={()=>setIsOpen(false)}
                  href="#"
                  className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Projects
                </Link>

                <Link to="service" spy={true} smooth={true} offset={-250} duration={600} activeClass="bg-gray-700"
                  onClick={()=>setIsOpen(false)}
                  href="#"
                  className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  My services
                </Link>

                <Link to="contact" spy={true} smooth={true} offset={-300} duration={600} activeClass="bg-gray-700"
                  onClick={()=>setIsOpen(false)}
                  href="#"
                  className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Nav;
