import React from 'react';
import { useNavigate } from 'react-router-dom';
import OnboardingShell from '../../../components/OnboardingShell';

export default function GoalsBigStep() {
  const navigate = useNavigate();
  const title = { fontSize: 28, fontWeight: 800, textAlign: 'center', marginBottom: 16 };
  const body = { textAlign: 'center', color: '#374151', maxWidth: 680, margin: '0 auto' };
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
    <OnboardingShell progress={28}>
      <div style={title}>Great! You’ve just taken a big step on your journey.</div>
      <div style={body}>
        Health benefits of being more active include increasing your metabolism, keeping your joints healthy, and improving your mental outlook.
        <br />
        Now, let’s talk about your goal to increase your step count.
      </div>
      <div style={row}>
        <button style={btn(false)} onClick={() => navigate(-1)}>BACK</button>
        <button style={btn(true)} onClick={() => navigate('/account/create/goals/lose-weight/options')}>NEXT</button>
      </div>
    </OnboardingShell>
  );
}


