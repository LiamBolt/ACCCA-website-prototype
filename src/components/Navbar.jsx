import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  // Dropdown menus state
  const [dropdowns, setDropdowns] = useState({
    activities: false,
    tours: false
  });

  // Handle scroll effect for glassmorphic UI
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle dropdown visibility
  const toggleDropdown = (key) => {
    setDropdowns(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Determine if a nav link is active
  const isActive = (path) => {
    return location.pathname === path ? 'border-b-2 border-[#228B22] text-[#228B22]' : 'border-transparent';
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link 
              to="/" 
              className="flex items-center space-x-2" 
              aria-label="ACCCA Home"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#228B22] to-[#8B4513] flex items-center justify-center">
                <span className="text-white font-bold">A</span>
              </div>
              <span className={`text-xl font-bold ${scrolled ? 'text-gray-800' : 'text-white'} tracking-tight`}>
                ACCCA
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            <Link
              to="/"
              className={`${isActive('/')} ${scrolled ? 'text-gray-700' : 'text-white'} hover:text-[#228B22] inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors duration-200`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`${isActive('/about')} ${scrolled ? 'text-gray-700' : 'text-white'} hover:text-[#228B22] inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors duration-200`}
            >
              About
            </Link>
            
            {/* Activities Dropdown */}
            <div className="relative">
              <button
                className={`${location.pathname.startsWith('/activities') ? 'border-b-2 border-[#228B22] text-[#228B22]' : 'border-transparent'} ${scrolled ? 'text-gray-700' : 'text-white'} group inline-flex items-center px-1 pt-1 text-sm font-medium hover:text-[#228B22] transition-colors duration-200`}
                onClick={() => toggleDropdown('activities')}
                aria-expanded={dropdowns.activities}
                aria-haspopup="true"
              >
                Activities
                <ChevronDown className="ml-1 h-4 w-4" aria-hidden="true" />
              </button>
              {dropdowns.activities && (
                <div className="absolute z-10 mt-2 w-48 rounded-md bg-white/90 backdrop-blur-sm shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="py-1" role="menu" aria-orientation="vertical">
                    <Link
                      to="/activities/cultural-tours"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#228B22]/10 hover:text-[#228B22]"
                      role="menuitem"
                    >
                      Cultural Tours
                    </Link>
                    <Link
                      to="/activities/conservation"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#228B22]/10 hover:text-[#228B22]"
                      role="menuitem"
                    >
                      Conservation
                    </Link>
                    <Link
                      to="/activities/workshops"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#228B22]/10 hover:text-[#228B22]"
                      role="menuitem"
                    >
                      Workshops
                    </Link>
                  </div>
                </div>
              )}
            </div>
            
            {/* Tours Dropdown */}
            <div className="relative">
              <button
                className={`${location.pathname.startsWith('/tours') ? 'border-b-2 border-[#228B22] text-[#228B22]' : 'border-transparent'} ${scrolled ? 'text-gray-700' : 'text-white'} group inline-flex items-center px-1 pt-1 text-sm font-medium hover:text-[#228B22] transition-colors duration-200`}
                onClick={() => toggleDropdown('tours')}
                aria-expanded={dropdowns.tours}
                aria-haspopup="true"
              >
                Tours
                <ChevronDown className="ml-1 h-4 w-4" aria-hidden="true" />
              </button>
              {dropdowns.tours && (
                <div className="absolute z-10 mt-2 w-48 rounded-md bg-white/90 backdrop-blur-sm shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="py-1" role="menu" aria-orientation="vertical">
                    <Link
                      to="/tours/daily"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#228B22]/10 hover:text-[#228B22]"
                      role="menuitem"
                    >
                      Daily Tours
                    </Link>
                    <Link
                      to="/tours/weekly"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#228B22]/10 hover:text-[#228B22]"
                      role="menuitem"
                    >
                      Weekly Tours
                    </Link>
                    <Link
                      to="/tours/custom"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#228B22]/10 hover:text-[#228B22]"
                      role="menuitem"
                    >
                      Custom Tours
                    </Link>
                  </div>
                </div>
              )}
            </div>
            
            <Link
              to="/gallery"
              className={`${isActive('/gallery')} ${scrolled ? 'text-gray-700' : 'text-white'} hover:text-[#228B22] inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors duration-200`}
            >
              Gallery
            </Link>
            <Link
              to="/contact"
              className={`${isActive('/contact')} ${scrolled ? 'text-gray-700' : 'text-white'} hover:text-[#228B22] inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors duration-200`}
            >
              Contact
            </Link>
            
            {/* CTA Button */}
            <Link
              to="/booking"
              className="ml-4 px-6 py-2 rounded-full bg-gradient-to-r from-[#228B22] to-[#228B22]/80 text-white font-medium text-sm hover:shadow-lg hover:from-[#228B22]/90 hover:to-[#8B4513]/80 transition-all duration-300 flex items-center"
            >
              Book Tour
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                scrolled ? 'text-gray-700 hover:text-[#228B22] hover:bg-gray-100' : 'text-white hover:text-white hover:bg-white/10'
              }`}
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md shadow-lg" id="mobile-menu" role="dialog" aria-modal="true">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className={`${isActive('/') ? 'bg-[#228B22]/10 text-[#228B22]' : 'text-gray-700'} block px-3 py-2 rounded-md text-base font-medium`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`${isActive('/about') ? 'bg-[#228B22]/10 text-[#228B22]' : 'text-gray-700'} block px-3 py-2 rounded-md text-base font-medium`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            
            {/* Mobile Activities Section */}
            <div>
              <button
                className={`${location.pathname.startsWith('/activities') ? 'bg-[#228B22]/10 text-[#228B22]' : 'text-gray-700'} w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium`}
                onClick={() => toggleDropdown('activities')}
              >
                Activities
                <ChevronDown className={`h-4 w-4 transition-transform ${dropdowns.activities ? 'rotate-180' : ''}`} />
              </button>
              {dropdowns.activities && (
                <div className="pl-4 space-y-1 mt-1">
                  <Link
                    to="/activities/cultural-tours"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-[#228B22]/10 hover:text-[#228B22]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Cultural Tours
                  </Link>
                  <Link
                    to="/activities/conservation"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-[#228B22]/10 hover:text-[#228B22]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Conservation
                  </Link>
                  <Link
                    to="/activities/workshops"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-[#228B22]/10 hover:text-[#228B22]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Workshops
                  </Link>
                </div>
              )}
            </div>
            
            {/* Mobile Tours Section */}
            <div>
              <button
                className={`${location.pathname.startsWith('/tours') ? 'bg-[#228B22]/10 text-[#228B22]' : 'text-gray-700'} w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium`}
                onClick={() => toggleDropdown('tours')}
              >
                Tours
                <ChevronDown className={`h-4 w-4 transition-transform ${dropdowns.tours ? 'rotate-180' : ''}`} />
              </button>
              {dropdowns.tours && (
                <div className="pl-4 space-y-1 mt-1">
                  <Link
                    to="/tours/daily"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-[#228B22]/10 hover:text-[#228B22]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Daily Tours
                  </Link>
                  <Link
                    to="/tours/weekly"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-[#228B22]/10 hover:text-[#228B22]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Weekly Tours
                  </Link>
                  <Link
                    to="/tours/custom"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-[#228B22]/10 hover:text-[#228B22]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Custom Tours
                  </Link>
                </div>
              )}
            </div>
            
            <Link
              to="/gallery"
              className={`${isActive('/gallery') ? 'bg-[#228B22]/10 text-[#228B22]' : 'text-gray-700'} block px-3 py-2 rounded-md text-base font-medium`}
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link
              to="/contact"
              className={`${isActive('/contact') ? 'bg-[#228B22]/10 text-[#228B22]' : 'text-gray-700'} block px-3 py-2 rounded-md text-base font-medium`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            
            {/* Mobile CTA */}
            <div className="pt-2">
              <Link
                to="/booking"
                className="block w-full px-4 py-3 rounded-full bg-gradient-to-r from-[#228B22] to-[#8B4513]/80 text-white font-medium text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Tour
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;