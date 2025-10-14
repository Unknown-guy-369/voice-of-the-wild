import React from 'react';

// --- Icon Components ---
const TalentIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);
const ActionIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6H8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
    </svg>
);
const FundIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);
const CheckIcon = () => (
    <svg className="h-5 w-5 text-green-500 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
);

// --- Main Component ---
const OrganizationAbout = () => {
  return (
    <section id="About" className="py-20 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        
        {/* --- Header --- */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            About Voice of the Wild
          </h1>
          <p className="mt-4 text-xl text-green-700 font-medium">
            Empowering Action for a Sustainable Planet
          </p>
        </div>

        {/* --- Vision & Who We Are --- */}
        <div className="space-y-16">
          {/* Our Vision */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Vision</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                At Voice of the Wild, we envision a future where environmental stewardship is a collective endeavor, driven by passion, supported by resources, and translated into impactful action. We are building a global movement dedicated to safeguarding our planet's biodiversity and fostering sustainable living for generations to come.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img src="https://placehold.co/600x400/166534/FFFFFF?text=Our+Vision" alt="Thriving green landscape representing the organization's vision" className="rounded-2xl shadow-lg w-full" />
            </div>
          </div>

          {/* Who We Are */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img src="https://placehold.co/600x400/15803d/FFFFFF?text=Who+We+Are" alt="Diverse group of people collaborating on a project" className="rounded-2xl shadow-lg w-full" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Who We Are</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Voice of the Wild is not just an organization; it's a dynamic ecosystem for environmental change. Operating as a <span className="font-semibold text-green-700">Central Hub</span>, we are the nexus for a powerful <span className="font-semibold text-green-700">Brand & Digital Platform</span> that unites individuals, drives initiatives, and amplifies the urgent message of conservation. Our unique structure is built upon three interconnected pillars, each vital to our mission.
              </p>
            </div>
          </div>
        </div>

        {/* --- Three Pillars Section --- */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Integrated Approach
            </h2>
            <p className="mt-2 text-xl text-gray-600">The Pillars of Our Impact</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Pillar 1: The Talent Engine */}
            <PillarCard
              icon={<TalentIcon />}
              title="The Talent Engine"
              subtitle="Igniting Passion, Supplying Manpower"
              description="This is where the heart of our movement beats. The Talent Engine is dedicated to cultivating and mobilizing a dedicated force of environmental champions."
              features={[
                { name: 'Volunteer Conclave', detail: 'Bringing together enthusiastic individuals' },
                { name: 'Student Clubs', detail: 'Nurturing young environmental leaders' },
                { name: 'Training Programs', detail: 'Equipping advocates with essential tools' },
              ]}
            />

            {/* Pillar 2: The Action Platform */}
            <PillarCard
              icon={<ActionIcon />}
              title="The Action Platform"
              subtitle="Translating Passion into Tangible Change"
              description="The energy from The Talent Engine flows directly into The Action Platform, where collective passion is transformed into measurable impact."
              features={[
                { name: 'Record Attempts', detail: 'High-visibility awareness campaigns' },
                { name: 'Local Drives', detail: 'Community conservation efforts' },
                { name: 'Policy Advocacy', detail: 'Influencing environmental legislation' },
              ]}
            />

            {/* Pillar 3: The Sustainability Fund */}
            <PillarCard
              icon={<FundIcon />}
              title="The Sustainability Fund"
              subtitle="Fueling Growth, Ensuring Longevity"
              description="Every impactful initiative requires robust support. This pillar secures the vital resources that enable our initiatives to thrive and scale."
              features={[
                { name: 'Corporate Consortia', detail: 'Strategic partnerships for funding' },
                { name: 'Grants & CSR', detail: 'Leveraging opportunities for stability' },
                { name: 'Eco Products', detail: 'Promoting sustainable consumption' },
              ]}
            />
          </div>
        </div>

        {/* --- Call to Action --- */}
        <div className="mt-24 bg-gradient-to-r from-green-700 to-green-900 rounded-2xl p-12 text-center text-white shadow-xl">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">Join Voice of the Wild</h2>
            <p className="text-lg text-green-200 leading-relaxed mb-8">
              Whether you are an individual eager to make a difference, a student, or an organization seeking to contribute to a sustainable future, we offer a platform for meaningful engagement.
            </p>
            <a href="#Register_page" className="inline-block bg-white text-green-800 font-bold py-3 px-8 rounded-full text-lg transition-transform duration-300 hover:scale-105 hover:bg-green-50">
              Join The Movement
            </a>
          </div>
        </div>
        
      </div>
    </section>
  );
};

// ---  Pillar Card Component ---
const PillarCard = ({ icon, title, subtitle, description, features }) => (
  <div className="bg-white rounded-2xl p-8 shadow-lg flex flex-col hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-green-100">
    <div className="flex-shrink-0 bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
    <p className="text-green-700 font-semibold mt-1 mb-4">{subtitle}</p>
    <p className="text-gray-600 leading-relaxed mb-6">{description}</p>
    <div className="mt-auto space-y-3 border-t border-gray-200 pt-6">
      {features.map((feature, index) => (
        <div key={index} className="flex items-start space-x-3">
          <CheckIcon />
          <p className="text-sm text-gray-600"><span className="font-semibold text-gray-800">{feature.name}:</span> {feature.detail}</p>
        </div>
      ))}
    </div>
  </div>
);

export default OrganizationAbout;

  