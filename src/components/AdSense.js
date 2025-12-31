import React, { useEffect, useRef, useState } from 'react';

const AdSense = ({ adSlot = "1012815210" }) => {
  const adRef = useRef(null);
  const pushedRef = useRef(false);
  const retryCountRef = useRef(0);
  const maxRetries = 50; // Try for up to 5 seconds (50 * 100ms)
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  
  // Check immediately on render
  const hostname = typeof window !== 'undefined' ? window.location.hostname : '';
  const port = typeof window !== 'undefined' ? window.location.port : '';
  const host = typeof window !== 'undefined' ? window.location.host : '';
  const isLocalhost3000Initial = 
    (hostname === 'localhost' || hostname === '127.0.0.1') && 
    (port === '3000' || host === 'localhost:3000' || host === '127.0.0.1:3000');
  
  const [isLocalhost3000, setIsLocalhost3000] = useState(isLocalhost3000Initial);

  useEffect(() => {
    // Check if running on localhost:3000 ONLY
    const hostname = window.location.hostname;
    const port = window.location.port;
    const host = window.location.host; // e.g., "localhost:3000"
    
    // Check multiple ways to detect localhost:3000
    const isLocalhost3000Check = 
      (hostname === 'localhost' || hostname === '127.0.0.1') && 
      (port === '3000' || host === 'localhost:3000' || host === '127.0.0.1:3000');
    
    console.log('🔍 AdSense Debug:', {
      hostname,
      port,
      host,
      isLocalhost3000: isLocalhost3000Check
    });
    
    setIsLocalhost3000(isLocalhost3000Check);

    // If not localhost:3000, don't initialize ads
    if (!isLocalhost3000Check) {
      console.log('🚫 AdSense disabled - only works on localhost:3000');
      console.log('Current location:', window.location.href);
      return;
    }

    console.log('✅ AdSense enabled for localhost:3000');

    // Function to load AdSense script if not already loaded
    const loadAdSenseScript = () => {
      // Check if script already exists
      const existingScript = document.querySelector('script[src*="adsbygoogle.js"]');
      if (existingScript) {
        return Promise.resolve();
      }

      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9366739988538654';
        script.async = true;
        script.crossOrigin = 'anonymous';
        script.onload = () => {
          console.log('✅ AdSense script loaded successfully');
          resolve();
        };
        script.onerror = () => {
          console.error('❌ Failed to load AdSense script');
          reject(new Error('Failed to load AdSense script'));
        };
        document.head.appendChild(script);
      });
    };

    // Function to check if ad has loaded
    const checkAdLoaded = () => {
      if (adRef.current) {
        const adElement = adRef.current;
        // Check if ad has content (not just empty)
        const hasContent = adElement.children.length > 0 || 
                          adElement.innerHTML.trim().length > 0 ||
                          adElement.offsetHeight > 50;
        
        if (hasContent) {
          setShowPlaceholder(false);
          console.log('✅ AdSense ad content detected on localhost:3000');
        } else {
          console.log('ℹ️ AdSense loading on localhost:3000 - placeholder visible');
        }
      }
    };

    // Function to initialize AdSense
    const initAdSense = async () => {
      if (pushedRef.current) return; // Prevent multiple pushes
      
      try {
        // Ensure script is loaded
        await loadAdSenseScript();
        
        // Wait for adsbygoogle to be available
        if (!window.adsbygoogle) {
          window.adsbygoogle = [];
        }

        // Wait for the DOM element to be ready
        if (adRef.current) {
          // Small delay to ensure everything is ready
          setTimeout(() => {
            try {
              (window.adsbygoogle = window.adsbygoogle || []).push({});
              pushedRef.current = true;
              console.log('✅ AdSense ad initialized successfully on localhost:3000', {
                adSlot,
                client: 'ca-pub-9366739988538654',
                location: 'Home Page - Middle Section (after stats cards, before testimonials)',
                host: window.location.host
              });
              
              // Check if ad loaded after a delay
              setTimeout(checkAdLoaded, 2000);
              setTimeout(checkAdLoaded, 5000);
            } catch (err) {
              console.error('❌ Error pushing to adsbygoogle:', err);
            }
          }, 100);
        } else if (retryCountRef.current < maxRetries) {
          // Retry if element not ready yet
          retryCountRef.current++;
          setTimeout(initAdSense, 100);
        }
      } catch (err) {
        console.error('❌ AdSense initialization error:', err);
        // Retry on error
        if (retryCountRef.current < maxRetries) {
          retryCountRef.current++;
          setTimeout(initAdSense, 200);
        }
      }
    };

    // Start initialization
    const timer = setTimeout(() => {
      initAdSense();
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, [adSlot, isLocalhost3000]);

  // Always show placeholder on localhost:3000, even if ad doesn't load
  // Don't render anything if not on localhost:3000
  if (!isLocalhost3000) {
    if (typeof window !== 'undefined') {
      console.log('🚫 AdSense component not rendering - not on localhost:3000', {
        hostname: window.location.hostname,
        port: window.location.port,
        host: window.location.host
      });
    }
    return null;
  }

  return (
    <div 
      id="google-adsense-container"
      className="adsense-container" 
      style={{ 
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'center', 
        alignItems: 'center',
        minHeight: '100px',
        margin: '2rem 0',
        padding: '1rem',
        width: '100%',
        position: 'relative'
      }}
    >
      {/* Placeholder for localhost:3000 - Always visible on localhost */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#e8f4f8',
          border: '3px solid #1b9df3',
          borderRadius: '12px',
          padding: '30px',
          textAlign: 'center',
          zIndex: 10,
          minHeight: '150px',
          minWidth: '320px',
          maxWidth: '728px',
          width: '100%',
          boxShadow: '0 4px 12px rgba(27, 157, 243, 0.2)'
        }}
      >
        <div style={{ fontSize: '18px', color: '#1b9df3', marginBottom: '10px', fontWeight: 'bold' }}>
          📢 Google AdSense Ad
        </div>
        <div style={{ fontSize: '14px', color: '#333', marginBottom: '8px' }}>
          ✅ Displaying on localhost:3000
        </div>
        <div style={{ fontSize: '12px', color: '#666', marginBottom: '12px' }}>
          {showPlaceholder ? '🔄 Loading ad...' : '✅ Ad initialized'}
        </div>
        <div style={{ 
          fontSize: '11px', 
          color: '#888', 
          marginTop: '8px',
          padding: '8px',
          backgroundColor: '#fff',
          borderRadius: '6px',
          border: '1px solid #ddd'
        }}>
          <div>Ad Slot: <strong>{adSlot}</strong></div>
          <div>Client ID: <strong>ca-pub-9366739988538654</strong></div>
          <div style={{ marginTop: '4px', fontSize: '10px', color: '#aaa' }}>
            ℹ️ Note: Real ads only display on production domains
          </div>
        </div>
      </div>
      
      {/* testingads */}
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ 
          display: 'block',
          minWidth: '320px',
          minHeight: '100px',
          width: '100%',
          maxWidth: '728px',
          position: 'relative',
          zIndex: 2
        }}
        data-ad-client="ca-pub-9366739988538654"
        data-ad-slot={adSlot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
};

export default AdSense;

