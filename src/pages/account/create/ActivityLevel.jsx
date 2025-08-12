import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const levels = [
  { title: 'Not Very Active', desc: 'Spend most of the day sitting (e.g., bankteller, desk job)' },
  { title: 'Lightly Active', desc: 'Spend a good part of the day on your feet (e.g., teacher, salesperson)' },
  { title: 'Active', desc: 'Spend a good part of the day doing some physical activity (e.g., food server, postal carrier)' },
  { title: 'Very Active', desc: 'Spend a good part of the day doing heavy physical activity (e.g., bike messenger, carpenter)' },
];

export default function ActivityLevel() {
  const navigate = useNavigate();
  const [active, setActive] = useState(levels[0].title); // Removed localStorage for artifact

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    fontFamily: 'Raleway, sans-serif',
    backgroundColor: '#ffffff',
  };

  const welcomeTextStyle = {
    textAlign: 'center',
    color: '#4682B4',
    fontSize: '18px',
    fontWeight: '600',
    marginBottom: '16px',
    fontFamily: 'Raleway, sans-serif',
  };

  const titleStyle = {
    fontSize: 'clamp(24px, 5vw, 32px)',
    fontWeight: 800,
    textAlign: 'center',
    margin: '0 0 12px 0',
    color: '#87CEEB',
    fontFamily: 'Raleway, sans-serif',
  };

  const subtitleStyle = {
    textAlign: 'center',
    color: '#4A90A4',
    fontSize: '16px',
    marginBottom: '24px',
    fontFamily: 'Raleway, sans-serif',
  };

  const cardsContainerStyle = {
    width: '100%',
    maxWidth: '700px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    marginBottom: '32px',
  };

  const cardStyle = (selected) => ({
    border: `2px solid ${selected ? '#87CEEB' : '#B0E0E6'}`,
    borderRadius: '12px',
    padding: '18px 20px',
    cursor: 'pointer',
    backgroundColor: selected ? '#F0F8FF' : '#ffffff',
    transition: 'all 0.3s ease',
    fontFamily: 'Raleway, sans-serif',
    boxShadow: selected ? '0 4px 15px rgba(135, 206, 235, 0.2)' : '0 2px 8px rgba(0, 0, 0, 0.1)',
  });

  const cardTitleStyle = {
    fontWeight: '800',
    marginBottom: '6px',
    color: '#4682B4',
    fontSize: '16px',
    fontFamily: 'Raleway, sans-serif',
  };

  const cardDescStyle = {
    color: '#4A90A4',
    fontSize: '14px',
    lineHeight: '1.4',
    fontFamily: 'Raleway, sans-serif',
  };

  const buttonRowStyle = {
    display: 'flex',
    gap: '16px',
    justifyContent: 'center',
    width: '100%',
    marginTop: '24px',
  };

  const buttonBaseStyle = {
    minWidth: '140px',
    padding: '16px 24px',
    fontWeight: '700',
    fontSize: '14px',
    borderRadius: '12px',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    fontFamily: 'Raleway, sans-serif',
  };

  const backButtonStyle = {
    ...buttonBaseStyle,
    backgroundColor: '#ffffff',
    color: '#87CEEB',
    border: '2px solid #87CEEB',
  };

  const nextButtonStyle = {
    ...buttonBaseStyle,
    backgroundColor: '#87CEEB',
    color: '#ffffff',
    boxShadow: '0 4px 15px rgba(135, 206, 235, 0.4)',
  };

  const handleNext = () => {
    // localStorage.setItem('onb:activity', active); // Commented out for artifact
    navigate('/account/create/demographic-1');
  };

  const handleCardHover = (e, selected) => {
    if (!selected) {
      Object.assign(e.target.style, {
        borderColor: '#87CEEB',
        backgroundColor: '#F8FBFF',
        transform: 'translateY(-2px)',
        boxShadow: '0 6px 20px rgba(135, 206, 235, 0.15)',
      });
    }
  };

  const handleCardLeave = (e, selected) => {
    if (!selected) {
      Object.assign(e.target.style, {
        borderColor: '#B0E0E6',
        backgroundColor: '#ffffff',
        transform: 'translateY(0)',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      });
    }
  };

  const handleButtonHover = (e, isNext = false) => {
    if (isNext) {
      Object.assign(e.target.style, {
        backgroundColor: '#5F9EA0',
        transform: 'translateY(-2px)',
        boxShadow: '0 8px 25px rgba(135, 206, 235, 0.5)',
      });
    } else {
      Object.assign(e.target.style, {
        backgroundColor: '#87CEEB',
        color: '#ffffff',
        transform: 'translateY(-2px)',
        boxShadow: '0 8px 25px rgba(135, 206, 235, 0.4)',
      });
    }
  };

  const handleButtonLeave = (e, isNext = false) => {
    if (isNext) {
      Object.assign(e.target.style, {
        backgroundColor: '#87CEEB',
        transform: 'translateY(0)',
        boxShadow: '0 4px 15px rgba(135, 206, 235, 0.4)',
      });
    } else {
      Object.assign(e.target.style, {
        backgroundColor: '#ffffff',
        color: '#87CEEB',
        transform: 'translateY(0)',
        boxShadow: 'none',
      });
    }
  };

  return (
    <div style={containerStyle}>
      <div style={welcomeTextStyle}>Welcome to FlexAI</div>
      
      <div style={titleStyle}>What is your baseline activity level?</div>
      
      <div style={subtitleStyle}>Not including workouts–we count that separately</div>

      <div style={cardsContainerStyle}>
        {levels.map((level) => {
          const selected = level.title === active;
          return (
            <div 
              key={level.title} 
              style={cardStyle(selected)}
              onClick={() => setActive(level.title)}
              onMouseEnter={(e) => handleCardHover(e, selected)}
              onMouseLeave={(e) => handleCardLeave(e, selected)}
            >
              <div style={cardTitleStyle}>{level.title}</div>
              <div style={cardDescStyle}>{level.desc}</div>
            </div>
          );
        })}
      </div>

      <div style={buttonRowStyle}>
        <button 
          style={backButtonStyle} 
          onClick={() => navigate(-1)}
          onMouseEnter={(e) => handleButtonHover(e, false)}
          onMouseLeave={(e) => handleButtonLeave(e, false)}
        >
          Back
        </button>
        <button 
          style={nextButtonStyle} 
          onClick={handleNext}
          onMouseEnter={(e) => handleButtonHover(e, true)}
          onMouseLeave={(e) => handleButtonLeave(e, true)}
        >
          Next
        </button>
      </div>

      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700;800;900&display=swap');
          
          * {
            box-sizing: border-box;
          }
        `}
      </style>
    </div>
  );
}