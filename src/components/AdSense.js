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

  // Ensure ad element has dimensions on mount and after render
  useEffect(() => {
    const ensureDimensions = () => {
      if (adRef.current) {
        const element = adRef.current;
        // Check if element is in DOM
        if (!document.body.contains(element)) {
          console.warn('⚠️ AdSense WARNING - Element not in DOM yet');
          return;
        }
        
        // Force dimensions immediately
        element.style.setProperty('min-height', '100px', 'important');
        element.style.setProperty('min-width', '320px', 'important');
        element.style.setProperty('height', '100px', 'important');
        element.style.setProperty('width', '100%', 'important');
        element.style.setProperty('display', 'block', 'important');
        element.style.setProperty('visibility', 'visible', 'important');
        element.style.setProperty('opacity', '1', 'important');
        
        // Also ensure container
        const container = element.closest('#google-adsense-container');
        if (container) {
          container.style.setProperty('min-height', '100px', 'important');
          container.style.setProperty('width', '100%', 'important');
        }
        
        console.log('🔧 AdSense FIX - Dimensions set on mount', {
          offsetWidth: element.offsetWidth,
          offsetHeight: element.offsetHeight,
          inDOM: document.body.contains(element)
        });
      }
    };
    
    // Run immediately
    ensureDimensions();
    
    // Also run after a short delay to catch any late renders
    const timer = setTimeout(ensureDimensions, 100);
    
    return () => clearTimeout(timer);
  }, []);

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
        console.log('✅ AdSense STATUS - Script already exists in DOM');
        // Check if adsbygoogle is available
        if (window.adsbygoogle && typeof window.adsbygoogle.loaded === 'boolean') {
          console.log('✅ AdSense STATUS - adsbygoogle API is loaded and ready', {
            loaded: window.adsbygoogle.loaded,
            length: window.adsbygoogle.length
          });
        } else {
          console.warn('⚠️ AdSense WARNING - Script exists but adsbygoogle API not ready yet');
        }
        return Promise.resolve();
      }

      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9366739988538654';
        script.async = true;
        script.crossOrigin = 'anonymous';
        script.onload = () => {
          console.log('✅ AdSense STATUS - Script loaded successfully', {
            adsbygoogleAvailable: !!window.adsbygoogle,
            adsbygoogleLoaded: window.adsbygoogle?.loaded
          });
          resolve();
        };
        script.onerror = () => {
          console.error('❌ AdSense ERROR - Failed to load AdSense script');
          reject(new Error('Failed to load AdSense script'));
        };
        document.head.appendChild(script);
        console.log('📤 AdSense STATUS - Script tag added to DOM, waiting for load...');
      });
    };

    // Function to check if ad has loaded
    const checkAdLoaded = () => {
      if (adRef.current) {
        const adElement = adRef.current;
        
        // Check for AdSense-specific attributes and classes
        const hasAdSenseClass = adElement.classList.contains('adsbygoogle');
        const hasAdClient = adElement.getAttribute('data-ad-client');
        const hasAdSlot = adElement.getAttribute('data-ad-slot');
        
        // Check if ad has content (not just empty)
        const hasContent = adElement.children.length > 0 || 
                          adElement.innerHTML.trim().length > 0 ||
                          adElement.offsetHeight > 50;
        
        // Check for iframe (ads are usually in iframes)
        const hasIframe = adElement.querySelector('iframe');
        const iframeSrc = hasIframe ? hasIframe.src : null;
        
        // Check visibility
        const rect = adElement.getBoundingClientRect();
        const isVisible = rect.width > 0 && rect.height > 0;
        const isInViewport = rect.top >= 0 && rect.left >= 0 && 
                            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                            rect.right <= (window.innerWidth || document.documentElement.clientWidth);
        
        const adDetails = {
          hasContent,
          childrenCount: adElement.children.length,
          innerHTMLLength: adElement.innerHTML.trim().length,
          offsetHeight: adElement.offsetHeight,
          offsetWidth: adElement.offsetWidth,
          hasAdSenseClass,
          hasAdClient,
          hasAdSlot,
          hasIframe: !!hasIframe,
          iframeSrc,
          isVisible,
          isInViewport,
          boundingRect: {
            top: rect.top,
            left: rect.left,
            width: rect.width,
            height: rect.height
          },
          hostname,
          computedStyle: {
            display: window.getComputedStyle(adElement).display,
            visibility: window.getComputedStyle(adElement).visibility,
            opacity: window.getComputedStyle(adElement).opacity
          }
        };
        
        // Check for common AdSense issues
        const issues = [];
        if (!isVisible) issues.push('Ad element has zero dimensions');
        if (!isInViewport) issues.push('Ad element not in viewport');
        if (adElement.offsetHeight < 50) issues.push('Ad element too small (min 50px required)');
        if (!hasIframe && !hasContent) issues.push('No iframe or content detected');
        
        if (hasContent || hasIframe) {
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
          if (issues.length > 0) {
            console.warn('⚠️ AdSense WARNING - Potential issues detected:', issues);
          }
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
          // Function to initialize the ad
          const initializeAd = () => {
            // Small delay to ensure everything is ready
            setTimeout(() => {
            try {
              // Check if adsbygoogle is ready
              if (!window.adsbygoogle) {
                console.warn('⚠️ AdSense WARNING - window.adsbygoogle not available, creating array');
                window.adsbygoogle = [];
              }
              
              // Push empty config (AdSense reads from data attributes)
              (window.adsbygoogle = window.adsbygoogle || []).push({});
              pushedRef.current = true;
              
              // Try to manually request ad fill if API is available
              if (window.adsbygoogle && window.adsbygoogle.loaded === true && adRef.current) {
                try {
                  // Request ad fill manually
                  if (typeof window.adsbygoogle.requestNonPersonalizedAds === 'function') {
                    console.log('🔄 AdSense STATUS - Requesting non-personalized ads...');
                  }
                } catch (e) {
                  console.warn('⚠️ AdSense WARNING - Could not manually request ads:', e);
                }
              }
              
              const location = isLocalhost3000Check ? 'localhost:3000' : (isProductionCheck ? 'production' : hostname);
              console.log(`✅ AdSense STATUS - Ad initialized successfully on ${location}`, {
                adSlot,
                client: 'ca-pub-9366739988538654',
                pageLocation: 'Home Page - Middle Section (after stats cards, before testimonials)',
                host: window.location.host,
                domain: hostname,
                adsbygoogleAvailable: !!window.adsbygoogle,
                adsbygoogleLength: window.adsbygoogle?.length || 0,
                adsbygoogleLoaded: window.adsbygoogle?.loaded,
                adElementReady: !!adRef.current,
                adElementVisible: adRef.current ? (adRef.current.offsetWidth > 0 && adRef.current.offsetHeight > 0) : false
              });
              
              // Check for AdSense errors in console (they might appear later)
              console.log('💡 AdSense TIP - Check browser console for any Google AdSense errors');
              console.log('💡 AdSense TIP - Verify domain is approved in AdSense account');
              console.log('💡 AdSense TIP - Disable ad blockers to test');
              
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
                console.log('🔍 AdSense CHECK - Checking ad status after 10 seconds...');
                checkAdLoaded();
              }, 10000);
              setTimeout(() => {
                console.log('🔍 AdSense CHECK - Final check after 15 seconds...');
                checkAdLoaded();
              }, 15000);
            } catch (err) {
              console.error('❌ AdSense ERROR - Error pushing to adsbygoogle:', err);
            }
          }, 100);
          };
          
          // Verify ad element attributes before pushing
          const adElement = adRef.current;
          
          // Check if element has dimensions - AdSense requires visible element
          const hasDimensions = adElement.offsetWidth > 0 && adElement.offsetHeight > 0;
          
          console.log('🔍 AdSense CHECK - Verifying ad element before initialization', {
            hasAdClient: !!adElement.getAttribute('data-ad-client'),
            hasAdSlot: !!adElement.getAttribute('data-ad-slot'),
            adClient: adElement.getAttribute('data-ad-client'),
            adSlot: adElement.getAttribute('data-ad-slot'),
            className: adElement.className,
            isVisible: hasDimensions,
            offsetWidth: adElement.offsetWidth,
            offsetHeight: adElement.offsetHeight,
            computedStyle: {
              display: window.getComputedStyle(adElement).display,
              visibility: window.getComputedStyle(adElement).visibility,
              width: window.getComputedStyle(adElement).width,
              height: window.getComputedStyle(adElement).height
            }
          });
          
          // If element has no dimensions, wait a bit more and check again
          if (!hasDimensions) {
            console.warn('⚠️ AdSense WARNING - Ad element has zero dimensions, waiting for layout...');
            // Wait for next frame to ensure layout is complete
            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                if (adRef.current && adRef.current.offsetWidth > 0 && adRef.current.offsetHeight > 0) {
                  console.log('✅ AdSense STATUS - Ad element now has dimensions, proceeding with initialization');
                  initializeAd();
                } else {
                  console.error('❌ AdSense ERROR - Ad element still has zero dimensions after waiting.');
                  // Try to force dimensions aggressively
                  if (adRef.current) {
                    const element = adRef.current;
                    // Use setProperty with important flag
                    element.style.setProperty('min-height', '100px', 'important');
                    element.style.setProperty('min-width', '320px', 'important');
                    element.style.setProperty('height', '100px', 'important');
                    element.style.setProperty('width', '100%', 'important');
                    element.style.setProperty('display', 'block', 'important');
                    element.style.setProperty('visibility', 'visible', 'important');
                    element.style.setProperty('opacity', '1', 'important');
                    
                    // Also ensure parent container has dimensions
                    const container = element.closest('#google-adsense-container');
                    if (container) {
                      container.style.setProperty('min-height', '100px', 'important');
                      container.style.setProperty('width', '100%', 'important');
                      container.style.setProperty('display', 'flex', 'important');
                    }
                    
                    console.log('🔧 AdSense FIX - Applied explicit dimensions with !important', {
                      elementDimensions: {
                        offsetWidth: element.offsetWidth,
                        offsetHeight: element.offsetHeight,
                        computedWidth: window.getComputedStyle(element).width,
                        computedHeight: window.getComputedStyle(element).height
                      },
                      containerDimensions: container ? {
                        offsetWidth: container.offsetWidth,
                        offsetHeight: container.offsetHeight
                      } : 'no container found'
                    });
                    
                    // Wait a bit more and check again
                    setTimeout(() => {
                      if (element.offsetWidth > 0 && element.offsetHeight > 0) {
                        console.log('✅ AdSense STATUS - Element now has dimensions, initializing...');
                        initializeAd();
                      } else {
                        console.error('❌ AdSense ERROR - Element still has zero dimensions after force fix. Proceeding anyway...');
                        initializeAd(); // Try anyway
                      }
                    }, 200);
                  }
                }
              });
            });
            return;
          }
          
          // Element has dimensions, proceed with initialization
          initializeAd();
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
        height: 'auto',
        margin: '2rem 0',
        padding: '1rem',
        width: '100%',
        maxWidth: '100%',
        position: 'relative',
        overflow: 'visible',
        visibility: 'visible'
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
      
      {/* Show placeholder on production only while loading - but don't block ad element */}
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
            backgroundColor: 'transparent',
            padding: '20px',
            textAlign: 'center',
            zIndex: 1,
            pointerEvents: 'none',
            minHeight: '100px',
            minWidth: '320px',
            maxWidth: '728px',
            width: '100%'
          }}
        >
          <div style={{ fontSize: '12px', color: '#999', backgroundColor: 'rgba(249, 249, 249, 0.8)', padding: '8px', borderRadius: '4px' }}>
            Loading ad...
          </div>
        </div>
      )}
      
      {/* AdSense ad unit */}
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ 
          display: 'block',
          minWidth: '320px',
          minHeight: '100px',
          width: '100%',
          maxWidth: '728px',
          height: '100px',
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          visibility: 'visible',
          opacity: 1,
          overflow: 'visible',
          boxSizing: 'border-box'
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

