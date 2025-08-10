// src/components/LayoutWrapper.jsx
import React, { useEffect, useState } from 'react';

const LayoutWrapper = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen px-6 md:px-16 py-10 bg-white text-black dark:bg-[#0f0f0f] dark:text-white transition-all duration-300">
      <button
        onClick={() => setIsDark(!isDark)}
        className="fixed top-4 right-4 px-4 py-2 rounded-xl font-medium shadow-md backdrop-blur-md bg-black/10 dark:bg-white/10 text-black dark:text-white hover:scale-105 transition"
      >
        {isDark ? '🌞 Light' : '🌙 Dark'}
      </button>
      {children}
    </div>
  );
};

export default LayoutWrapper; 