import React from 'react';
import Search from '../Search/Search';
import Filter from '../Filter/Filter';

function Heroalumni() {
  return (
    <div className="relative w-full min-h-[340px] flex items-center justify-center overflow-hidden">
      <img
        src="/alumnibg.jpg"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />
      <div className="absolute inset-0 bg-teal-200/30  z-10" />
      <button
        className="absolute top-4 right-4 z-20 bg-teal-400 hover:bg-teal-500 text-white font-semibold px-6 py-2 pointer-cursor rounded-lg transition-colors">
       Add Alumni
      </button>

      <div className="relative z-20 w-full flex flex-col gap-2 items-center px-4 py-8">
        <Search />
        <Filter />
      </div>
    </div>
  );
}

export default Heroalumni;
