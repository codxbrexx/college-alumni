import React from 'react';
import FilterButton from './FilterButton';


let year=[];
for (let index = 2019; index <= 2025; index++) {
  year.push(index);
}
const branch = ["CS", "IT", "CSAI", "CSB"];
const company = ['Google', 'Amazon', 'Microsoft', 'TCS'];
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
for (let index = 1; index <= 60; index++){
  rollNo.push(index);
}

function Filter() {
  return (
    <div className="w-full flex justify-center items-center mt-4 gap-4">
      <div className="w-full max-w-4xl flex items-center bg-white/80 rounded-lg shadow-md p-2 gap-3">
        <FilterButton labelName="Year" filterOptions={year} className="min-w-[120px]" />
        <FilterButton labelName="branch" filterOptions={branch} className="min-w-[120px]" />
        <FilterButton labelName="Skills" filterOptions={skills} className="min-w-[120px]" />
        <FilterButton labelName="company" filterOptions={company} className="min-w-[120px]" />
        <FilterButton labelName="city" filterOptions={cities} className="min-w-[120px]" />
        <FilterButton labelName="Roll No" filterOptions={rollNo} className="min-w-[120px]" />
      </div>
      <div>
      </div>

    </div>

  );
}

export default Filter;
