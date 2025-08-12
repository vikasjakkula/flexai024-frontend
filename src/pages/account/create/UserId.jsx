import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import OnboardingShell from '../../../components/OnboardingShell';

export default function UserId() {
  const navigate = useNavigate();
  const [username, setUsername] = useState(localStorage.getItem('onb:username') || '');

  const title = { fontSize: 28, fontWeight: 800, textAlign: 'center', marginBottom: 16 };
  const row = { display: 'flex', gap: 16, justifyContent: 'center', marginTop: 20 };
  const btn = (primary) => ({ minWidth: 160, padding: '14px 22px', fontWeight: 800, borderRadius: 10, border: primary ? 'none' : '2px solid #1b9df3', color: primary ? '#fff' : '#1b9df3', backgroundColor: primary ? '#0a66ff' : '#ffffff', cursor: 'pointer' });
  const input = { width: '100%', padding: '14px 16px', borderRadius: 8, border: '1px solid #d1d5db', outline: 'none' };

  const next = () => { localStorage.setItem('onb:username', username); navigate('/account/create/last-step'); };

  return (
    <OnboardingShell progress={76}>
      <div style={title}>Create a username.</div>
      <div style={{ maxWidth: 700, margin: '0 auto' }}>
        <div style={{ color: '#6b7280', fontWeight: 700, marginBottom: 6 }}>Create a username</div>
        <input style={input} value={username} onChange={(e)=>setUsername(e.target.value)} />
      </div>
      <div style={row}>
        <button style={btn(false)} onClick={() => navigate(-1)}>BACK</button>
        <button style={btn(true)} onClick={next}>NEXT</button>
      </div>
    </OnboardingShell>
  );
}


