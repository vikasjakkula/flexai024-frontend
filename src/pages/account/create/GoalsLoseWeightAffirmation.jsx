import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import OnboardingShell from '../../../components/OnboardingShell';

export default function GoalsLoseWeightAffirmation() {
  const navigate = useNavigate();
  const options = [
    'Lose weight',
    'Maintain weight',
    'Gain weight',
    'Gain muscle',
    'Modify my diet',
    'Manage stress',
    'Increase step count',
  ];
  const initial = (() => {
    try { return JSON.parse(localStorage.getItem('onb:goals') || '[]'); } catch { return []; }
  })();
  const [selected, setSelected] = useState(Array.isArray(initial) ? initial : []);
  const [error, setError] = useState('');
  const title = { fontSize: 28, fontWeight: 800, textAlign: 'center', marginBottom: 16 };
  const body = { textAlign: 'center', color: '#374151', maxWidth: 700, margin: '0 auto' };
  const row = { display: 'flex', gap: 16, justifyContent: 'center', marginTop: 28 };
  const btn = (primary) => ({
    minWidth: 160,
    padding: '14px 22px',
    fontWeight: 800,
    borderRadius: 10,
    border: primary ? 'none' : '2px solid #1b9df3',
    color: primary ? '#fff' : '#1b9df3',
    backgroundColor: primary ? '#0a66ff' : '#ffffff',
    cursor: 'pointer',
  });

  return (
    <OnboardingShell progress={42}>
      <Helmet>
        <title>Onboarding – Choose your goals | Flex.ai</title>
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>
      <div style={title}>Thanks ooo! Now for your goals.</div>
      <div style={body}>
        Select up to 3 that are important to you, including one weight goal.
      </div>
      <div style={{ maxWidth: 700, margin: '18px auto', display: 'flex', flexDirection: 'column', gap: 12 }}>
        {options.map((t) => {
          const isSelected = selected.includes(t);
          return (
            <div
              key={t}
              role="button"
              aria-pressed={isSelected}
              tabIndex={0}
              onClick={() => {
                setError('');
                if (isSelected) {
                  setSelected(selected.filter((s) => s !== t));
                } else if (selected.length < 3) {
                  setSelected([...selected, t]);
                } else {
                  setError('Select up to 3 goals.');
                }
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  e.currentTarget.click();
                }
              }}
              style={{
                border: `2px solid ${isSelected ? '#1b9df3' : '#e5e7eb'}`,
                background: isSelected ? '#eff6ff' : '#ffffff',
                color: '#111827',
                borderRadius: 12,
                padding: '16px 18px',
                fontWeight: 700,
                textAlign: 'center',
                cursor: 'pointer',
                userSelect: 'none',
              }}
            >
              {t}
            </div>
          );
        })}
        {error && <div style={{ color: '#ef4444', fontWeight: 600 }}>{error}</div>}
      </div>
      <div style={row}>
        <button style={btn(false)} onClick={() => navigate(-1)}>BACK</button>
        <button
          style={btn(true)}
          onClick={() => {
            localStorage.setItem('onb:goals', JSON.stringify(selected));
            navigate('/account/create/activity-level');
          }}
        >
          NEXT
        </button>
      </div>
    </OnboardingShell>
  );
}


