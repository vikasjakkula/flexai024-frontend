import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import OnboardingShell from '../../../components/OnboardingShell';

export default function LastStep() {
  const navigate = useNavigate();
  const [acceptAll, setAcceptAll] = useState(false);
  const [sensitive, setSensitive] = useState(true);
  const [transfer, setTransfer] = useState(false);

  const title = { fontSize: 24, fontWeight: 800, textAlign: 'center', marginBottom: 8 };
  const sub = { textAlign: 'center', color: '#6b7280', maxWidth: 720, margin: '0 auto 16px auto' };
  const section = { maxWidth: 720, margin: '0 auto', paddingTop: 8 };
  const row = { display: 'flex', gap: 16, justifyContent: 'center', marginTop: 20 };
  const btn = (primary) => ({ minWidth: 160, padding: '14px 22px', fontWeight: 800, borderRadius: 10, border: primary ? 'none' : '2px solid #1b9df3', color: primary ? '#fff' : '#1b9df3', backgroundColor: primary ? '#0a66ff' : '#ffffff', cursor: 'pointer' });

  const next = () => navigate('/account/create/congratulations');

  return (
    <OnboardingShell progress={90}>
      <div style={title}>Last step! Make sure your data is secure by reviewing data consents.</div>
      <div style={sub}>
        In order to finish creating and customizing your account, we need certain data permissions. (You may withdraw consent at any time.)
      </div>

      <div style={section}>
        <label style={{ display: 'flex', alignItems: 'center', gap: 10, fontWeight: 700 }}>
          <input type="checkbox" checked={acceptAll} onChange={(e)=>setAcceptAll(e.target.checked)} /> Accept All
        </label>
        <div style={{ borderTop: '1px solid #e5e7eb', margin: '16px 0' }} />

        <label style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontWeight: 700 }}>
          <input type="checkbox" checked={sensitive} onChange={(e)=>setSensitive(e.target.checked)} />
          <div>
            Sensitive Data Processing
            <div style={{ fontWeight: 400, color: '#4b5563' }}>Flexai, Inc. is allowed to process my sensitive personal data to provide wellness and fitness services.</div>
            <div style={{ color: '#2563eb', fontWeight: 700, marginTop: 6 }}>LEARN MORE</div>
          </div>
        </label>

        <div style={{ height: 18 }} />

        <label style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontWeight: 700 }}>
          <input type="checkbox" checked={transfer} onChange={(e)=>setTransfer(e.target.checked)} />
          <div>
            Transfer Outside of Country/Region
            <div style={{ fontWeight: 400, color: '#4b5563' }}>Flexai, Inc. is allowed to transfer my personal data to enable this service. I’m aware some laws may be less protective than those of my country/region.</div>
            <div style={{ color: '#2563eb', fontWeight: 700, marginTop: 6 }}>LEARN MORE</div>
          </div>
        </label>
      </div>

      <div style={row}>
        <button style={btn(false)} onClick={() => navigate(-1)}>BACK</button>
        <button style={btn(true)} onClick={next}>FINISH</button>
      </div>
    </OnboardingShell>
  );
}


