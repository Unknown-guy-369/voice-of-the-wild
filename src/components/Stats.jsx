import  { useState, useEffect } from 'react';

// Icon components for better readability
const UserGroupIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const TargetIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7.014A8.003 8.003 0 0122 12c0 3.771-2.583 6.94-6.014 7.727-2.43.55-4.486.22-6.329-1.07z" />
  </svg>
);

const Stats = () => {
  const [currentPledges, setCurrentPledges] = useState(0);
  const targetPledges = 15000;

  useEffect(() => {
    // Simulate real-time pledge counter
    const interval = setInterval(() => {
      setCurrentPledges(prev => {
        if (prev >= targetPledges) {
          clearInterval(interval);
          return targetPledges;
        }
        const increment = Math.floor(Math.random() * 5) + 1;
        return Math.min(prev + increment, targetPledges);
      });
    }, 2500);

  
    setCurrentPledges(9500);

    return () => clearInterval(interval);
  }, [targetPledges]);

  const progressPercentage = (currentPledges / targetPledges) * 100;
  const goalAchieved = currentPledges >= targetPledges;

  return (
    <section className="relative py-20 md:py-24 bg-gradient-to-br from-green-700 to-green-500 overflow-hidden">
     
      <div className="absolute inset-0 bg-[url('/path/to/subtle-pattern.svg')] opacity-10"></div>
      
      <div className="relative container mx-auto px-4">
        <div className="text-center text-white mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Live Progress Tracker
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Watch as we approach our record-breaking goal in real-time.
          </p>
        </div>
        
        {/* Main Glassmorphism Card */}
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 max-w-4xl mx-auto">
          
          {/*  Hero Stat and Target Goal */}
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8 mb-10">
            {/*  Current Pledges */}
            <div className="flex items-center gap-4">
              <div className="text-green-200"><UserGroupIcon /></div>
              <div>
                <div className="text-5xl md:text-6xl font-bold text-white">
                  {currentPledges.toLocaleString()}
                </div>
                <div className="text-green-200 font-medium tracking-wider">CURRENT PLEDGES</div>
              </div>
            </div>

            {/* Target Goal */}
            <div className="flex items-center gap-4">
              <div className="text-green-200"><TargetIcon /></div>
              <div>
                <div className="text-4xl md:text-5xl font-semibold text-white/80">
                  {targetPledges.toLocaleString()}
                </div>
                <div className="text-green-200 font-medium tracking-wider">TARGET GOAL</div>
              </div>
            </div>
          </div>
          
          {/* Progress Bar with Label */}
          <div className="relative w-full bg-black/20 rounded-full h-8 overflow-hidden">
            <div 
              className={`absolute top-0 left-0 h-full rounded-full transition-all duration-1000 ease-out ${goalAchieved ? 'bg-yellow-400' : 'bg-gradient-to-r from-green-300 to-white'}`}
              style={{ width: `${Math.min(progressPercentage, 100)}%` }}
            ></div>
            <div className="absolute inset-0 flex items-center justify-center text-lg font-bold text-green-900">
              {Math.round(progressPercentage)}% Complete
            </div>
          </div>
          
          {/* Concluding Message */}
          <div className="text-center mt-6">
            <p className={`text-lg transition-all duration-500 ${goalAchieved ? 'font-bold text-yellow-300' : 'text-white/90'}`}>
              {goalAchieved
                ? 'Goal Achieved! Thank you for your support! 🎉'
                : `Only ${(targetPledges - currentPledges).toLocaleString()} more pledges needed to make history!`
              }
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;