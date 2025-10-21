import { useState, useEffect } from "react";
import { X } from 'lucide-react'; // For the close icon in the modal

// --- Main Component: Fetches data and manages state ---
const CommunityMembers = () => {
  const [communityMembers, setCommunityMembers] = useState([]);
  const [selectedMember, setSelectedMember] = useState(null); // State to manage the open modal
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(import.meta.env.VITE_AMBASSADOR_URL)
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        setCommunityMembers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching community members:", err);
        setError("Could not load our community members at this time.");
        setLoading(false);
      });
  }, []);

  const handleOpenModal = (member) => {
    setSelectedMember(member);
  };

  const handleCloseModal = () => {
    setSelectedMember(null);
  };
  
  if (loading) {
    return <section className="py-20 text-center"><p className="text-green-800">Loading Guardians...</p></section>;
  }
  
  if (error) {
    return <section className="py-20 text-center"><p className="text-red-600">{error}</p></section>;
  }

  return (
    <section className="pt-10 bg-white">
      <div className="container-max mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-6xl font-semibold text-gray-800 mb-4">
            Guardians of the Green 
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Meet the dedicated Ambassadors who have pledged to protect and nurture our environment through action.
          </p>
        </div>

        {/* Carousel Layout for cards */}
        <div className="overflow-x-auto scrollbar-hide pb-8">
          <div className="flex gap-8 px-4">
            {communityMembers.map((member) => (
              <AmbassadorCard 
                key={member._id} 
                member={member} 
                onClick={() => handleOpenModal(member)} 
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal is rendered here, conditionally */}
      <AmbassadorModal 
        member={selectedMember} 
        onClose={handleCloseModal} 
      />
    </section>
  );
};

// --- Child Component: Displays a single ambassador card with the requested design ---
const AmbassadorCard = ({ member, onClick }) => (
  <div
    onClick={onClick}
    className="
      relative overflow-hidden rounded-xl p-5 shadow-md w-72 flex-shrink-0
      transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg
      flex flex-col bg-white h-full cursor-pointer group
    "
  >
    <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-lime-50 to-emerald-50 opacity-80"></div>
    <div className="absolute top-0 right-0 w-20 h-20 bg-green-200/30 rounded-full translate-x-10 -translate-y-10"></div>
    <div className="absolute bottom-0 left-0 w-16 h-16 bg-lime-200/30 rounded-full -translate-x-8 translate-y-8"></div>
    
    <div className="relative h-90 z-10 flex flex-col items-center flex-grow text-center">
      <div className="mb-4">
        <div className="w-32 h-32 rounded-full p-1 bg-gradient-to-br from-green-300 to-lime-300 shadow-md">
          <img
            src={member.photoUrl}
            alt={member.name}
            className="w-full h-full rounded-full object-cover border-2 border-white"
          />
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-gray-800">
        {member.name}
      </h3>
      
      <p className="text-green-700 font-semibold text-sm mb-4">
        {member.role}
      </p>

      <div className="w-1/4 h-px bg-gray-200 my-2"></div>
      
      {/* Description with truncation */}
      <p className="text-gray-600 text-sm leading-relaxed flex-grow mt-2 line-clamp-3">
        {member.desc}
      </p>
      
      <div className="mt-auto pt-4">
        <span className="font-semibold text-green-600 group-hover:text-green-700 transition-colors">
          Read More &rarr;
        </span>
      </div>
    </div>
  </div>
);

// --- Child Component: The Modal Popup ---
const AmbassadorModal = ({ member, onClose }) => {
  // Add Escape key listener for accessibility
  useEffect(() => {
    if (!member) return; // Don't add listener if modal is closed

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [member, onClose]);

  if (!member) return null;

  return (
    // The Modal Wrapper with Overlay
    <div 
      className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4 animate-fade-in-fast"
      onClick={onClose} // Close modal on overlay click
    >
      <div 
        className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl transform transition-all duration-300 animate-slide-up-fast"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        <div className="relative p-6 md:p-8">
          <button 
            onClick={onClose} 
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition-colors"
          >
            <X size={24} />
          </button>
          
          <div className="md:flex md:gap-8">
            <div className="md:w-1/3 flex-shrink-0 text-center">
              <img 
                src={member.photoUrl} 
                alt={member.name} 
                className="w-40 h-40 rounded-full object-cover mx-auto border-4 border-green-200 shadow-md"
              />
            </div>
            <div className="md:w-2/3 mt-6 md:mt-0">
              <h2 className="text-3xl font-bold text-green-800">{member.name}</h2>
              <p className="text-md font-semibold text-green-600 mt-1">{member.role}</p>
              
              <div className="w-20 h-px bg-green-200 my-4"></div>
              
              {/* Added custom scrollbar for better aesthetics */}
              <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed max-h-60 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-green-200 scrollbar-track-gray-100">
                <p>{member.desc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Tailwind Animations ---
const styles = `
.animate-fade-in-fast {
      animation: fadeIn 0.3s ease-out forwards;
    }
    .animate-slide-up-fast {
      animation: slideUp 0.3s ease-out forwards;
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes slideUp {
      from { transform: translateY(20px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }}
`;
document.head.insertAdjacentHTML("beforeend", `<style>${styles}</style>`);

export default CommunityMembers;
