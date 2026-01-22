import React from 'react';
import { FaGraduationCap, FaUsers, FaGlobe, FaHandshake } from 'react-icons/fa';
import CountUp from 'react-countup';

const reunionImg = 'https://wpcdn.us-midwest-1.vip.tn-cloud.net/www.charlotteparent.com/content/uploads/data-import/a86308ab/shutterstock_658847998.jpg';
const storyImg = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.deJFtz_PtCM1_81dZRtfewHaE8%3Fr%3D0%26pid%3DApi&f=1&ipt=f11132ca61f98975e30c4bf6f7b47c4b7bee7ed97e3a35ee5fae8fd8f572dc61&ipo=images';

const stats = [
  { id: 1, label: 'Active Alumni', value: 1000, suffix: '+', icon: FaUsers },
  { id: 2, label: 'Countries Represented', value: 10, suffix: '+', icon: FaGlobe },
  { id: 3, label: 'Years of History', value: 10, suffix: '+', icon: FaGraduationCap },
  { id: 4, label: 'Mentorships Connected', value: 500, suffix: '+', icon: FaHandshake },
];

function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 pb-20">

      {/* Hero Section */}
      <div className="bg-red-900 text-white py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 tracking-wide">Our Legacy</h1>
          <p className="text-xl md:text-2xl text-red-100 max-w-2xl mx-auto leading-relaxed font-light">
            Connecting generations of achievers, dreamers, and leaders to build a future rooted in shared history.
          </p>
        </div>
      </div>

      {/* Stats Section with CountUp */}
      <div className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white shadow-xl grid grid-cols-2 md:grid-cols-4 gap-8 p-12 border border-gray-100">
            <div className="text-center group border-r border-gray-100 last:border-0">
              <div className="inline-flex items-center justify-center p-3 text-red-700 mb-4 group-hover:scale-110 transition-transform">
                <FaUsers size={32} />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2 font-serif">
                <CountUp end={5000} duration={2.5} separator="," />+
              </div>
              <div className="text-sm text-gray-500 uppercase tracking-widest font-semibold">Active Alumni</div>
            </div>
            <div className="text-center group border-r border-gray-100 last:border-0">
              <div className="inline-flex items-center justify-center p-3 text-red-700 mb-4 group-hover:scale-110 transition-transform">
                <FaGlobe size={32} />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2 font-serif">
                <CountUp end={25} duration={3} />+
              </div>
              <div className="text-sm text-gray-500 uppercase tracking-widest font-semibold">Countries</div>
            </div>
            <div className="text-center group border-r border-gray-100 last:border-0">
              <div className="inline-flex items-center justify-center p-3 text-red-700 mb-4 group-hover:scale-110 transition-transform">
                <FaGraduationCap size={32} />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2 font-serif">
                <CountUp end={50} duration={3} />+
              </div>
              <div className="text-sm text-gray-500 uppercase tracking-widest font-semibold">Years History</div>
            </div>
            <div className="text-center group border-r border-gray-100 last:border-0">
              <div className="inline-flex items-center justify-center p-3 text-red-700 mb-4 group-hover:scale-110 transition-transform">
                <FaHandshake size={32} />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2 font-serif">
                <CountUp end={1200} duration={2.5} separator="," />+
              </div>
              <div className="text-sm text-gray-500 uppercase tracking-widest font-semibold">Mentorships</div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-20 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <div className="inline-block px-3 py-1 bg-red-50 text-red-800 text-xs font-bold uppercase tracking-wider mb-4 border-l-2 border-red-800">Our Mission</div>
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6 leading-tight">Empowering Alumni, <br />Inspiring Future Generations.</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We foster a lifelong connection between the university and its graduates, providing a platform for professional growth, mentorship, and community engagement.
            </p>
            <div className="border-l-4 border-red-700 pl-6 py-2 my-8 italic text-gray-700 bg-gray-50 text-lg">
              "Our strength lies in the bonds we share and the impact we create together across the globe."
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="absolute top-4 left-4 w-full h-full border-4 border-gray-100 z-0"></div>
            <img
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Graduation"
              className="w-full h-96 object-cover shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center gap-16">
            <div className="md:w-1/2">
              <div className="inline-block px-3 py-1 bg-red-50 text-red-800 text-xs font-bold uppercase tracking-wider mb-4 border-l-2 border-red-800">Our Story</div>
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">A Legacy of Excellence</h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                Founded in 1970, our Alumni Association started as a small gathering of graduates. Today, it has grown into a global network of over 50,000 professionals, leaders, and change-makers.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                From organizing annual reunions to funding scholarships for underprivileged students, we have consistently upheld the values of our institution.
              </p>
            </div>
            <div className="md:w-1/2 relative">
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-red-900/5 z-0"></div>
              <img
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="College History"
                className="w-full h-96 object-cover shadow-2xl relative z-10 sepia-[.15]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;