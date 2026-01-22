import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { ImTwitter } from "react-icons/im";

function ContactUs() {
  return (
    <div className="min-h-screen bg-white py-16 px-4 font-sans">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 bg-white shadow-xl border border-gray-100 mx-auto">

        {/* Left Side - Info */}
        <div className="bg-gray-900 p-12 text-white flex flex-col justify-between relative overflow-hidden">
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-red-800 opacity-20 rotate-45"></div>
          <div className="absolute top-[-50px] left-[-50px] w-48 h-48 bg-red-900 opacity-20"></div>

          <div>
            <span className="text-red-500 font-bold tracking-widest uppercase text-xs mb-2 block">Get in Touch</span>
            <h2 className="text-4xl font-serif font-bold mb-6">Let's Connect</h2>
            <p className="text-gray-400 text-lg mb-12 font-light leading-relaxed">
              Have questions about the alumni association? We're here to help you stay connected with your alma mater.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-red-700 p-3 text-white">
                  <FaMapMarkerAlt className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 font-serif">Visit Us</h3>
                  <p className="text-gray-400 text-sm">123 University Avenue<br />Administration Block, Floor 2</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-red-700 p-3 text-white">
                  <FaEnvelope className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 font-serif">Email Us</h3>
                  <p className="text-gray-400 text-sm">alumni@college.edu<br />support@college.edu</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-red-700 p-3 text-white">
                  <FaPhone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 font-serif">Call Us</h3>
                  <p className="text-gray-400 text-sm">+1 (555) 123-4567<br />Mon-Fri, 9am - 5pm</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <p className="font-bold mb-4 font-serif">Follow Us</p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 flex items-center justify-center hover:bg-red-700 text-white transition-all duration-300">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 flex items-center justify-center hover:bg-red-700 text-white transition-all duration-300">
                <ImTwitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="p-12 w-full">
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-gray-900 uppercase tracking-widest mb-2">First Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:outline-none focus:border-red-700 focus:ring-0 transition-all placeholder-gray-400"
                  placeholder="Enter First Name"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-900 uppercase tracking-widest mb-2">Last Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:outline-none focus:border-red-700 focus:ring-0 transition-all placeholder-gray-400"
                  placeholder="Enter Last Name"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-900 uppercase tracking-widest mb-2">Email Address</label>
              <input
                type="email"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:outline-none focus:border-red-700 focus:ring-0 transition-all placeholder-gray-400"
                placeholder="Enter Email Address"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-900 uppercase tracking-widest mb-2">Subject</label>
              <div className="relative">
                <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:outline-none focus:border-red-700 focus:ring-0 transition-all appearance-none">
                  <option>General Inquiry</option>
                  <option>Membership Support</option>
                  <option>Event Registration</option>
                  <option>Donation / Giving</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">▼</div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-900 uppercase tracking-widest mb-2">Message</label>
              <textarea
                rows="4"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:outline-none focus:border-red-700 focus:ring-0 resize-none transition-all placeholder-gray-400"
                placeholder="Enter Your Message"
              ></textarea>
            </div>

            <button className="w-full py-4 bg-red-700 hover:bg-red-800 text-white font-bold text-xs uppercase tracking-widest shadow-lg hover:shadow-xl transition-all duration-300">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;