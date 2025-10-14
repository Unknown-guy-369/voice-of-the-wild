  import React, { useState, useEffect } from "react";

  const Volunteers = () => {
    const [volunteers, setVolunteers] = useState([]);
    
    useEffect(() => {
      fetch(import.meta.env.VITE_VOLUNTEER_URL)
        .then((res) => res.json())
        .then((data) => setVolunteers(data))
        .catch((err) => console.log(err));
    }, []);
    
    const looped = [ ...volunteers];
    
    return (
      <section className="section-padding bg-gradient-to-br mt-8 pt-8 from-green-50 to-accent-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet Our Elite Volunteers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Dedicated individuals working tirelessly to make Voice of the Wild a
              historic success
            </p>
          </div>
          
          {/* Scrollable Row */}
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-8 px-4 pb-8">
              {looped.map((volunteer, i) => (
                <div
                  key={i}
                  className="
                    relative overflow-hidden rounded-2xl shadow-lg w-80 flex-shrink-0
                    transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl
                    flex flex-col min-h-[400px]
                  "
                >
                  {/* Enhanced Background Design */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400 via-teal-500 to-cyan-600"></div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-16 -translate-y-16"></div>
                  <div className="absolute top-20 right-0 w-24 h-24 bg-white/20 rounded-full translate-x-12 -translate-y-8"></div>
                  <div className="absolute bottom-0 left-10 w-40 h-40 bg-white/5 rounded-full translate-y-20"></div>
                  
                  {/* Geometric Pattern Overlay */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 left-4 w-8 h-8 border-2 border-white rotate-45"></div>
                    <div className="absolute top-12 right-8 w-6 h-6 bg-white/30 rounded-full"></div>
                    <div className="absolute bottom-16 left-8 w-4 h-4 bg-white/40"></div>
                    <div className="absolute bottom-8 right-12 w-10 h-10 border border-white rotate-12"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center justify-center h-full p-8">
                    {/* Profile Image */}
                    <div className="mb-6">
                      <div className="w-40 h-40 rounded-full p-1 bg-white/20 backdrop-blur-sm">
                        <img
                          src={volunteer.photoUrl}
                          alt={volunteer.name}
                          className="w-full h-full rounded-full object-cover border-2 border-white shadow-lg"
                        />
                      </div>
                    </div>
                    
                    {/* Name */}
                    <h3 className="text-2xl font-bold text-white mb-2 text-center drop-shadow-lg">
                      {volunteer.name}
                    </h3>
                    
                    {/* Role Badge */}
                    <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                      <p className="text-white font-semibold text-sm tracking-wide uppercase">
                        Elite Volunteer
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default Volunteers;