import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-red-50 dark:from-gray-900 dark:to-gray-800">
      <h1 className="text-6xl font-extrabold text-red-500 mb-4">404</h1>
      <p className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Page Not Found</p>
      <p className="mb-6 text-gray-500 dark:text-gray-400">Sorry, the page you are looking for does not exist.</p>
      <Link to="/home">
        <button className="px-6 py-3 bg-red-500 text-white  font-semibold shadow hover:bg-red-600 transition">Go to Home</button>
      </Link>
    </div>
  );
}
