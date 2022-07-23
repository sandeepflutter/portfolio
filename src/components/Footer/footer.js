import React from 'react'
import { FaGithub } from "react-icons/fa";
import { ImFacebook } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import {FaMedium}from 'react-icons/fa';
import {FaYoutube}from 'react-icons/fa';
import {FaLinkedin}from 'react-icons/fa';
import {FaInstagram}from 'react-icons/fa';

const Footer = ({social: { youtube, github, medium, facebook, twitter, linkedin, insta }}) => {
  return (
    <footer class="text-gray-400 bg-gray-900 body-font">
    <div class="bg-gray-800 bg-opacity-75">
      <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
        <p class="text-gray-400 text-sm text-center sm:text-left">© 2022 Sandeep Budha —
          <a href="https://twitter.com/sbSandeepbudha" rel="noopener noreferrer" class="text-gray-500 ml-1" target="_blank">@sbSandeepbudha</a>
        </p>
        <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a className="text-gray-400 hover:text-blue-600 transition-colors duration-300 pr-2"
              href={facebook} target="_blank" rel="noreferrer" >
              <ImFacebook className='h-4 w-4 '/>
            </a>

            <a className="text-gray-400 hover:text-blue-500 transition-colors duration-300 pr-2"
              href={twitter} target="_blank" rel="noreferrer">
              <FaTwitter className='h-4 w-4 '/>
            </a>
        
        <a className="text-gray-400 hover:text-red-600 transition-colors duration-300 pr-2"
              href={youtube} target="_blank" rel="noreferrer">
              <FaYoutube className='h-4 w-4 '/>
            </a>

            <a className="text-gray-400 hover:text-white transition-colors duration-300 pr-2"
              href={github} target="_blank" rel="noreferrer">
              <FaGithub className='h-4 w-4 '/>
            </a>

            <a className="text-gray-400 hover:text-white transition-colors duration-300 pr-2"
              href={medium} target="_blank" rel="noreferrer">
              <FaMedium className='h-4 w-4 '/>
            </a>

            <a className="text-gray-400 hover:text-red-500 transition-colors duration-300 pr-2"
              href={insta} target="_blank" rel="noreferrer">
              <FaInstagram className='h-4 w-4 '/>
            </a>

            <a className="text-gray-400 hover:text-blue-500 transition-colors duration-300 pr-2"
              href={linkedin} target="_blank" rel="noreferrer">
              <FaLinkedin className='h-4 w-4 '/>
            </a>

        </span>
      </div>
    </div>
  </footer>
  )
}

export default Footer