import React from 'react';
import { Helmet } from 'react-helmet-async';

const ContactFormCard = ({ title, children }) => (
  <div style={{
    maxWidth: 480,
    margin: '2rem auto',
    background: '#fff',
    borderRadius: '1rem',
    boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    alignItems: 'stretch',
  }}>
    <Helmet>
      <title>Contact – Flex.ai</title>
      <meta name="description" content="Get in touch with the Flex.ai team for support, partnerships, and media inquiries." />
      <link rel="canonical" href="https://flexai024.vercel.app/contact" />
    </Helmet>
    {title && <h2 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 700, textAlign: 'center', color: '#1DA1F2' }}>{title}</h2>}
    {children}
  </div>
);

export default ContactFormCard; 