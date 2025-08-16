import React from 'react';
import { useNavigate } from 'react-router-dom';

function AccountCreateWelcome() {
  const navigate = useNavigate();

  const containerStyle = {
    minHeight: '100vh',
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '32px 16px 48px 16px',
    fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica Neue, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
    color: '#111827',
  };

  const headerStyle = {
    marginTop: '36px',
    marginBottom: '8px',
    fontSize: '20px',
    lineHeight: 1.2,
    color: '#6b7280',
    textAlign: 'center',
    fontWeight: 500,
  };

  const brandStyle = {
    fontWeight: 800,
    fontSize: '40px',
    textAlign: 'center',
    lineHeight: 1.1,
    marginBottom: '28px',
    letterSpacing: '-0.02em',
    color: '#0f172a',
  };

  const brandWordStyle = {
    color: '#1b9df3',
    display: 'inline-block',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
    gap: '24px',
    width: '100%',
    maxWidth: '1120px',
    margin: '0 auto 28px auto',
  };

  const cardStyle = {
    backgroundColor: '#ffffff',
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: '0 8px 28px rgba(0,0,0,0.06)',
    border: '1px solid #e5e7eb',
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    display: 'block',
  };

  const captionStyle = {
    textAlign: 'center',
    padding: '16px 14px 18px 14px',
    fontWeight: 700,
    fontSize: '18px',
    color: '#111827',
  };

  const subCaptionStyle = {
    textAlign: 'center',
    paddingBottom: '18px',
    color: '#374151',
    fontSize: '16px',
    marginTop: '-8px',
    fontWeight: 500,
  };

  const buttonStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    backgroundColor: '#1b9df3',
    color: '#ffffff',
    border: 'none',
    borderRadius: '12px',
    padding: '16px 32px',
    fontWeight: 800,
    fontSize: '16px',
    letterSpacing: '0.02em',
    cursor: 'pointer',
    boxShadow: '0 10px 20px rgba(27, 157, 243, 0.25)',
  };

  const topRightIconWrap = {
    position: 'fixed',
    top: '18px',
    right: '20px',
    cursor: 'pointer',
    color: '#111827',
  };

  return (
    <div style={containerStyle}>
      {/* Profile icon - top right */}
      <div style={topRightIconWrap} onClick={() => navigate('/profile')} title="Profile">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-user-round-icon lucide-circle-user-round"><path d="M18 20a6 6 0 0 0-12 0"/><circle cx="12" cy="10" r="4"/><circle cx="12" cy="12" r="10"/></svg>
      </div>

      {/* Title */}
      <div style={headerStyle}>Welcome to</div>
      <div style={brandStyle}><span style={brandWordStyle}>Flex.ai</span></div>

      {/* Cards */}
      <div style={gridStyle}>
        <div style={cardStyle}>
          <img src={process.env.PUBLIC_URL + '/1000flex.png'} alt="Track progress" style={imageStyle} />
          <div style={captionStyle}>Ready for some wins?</div>
          <div style={subCaptionStyle}>Start tracking, it's easy!</div>
        </div>
        <div style={cardStyle}>
          <img src={process.env.PUBLIC_URL + '/2000flex.png'} alt="Impact of food and fitness" style={imageStyle} />
          <div style={captionStyle}>Discover the impact of your food and fitness</div>
          <div style={subCaptionStyle}>&nbsp;</div>
        </div>
        <div style={cardStyle}>
          <img src={process.env.PUBLIC_URL + '/3000flex.png'} alt="Mindful eating" style={imageStyle} />
          <div style={captionStyle}>And make mindful eating a habit for life</div>
          <div style={subCaptionStyle}>&nbsp;</div>
        </div>
      </div>

      {/* Continue button */}
      <button style={buttonStyle} onClick={() => navigate('/account/create/input-name')} aria-label="Continue">
        CONTINUE
      </button>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 1024px) {
          .acw-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
        @media (max-width: 768px) {
          /* Override grid to 1 column on small screens */
        }
      `}</style>
    </div>
  );
}

export default AccountCreateWelcome;


