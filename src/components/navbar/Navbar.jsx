import React, { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='z-50 bg-black text-white p-4 md:flex md:items-center md:justify-between border-b'>
      <div className='flex justify-between items-center'>
        <a href="/"><img className='h-10' src="./logo1.png" alt="" /></a>
        <button 
          className='text-xl  md:hidden' 
          onClick={toggleMenu}
        >
          {/* Menu button for mobile */}
          {isMenuOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {/* Menu Links */}
      <ul
        className={`z-20  md:flex md:gap-5 md:items-center md:static absolute left-0 w-full md:w-auto md:top-0 duration-300 ease-in-out bg-black  ${
          isMenuOpen ? 'top-16 opacity-100' : 'top-[-200px] opacity-0 md:opacity-100'
        }`}
      >
        <li className='p-2 md:p-0 md:text-xl text-center  md:border-none border-white'>
          Home
        </li>
        <li className='p-2 md:p-0 md:text-xl text-center  md:border-none border-white'>
          Contact
        </li>
        <li className='p-2 md:p-0 md:text-xl text-center  md:border-none border-white'>
          About
        </li>
        <li className='p-2 md:p-0 md:text-xl text-center'>
          Explore
        </li>
      </ul>
    </nav>
  );
}
