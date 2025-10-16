import React from 'react';
import { Network } from "lucide-react";

// --- Icon Components ---

const MissionIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m8-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
    </svg>
);

const VisionIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const ApproachIcon = () => (
    <Network className="h-8 w-8 text-green-700" />

);

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

                <div className="mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Foundation</h2>
                        <p className="text-lg text-gray-600">The principles that guide our every action.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-10">
                        <BeliefCard icon={<MissionIcon />} title="Our Mission">
                            To unite and empower a global community of environmental advocates, providing the tools, platform, and resources needed to create tangible, positive change for our planet.
                        </BeliefCard>
                        <BeliefCard icon={<VisionIcon />} title="Our Vision">
                            We envision a future where environmental stewardship is a collective endeavor, driven by passion, and translated into impactful action to safeguard biodiversity for generations to come.
                        </BeliefCard>
                        <BeliefCard icon={<ApproachIcon />} title="Our Approach">
                            We operate as a dynamic <span className="font-semibold text-green-700">Central Hub</span>, a digital-first ecosystem that connects passionate individuals with meaningful conservation initiatives, fostering a powerful movement for change.
                        </BeliefCard>
                    </div>
                </div>

                {/* --- Three Pillars Section --- */}
                <div className="mt-16">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Our Integrated Approach
                        </h2>
                        <p className="mt-2 text-xl text-gray-600">The Pillars of Our Impact</p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
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

                {/* <div className="mt-24 bg-gradient-to-r from-green-600 to-green-800 rounded-2xl p-12 text-center text-white shadow-xl">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-4xl font-bold mb-4">Join Voice of the Wild</h2>
                        <p className="text-lg text-green-200 leading-relaxed mb-8">
                            Whether you are an individual eager to make a difference, a student, or an organization seeking to contribute to a sustainable future, we offer a platform for meaningful engagement.
                        </p>
                        <a href="#Register_page" className="inline-block bg-white text-green-800 font-bold py-3 px-8 rounded-full text-lg transition-transform duration-300 hover:scale-105 hover:bg-green-50">
                            Join The Movement
                        </a>
                    </div>
                </div> */}
            </div>
        </section>
    );
};

const BeliefCard = ({ icon, title, children }) => (
    <div className="text-center p-6">
        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mx-auto mb-5">
            {icon}
        </div>
        <h3 className="text-2xl font-semibold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-700 leading-relaxed">{children}</p>
    </div>
);

// --- Pillar Card Component ---
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