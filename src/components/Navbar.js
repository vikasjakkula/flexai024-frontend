import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';
import { useAuth } from '../contexts/AuthContext';
import AOS from 'aos';
import 'aos/dist/aos.css';

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};



function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileLibraryOpen, setIsMobileLibraryOpen] = useState(false);
  const dropdownRef = useRef(null);
  // Add state for floating/shrinking navbar
  const [isFloating, setIsFloating] = useState(false);

  // Supabase Auth State
  const { user, loading, error } = useAuth();

  const libraryOutlets = [
    { name: 'Flex here', path: '/library/exercises' },
    { name: 'Calender', path: '/library/calender' },
    { name: 'Workout Logs', path: '/library/workout-logs' },
    { name: 'My Routines', path: '/library/routines' },
    { name: 'Video Library', path: '/library/video-library' },
    { name: 'Form Checker AI', path: '/library/form-checker' },
  ];

  const handleLogoClick = () => {
    navigate('/');
    window.location.reload();
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsMobileLibraryOpen(false);
    setActiveMenu(null);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileLibraryOpen(false);
    setActiveMenu(null);
  };

  const toggleMobileLibrary = () => {
    setIsMobileLibraryOpen(!isMobileLibraryOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveMenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Listen for scroll to toggle floating navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsFloating(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActiveRoute = (path) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  const isLibraryActive = () => {
    return location.pathname.startsWith('/library');
  };

  useEffect(() => { AOS.init(); }, []);

  return (
    <nav
      role="navigation"
      className={
        `navbar fixed-navbar top-0 left-0 z-50 flex items-center justify-between px-4 md:px-8 transition-all duration-300 ` +
        (isFloating
          ? 'w-11/12 md:w-2/3 mx-auto bg-white/80 border-b border-gray-100 h-16 rounded-2xl'
          : 'w-11/12 md:w-7/8 mx-auto mt-4 rounded-2xl shadow-xl bg-white/80 backdrop-blur-lg border border-gray-200 h-14')
      }
      onMouseLeave={() => setActiveMenu(null)}
      style={{ right: 0 }}
    >
      {/* Logo: shrink on scroll */}
      <div className="flex items-center">
        <video
          src={process.env.PUBLIC_URL + '/FLEX.mp4'}
          style={{
            height: isFloating ? '48px' : '32px',
            transition: 'height 0.3s',
            cursor: 'pointer',
            userSelect: 'none',
            marginRight: '12px',
            borderRadius: '8px',
          }}
          className="md:h-12"
          onClick={handleLogoClick}
          autoPlay
          loop
          muted
          playsInline
          aria-label="FLEX.AI animated logo"
        />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-6 centered-nav-links">
        {/* Home */}
        <Link 
          to="/" 
          className={`animated-nav-link font-raleway ${isActiveRoute('/') && location.pathname === '/' ? 'active' : ''}`}
          onClick={closeMobileMenu}
        >
          Home
        </Link>

        {/* Library with Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <motion.div
            className={`animated-nav-link library-dropdown-trigger font-raleway ${isLibraryActive() ? 'active' : ''}`}
            onMouseEnter={() => setActiveMenu('library')}
          >
            <span>Library</span>
            <ChevronDown 
              size={16} 
              className={`ml-1 transition-transform duration-300 ${activeMenu === 'library' ? 'rotate-180' : ''}`} 
            />
          </motion.div>

          <AnimatePresence>
            {activeMenu === 'library' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.85, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.85, y: 10 }}
                transition={transition}
                className="absolute top-[calc(100%_+_0.5rem)] left-1/2 transform -translate-x-1/2 z-50"
              >
                <motion.div
                  layoutId="active-menu"
                  className="bg-white rounded-xl overflow-hidden border border-black/[0.2] shadow-xl min-w-[200px]"
                >
                  <motion.div layout className="p-2">
                    {libraryOutlets.map((outlet, index) => (
                      <Link
                        key={index}
                        to={outlet.path}
                        className={`dropdown-item ${isActiveRoute(outlet.path) ? 'active' : ''}`}
                        onClick={closeMobileMenu}
                      >
                        {outlet.name}
                      </Link>
                    ))}
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Pricing */}
        <Link 
          to="/pricing" 
          className={`animated-nav-link font-raleway ${isActiveRoute('/pricing') ? 'active' : ''}`}
          onClick={closeMobileMenu}
        >
          Pricing
        </Link>

        {/* Contact Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <motion.div
            className={`animated-nav-link library-dropdown-trigger font-raleway ${isActiveRoute('/contact') ? 'active' : ''}`}
            onMouseEnter={() => setActiveMenu('contact')}
          >
            <span>Contact</span>
            <ChevronDown 
              size={16} 
              className={`ml-1 transition-transform duration-300 ${activeMenu === 'contact' ? 'rotate-180' : ''}`} 
            />
          </motion.div>

          <AnimatePresence>
            {activeMenu === 'contact' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.85, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.85, y: 10 }}
                transition={transition}
                className="absolute top-[calc(100%_+_0.5rem)] left-1/2 transform -translate-x-1/2 z-50"
              >
                <motion.div
                  layoutId="active-menu"
                  className="bg-white rounded-xl overflow-hidden border border-black/[0.2] shadow-xl min-w-[200px]"
                >
                  <motion.div layout className="p-2">
                    <Link
                      to="/contact/report-bugs"
                      className={`dropdown-item ${isActiveRoute('/contact/report-bugs') ? 'active' : ''}`}
                      onClick={closeMobileMenu}
                    >
                      Report Bugs
                    </Link>
                    <Link
                      to="/contact/ask-questions"
                      className={`dropdown-item ${isActiveRoute('/contact/ask-questions') ? 'active' : ''}`}
                      onClick={closeMobileMenu}
                    >
                      Ask Questions
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {/* Community Button */}
        <Link 
          to="/community" 
          className={`animated-nav-link font-raleway ${isActiveRoute('/community') ? 'active' : ''}`}
          onClick={closeMobileMenu}
        >
          Community
        </Link>
        {/* Nutrition Button */}
        <Link 
          to="/nutrition" 
          className={`animated-nav-link font-raleway ${isActiveRoute('/nutrition') ? 'active' : ''}`}
          onClick={closeMobileMenu}
        >
          Nutrition
        </Link>
      </div>

      {/* User Profile - right corner */}
      <div className="ml-auto flex items-center gap-2 mobile-signin-hide">
        {loading && <span className="text-gray-500">Loading...</span>}
        {error && <span className="text-red-500 text-sm">{error}</span>}
        {user && user.user_metadata?.avatar_url && (
          <div className="flex items-center">
            <img 
              src={user.user_metadata.avatar_url} 
              alt="avatar" 
              className="w-10 h-10 rounded-full cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => navigate('/profile')}
              title="Profile"
            />
          </div>
        )}
      </div>

      {/* Hamburger Icon for Mobile Sidebar */}
      <button
        onClick={toggleMobileMenu}
        className="md:hidden p-2 rounded-lg hover:bg-gray-700/20 transition-colors duration-200 fixed top-4 right-4 z-[100]"
        aria-label="Toggle sidebar"
        style={{ position: 'fixed', top: 16, right: 16 }}
      >
        {isMobileMenuOpen ? (
          <X size={28} />
        ) : (
          <Menu size={28} />
        )}
      </button>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className={`mobile-sidebar fixed top-0 right-0 h-full w-4/5 max-w-xs z-50 flex flex-col`}
            style={{ zIndex: 9999 }}
          >
            <div className="flex flex-col space-y-4 p-6 pt-16 text-left">
              <Link 
                to="/" 
                className={`animated-nav-link font-raleway ${isActiveRoute('/') && location.pathname === '/' ? 'active' : ''}`}
                onClick={closeMobileMenu}
                style={{ textAlign: 'left' }}
              >
                Home
              </Link>
              
              {/* Mobile Library Section */}
              <div className="w-full text-left">
                <div 
                  className={`animated-nav-link library-dropdown-trigger mobile font-raleway ${isLibraryActive() ? 'active' : ''}`}
                  onClick={toggleMobileLibrary}
                  style={{ textAlign: 'left' }}
                >
                  <span>Library</span>
                  <ChevronDown 
                    size={16} 
                    className={`ml-1 transition-transform duration-300 ${isMobileLibraryOpen ? 'rotate-180' : ''}`} 
                  />
                </div>
                
                <AnimatePresence>
                  {isMobileLibraryOpen && (
                    <motion.div
                      initial={{ maxHeight: 0, opacity: 0 }}
                      animate={{ maxHeight: 300, opacity: 1 }}
                      exit={{ maxHeight: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mobile-library-dropdown overflow-hidden"
                    >
                      {libraryOutlets.map((outlet, index) => (
                        <Link
                          key={index}
                          to={outlet.path}
                          className={`mobile-dropdown-item ${isActiveRoute(outlet.path) ? 'active' : ''}`}
                          onClick={closeMobileMenu}
                          style={{ textAlign: 'left' }}
                        >
                          {outlet.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link 
                to="/pricing" 
                className={`animated-nav-link font-raleway ${isActiveRoute('/pricing') ? 'active' : ''}`}
                onClick={closeMobileMenu}
                style={{ textAlign: 'left' }}
              >
                Pricing
              </Link>
              
              {/* Contact Dropdown */}
              <div className="w-full text-left">
                <div
                  className={`animated-nav-link library-dropdown-trigger mobile font-raleway ${isActiveRoute('/contact') ? 'active' : ''}`}
                  onClick={() => setActiveMenu(activeMenu === 'contact' ? null : 'contact')}
                  style={{ textAlign: 'left' }}
                >
                  <span>Contact</span>
                  <ChevronDown 
                    size={16} 
                    className={`ml-1 transition-transform duration-300 ${activeMenu === 'contact' ? 'rotate-180' : ''}`} 
                  />
                </div>
                
                <AnimatePresence>
                  {activeMenu === 'contact' && (
                    <motion.div
                      initial={{ maxHeight: 0, opacity: 0 }}
                      animate={{ maxHeight: 300, opacity: 1 }}
                      exit={{ maxHeight: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mobile-library-dropdown overflow-hidden"
                    >
                      <Link
                        to="/contact/report-bugs"
                        className={`mobile-dropdown-item ${isActiveRoute('/contact/report-bugs') ? 'active' : ''}`}
                        onClick={closeMobileMenu}
                        style={{ textAlign: 'left' }}
                      >
                        Report Bugs
                      </Link>
                      <Link
                        to="/contact/ask-questions"
                        className={`mobile-dropdown-item ${isActiveRoute('/contact/ask-questions') ? 'active' : ''}`}
                        onClick={closeMobileMenu}
                        style={{ textAlign: 'left' }}
                      >
                        Ask Questions
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              {/* Community Button */}
              <Link 
                to="/community" 
                className={`mobile-dropdown-item font-raleway ${isActiveRoute('/community') ? 'active' : ''}`}
                onClick={closeMobileMenu}
                style={{ textAlign: 'left' }}
              >
                Community
              </Link>
              {/* Nutrition Button */}
              <Link 
                to="/nutrition" 
                className={`mobile-dropdown-item font-raleway ${isActiveRoute('/nutrition') ? 'active' : ''}`}
                onClick={closeMobileMenu}
                style={{ textAlign: 'left' }}
              >
                Nutrition
              </Link>
            </div>
            {/* Close button inside sidebar for convenience */}
            <button
              onClick={closeMobileMenu}
              className="absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-700/20 transition-colors duration-200"
              aria-label="Close sidebar"
            >
              <X size={24} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Make GIF larger on mobile */}
      <style>{`
        @media (max-width: 768px) {
          .centered-nav-links { display: none !important; }
          .navbar video {
            height: 70px !important;
            width: auto !important;
            max-width: 90vw;
          }
        }
      `}</style>

     
    </nav>
  );
}
export default Navbar;

