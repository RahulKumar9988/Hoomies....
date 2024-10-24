import React from 'react'


function AboutUs() {
  return (
    <div className=' text-white h-[70vh] p-4 mt-44 md:h-[80vh]'>
      <h1 className='text-center text-5xl md:text-7xl font-bold mb-6'>About Us</h1>
      <div className='flex flex-col md:flex-row md:justify-between md:gap-10'>
        
        {/* image part */}
        <div className='md:w-[50%] flex flex-col gap-4 md:gap-10'>
          <p className='text-3xl md:text-5xl text-center'>
            "Welcome to 
            <span className='text-green-300 font-semibold'>
              <span className='text-4xl md:text-7xl text-green-500 ml-2'>H</span>oomies..
            </span>"
          </p>
          <p className='text-lg md:text-2xl'>
            "Your trusted partner to help you find the perfect rental. We make renting easy, affordable, and hassle-free with a seamless experience tailored to meet your needs."
          </p>
        </div>
        
        {/* text part */}
        <div className='md:w-[50%] flex flex-col justify-center items-center gap-6 md:gap-10'>
          <span className='text-4xl md:text-5xl text-green-400 font-semibold mt-16 md:mt-32'>
            Why Us...
          </span>
          <ul className='text-lg md:text-xl'>
            <li> <span className='text-2xl text-green-300'>*</span> Short-term rentals</li>
            <li> <span className='text-2xl text-green-300'>*</span> Long-term rentals</li>
            <li> <span className='text-2xl text-green-300'>*</span> 24/7 customer service</li>
            <li> <span className='text-2xl text-green-300'>*</span> Easy booking & Flexible Plans</li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default AboutUs;
