import React from 'react';
import { useTheme } from '../../context/ThemeContext';


const reunionImg = 'https://wpcdn.us-midwest-1.vip.tn-cloud.net/www.charlotteparent.com/content/uploads/data-import/a86308ab/shutterstock_658847998.jpg';
const storyImg = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.deJFtz_PtCM1_81dZRtfewHaE8%3Fr%3D0%26pid%3DApi&f=1&ipt=f11132ca61f98975e30c4bf6f7b47c4b7bee7ed97e3a35ee5fae8fd8f572dc61&ipo=images'; 
function AboutUs() {
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-screen pb-12 mt-1 relative overflow-hidden transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
        : 'bg-gradient-to-br from-gray-50 via-white to-teal-50'
    }`}>
      <div className={`absolute top-1/2 right-0 w-72 h-72 rounded-full opacity-20 blur-2xl z-0 ${
        isDarkMode ? 'bg-teal-400' : 'bg-teal-200'
      }`} />

      <section className="relative z-10 max-w-5xl mx-auto px-4 py-12 md:py-20 flex flex-col md:flex-row items-center gap-10 md:gap-16">
        <div className="flex-1">
          <h2 className={`text-3xl md:text-4xl font-extrabold mb-6 tracking-tight ${
            isDarkMode ? 'text-white' : 'text-gray-800'
          }`}>Our Mission</h2>
          <p className={`text-lg leading-relaxed ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            At College Alumni Connection, we believe that the bond between students and alumni goes far beyond graduation. Our mission is to build a vibrant and inclusive platform where former students can reconnect, share opportunities, mentor, and grow together.<br /><br />
            In a world full of fragmented communication, we bring purpose and connection back to the forefront — not just through features, but through shared values. Whether it's helping someone land their first job, offering career advice, or simply reminiscing about campus memories — we're here to keep the spirit alive.
          </p>
        </div>

        <div className="flex-1 flex flex-col items-center">
          <div className={`w-90 h-72 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center mb-4 mt-8 ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            <img src={reunionImg} alt="our misson image" className="object-cover w-full h-full scale-105" />
          </div>

        </div>
      </section>

      <section className="relative z-10 max-w-5xl mx-auto px-4 py-12 md:py-20 flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
      <div className="flex-1 flex flex-col items-center">
          <div className={`w-90 h-72 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center mb-4 mt-8 ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            <img src={storyImg} alt="our story " className="object-cover w-full h-full scale-105" />
          </div>

        </div>
        <div className="flex-1">
          <h2 className={`text-3xl md:text-4xl font-extrabold mb-6 tracking-tight ${
            isDarkMode ? 'text-white' : 'text-gray-800'
          }`}>Our Story</h2>
          <p className={`text-lg leading-relaxed ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            The idea for College Alumni Connection was born in the heart of a college dorm room, where a group of graduating friends realized that once they left campus, staying in touch with their seniors, juniors, and even batchmates wouldn't be easy.<br /><br />
            What started as a simple idea — "Let's stay connected" — evolved into a powerful platform to unite thousands of students and alumni across years and batches.<br /><br />
            Today, we're more than just a social network. We're a career partner, a memory keeper, and a support system — powered by students, run by alumni, and built with love.
          </p>
        </div>
      </section>

    </div>
  );
}

export default AboutUs;