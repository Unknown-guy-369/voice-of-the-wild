
const Contact = () => {
  return (
    <section id="contact" className="px-4 md:px-14 mt-14 bg-gradient-to-br from-green-50 to-accent-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl pt-8 md:text-5xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have questions about the event or need assistance with your pledge? We're here to help.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="h-16 w-26    rounded-full flex items-center justify-center mb-6">
              <img src="/gmail_logo.webp" alt="" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Email Support</h3>
            <p className="text-gray-600 mb-4">
              For general inquiries and support
            </p>
            <a 
              href="mailto:voiceofwild25@gmail.com" 
              className="text-green-600 hover:text-green-700 font-semibold transition-colors"
            >
              voiceofwild25@gmail.com
            </a>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="vow_logo.webp" className='rounded-full  w-15 h-15' alt="" />
            <h3 className="text-xl font-semibold pt-5 text-gray-900 mb-3">Phone Support</h3>
            <p className="text-gray-600 mb-4">
              Call us for immediate assistance
            </p>
            <a 
              href="tel:+919940906402" 
              className="text-green-600 hover:text-green-700 font-semibold transition-colors"
            >
              +91 9940906402
            </a>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 md:col-span-2 lg:col-span-1">
  <div className="w-16 h-16  rounded-full flex items-center justify-center mb-6">
    <img src="insta_logo.webp"  />
  </div>
  <h3 className="text-xl font-semibold text-gray-900 mb-3">Follow Us</h3>
  <p className="text-gray-600 mb-4">
    Stay updated with our latest posts and stories
  </p>
  <a 
    href="https://www.instagram.com/voiceofthewild25?igsh=MXgxOGczNHQ4Y2s5Zg==" 
    target="_blank" 
    rel="noopener noreferrer"
    className="inline-flex items-center text-green-600 hover:text-green-700 transition-colors duration-200 font-semibold"
  >
    @voiceofthewild25
    <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  </a>
</div>
        </div>
        
        
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-4 bg-white rounded-full px-6 py-3 shadow-lg">
            <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-gray-700 font-medium">Support available 24/7 during the event</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact