import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

export default function Congratulations() {
  const navigate = useNavigate();

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

  const congratulationsStyle = {
    fontSize: 'clamp(32px, 6vw, 48px)',
    fontWeight: 900,
    color: '#87CEEB',
    textAlign: 'center',
    marginBottom: '16px',
    fontFamily: 'Raleway, sans-serif',
  };

  const titleStyle = {
    textAlign: 'center',
    color: '#4A90A4',
    fontSize: '18px',
    fontWeight: '600',
    marginBottom: '16px',
    fontFamily: 'Raleway, sans-serif',
  };

  const caloriesStyle = {
    fontSize: 'clamp(40px, 8vw, 64px)',
    fontWeight: 900,
    textAlign: 'center',
    color: '#4682B4',
    fontFamily: 'Raleway, sans-serif',
    textShadow: '0 2px 4px rgba(135, 206, 235, 0.3)',
  };

  const badgeStyle = {
    margin: '12px auto 0 auto',
    width: '140px',
    textAlign: 'center',
    background: 'linear-gradient(135deg, #87CEEB 0%, #B0E0E6 100%)',
    borderRadius: '12px',
    padding: '12px 16px',
    fontWeight: '800',
    color: '#ffffff',
    fontSize: '14px',
    fontFamily: 'Raleway, sans-serif',
    boxShadow: '0 4px 15px rgba(135, 206, 235, 0.3)',
  };

  const planTextStyle = {
    textAlign: 'center',
    color: '#4A90A4',
    fontSize: '16px',
    marginTop: '20px',
    marginBottom: '24px',
    fontFamily: 'Raleway, sans-serif',
    lineHeight: '1.5',
  };

  const dividerStyle = {
    borderTop: '2px solid #B0E0E6',
    margin: '24px auto',
    maxWidth: '600px',
    width: '100%',
  };

  const checkboxContainerStyle = {
    maxWidth: '600px',
    width: '100%',
    margin: '0 auto 32px auto',
    display: 'flex',
    gap: '16px',
    alignItems: 'flex-start',
    padding: '20px',
    backgroundColor: '#F0F8FF',
    borderRadius: '12px',
    border: '2px solid #B0E0E6',
  };

  const checkboxStyle = {
    width: '20px',
    height: '20px',
    accentColor: '#87CEEB',
    cursor: 'pointer',
  };

  const checkboxTextContainerStyle = {
    flex: 1,
  };

  const checkboxTitleStyle = {
    fontWeight: '800',
    color: '#4682B4',
    fontSize: '16px',
    marginBottom: '6px',
    fontFamily: 'Raleway, sans-serif',
  };

  const checkboxDescStyle = {
    color: '#4A90A4',
    fontSize: '14px',
    lineHeight: '1.5',
    fontFamily: 'Raleway, sans-serif',
  };

  const buttonStyle = {
    width: '100%',
    maxWidth: '400px',
    background: 'linear-gradient(135deg, #87CEEB 0%, #5F9EA0 100%)',
    color: '#ffffff',
    fontWeight: '800',
    fontSize: '16px',
    padding: '18px 32px',
    border: 'none',
    borderRadius: '12px',
    cursor: 'pointer',
    fontFamily: 'Raleway, sans-serif',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    boxShadow: '0 6px 20px rgba(135, 206, 235, 0.4)',
    transition: 'all 0.3s ease',
  };

  const handleButtonHover = (e) => {
    Object.assign(e.target.style, {
      background: 'linear-gradient(135deg, #5F9EA0 0%, #4682B4 100%)',
      transform: 'translateY(-3px)',
      boxShadow: '0 10px 30px rgba(135, 206, 235, 0.5)',
    });
  };

  const handleButtonLeave = (e) => {
    Object.assign(e.target.style, {
      background: 'linear-gradient(135deg, #87CEEB 0%, #5F9EA0 100%)',
      transform: 'translateY(0)',
      boxShadow: '0 6px 20px rgba(135, 206, 235, 0.4)',
    });
  };

  return (
    <div style={containerStyle}>
      <Helmet>
        <title>Onboarding – Completed | Flex.ai</title>
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>
      <div style={welcomeTextStyle}>Welcome to FlexAI</div>
      
      <div style={congratulationsStyle}>Congratulations!</div>
      
      <div style={titleStyle}>Your daily net calorie goal is:</div>
      
      <div style={caloriesStyle}>1,580</div>
      
      <div style={badgeStyle}>calories</div>
      
      <div style={planTextStyle}>
        With this plan, you should: <strong style={{color: '#4682B4'}}>Gain 0 lbs</strong> by <strong style={{color: '#4682B4'}}>October 20</strong>
      </div>

      <div style={dividerStyle} />

      <div style={checkboxContainerStyle}>
        <input 
          type="checkbox" 
          defaultChecked 
          style={checkboxStyle}
        />
        <div style={checkboxTextContainerStyle}>
          <div style={checkboxTitleStyle}>Sign up for emails</div>
          <div style={checkboxDescStyle}>
            Get recipes, workouts, and nutrition & fitness tips from FlexAI experts. Plus, a first look at new features!
          </div>
        </div>
      </div>

      <button 
        style={buttonStyle} 
        onClick={() => navigate('/library')}
        onMouseEnter={handleButtonHover}
        onMouseLeave={handleButtonLeave}
      >
        Explore FlexAI
      </button>

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