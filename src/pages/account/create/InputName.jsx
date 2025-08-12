import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function InputName() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState(''); // Removed localStorage for artifact
  const [touched, setTouched] = useState(false);

  const isValid = firstName.trim().length >= 2;

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: '20px',
    maxWidth: '500px',
    margin: '0 auto',
    fontFamily: 'Raleway, sans-serif',
    backgroundColor: '#ffffff',
  };

  const headingStyle = {
    fontSize: 'clamp(24px, 5vw, 32px)',
    fontWeight: 800,
    textAlign: 'center',
    margin: '0 0 12px 0',
    color: '#87CEEB',
    fontFamily: 'Raleway, sans-serif',
  };

  const subStyle = {
    textAlign: 'center',
    color: '#4A90A4',
    fontSize: '16px',
    lineHeight: '1.5',
    marginBottom: '8px',
    fontFamily: 'Raleway, sans-serif',
  };

  const inputContainerStyle = {
    width: '100%',
    marginTop: '32px',
    marginBottom: '32px',
  };

  const inputStyle = {
    width: '100%',
    padding: '16px 20px',
    borderRadius: '12px',
    border: `2px solid ${touched && !isValid ? '#ef4444' : '#B0E0E6'}`,
    outline: 'none',
    fontSize: '16px',
    fontWeight: '500',
    transition: 'all 0.3s ease',
    backgroundColor: '#F0F8FF',
    boxSizing: 'border-box',
    fontFamily: 'Raleway, sans-serif',
  };

  const errorStyle = {
    color: '#ef4444',
    marginTop: '12px',
    fontSize: '14px',
    fontWeight: '600',
    textAlign: 'center',
    animation: 'shake 0.5s ease-in-out',
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

  const welcomeTextStyle = {
    textAlign: 'center',
    color: '#4682B4',
    fontSize: '18px',
    fontWeight: '600',
    marginBottom: '16px',
    fontFamily: 'Raleway, sans-serif',
  };

  const handleNext = () => {
    setTouched(true);
    if (!isValid) return;
    // localStorage.setItem('onb:firstName', firstName.trim()); // Commented out for artifact
    navigate('/account/create/goals');
  };

  const handleInputFocus = (e) => {
    Object.assign(e.target.style, {
      borderColor: '#87CEEB',
      backgroundColor: '#ffffff',
      boxShadow: '0 0 0 3px rgba(135, 206, 235, 0.2)',
    });
  };

  const handleInputBlur = (e) => {
    setTouched(true);
    Object.assign(e.target.style, {
      borderColor: touched && !isValid ? '#ef4444' : '#B0E0E6',
      backgroundColor: '#F0F8FF',
      boxShadow: 'none',
    });
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
      
      <div style={headingStyle}>What's your first name?</div>
      
      <div style={subStyle}>We're happy you're here.</div>
      <div style={{ ...subStyle, marginBottom: '0' }}>Let's get to know a little about you.</div>

      <div style={inputContainerStyle}>
        <input
          style={inputStyle}
          placeholder="Enter your first name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          autoComplete="given-name"
        />
        {touched && !isValid && (
          <div style={errorStyle}>
            Please enter a valid first name (at least 2 characters).
          </div>
        )}
      </div>

      <div style={buttonRowStyle}>
        <button 
          style={backButtonStyle} 
          onClick={() => navigate('/account/create/welcome')}
          onMouseEnter={(e) => handleButtonHover(e, false)}
          onMouseLeave={(e) => handleButtonLeave(e, false)}
        >
          Back
        </button>
        <button 
          style={nextButtonStyle} 
          onClick={handleNext}
          disabled={!isValid}
          onMouseEnter={(e) => handleButtonHover(e, true)}
          onMouseLeave={(e) => handleButtonLeave(e, true)}
        >
          Next
        </button>
      </div>

      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700;800;900&display=swap');
          
          @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            75% { transform: translateX(5px); }
          }
          
          input::placeholder {
            color: #87CEEB;
            opacity: 0.7;
            font-family: 'Raleway', sans-serif;
          }
          
          button:disabled {
            opacity: 0.6;
            cursor: not-allowed;
            background-color: #B0E0E6 !important;
          }
          
          button:disabled:hover {
            transform: none !important;
            box-shadow: 0 4px 15px rgba(135, 206, 235, 0.4) !important;
            background-color: #B0E0E6 !important;
          }
        `}
      </style>
    </div>
  );
}