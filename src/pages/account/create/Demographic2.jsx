import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import OnboardingShell from '../../../components/OnboardingShell';

export default function Demographic2() {
  const navigate = useNavigate();
  const [feet, setFeet] = useState(localStorage.getItem('onb:h_ft') || '');
  const [inch, setInch] = useState(localStorage.getItem('onb:h_in') || '');
  const [cw, setCw] = useState(localStorage.getItem('onb:cw') || '');
  const [gw, setGw] = useState(localStorage.getItem('onb:gw') || '');

  const title = { fontSize: 24, fontWeight: 800, textAlign: 'left', marginBottom: 8 };
  const group = { display: 'grid', gap: 16 };
  const label = { color: '#111827', fontWeight: 700 };
  const input = { padding: '12px 14px', border: '1px solid #d1d5db', borderRadius: 8, width: 180 };
  const row = { display: 'flex', gap: 16, justifyContent: 'center', marginTop: 20 };
  const btn = (primary) => ({ minWidth: 160, padding: '14px 22px', fontWeight: 800, borderRadius: 10, border: primary ? 'none' : '2px solid #1b9df3', color: primary ? '#fff' : '#1b9df3', backgroundColor: primary ? '#0a66ff' : '#ffffff', cursor: 'pointer' });

  const handleNext = () => {
    localStorage.setItem('onb:h_ft', feet);
    localStorage.setItem('onb:h_in', inch);
    localStorage.setItem('onb:cw', cw);
    localStorage.setItem('onb:gw', gw);
    navigate('/account/create/user-id');
  };

  return (
    <OnboardingShell progress={68}>
      <div style={{ maxWidth: 700, margin: '0 auto' }}>
        <div style={title}>How tall are you?</div>
        <div style={{ display: 'flex', gap: 12, marginBottom: 8 }}>
          <div>
            <div style={label}>Height (feet)</div>
            <input style={input} value={feet} onChange={(e)=>setFeet(e.target.value)} placeholder="ft" />
          </div>
          <div>
            <div style={label}>Height (inches)</div>
            <input style={input} value={inch} onChange={(e)=>setInch(e.target.value)} placeholder="in" />
          </div>
        </div>
        <div style={{ color: '#2563eb', fontWeight: 700, marginBottom: 18 }}>Change units to centimeters</div>

        <div style={group}>
          <div>
            <div style={title}>How much do you weigh?</div>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <input style={input} value={cw} onChange={(e)=>setCw(e.target.value)} placeholder="Current weight" />
              <div style={{ fontWeight: 700 }}>lbs</div>
            </div>
            <div style={{ color: '#2563eb', fontWeight: 700, marginTop: 6 }}>Change units to kilograms/stone</div>
          </div>

          <div>
            <div style={title}>What's your goal weight?</div>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <input style={input} value={gw} onChange={(e)=>setGw(e.target.value)} placeholder="Goal weight" />
              <div style={{ fontWeight: 700 }}>lbs</div>
            </div>
          </div>
        </div>
      </div>
      <div style={row}>
        <button style={btn(false)} onClick={() => navigate(-1)}>BACK</button>
        <button style={btn(true)} onClick={handleNext}>NEXT</button>
      </div>
    </OnboardingShell>
  );
}


