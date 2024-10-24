import React from 'react';
import Button from '../navbar/Button';
import Button_Hover from './Button_Hover';
import BgEff from './BgEff';
import { Link } from 'react-router-dom';


function HeroSection() {
  return (
    <div className='heroFont min-h-[100vh] text-[#] flex flex-col items-center p-5 md:p-7 gap-5'>
      {/* Background effect */}
      <BgEff />

      {/* Responsive heading */}
      <h1 className='text-3xl z-10 text-white md:text-4xl lg:text-5xl font-bold text-center mt-8 md:mt-20'>
        "In the halls where knowledge blooms,<br />
        we chase our dreams <br />
        in crowded rooms."
      </h1>

      {/* Responsive buttons */}
      <div className='flex gap-3 flex-wrap justify-center z-10 '>
        <Button name="Explore" />
        
        <Link to="/signin">{<Button_Hover name="Sigin In" />}</Link>
      </div>

      {/* Responsive images */}
      <div className='papa_card grid grid-cols-1 md:grid-cols-5 justify-center gap-4 '>
        {/* Card 1 */}
        <div className="Card relative group h-60 ">
          <img
            src="./4.jpg"
            alt=""
            className="hero h-80 w-64 sm:h-72 sm:w-48 md:h-80 md:w-56 lg:h-96 lg:w-64 rounded-3xl border"
            loading="lazy"
          />
          <p className="mb-[24vh] md:mb-[32vh] absolute text-xl w-96 text-center bottom-2 left-1/2 transform -translate-x-1/2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            College 3rd gate
          </p>
        </div>

        {/* Card 2 */}
        <div className="Card relative group h-60">
          <img
            src="./img1.jpg"
            alt=""
            className="hero h-80 w-64 sm:h-72 sm:w-48 md:h-80 md:w-56 lg:h-96 lg:w-64 rounded-3xl border"
            loading="lazy"
          />
          <p className="mb-[24vh] md:mb-[32vh] w-96 text-center text-xl absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Rahul mity talab
          </p>
        </div>

        {/* Card 3 */}
        <div className="Card relative group h-60">
          <img
            src="./2.jpg"
            alt=""
            className="hero  h-80 w-64 sm:h-72 sm:w-48 md:h-80 md:w-56 lg:h-96 lg:w-64 rounded-3xl border"
            loading="lazy"
          />
          <p className="mb-[24vh] md:mb-[32vh] w-96 text-center text-xl absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Bala jii hostal Ground
          </p>
        </div>

        {/* Card 4 */}
        <div className="Card relative group h-60" >
          <img
            src="./5.jpg"
            alt=""
            className="hero  h-80 w-64 sm:h-72 sm:w-48 md:h-80 md:w-56 lg:h-96 lg:w-64 rounded-3xl border"
            loading="lazy"
          />
          <p className="mb-[24vh] md:mb-[32vh] absolute text-xl w-96 text-center bottom-2 left-1/2 transform -translate-x-1/2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Chaity Block 1014
          </p>
        </div>

        {/* Card 5 */}
        <div className="Card relative group h-60">
          <img
            src="./3.jpg"
            alt=""
            className="hero  h-80 w-64 sm:h-72 sm:w-48 md:h-80 md:w-56 lg:h-96 lg:w-64 rounded-3xl border"
            loading="lazy"
          />
          <p className="mb-[24vh] md:mb-[32vh] absolute text-xl w-96 text-center bottom-2 left-1/2 transform -translate-x-1/2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            College 3rd gate
          </p>
        </div>
      </div>

    
    </div>
  );
}

export default HeroSection;
