import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CorporateSection } from './components/CorporateSection';
import { FacilitiesSection } from './components/FacilitiesSection';
import { ProgramsSection } from './components/ProgramsSection';
import { GallerySection } from './components/GallerySection';
import { DualQuotationCalculator } from './components/DualQuotationCalculator';
import { ReservationSection } from './components/ReservationSection';
import { DirectionsSection } from './components/DirectionsSection';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sectionIds = [
      'home',
      'corporate',
      'facilities',
      'programs',
      'gallery',
      'estimate',
      'process',
      'directions',
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-surface text-on-surface font-sans antialiased pb-16 md:pb-0 selection:bg-secondary-fixed selection:text-primary">
      {/* Top Fixed Header */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="w-full">
        <HeroSection />
        <CorporateSection />
        <FacilitiesSection />
        <ProgramsSection />
        <GallerySection />
        <DualQuotationCalculator />
        <ReservationSection />
        <DirectionsSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Quick Action Bar */}
      <MobileBottomBar />
    </div>
  );
}
