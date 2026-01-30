import React from 'react';
import { FaGraduationCap, FaUsers, FaGlobe, FaHandshake } from 'react-icons/fa';

const stats = [
  { id: 1, label: 'Active Alumni', value: '5000+', icon: FaUsers },
  { id: 2, label: 'Countries Represented', value: '5+', icon: FaGlobe },
  { id: 3, label: 'Years of History', value: '1', icon: FaGraduationCap }, // Or remove entirely if preferred, but user said "no history"
  { id: 4, label: 'Mentorships Connected', value: '50+', icon: FaHandshake },
];

function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 pb-20">

      {/* Hero Section */}
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-12 border-b-4 border-red-600 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col items-start text-left">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">NetGrad College</p>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 tracking-tight">Our Legacy</h1>
            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed font-light font-serif italic border-l-2 border-red-600 pl-6 my-2">
              "Connecting generations of achievers, dreamers, and leaders to build a future rooted in shared history."
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="w-full bg-white border-b-2 border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x-2 divide-gray-200 border-x-2 border-gray-200">
            {stats.map((stat) => (
              <div key={stat.id} className="text-center group p-12 hover:bg-red-50 transition-colors">
                <div className="inline-flex items-center justify-center p-3 text-red-700 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon size={36} />
                </div>
                <div className="text-5xl font-bold text-gray-900 mb-3 font-serif tracking-tighter">
                  {stat.value}
                </div>
                <div className="text-xs text-red-600 uppercase tracking-[0.2em] font-bold border-t-2 border-red-100 pt-4 w-1/2 mx-auto group-hover:border-red-600 transition-colors">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-24 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <div className="inline-block px-4 py-2 bg-gray-900 text-white text-xs font-bold uppercase tracking-widest mb-6 rounded-none">Our Mission</div>
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-8 leading-tight border-l-8 border-red-600 pl-6">
              Empowering Alumni, <br />Inspiring Future Generations.
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed font-serif">
              We foster a lifelong connection between the university and its graduates, providing a platform for professional growth, mentorship, and community engagement.
            </p>
            <div className="p-8 bg-white border-2 border-gray-200 shadow-[8px_8px_0px_0px_rgba(220,38,38,0.1)]">
              <p className="italic text-gray-900 text-lg font-serif leading-relaxed">
                "Our strength lies in the bonds we share and the impact we create together across the globe."
              </p>
            </div>
          </div>
          <div className="md:w-1/2 relative group">
            <div className="absolute top-4 left-4 w-full h-full border-4 border-gray-200 z-0 bg-gray-50 group-hover:top-2 group-hover:left-2 group-hover:border-red-600 transition-all duration-300"></div>
            <img
              src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Graduation"
              className="w-full h-[500px] object-cover relative z-10 filter grayscale contrast-125 border-2 border-gray-900"
            />
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-24 bg-white border-t-2 border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center gap-16">
            <div className="md:w-1/2">
              <div className="inline-block px-4 py-2 bg-red-600 text-white text-xs font-bold uppercase tracking-widest mb-6 rounded-none">Our Story</div>
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">A Legacy of Excellence</h2>
              <div className="space-y-6 text-gray-600 text-lg leading-loose border-l-2 border-gray-200 pl-6">
                <p>
                  Founded in 2025, our Alumni Association started as a small gathering of graduates. Today, it has grown into a global network of over <span className="font-bold text-gray-900">500 professionals</span>, leaders, and change-makers.
                </p>
                <p>
                  From organizing annual reunions to funding scholarships for underprivileged students, we have consistently upheld the values of our institution.
                </p>
              </div>
            </div>
            <div className="md:w-1/2 relative group">
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-gray-900 z-0"></div>
              <img
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="College History"
                className="w-full h-[500px] object-cover relative z-10 filter sepia-[.3] contrast-100 border-2 border-gray-900 group-hover:filter-none transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;