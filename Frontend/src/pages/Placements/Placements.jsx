import React from "react";
import { useTheme } from '../../context/ThemeContext';
import PlacementHero from "./components/PlacementHero";
import YearWisePlacements from "./components/YearWisePlacements";
import RecruiterGallery from "./components/RecruiterGallery";
import SuccessStories from "./components/SuccessStories";
import DepartmentStats from "./components/DepartmentStats";

function Placements() {
  const { isDarkMode } = useTheme();

  // Sample data for showcase (since database is empty)
  const heroStats = {
    totalPlacements: '520+',
    highestPackage: 45,
    averagePackage: 12.5,
    totalCompanies: '100+'
  };

  const yearWiseData = [
    {
      year: 2024,
      totalPlacements: 520,
      averagePackage: 12.5,
      highestPackage: 45,
      placementRate: 92,
      topRecruiters: ['Google', 'Microsoft', 'Amazon', 'Meta', 'Netflix', 'Apple']
    },
    {
      year: 2023,
      totalPlacements: 480,
      averagePackage: 11.8,
      highestPackage: 40,
      placementRate: 90,
      topRecruiters: ['Google', 'Amazon', 'Microsoft', 'TCS', 'Infosys', 'Wipro']
    },
    {
      year: 2022,
      totalPlacements: 450,
      averagePackage: 10.5,
      highestPackage: 38,
      placementRate: 88,
      topRecruiters: ['Amazon', 'Microsoft', 'TCS', 'Wipro', 'HCL', 'Cognizant']
    }
  ];

  return (
    <div className={`transition-colors duration-300 ${isDarkMode ? 'bg-gray-950 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <PlacementHero stats={heroStats} />
      <YearWisePlacements yearData={yearWiseData} />
      <RecruiterGallery />
      <SuccessStories />
      <DepartmentStats />
    </div>
  );
}

export default Placements;
