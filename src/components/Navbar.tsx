import React, { useState, useEffect } from 'react';
import { BUSINESS_INFO } from '../data/parkData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: '홈' },
    { id: 'corporate', label: '기업행사' },
    { id: 'facilities', label: '시설 안내' },
    { id: 'programs', label: '행사 프로그램' },
    { id: 'gallery', label: '실제 행사' },
    { id: 'estimate', label: '예상 견적' },
    { id: 'process', label: '이용 안내' },
    { id: 'directions', label: '오시는 길' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-surface/95 backdrop-blur-xl shadow-sm' : 'bg-surface/90 backdrop-blur-md'
      }`}
    >
      <div className="h-20 max-w-[1240px] mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, 'home')}
          className="flex items-center gap-3 group"
        >
          <div className="w-10 h-10 rounded-xl bg-primary-container flex items-center justify-center shadow-xs">
            <span className="material-symbols-outlined text-secondary-fixed text-[22px]">sports_soccer</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[20px] font-bold text-primary leading-none tracking-tight">청주풋볼파크</span>
            <span className="text-[10px] font-bold text-on-surface-variant tracking-wider uppercase mt-1">
              CHEONGJU FOOTBALL PARK
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`px-3 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${
                  isActive
                    ? 'text-primary font-bold bg-surface-container-high'
                    : 'text-on-surface-variant hover:text-primary hover:bg-surface-container-low'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons (Desktop) */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href="#estimate"
            onClick={(e) => handleNavClick(e, 'estimate')}
            className="h-10 px-4 rounded-xl bg-primary text-on-primary text-sm font-semibold flex items-center gap-1.5 hover:bg-primary-container transition-all shadow-xs"
          >
            <span className="material-symbols-outlined text-[18px]">calculate</span>
            <span>기업행사 견적</span>
          </a>
          <a
            href={BUSINESS_INFO.links.booking}
            target="_blank"
            rel="noopener noreferrer"
            className="h-10 px-4 rounded-xl bg-secondary text-on-secondary text-sm font-semibold flex items-center gap-1.5 hover:bg-on-secondary-fixed-variant transition-all shadow-xs"
          >
            <span className="material-symbols-outlined text-[18px]">event_available</span>
            <span>네이버 예약</span>
          </a>
          <a
            href={BUSINESS_INFO.cfp.telLink}
            className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary hover:bg-surface-container-high transition-colors"
            title="전화 문의"
          >
            <span className="material-symbols-outlined text-[20px]">call</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 xl:hidden">
          <a
            href={BUSINESS_INFO.cfp.telLink}
            className="w-10 h-10 rounded-xl bg-secondary text-on-secondary flex items-center justify-center md:hidden"
            title="전화 상담"
          >
            <span className="material-symbols-outlined text-[20px]">call</span>
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-colors"
            aria-label="메뉴 열기"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-surface-container-lowest border-b border-surface-variant shadow-lg px-6 py-5 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`px-4 py-3 rounded-lg text-base font-semibold transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-surface-container text-primary font-bold'
                      : 'text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface'
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="material-symbols-outlined text-[16px] text-outline">chevron_right</span>
                </a>
              );
            })}
          </nav>
          <div className="grid grid-cols-2 gap-2 pt-4 mt-2 border-t border-surface-variant">
            <a
              href="#estimate"
              onClick={(e) => handleNavClick(e, 'estimate')}
              className="h-11 rounded-xl bg-primary text-on-primary text-sm font-semibold flex items-center justify-center gap-1.5"
            >
              <span className="material-symbols-outlined text-[18px]">calculate</span>
              <span>기업행사 견적</span>
            </a>
            <a
              href={BUSINESS_INFO.links.booking}
              target="_blank"
              rel="noopener noreferrer"
              className="h-11 rounded-xl bg-secondary text-on-secondary text-sm font-semibold flex items-center justify-center gap-1.5"
            >
              <span className="material-symbols-outlined text-[18px]">event_available</span>
              <span>네이버 예약</span>
            </a>
          </div>
          <div className="pt-3 text-center">
            <a
              href={BUSINESS_INFO.cfp.telLink}
              className="inline-flex items-center gap-1.5 text-sm font-bold text-primary"
            >
              <span className="material-symbols-outlined text-[18px] text-secondary">call</span>
              <span>대관 직통 전화: 010-7900-8219</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
