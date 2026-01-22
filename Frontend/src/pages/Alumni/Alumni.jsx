import React, { useState } from "react";
import Heroalumni from "../../Components/Hero/Heroalumni";
import AlumniList from "./AlumniList";

function Alumni() {
  const [filters, setFilters] = useState({
    batch: 'all',
    location: '',
    role: ''
  });
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="w-full">
        <Heroalumni
          filters={filters}
          setFilters={setFilters}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      </div>
      <div>
        <AlumniList heroFilters={filters} searchTerm={searchTerm} />
      </div>
    </div>
  );
}

export default Alumni;
