import React from 'react';
import { FaGraduationCap, FaUsers, FaGlobe, FaHandshake } from 'react-icons/fa';
import CountUp from 'react-countup';

const reunionImg = 'https://wpcdn.us-midwest-1.vip.tn-cloud.net/www.charlotteparent.com/content/uploads/data-import/a86308ab/shutterstock_658847998.jpg';
const storyImg = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.deJFtz_PtCM1_81dZRtfewHaE8%3Fr%3D0%26pid%3DApi&f=1&ipt=f11132ca61f98975e30c4bf6f7b47c4b7bee7ed97e3a35ee5fae8fd8f572dc61&ipo=images';

const stats = [
  { id: 1, label: 'Active Alumni', value: 5000, suffix: '+', icon: FaUsers },
  { id: 2, label: 'Countries Represented', value: 10, suffix: '+', icon: FaGlobe },
  { id: 3, label: 'Years of History', value: 10, suffix: '+', icon: FaGraduationCap },
  { id: 4, label: 'Mentorships Connected', value: 1200, suffix: '+', icon: FaHandshake },
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

      {/* Stats Section */}
      <div className="max-w-6xl mx-auto px-4 -mt-10 relative z-20">
        <div className="bg-white rounded-xl shadow-xl grid grid-cols-2 md:grid-cols-4 gap-8 p-8 md:p-12">
          {stats.map((stat) => (
            <div key={stat.id} className="text-center group">
              <div className="inline-flex items-center justify-center p-3 rounded-full bg-red-50 text-red-700 mb-4 group-hover:scale-110 transition-transform">
                <stat.icon className="text-2xl" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">
                <CountUp end={stat.value} duration={2.5} separator="," />{stat.suffix}
              </div>
              <div className="text-sm text-gray-600 font-medium uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Mission Section */}
      <section className="max-w-6xl mx-auto px-4 py-20 flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        <div className="flex-1 space-y-6">
          <div className="inline-block px-3 py-1 bg-red-100 text-red-800 text-sm font-semibold rounded-full uppercase tracking-wider">
            Our Mission
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 leading-tight">
            Building bridges beyond graduation
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            At College Alumni Connection, we believe that the bond between students and alumni goes far beyond graduation. Our mission is to build a vibrant and inclusive platform where former students can reconnect, share opportunities, mentor, and grow together.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            In a world full of fragmented communication, we bring purpose and connection back to the forefront — not just through features, but through shared values. Whether it's helping someone land their first job, offering career advice, or simply reminiscing about campus memories — we're here to keep the spirit alive.
          </p>
        </div>
        <div className="flex-1 relative">
          <div className="absolute top-4 left-4 w-full h-full border-4 border-red-100 rounded-2xl z-0"></div>
          <img
            src={reunionImg}
            alt="Alumni Reunion"
            className="w-full h-96 object-cover rounded-2xl shadow-xl relative z-10"
          />
        </div>
      </section>

      {/* Story Section */}
      <section className="max-w-6xl mx-auto px-4 py-12 flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-20">
        <div className="flex-1 space-y-6">
          <div className="inline-block px-3 py-1 bg-red-100 text-red-800 text-sm font-semibold rounded-full uppercase tracking-wider">
            Our Story
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 leading-tight">
            Founded on friendship, grown by community
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            The idea for College Alumni Connection was born in the heart of a college dorm room, where a group of graduating friends realized that once they left campus, staying in touch with their seniors, juniors, and even batchmates wouldn't be easy.
          </p>
          <div className="border-l-4 border-red-700 pl-6 py-2 my-6 bg-white shadow-sm rounded-r-lg">
            <p className="text-xl font-serif text-gray-800 italic">
              "What started as a simple idea — 'Let's stay connected' — evolved into a powerful platform to unite thousands."
            </p>
          </div>
          <p className="text-lg text-gray-600 leading-relaxed">
            Today, we're more than just a social network. We're a career partner, a memory keeper, and a support system — powered by students, run by alumni, and built with love.
          </p>
        </div>
        <div className="flex-1 relative">
          <div className="absolute -bottom-4 -right-4 w-full h-full bg-gray-100 rounded-2xl z-0"></div>
          <img
            src={storyImg}
            alt="Our Story"
            className="w-full h-96 object-cover rounded-2xl shadow-xl relative z-10 filter sepia-[.15]"
          />
        </div>
      </section>

    </div>
  );
}

export default AboutUs;