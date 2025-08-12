import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import OnboardingShell from '../../../components/OnboardingShell';

const options = [
  'Less than 1,000',
  '1,000 to 3,000',
  '3,000 to 7,000',
  'More than 7,000',
  "I don’t know",
];

export default function GoalsLoseWeightOptions() {
  const navigate = useNavigate();
  const [active, setActive] = useState(localStorage.getItem('onb:stepsOption') || options[0]);

  const title = { fontSize: 24, fontWeight: 800, textAlign: 'center', marginBottom: 8 };
  const sub = { textAlign: 'center', color: '#6b7280', marginBottom: 16 };
  const listWrap = { maxWidth: 680, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 14 };
  const item = (selected) => ({
    border: `2px solid ${selected ? '#1b9df3' : '#e5e7eb'}`,
    borderRadius: 12,
    padding: '16px 18px',
    cursor: 'pointer',
    fontWeight: 700,
    background: '#fff',
    textAlign: 'center',
  });
  const row = { display: 'flex', gap: 16, justifyContent: 'center', marginTop: 20 };
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

  const handleNext = () => {
    localStorage.setItem('onb:stepsOption', active);
    navigate('/account/create/goals/lose-weight/affirmation');
  };

  return (
    <OnboardingShell progress={34}>
      <div style={title}>How many steps do you take per day now?</div>
      <div style={sub}>Select one.</div>
      <div style={listWrap}>
        {options.map((opt) => (
          <div key={opt} style={item(opt === active)} onClick={() => setActive(opt)}>
            {opt}
          </div>
        ))}
      </div>
      <div style={row}>
        <button style={btn(false)} onClick={() => navigate(-1)}>BACK</button>
        <button style={btn(true)} onClick={handleNext}>NEXT</button>
      </div>
    </OnboardingShell>
  );
}


