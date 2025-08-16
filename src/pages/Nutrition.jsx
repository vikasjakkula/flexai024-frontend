import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const tabs = [
  { name: 'Protein-rich Foods', path: 'protein' },
  { name: 'Pre/Post-Workout Meals', path: 'meals' },
  { name: 'Weight Gain/Loss Plans', path: 'plans' },
];

export default function Nutrition() {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <Helmet>
        <title>Diet & Nutrition – AI meal plans and tips | Flex.ai</title>
        <meta name="description" content="Stay on track with AI-generated diet plans. Balanced meals, calorie tracking, and nutrition tips for weight loss or muscle building." />
        <link rel="canonical" href="https://flexai024.vercel.app/nutrition" />
        <meta name="robots" content="index,follow" />
      </Helmet>
      <div className="flex gap-4 mb-6 border-b pb-2">
        {tabs.map(tab => (
          <NavLink
            key={tab.path}
            to={tab.path}
            className={({ isActive }) =>
              `px-4 py-2 rounded-t font-bold ${isActive ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`
            }
            end
          >
            {tab.name}
          </NavLink>
        ))}
      </div>
      <Outlet />
    </div>
  );
} 