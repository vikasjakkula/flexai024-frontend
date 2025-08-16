import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

export default function Demographic1() {
  const navigate = useNavigate();
  const [sex, setSex] = useState(''); // Removed localStorage for artifact
  const [dob, setDob] = useState(''); // Removed localStorage for artifact
  const [country, setCountry] = useState('India'); // Removed localStorage for artifact

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
    fontSize: 'clamp(20px, 4vw, 28px)',
    fontWeight: 800,
    textAlign: 'center',
    margin: '0 0 16px 0',
    color: '#87CEEB',
    fontFamily: 'Raleway, sans-serif',
    lineHeight: '1.3',
  };

  const helpTextStyle = {
    color: '#4682B4',
    fontWeight: '700',
    textAlign: 'left',
    maxWidth: '700px',
    margin: '0 auto 20px auto',
    fontSize: '16px',
    fontFamily: 'Raleway, sans-serif',
  };

  const formContainerStyle = {
    maxWidth: '700px',
    width: '100%',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    marginBottom: '32px',
  };

  const formSectionStyle = {
    backgroundColor: '#F0F8FF',
    padding: '20px',
    borderRadius: '12px',
    border: '2px solid #B0E0E6',
  };

  const labelStyle = {
    color: '#4682B4',
    fontWeight: '700',
    marginBottom: '12px',
    fontSize: '16px',
    fontFamily: 'Raleway, sans-serif',
    display: 'block',
  };

  const radioContainerStyle = {
    display: 'flex',
    gap: '20px',
    alignItems: 'center',
    flexWrap: 'wrap',
  };

  const radioLabelStyle = {
    color: '#4682B4',
    fontWeight: '600',
    fontSize: '16px',
    fontFamily: 'Raleway, sans-serif',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    cursor: 'pointer',
  };

  const radioInputStyle = {
    width: '20px',
    height: '20px',
    accentColor: '#87CEEB',
    cursor: 'pointer',
  };

  const inputStyle = {
    width: '100%',
    maxWidth: '300px',
    padding: '14px 16px',
    border: '2px solid #B0E0E6',
    borderRadius: '8px',
    fontSize: '16px',
    fontFamily: 'Raleway, sans-serif',
    backgroundColor: '#ffffff',
    transition: 'all 0.3s ease',
    outline: 'none',
  };

  const selectStyle = {
    ...inputStyle,
    cursor: 'pointer',
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
    // localStorage.setItem('onb:sex', sex); // Commented out for artifact
    // localStorage.setItem('onb:dob', dob); // Commented out for artifact
    // localStorage.setItem('onb:country', country); // Commented out for artifact
    navigate('/account/create/demographic-2');
  };

  const handleInputFocus = (e) => {
    Object.assign(e.target.style, {
      borderColor: '#87CEEB',
      boxShadow: '0 0 0 3px rgba(135, 206, 235, 0.2)',
    });
  };

  const handleInputBlur = (e) => {
    Object.assign(e.target.style, {
      borderColor: '#B0E0E6',
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
      <Helmet>
        <title>Onboarding – Demographics 1 | Flex.ai</title>
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>
      <div style={welcomeTextStyle}>Welcome to FlexAI</div>
      
      <div style={titleStyle}>
        Please select which sex we should use to calculate your calorie needs.
      </div>
      
      <div style={helpTextStyle}>Which one should I choose?</div>

      <div style={formContainerStyle}>
        {/* Gender Selection */}
        <div style={formSectionStyle}>
          <label style={labelStyle}>Select your biological sex:</label>
          <div style={radioContainerStyle}>
            <label style={radioLabelStyle}>
              <input 
                type="radio" 
                name="sex" 
                value="Male" 
                checked={sex === 'Male'} 
                onChange={(e) => setSex(e.target.value)}
                style={radioInputStyle}
              />
              Male
            </label>
            <label style={radioLabelStyle}>
              <input 
                type="radio" 
                name="sex" 
                value="Female" 
                checked={sex === 'Female'} 
                onChange={(e) => setSex(e.target.value)}
                style={radioInputStyle}
              />
              Female
            </label>
          </div>
        </div>

        {/* Date of Birth */}
        <div style={formSectionStyle}>
          <label style={labelStyle}>When were you born?</label>
          <input 
            style={inputStyle} 
            type="date" 
            value={dob} 
            onChange={(e) => setDob(e.target.value)}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
        </div>

        {/* Country Selection */}
        <div style={formSectionStyle}>
          <label style={labelStyle}>Where do you live?</label>
          <select 
            style={selectStyle} 
            value={country} 
            onChange={(e) => setCountry(e.target.value)}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          >
            <option value="India">India</option>
            <option value="United States">United States</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Australia">Australia</option>
          </select>
        </div>
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