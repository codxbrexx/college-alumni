import React from "react";
import Heroalumni from "../../Components/Hero/Heroalumni";
import Alumnicard from "./Alumnicard";

function Alumni() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="w-full">
        <Heroalumni />
      </div>
      <div>
        <Alumnicard />
      </div>
    </div>
  );
}

export default Alumni;
