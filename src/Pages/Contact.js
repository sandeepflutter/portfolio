import React, { useRef, useEffect, useState } from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {

  const [status, setStatus] = useState('');

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nzbjazq', 'template_wdxwsig', form.current, 'Boqra7eM78tZK_ywK')
      .then((result) => {
          console.log(result.text);
        setStatus('success');
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
    
  };

  useEffect(() => {
    if(status === 'success') {
      setTimeout(() => {
        setStatus('');
      }, 3000);
    }
  }, [status])



  return (
<form ref={form} onSubmit={sendEmail}>
<section class="text-gray-400 bg-gray-900 body-font relative">
  <div class="container px-5 py-5 mx-auto">
    <div class="flex flex-col text-center w-full mb-12">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Contact Us</h1>
    </div>
    {status && renderAlert()}
    <div class="lg:w-1/2 md:w-2/3 mx-auto">
      <div class="flex flex-wrap -m-2">
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="name" class="leading-7 text-sm text-gray-400">Name</label>
            <input type="text" id="name" name="name" class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" spellcheck="false" data-ms-editor="true"/>
          </div>
        </div>
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="email" class="leading-7 text-sm text-gray-400">Email</label>
            <input type="email" id="email" name="user_email" class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div class="p-2 w-full">
          <div class="relative">
            <label for="message" class="leading-7 text-sm text-gray-400">Message</label>
            <textarea id="message" name="message" class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" spellcheck="false" data-ms-editor="true"></textarea>
          </div>
        </div>
        <div class="p-2 w-full">
          <button type='submit' value="send" class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Send</button>
        </div>
        <div class="p-2 w-full pt-8 mt-8 border-t border-gray-800 text-center">
          <a class="text-indigo-400">sandeepbudha.sb@gmail.com</a>
          <p class="leading-normal">Kathmandu, Nepal</p>
        </div>
      </div>
    </div>
  </div>
</section>
</form>
  )
}

const renderAlert = () => (
  <div className="px-4 py-3 leading-normal text-green-700 bg-blue-100 rounded mb-5 text-center ">
    <p>your message submitted successfully</p>
  </div>
)


export default Contact