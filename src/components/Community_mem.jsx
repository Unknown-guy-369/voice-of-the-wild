import React, { useState, useEffect } from "react";

const CommunityMembers = () => {
  const [communityMembers, setCommunityMembers] = useState([]);

 useEffect(() => {
    fetch(import.meta.env.VITE_AMBASSADOR_URL) //  backend endpoint
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => {
       
        const formattedData = data.map((user) => ({
          name: user.name,
          photoUrl: user.photoUrl,
          role: user.role,     
          desc: user.desc,      
          id: user._id          
        }));

        setCommunityMembers(formattedData);
      })
      .catch((err) => console.error("Error fetching community members:", err));
  }, []);

  const looped = [ ...communityMembers];

  return (
    <section className="pt-10 bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-6xl  font-semibold text-gray-800 mb-4">
             Guardians of the Green 
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Meet the dedicated Ambassadors who have pledged to protect and nurture our environment through action.
          </p>
        </div>

        {/* Scrollable Row */}
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-8 px-4 pb-8"> {/* Increased gap for better spacing */}
            {looped.map((member, i) => (
              <div
                key={i}
                className="
                  relative overflow-hidden rounded-xl p-5 shadow-md w-72 flex-shrink-0
                  transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg
                  flex flex-col bg-white
                "
              >
               
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-lime-50 to-emerald-50 opacity-80"></div>
                <div className="absolute top-0 right-0 w-20 h-20 bg-green-200/30 rounded-full translate-x-10 -translate-y-10"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-lime-200/30 rounded-full -translate-x-8 translate-y-8"></div>
                
                {/* --- CARD CONTENT --- */}
        
                <div className="relative z-10 flex flex-col items-center flex-grow p-6 text-center">
                  
                  {/* Profile Image */}
                  <div className="mb-4">
                    <div className="w-30 h-30 rounded-full p-1 bg-gradient-to-br from-green-300 to-lime-300 shadow-md">
                      <img
                        src={member.photoUrl}
                        alt={member.name}
                        className="w-full h-full rounded-full object-cover border-2 border-white"
                      />
                    </div>
                  </div>
                  
                  {/* Name */}
                  <h3 className="text-xl font-bold text-gray-800">
                    {member.name}
                  </h3>
                  
                  {/* Position */}
                  <p className="text-green-700 font-semibold text-sm mb-4">
                    {member.role}
                  </p>

                  {/* Divider */}
                  <div className="w-1/4 h-px bg-gray-200 my-2"></div>
                  
                  {/* Description / "What they're doing" */}
                  <p className="text-gray-600 text-sm leading-relaxed flex-grow mt-2">
                    {member.desc}
                    
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityMembers;