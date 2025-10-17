import React from 'react';
import {Globe2,BookOpen,GraduationCap} from 'lucide-react';
const Members = () => {
  return (

    <section id='Members' className='min-h-screen container mx-auto py-12 bg-green-50'> 
      {/* --- Main Heading and Subtitle --- */}
      <div className='text-center sm:px-5'>
        <h1 className='text-5xl text-gray-900 font-bold'>Making History Together</h1>
        <p className='block px-5 text-xl text-gray-600 pt-9'> 
          Be part of a groundbreaking initiative that will be recorded in the Indian Book of Records
        </p>
        
        {/* --- Brochure Download Button --- */}
        <div className='mt-10'>
          <a 
            href="/EVENT BROCHURE - INDIA BOOK OF RECORDS.pdf" 
            download="EVENT BROCHURE - INDIA BOOK OF RECORDS.pdf"
            className='inline-block bg-green-600 text-white font-bold py-3 px-8 rounded-full hover:bg-green-700 transition-colors duration-300 shadow-lg' // Darker green button
          >
            Download Event Brochure
          </a>
        </div>
      </div>

      {/* --- Event Details and Poster Section --- */}
      <div className='mt-20 px-9 flex flex-col lg:flex-row gap-16 items-center justify-center'>
        
        {/*  Details about Partners */}
        <div className='lg:w-1/2 space-y-10'>

          {/* Feature 1: AMET University */}
          <div className='flex items-start gap-4 p-6 bg-white rounded-lg shadow-md border border-green-200'> 
            <div className='flex-shrink-0 p-3 bg-green-200 rounded-full'> 
              {/* University/Institution Icon */}
              <GraduationCap className="h-8 w-8 text-green-700" />
            </div>
            <div>
              <h3 className='text-2xl font-bold text-green-800'> Academic Partner: AMET University</h3> 
              <p className='mt-2 text-gray-700'>
                As our esteemed academic partner, AMET University champions environmental stewardship through education and research, empowering the next generation of green leaders.
              </p>
            </div>
          </div>

          {/* Feature 2: DZUM EIACP PC RP */}
          <div className='flex items-start gap-4 p-6 bg-white rounded-lg shadow-md border border-green-200'> 
            <div className='flex-shrink-0 p-3 bg-green-200 rounded-full'> 
           
              <BookOpen className="h-8 w-8 text-green-700" />
            </div>
            <div>
              <h3 className='text-2xl font-bold text-green-800'> Knowledge Partner: DZUM EIACP</h3> 
              <p className='mt-2 text-gray-700'>
                Our knowledge partner, DZUM EIACP, provides crucial environmental data and awareness, forming the backbone of our informational campaign for a sustainable future.
              </p>
            </div>
          </div>

          {/* Feature 3: Our Collective Green Goal */}
          <div className='flex items-start gap-4 p-6 bg-white rounded-lg shadow-md border border-green-200'> 
            <div className='flex-shrink-0 p-3 bg-green-200 rounded-full'> 
       
            <Globe2 className="h-8 w-8 text-green-700" />

            </div>
            <div>
              <h3 className='text-2xl font-bold text-green-800'>Our Collective Green Goal</h3>
              <p className='mt-2 text-gray-700'>
                This initiative, empowered by our partnerships, aims to foster a nationwide culture of environmental responsibility and contribute significantly to a greener, more sustainable India.
              </p>
            </div>
          </div>

        </div>
        
        {/* Event Poster */}
        <div className='lg:w-5/12 container pt-10 lg:pt-0'>
          <img 
            src="./og-banner.webp" 
            className='block w-full h-auto rounded-3xl shadow-2xl border-4 border-green-400' 
            alt="Event Poster" 
          />
        </div>
      </div>

    

    </section>
  );
};

export default Members;