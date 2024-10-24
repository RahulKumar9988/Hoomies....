import React from 'react'
import './contact.css';

function ContactUs() {
  return (
    <div className='text-white h-[80vh] '>
      <h1 className='text-center text-5xl md:text-7xl font-bold mb-10'>Contact Us</h1>
        <div className='flex flex-col-reverse md:flex-row justify-around items-center'>

          <div className='flex flex-col gap-10 mt-2'>
            <ul className='text-xl'>
              <p className='text-2xl text-green-400'>Developer Team</p>
              <li>* Rahul Kumar.</li>
              <li>* Sonal mondal.</li>
              <li>@ developerwork@gmail.com</li >
            </ul>
            <ul className='text-xl'>
              <p className='text-2xl text-green-400'>Suport Team</p>
              <li>* Harshit Anand.</li>
              <li>* Aman Kran.</li>
              <li>@ supportwork@gmail.com</li>
            </ul>
          </div>

          <div>
            <img className='rounded-[200px] h-56 md:h-auto' src="/contactus.jpg" alt="" />
          </div>
        </div>
      <div className='flex flex-col gap-4 mt-10 md:gap-10 md:mt-0 text-center text-xl md:flex-row'>
      </div>
    </div>
    
  )
}

export default ContactUs