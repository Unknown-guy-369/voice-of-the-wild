import React from 'react';

const Members = () => {
  return (
    // Added a subtle green background tint to the section
    <section id='Members' className='min-h-screen container mx-auto py-12 bg-green-50'> 
      {/* --- Main Heading and Subtitle --- */}
      <div className='text-center sm:px-5'>
        <h1 className='text-5xl text-gray-900 font-bold'>Making History Together</h1>
        <p className='block px-5 text-xl text-gray-600 pt-9'> {/* Text color slightly darker */}
          Be part of a groundbreaking initiative that will be recorded in the Indian Book of Records
        </p>
        
        {/* --- Brochure Download Button --- */}
        <div className='mt-10'>
          <a 
            href="/EVENT BROCHURE - INDIA BOOK OF RECORDS.pdf" // <-- IMPORTANT: Change this path
            download="EVENT BROCHURE - INDIA BOOK OF RECORDS.pdf"
            className='inline-block bg-green-700 text-white font-bold py-3 px-8 rounded-full hover:bg-green-800 transition-colors duration-300 shadow-lg' // Darker green button
          >
            Download Event Brochure
          </a>
        </div>
      </div>

      {/* --- Event Details and Poster Section --- */}
      <div className='mt-20 px-9 flex flex-col lg:flex-row gap-16 items-center justify-center'>
        
        {/* Left Column: Details about Partners */}
        <div className='lg:w-1/2 space-y-10'>

          {/* Feature 1: AMET University */}
          <div className='flex items-start gap-4 p-6 bg-white rounded-lg shadow-md border border-green-200'> {/* White card with green border */}
            <div className='flex-shrink-0 p-3 bg-green-200 rounded-full'> {/* Lighter green icon background */}
              {/* University/Institution Icon */}
              <svg className="w-7 h-7 text-green-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
              </svg>
            </div>
            <div>
              <h3 className='text-2xl font-bold text-green-800'>🎓 Academic Partner: AMET University</h3> {/* Green title */}
              <p className='mt-2 text-gray-700'> {/* Slightly darker text for contrast */}
                As our esteemed academic partner, AMET University champions environmental stewardship through education and research, empowering the next generation of green leaders.
              </p>
            </div>
          </div>

          {/* Feature 2: DZUM EIACP PC RP */}
          <div className='flex items-start gap-4 p-6 bg-white rounded-lg shadow-md border border-green-200'> {/* White card with green border */}
            <div className='flex-shrink-0 p-3 bg-green-200 rounded-full'> {/* Lighter green icon background */}
              {/* Data/Information Icon */}
              <svg className="w-7 h-7 text-green-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25a2.25 2.25 0 01-2.25-2.25v-2.25z" />
              </svg>
            </div>
            <div>
              <h3 className='text-2xl font-bold text-green-800'>📊 Knowledge Partner: DZUM EIACP</h3> {/* Green title */}
              <p className='mt-2 text-gray-700'> {/* Slightly darker text for contrast */}
                Our knowledge partner, DZUM EIACP, provides crucial environmental data and awareness, forming the backbone of our informational campaign for a sustainable future.
              </p>
            </div>
          </div>

          {/* Feature 3: Our Collective Green Goal */}
          <div className='flex items-start gap-4 p-6 bg-white rounded-lg shadow-md border border-green-200'> {/* White card with green border */}
            <div className='flex-shrink-0 p-3 bg-green-200 rounded-full'> {/* Lighter green icon background */}
              {/* Earth/Globe Icon */}
              <svg className="w-7 h-7 text-green-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21v-4.75m0-1.096L9.663 9.406m-2.235 5.545L3.89 12M14.337 9.406L12 4.5m2.337 4.906h2.82M8.406 12L12 4.5m-3.594 7.5l-2.82 2.82" />
              </svg>
            </div>
            <div>
              <h3 className='text-2xl font-bold text-green-800'>🌍 Our Collective Green Goal</h3> {/* Green title */}
              <p className='mt-2 text-gray-700'> {/* Slightly darker text for contrast */}
                This initiative, empowered by our partnerships, aims to foster a nationwide culture of environmental responsibility and contribute significantly to a greener, more sustainable India.
              </p>
            </div>
          </div>

        </div>
        
        {/* Right Column: Event Poster */}
        <div className='lg:w-5/12 container pt-10 lg:pt-0'>
          <img 
            src="./poster.jpg" 
            className='block w-full h-auto rounded-3xl shadow-2xl border-4 border-green-400' // Green border around the poster
            alt="Event Poster" 
          />
        </div>
      </div>

      {/* --- Partners Section --- */}
      <div className='text-center mt-24 px-5'>
        <h2 className='text-4xl text-green-800 font-bold'>Our Esteemed Partners</h2> {/* Green heading */}
        <p className='text-lg text-gray-700 mt-4'> {/* Slightly darker text */}
            We are proud to collaborate with leading institutions to make this event a success.
        </p>
        <div className='mt-10 flex flex-wrap justify-center items-center gap-x-12 gap-y-6'>
            <a 
                href="https://www.ametuniv.ac.in/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className='text-2xl font-semibold text-green-700 hover:text-green-900 transition-colors' // Green partner links
            >
                AMET University
            </a>
            <a 
                href="http://dzumeiacp.in/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className='text-2xl font-semibold text-green-700 hover:text-green-900 transition-colors' // Green partner links
            >
                DZUM EIACP PC RP
            </a>
        </div>
      </div>

    </section>
  );
};

export default Members;