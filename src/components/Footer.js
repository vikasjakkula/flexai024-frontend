import React from 'react';
import { Button } from './ui/button';

const footerSections = [
  {
    heading: 'WORKOUTS',
    links: ['Strength Training', 'Cardio', 'HIIT', 'Yoga', 'Pilates', 'Home Workouts'],
  },
  {
    heading: 'NUTRITION',
    links: ['Meal Plans', 'Diet Guides', 'Recipe Library', 'Calorie Counter', 'Supplements'],
  },
  {
    heading: 'PROGRAMS',
    links: [
      'Weight Loss',
      'Muscle Gain',
      'Body Transformation',
      'Beginner Plans',
      'Advanced Training',
      'Personal Training',
    ],
  },
  {
    heading: 'SUPPORT',
    links: [
      'Help Center',
      'Contact Us',
      'Live Chat',
      'FAQ',
      'Community',
      'Success Stories',
    ],
  },
  {
    heading: 'COMPANY',
    links: [
      'About Us',
      'Pricing',
      'Blog',
      'Careers',
      'Privacy Policy',
      'Terms of Service',
    ],
  },
];

const Footer = () => {
  return (
    <footer className="w-full bg-gray-50 text-gray-600 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Main content grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Company info section - takes up more space */}
          <div className="md:col-span-1 space-y-4">
            <div className="mb-6">
              <img 
                src={process.env.PUBLIC_URL + '/flex.png'} 
                alt="Flex Logo" 
                className="h-12 w-auto mb-4" 
              />
              <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
                Your ultimate fitness companion for personalized workouts, nutrition guidance, and achieving your health goals.
              </p>
            </div>
            
            {/* Social icons */}
            <div className="flex space-x-3">
              <button 
                type="button"
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200 p-1 rounded-md hover:bg-gray-100"
                aria-label="Visit our Facebook page"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </button>
              <button 
                type="button"
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200 p-1 rounded-md hover:bg-gray-100"
                aria-label="Visit our Twitter page"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                </svg>
              </button>
              <button 
                type="button"
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200 p-1 rounded-md hover:bg-gray-100"
                aria-label="Visit our Instagram page"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </button>
              <button 
                type="button"
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200 p-1 rounded-md hover:bg-gray-100"
                aria-label="Visit our LinkedIn page"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect width="4" height="12" x="2" y="9"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </button>
              <button 
                type="button"
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200 p-1 rounded-md hover:bg-gray-100"
                aria-label="Visit our YouTube channel"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
                  <path d="m10 15 5-3-5-3z"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Footer sections - condensed into 3 columns */}
          <div className="md:col-span-3">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {footerSections.map((section, index) => (
                <div key={section.heading} className="flex flex-col">
                  <h3 className="text-sm font-semibold text-gray-900 mb-3 tracking-wider">
                    {section.heading}
                  </h3>
                  <div className="flex flex-col space-y-1">
                    {section.links.map((link) => (
                      <Button
                        key={link}
                        variant="link"
                        className="text-left justify-start px-0 py-0 h-auto text-sm text-gray-500 hover:text-gray-900 !no-underline !shadow-none transition-colors duration-200"
                      >
                        {link}
                      </Button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="text-center">
            <p className="text-sm text-gray-500">
              © 2025 Flex.AI. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;