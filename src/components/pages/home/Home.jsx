import React from 'react'
import Button_Hover from '../../heroSection/Button_Hover'
import "./home.css"
function Home() {
  return (
    <div className='text-white'>
        <section className="text-gray-100 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap w-full mb-20">
                <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                    <h1 className="sm:text-4xl text-2xl font-medium title-font mb-2 text-gray-100">Khudiram Nagar</h1>
                    <div className="h-1 w-40 bg-indigo-500 rounded"></div>
                </div>
                <p className="lg:w-1/2 w-full leading-relaxed text-gray-200">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
                </div>
                <div className="flex flex-wrap gap-10 p-4 md:p-0 justify-center -m-4 ">
                <div className="card xl:w-1/5 md:w-1/2 h-full cursor-pointer">
                    <div className="bg-gray-100 border border-white rounded-lg h-[60vh]">
                         <img className="h-full w-96 object-cover object-center mb-6 rounded-lg" src="./img1.jpg" alt="content"/>
                        <div className='card_details'>
                            <h3 className="tracking-widest text-indigo-200 text-[1.1rem] font-medium title-font"><Button_Hover name="Explore"/></h3>
                            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Adderess</h2>
                            <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                        </div>
                    </div>
                </div>
                <div className="card xl:w-1/5 md:w-1/2 h-full cursor-pointer">
                    <div className="bg-gray-100 border border-white rounded-lg h-[60vh]">
                         <img className="h-full w-96 object-cover object-center mb-6 rounded-lg" src="./4.jpg" alt="content"/>
                        <div className='card_details'>
                            <h3 className="tracking-widest text-indigo-200 text-[1.1rem] font-medium title-font"><Button_Hover name="Explore"/></h3>
                            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Chichen Itza</h2>
                            <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                        </div>
                    </div>
                </div>
                <div className="card xl:w-1/5 md:w-1/2 h-full cursor-pointer">
                    <div className="bg-gray-100 border border-white rounded-lg h-[60vh]">
                         <img className="h-full w-96 object-cover object-center mb-6 rounded-lg" src="./3.jpg" alt="content"/>
                        <div className='card_details'>
                            <h3 className="tracking-widest text-indigo-200 text-[1.1rem] font-medium title-font"><Button_Hover name="Explore"/></h3>
                            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Chichen Itza</h2>
                            <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                        </div>
                    </div>
                </div>
                <div className="card xl:w-1/5 md:w-1/2 h-full cursor-pointer">
                    <div className="bg-gray-100 border border-white rounded-lg h-[60vh]">
                         <img className="h-full w-96 object-cover object-center mb-6 rounded-lg" src="./2.jpg" alt="content"/>
                        <div className='card_details'>
                            <h3 className="tracking-widest text-indigo-200 text-[1.1rem] font-medium title-font"><Button_Hover name="Explore"/></h3>
                            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Chichen Itza</h2>
                            <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Home