import React from 'react';
import { useNavigate } from 'react-router-dom';
import OnboardingShell from '../../../components/OnboardingShell';

export default function GoalsIntro() {
  const navigate = useNavigate();
  const title = {
    fontSize: 28,
    fontWeight: 800,
    textAlign: 'center',
    marginBottom: 16,
  };
  const body = {
    textAlign: 'center',
    color: '#374151',
    lineHeight: 1.6,
    maxWidth: 640,
    margin: '0 auto',
  };
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
    <OnboardingShell progress={20}>
      <div style={title}>Starting is the hardest part.</div>
      <div style={body}>
        Up your step count with our walking plans to increase your metabolism, improve your mood, and more.
        <br />
        Let’s get into the specifics so we can build your personalized plan.
      </div>
      <div style={row}>
        <button style={btn(false)} onClick={() => navigate(-1)}>BACK</button>
        <button style={btn(true)} onClick={() => navigate('/account/create/goals/big-step')}>NEXT</button>
      </div>
    </OnboardingShell>
  );
}


