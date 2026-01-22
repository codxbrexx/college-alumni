import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaTwitter } from 'react-icons/fa';

function ContactUs() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-['Poppins']">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-2xl shadow-xl overflow-hidden">

        {/* Left Side: Contact Info */}
        <div className="bg-red-700 p-10 text-white flex flex-col justify-between relative overflow-hidden">
          {/* Decorative Circle */}
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-red-600 rounded-full opacity-50"></div>
          <div className="absolute top-[-50px] left-[-50px] w-48 h-48 bg-red-600 rounded-full opacity-30"></div>

          <div className="relative z-10">
            <h1 className="text-4xl font-serif font-bold mb-6">Get in Touch</h1>
            <p className="text-red-100 text-lg mb-12">
              Have questions or need assistance? We're here to help you connect with your alumni network.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-red-600 p-3 rounded-lg text-white">
                  <FaEnvelope className="text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email Us</h3>
                  <p className="text-red-100">alumni@college.edu</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-red-600 p-3 rounded-lg text-white">
                  <FaPhone className="text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Call Us</h3>
                  <p className="text-red-100 text-sm">+91 12345 67890</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-red-600 p-3 rounded-lg text-white">
                  <FaMapMarkerAlt className="text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Visit Us</h3>
                  <p className="text-red-100 text-sm">
                    Alumni Cell, Admin Block<br />
                    College of Engineering, Pune
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-12">
            <h3 className="text-lg font-medium mb-4">Connect with us</h3>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center hover:bg-white hover:text-red-700 transition-all duration-300">
                <FaLinkedin className="text-xl" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center hover:bg-white hover:text-red-700 transition-all duration-300">
                <FaTwitter className="text-xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="p-10 lg:p-12 bg-white">
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
              <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all">
                <option value="">Select a topic</option>
                <option value="general">General Inquiry</option>
                <option value="technical">Technical Support</option>
                <option value="events">Alumni Events</option>
                <option value="career">Career Services</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea
                rows={4}
                placeholder="Enter your message"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none transition-all"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-red-700 hover:bg-red-800 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;