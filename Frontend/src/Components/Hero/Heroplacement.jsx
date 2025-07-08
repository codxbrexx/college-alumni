import React from 'react';
import Search from '../Search/Search';
import Filter from '../Filter/Filter';

function Herojob() {
  return (
    <div className="relative w-full min-h-[240px] flex items-center justify-center overflow-hidden">
      <img
        src="/alumnibg.jpg"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />
      <div className="absolute inset-0 bg-teal-200/30  z-10" />


      <div className="relative z-20 w-full flex flex-col items-center px-4 py-8">
        <Search />
      </div>
    </div>
  );
}

export default Herojob;
