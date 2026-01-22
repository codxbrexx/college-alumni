import React from "react";
import Heroalumni from "../../Components/Hero/Heroalumni";
import AlumniList from "./AlumniList";

function Alumni() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="w-full">
        <Heroalumni />
      </div>
      <div>
        <AlumniList />
      </div>
    </div>
  );
}

export default Alumni;
