import React from 'react';

export default function OnboardingShell({ children, progress = 0 }) {
  const headerBarStyle = {
    width: '100%',
    height: 56,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderBottom: '1px solid #f3f4f6',
    position: 'sticky',
    top: 0,
    zIndex: 10,
  };

  const brandStyle = {
    color: '#1b9df3',
    fontWeight: 900,
    fontSize: 24,
    marginLeft: 24,
    userSelect: 'none',
    letterSpacing: '-0.02em',
  };

  const outerStyle = {
    backgroundColor: '#ffffff',
    minHeight: '100vh',
    paddingBottom: 48,
  };

  const cardStyle = {
    width: '100%',
    maxWidth: 720,
    margin: '32px auto',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    boxShadow: '0 18px 50px rgba(0,0,0,0.08)',
    border: '1px solid #e5e7eb',
  };

  const progressTrack = {
    height: 8,
    width: '100%',
    backgroundColor: '#d1d5db',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    overflow: 'hidden',
  };

  const progressBar = {
    height: '100%',
    width: `${Math.min(Math.max(progress, 0), 100)}%`,
    backgroundColor: '#1b9df3',
    transition: 'width 240ms ease',
  };

  return (
    <div style={outerStyle}>
      <div style={headerBarStyle}>
        <div style={brandStyle}>Flexai</div>
      </div>
      <div style={cardStyle}>
        <div style={progressTrack}>
          <div style={progressBar} />
        </div>
        <div style={{ padding: '28px 24px 24px 24px' }}>{children}</div>
      </div>
    </div>
  );
}


