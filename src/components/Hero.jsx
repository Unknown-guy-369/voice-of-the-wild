import React from 'react';

const Hero = () => {
  return (
    <section className='relative px-14 pt-10 bg-green-800 min-h-screen flex items-center justify-center overflow-hidden'>
    {/* Background image of hornbill */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-green-800 bg-blend-screen bg-no-repeat"
        style={{
          backgroundImage: 'url(img2.webp)'
        }}
      >
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-black/60"></div>
      </div>
      
      {/* Content */}
      <div className='relative z-10 text-center'>
      <h1 className="text-5xl md:text-8xl text-white font-bold leading-tight">
          Voice of the Wild
        </h1>
        <p className="text-3xl md:text-5xl text-green-300 font-bold mt-2">
          Uniting Voices - From Awareness to Action
        </p>

        <p className="text-lg md:text-xl text-gray-200 mt-8 mb-8 max-w-4xl mx-auto leading-relaxed">
          On December 02, 2025, National Pollution Control Day, join 15,000+ voices in India's first 
          virtually synchronized climate pledge - an official India Book of Records attempt.
        </p>

        <div className='flex flex-col md:flex-row items-center justify-center gap-6 pt-8'>
          <a href='#register' className='bg-green-500 text-white px-8 py-3 font-bold shadow-xl rounded-full hover:bg-green-600 hover:shadow-2xl transition duration-300'>
            Take the Pledge Now
          </a>
          <div className='flex items-center justify-center'>
            <span className="w-2 h-2 mr-2 bg-green-400 rounded-full animate-pulse"></span>
            <p className='text-green-300 font-semibold'>Live Registration Open</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;