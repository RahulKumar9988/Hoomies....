import React from 'react';

function Card_scroller() {
  return (
    <div className='heroFont bg-black w-auto text-[#] flex flex-col items-center p-7 gap-5'>
      
      {/* Heading */}
      <h1 className='text-3xl z-10 text-white md:text-4xl lg:text-5xl font-bold text-center mt-12 md:mt-20'>
        "In the halls where knowledge blooms,<br />
        we chase our dreams <br />
        in crowded rooms."
      </h1>

      {/* Automatic horizontal scroller */}
      <div className="overflow-hidden w-full mt-8">
        {/* Scrolling container with repeated cards */}
        <div className="flex animate-scrollX">
          {/* Original Set of Cards */}
          {Array(10).fill(0).map((_, idx) => (
            <React.Fragment key={idx}>
              {/* Card 1 */}
              <div className="Card relative group h-60 w-[60vh] overflow-none md:overflow-hidden">
                <img
                  src="./img1.jpg"
                  alt="College 3rd gate"
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
                  src="./4.jpg"
                  alt="Rahul mity talab"
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
                  alt="Bala jii hostal Ground"
                  className="hero  h-80 w-64 sm:h-72 sm:w-48 md:h-80 md:w-56 lg:h-96 lg:w-64 rounded-3xl border"
                  loading="lazy"
                />
                <p className="mb-[24vh] md:mb-[32vh] w-96 text-center text-xl absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Bala jii hostal Ground
                </p>
              </div>

              {/* Card 4 */}
              <div className="Card relative group h-60">
                <img
                  src="./3.jpg"
                  alt="Chaity Block 1014"
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
                  src="./5.jpg"
                  alt="College 3rd gate"
                  className="hero  h-80 w-64 sm:h-72 sm:w-48 md:h-80 md:w-56 lg:h-96 lg:w-64 rounded-3xl border"
                  loading="lazy"
                />
                <p className="mb-[24vh] md:mb-[32vh] absolute text-xl w-96 text-center bottom-2 left-1/2 transform -translate-x-1/2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  College 3rd gate
                </p>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card_scroller;
