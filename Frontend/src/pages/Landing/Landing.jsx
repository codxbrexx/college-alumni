import React from 'react';
import LandingNavbar from './components/LandingNavbar';
import HeroSection from './components/HeroSection';
import CTASection from './components/CTASection';
import StatsSection from './components/StatsSection';
import BenefitsSection from './components/BenefitsSection';
import DistinguishedAlumniSection from './components/DistinguishedAlumniSection';
import TestimonialsSection from './components/TestimonialsSection';
import OpportunitiesSection from './components/OpportunitiesSection';
import FAQSection from './components/FAQSection';
import LandingFooter from './components/LandingFooter';

export default function Landing() {
    return (
        <div className="min-h-screen font-sans transition-colors duration-300 bg-white text-gray-900">
            <LandingNavbar />
            <HeroSection />
            <CTASection />
            <StatsSection />
            <BenefitsSection />
            <DistinguishedAlumniSection />
            <TestimonialsSection />
            <OpportunitiesSection />
            <FAQSection />
            <LandingFooter />
        </div>
    );
}
