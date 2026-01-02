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
  
  // Check if localhost:3000 (for testing with placeholder)
  const isLocalhost3000Initial = 
    (hostname === 'localhost' || hostname === '127.0.0.1') && 
    (port === '3000' || host === 'localhost:3000' || host === '127.0.0.1:3000');
  
  // Check if production domain
  const isProductionDomain = hostname === 'flexai024.vercel.app' || hostname.includes('vercel.app');
  
  const [isLocalhost3000, setIsLocalhost3000] = useState(isLocalhost3000Initial);
  const [isProduction, setIsProduction] = useState(isProductionDomain);

  useEffect(() => {
    // Check current domain
    const hostname = window.location.hostname;
    const port = window.location.port;
    const host = window.location.host;
    const href = window.location.href;
    
    // Check if localhost:3000 (for testing)
    const isLocalhost3000Check = 
      (hostname === 'localhost' || hostname === '127.0.0.1') && 
      (port === '3000' || host === 'localhost:3000' || host === '127.0.0.1:3000');
    
    // Check if production domain
    const isProductionCheck = hostname === 'flexai024.vercel.app' || hostname.includes('vercel.app');
    
    console.log('🔍 AdSense Debug:', {
      hostname,
      port,
      host,
      href,
      isLocalhost3000: isLocalhost3000Check,
      isProduction: isProductionCheck
    });
    
    setIsLocalhost3000(isLocalhost3000Check);
    setIsProduction(isProductionCheck);

    console.log('📊 AdSense STATUS - Component initialized', {
      domain: hostname,
      isLocalhost: isLocalhost3000Check,
      isProduction: isProductionCheck,
      adSlot,
      clientId: 'ca-pub-9366739988538654'
    });

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
          console.log('✅ AdSense STATUS - Script loaded successfully');
          resolve();
        };
        script.onerror = () => {
          console.error('❌ AdSense ERROR - Failed to load AdSense script');
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
        
        const adDetails = {
          hasContent,
          childrenCount: adElement.children.length,
          innerHTMLLength: adElement.innerHTML.trim().length,
          offsetHeight: adElement.offsetHeight,
          offsetWidth: adElement.offsetWidth,
          hostname
        };
        
        if (hasContent) {
          // Only hide placeholder on production, keep it on localhost for testing
          if (isProductionCheck) {
            setShowPlaceholder(false);
            console.log('✅ AdSense WORKING - Ad content detected on production', adDetails);
          } else {
            console.log('✅ AdSense WORKING - Ad content detected on localhost:3000 (placeholder remains for testing)', adDetails);
          }
        } else {
          const location = isLocalhost3000Check ? 'localhost:3000' : (isProductionCheck ? 'production' : hostname);
          console.log(`⏳ AdSense STATUS - Still loading on ${location}`, adDetails);
        }
      } else {
        console.warn('⚠️ AdSense STATUS - Ad element not found (adRef.current is null)');
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
              const location = isLocalhost3000Check ? 'localhost:3000' : (isProductionCheck ? 'production' : hostname);
              console.log(`✅ AdSense STATUS - Ad initialized successfully on ${location}`, {
                adSlot,
                client: 'ca-pub-9366739988538654',
                pageLocation: 'Home Page - Middle Section (after stats cards, before testimonials)',
                host: window.location.host,
                domain: hostname,
                adsbygoogleAvailable: !!window.adsbygoogle,
                adsbygoogleLength: window.adsbygoogle?.length || 0
              });
              
              // Check if ad loaded after delays
              setTimeout(() => {
                console.log('🔍 AdSense CHECK - Checking ad status after 2 seconds...');
                checkAdLoaded();
              }, 2000);
              setTimeout(() => {
                console.log('🔍 AdSense CHECK - Checking ad status after 5 seconds...');
                checkAdLoaded();
              }, 5000);
              setTimeout(() => {
                console.log('🔍 AdSense CHECK - Final check after 10 seconds...');
                checkAdLoaded();
              }, 10000);
            } catch (err) {
              console.error('❌ AdSense ERROR - Error pushing to adsbygoogle:', err);
            }
          }, 100);
        } else if (retryCountRef.current < maxRetries) {
          // Retry if element not ready yet
          retryCountRef.current++;
          setTimeout(initAdSense, 100);
        }
      } catch (err) {
        console.error('❌ AdSense ERROR - Initialization error:', err, {
          retryCount: retryCountRef.current,
          maxRetries,
          willRetry: retryCountRef.current < maxRetries
        });
        // Retry on error
        if (retryCountRef.current < maxRetries) {
          retryCountRef.current++;
          console.log(`🔄 AdSense STATUS - Retrying initialization (attempt ${retryCountRef.current}/${maxRetries})...`);
          setTimeout(initAdSense, 200);
        } else {
          console.error('❌ AdSense ERROR - Max retries reached. AdSense initialization failed.');
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
  }, [adSlot, isLocalhost3000, isProduction]);


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
      {/* Placeholder - Only show on localhost:3000, hide on production when ad loads */}
      {isLocalhost3000 && showPlaceholder && (
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
            ✅ Displaying on localhost:3000 (Testing)
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
              ℹ️ Real ads display on production: flexai024.vercel.app
            </div>
          </div>
        </div>
      )}
      
      {/* Show placeholder on production only while loading */}
      {isProduction && showPlaceholder && (
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
            backgroundColor: '#f9f9f9',
            border: '1px dashed #ccc',
            borderRadius: '8px',
            padding: '20px',
            textAlign: 'center',
            zIndex: 1,
            minHeight: '100px',
            minWidth: '320px',
            maxWidth: '728px',
            width: '100%'
          }}
        >
          <div style={{ fontSize: '12px', color: '#999' }}>
            Loading ad...
          </div>
        </div>
      )}
      
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

