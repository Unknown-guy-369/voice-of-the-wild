import React from 'react'

const Register = () => {
  return (
    <section id='Register_page' className=' text-center min-h-screen '>
        <div className=' pt-12 px-5' >
            {/* Text */}
            <span className='block text-6xl font-bold text-gray-900 mb-8'>Join Voice of the Wild</span>
            <span className=' text-xl text-gray-500'>Be part of history! Join thousands of others in making a commitment to protect our planet. Your pledge will be part of the Indian Book of Records.</span>
        </div>
       
        <div className="text-center px-4 md:px-20 mt-14">
        {/* Registration Card */}
        <div className="bg-green-100 rounded-2xl p-8 md:p-12 mx-auto shadow-xl border border-green-200">
    
          <div className='mb-6 flex items-center justify-center'>
            <img src="vow_logo.webp" className='rounded-full w-24 h-24 md:w-28 md:h-28 border-4 border-white shadow-md' alt="Voice of the Wild Logo" />
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            One Voice, One Moment, One Pledge
          </h2>
          
          <div className="bg-white rounded-lg p-4 mb-8 inline-block shadow-sm">
            <p className="text-lg font-semibold text-green-700">December 02, 2025</p>         
            <p className="text-sm text-gray-600">National Pollution Control Day</p>
            <p className="text-xs text-gray-500 mt-1">IBR Application ID: 102721</p>
          </div>
          
          <p className="text-lg text-gray-700 mb-10 leading-relaxed max-w-2xl mx-auto">
            Join this groundbreaking initiative to create the "Largest Virtually Synchronized Pledge on Climate Change" in India.
          </p>    
          
          {/* --- CTA Buttons Section --- */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            
           
            <a
              href='https://www.theticket9.com/event/india-book-of-records-attempt'
              className="w-full md:w-auto bg-green-500 rounded-full text-white font-bold px-8 py-4 text-lg transition-all hover:bg-green-600 hover:shadow-lg"
            >
              Pre-Register Now @ticket9.com
            </a>

          
            <a
              href="#"
              onClick={(e) => e.preventDefault()} // Prevents navigation
              className="w-full md:w-auto bg-transparent border-2 border-green-600 text-green-700 rounded-full font-bold px-8 py-4 text-lg opacity-60 cursor-not-allowed"
              title="This link will be active on the day of the event" // Tooltip
            >
              Event Day Pledge & Certificate
            </a>

          </div>
          
        
          <p className="mt-6 text-sm text-gray-500">
            The link for the pledge and certificate will be active on **December 02, 2025**.
          </p>

        </div>
      </div>
         <div className="mt-16 px-14 grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-green-100 rounded-xl p-6">
            <img src="IBR_logo.webp" className='text-3xl mb-3 mx-auto h-20' alt="IBR_logo" />
            
            <h4 className="font-semibold text-gray-900 mb-2">IBR Certified</h4>
            <p className="text-gray-600 text-sm">Official India Book of Records attempt with verified credibility</p>
          </div>
          
          <div className="bg-green-100 rounded-xl p-6">
            <img src="vow_logo.webp" className='rounded-full mx-auto w-23 h-23' alt="vow_logo" />
            <h4 className="font-semibold text-gray-900 mb-2">Largest Volunteer Conclave in Tamil Nadu</h4>
            <p className="text-gray-600 text-sm">First-of-its-kind in volunteering for Climate change</p>
          </div>
          
          <div className="bg-green-100 rounded-xl p-6">
            <img src="stg_logo.webp" className='rounded-full mx-auto h-23' alt="stg_logo" />
            <h4 className="font-semibold text-gray-900 mb-2">Green Legacy</h4>
            <p className="text-gray-600 text-sm">Emphasizes responsibility and care for the planet</p>
          </div>
        </div>
        
    </section>
  )
}

export default Register