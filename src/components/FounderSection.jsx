import React from 'react';

// --- FounderSection Component ---

const FounderSection = () => {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        
        {/* --- Section Header --- */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Meet Our Founder
          </h2>
          <div className="mt-4 w-24 h-1 bg-green-500 mx-auto rounded"></div>
        </div>

        {/* --- Founder Details Grid --- */}
        <div className="grid md:grid-cols-5 gap-12 items-center max-w-5xl mx-auto">
          
          {/* Image Column */}
          <div className="p-10 md:col-span-2 md:p-0">
            <div className="relative ">
              {/* Decorative background shape */}
              <div className="absolute -top-4 -left-4 w-full h-full bg-green-100 rounded-2xl transform rotate-[-3deg]"></div>
              
              {/* Main Image */}
              <img 
                src="/kiransir.webp" // Assumes the image is in the `public` folder
                alt="Dr. J. Kirankumar, Founder - Director of Voice of the Wild"
                className="relative w-full h-auto object-cover rounded-2xl shadow-xl border-4 border-white"
              />
            </div>
          </div>

          {/* Details Column */}
          <div className="md:col-span-3">
            <h1 className="text-3xl md:text-4xl font-bold text-green-800">
              Dr. J. Kirankumar
            </h1>
            <p className="text-lg text-gray-600 font-medium mt-1">
              M.A., M.Phil., Ph.D.
            </p>

            <div className="mt-4">
              <span className="inline-block bg-green-100 text-green-800 text-md font-semibold px-4 py-2 rounded-full">
                Founder - Director, Voice of the Wild
              </span>
            </div>

            <div className="mt-8 text-lg text-gray-700 leading-relaxed space-y-4 border-l-4 border-green-500 pl-6">
              <p>
                Dr. J. Kirankumar is the visionary leader and driving force behind Voice of the Wild. With a profound passion for environmental conservation and a deep commitment to community mobilization, he founded the organization to create a powerful, unified platform for ecological change.
              </p>
              <p>
                His leadership is dedicated to transforming passion into tangible action, guiding our mission to protect biodiversity and foster a sustainable future for generations to come.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FounderSection;