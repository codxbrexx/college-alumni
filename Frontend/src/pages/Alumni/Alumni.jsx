import React from "react";
import FilterButton from "../../Components/Filter/FilterButton";
import Search from "../../Components/Search/Search";

function Alumni() {

  let year=[];
  for (let index = 2019; index <= 2025; index++) {
    year.push(index);
  }
  const branch = ["CS", "IT", "CSAI", "CSB"];
  const skills = [
    "Frontend Development",
    "Backend Development",
    "DevOps",
    "Cloud Computing",
    "Database Management",
    "Mobile Development",
    "Machine Learning & AI",
    "Data Engineering",
    "Data Science & Analytics",
    "Cybersecurity",
    "Network Engineering",
    "UI/UX Design",
    "Quality Assurance & Testing",
    "Site Reliability Engineering",
    "Containerization & Orchestration",
    "Serverless Architecture",
    "API Design & Development",
    "Software Architecture & System Design",
    "Performance Optimization",
    "Embedded Systems",
    "Internet of Things",
    "Blockchain & Distributed Ledger",
    "Game Development",
    "Digital Signal Processing",
    "Augmented/Virtual Reality",
    "Content Management Systems",
    "Search Engine Optimization",
    "Digital Marketing & Growth Hacking",
    "Version Control & Code Collaboration",
    "Agile & Project Management",
  ];
  const cities = [
    "Mumbai",
    "Delhi",
    "Bengaluru",
    "Hyderabad",
    "Ahmedabad",
    "Chennai",
    "Kolkata",
    "Pune",
    "Surat",
    "Jaipur",
    "Lucknow",
    "Kanpur",
    "Nagpur",
    "Indore",
    "Thane",
    "Bhopal",
    "Visakhapatnam",
    "Pimpri-Chinchwad",
    "Patna",
    "Vadodara",
    "Ghaziabad",
    "Ludhiana",
    "Agra",
    "Nashik",
    "Faridabad",
    "Meerut",
    "Rajkot",
    "Kalyan-Dombivali",
    "Vasai-Virar",
    "Varanasi",
    "Srinagar",
    "Aurangabad",
    "Dhanbad",
    "Amritsar",
    "Navi Mumbai",
    "Ranchi",
    "Howrah",
    "Coimbatore",
    "Jabalpur",
    "Gwalior",
    "Vijayawada",
    "Jodhpur",
    "Madurai",
    "Raipur",
    "Kota",
    "Guwahati",
    "Chandigarh",
  ];

  let rollNo=[];
  for (let index = 1; index <= 60; index++) {
    rollNo.push(index);
  }
  return (
    <>
      <div className="w-screen flex justify-center">
        <div className="w-3xl">
          <Search />
        </div>
        <div className="w-3xl flex justify-evenly">
          <FilterButton filterOptions={year} labelName={"Year"}/>
          <FilterButton filterOptions={branch} labelName={"Branch"}/>
          <FilterButton filterOptions={skills} labelName={"Skills"}/>
          <FilterButton filterOptions={cities} labelName={"City"}/>
          <FilterButton filterOptions={rollNo} labelName={"Roll No"}/>
        </div>
      </div>
    </>
  );
}

export default Alumni;
