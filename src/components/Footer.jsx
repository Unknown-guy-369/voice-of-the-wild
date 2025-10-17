import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram,faXTwitter,faFacebook } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-10 mt-10 px-14">
      <div className="container-max">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
            
              <img src="vow_logo.jpg" className='w-8 h-8 rounded-full' alt="logo" />
              <span className="font-bold text-xl">Climate Pledge</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Voice of the Wild - One Voice, One Moment, One Pledge—Save Nature! Join India's largest 
              virtually synchronized climate pledge on December 02, 2025.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#About" className="text-gray-400 hover:text-green-400 transition-colors">
                  About the Event
                </a>
              </li>
              <li>
                <a href="#register" className="text-gray-400 hover:text-green-400 transition-colors">
                  Register Now
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-green-400 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
            <div className="flex space-x-4">
             
{/*              
              <FontAwesomeIcon href='' icon={faFacebook} size='2x' className='text-gray-200' />
              
              <FontAwesomeIcon  icon={faXTwitter} size='2x' className='text-gray-200' /> */}
              
              <a href="https://www.instagram.com/voiceofthewild25?igsh=MXgxOGczNHQ4Y2s5Zg=="><FontAwesomeIcon href='https://www.instagram.com/voiceofthewild25?igsh=MXgxOGczNHQ4Y2s5Zg==' icon={faInstagram} size='2x' className='text-gray-200' /></a>

            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Voice of the Wild. All rights reserved. | 
            <span className="text-green-400 font-semibold"> India Book of Records Application ID: 102721</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer