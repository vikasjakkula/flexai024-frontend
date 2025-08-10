import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const VerificationScreen = ({ onVerificationComplete, isVisible = false }) => {
  const [dots, setDots] = useState('');
  const navigate = useNavigate();

  // Animated dots effect
  useEffect(() => {
    if (!isVisible) return;
    
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.');
    }, 500);

    return () => clearInterval(interval);
  }, [isVisible]);

  // Simulate verification completion (replace with actual auth logic)
  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      if (onVerificationComplete) {
        onVerificationComplete();
      } else {
        navigate('/dashboard'); // Default navigation
      }
    }, 3000); // 3 seconds simulation

    return () => clearTimeout(timer);
  }, [isVisible, onVerificationComplete, navigate]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-[9999]">
      <div className="max-w-md w-full mx-auto px-6">
        {/* Main Content */}
        <div className="flex items-center justify-center mb-8">
          {/* Spinner */}
          <div className="relative mr-6">
            <div className="w-10 h-10 border-4 border-gray-200 rounded-full"></div>
            <div className="absolute top-0 left-0 w-10 h-10 border-4 border-green-500 rounded-full border-t-transparent animate-spin"></div>
          </div>
          
          {/* Verification Text */}
          <div className="text-left">
            <h1 className="text-2xl font-bold text-gray-900">
              Verifying{dots}
            </h1>
            <p className="text-sm text-gray-600 mt-2">
              Please wait while we verify your identity
            </p>
            <div className="mt-3 w-48 bg-gray-200 rounded-full h-1">
              <div className="bg-green-500 h-1 rounded-full animate-pulse" style={{ width: '60%' }}></div>
            </div>
          </div>
        </div>

        {/* Cloudflare-like Footer */}
        <div className="absolute bottom-8 left-0 right-0 flex items-center justify-between px-6">
          {/* Left side - Logo */}
          <div className="flex items-center">
            <div className="w-8 h-8 bg-orange-500 rounded-full mr-3 flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
            <span className="text-sm font-semibold text-gray-700">Cloudflare</span>
          </div>
          
          {/* Right side - Links */}
          <div className="flex items-center space-x-6">
            <a 
              href="#" 
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              Privacy
            </a>
            <a 
              href="#" 
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              Terms
            </a>
          </div>
        </div>

        {/* Decorative background elements */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-50 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-green-50 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-orange-50 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
    </div>
  );
};

export default VerificationScreen;
