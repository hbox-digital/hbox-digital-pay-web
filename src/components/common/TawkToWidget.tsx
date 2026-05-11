'use client';

import { useEffect } from 'react';

export default function TawkToWidget() {
    useEffect(() => {
        if (typeof window === 'undefined') return;

        // Delay Tawk.to loading to improve initial page performance
        const loadTawk = () => {
            // Initialize Tawk_API
            (window as any).Tawk_API = (window as any).Tawk_API || {};
            (window as any).Tawk_LoadStart = new Date();

        // Set custom style BEFORE widget loads
        // (window as any).Tawk_API.customStyle = {
        //     visibility: {
        //         desktop: {
        //             position: 'br',
        //             xOffset: 20,
        //             yOffset: 80  // Move up 100px from bottom
        //         },
        //         mobile: {
        //             position: 'br',
        //             xOffset: 10,
        //             yOffset: 80   // Move up 80px from bottom on mobile
        //         }
        //     }
        // };

        // Function to update widget position
        const updateWidgetPosition = () => {
            const bubbleContainer = document.getElementById('tawk-bubble-container');
            if (bubbleContainer) {
                bubbleContainer.style.setProperty('bottom', '100px', 'important');
                console.log('✅ Tawk.to widget position updated to 100px from bottom');
                return true;
            }
            return false;
        };

        // Inject CSS styles
        const injectStyles = () => {
            const styleId = 'tawk-custom-position';
            if (!document.getElementById(styleId)) {
                const style = document.createElement('style');
                style.id = styleId;
                style.innerHTML = `
          /* Force Tawk.to widget position */
          div[id*="tawk"] {
            bottom: 100px !important;
          }
          
          #tawk-bubble-container {
            bottom: 100px !important;
          }
          
          .tawk-min-container {
            bottom: 100px !important;
          }
          
          [id^="tawk"] {
            bottom: 100px !important;
          }
          
          /* Mobile */
          @media (max-width: 768px) {
            div[id*="tawk"] {
              bottom: 80px !important;
            }
            
            #tawk-bubble-container {
              bottom: 80px !important;
            }
            
            .tawk-min-container {
              bottom: 80px !important;
            }
            
            [id^="tawk"] {
              bottom: 80px !important;
            }
          }
        `;
                document.head.appendChild(style);
                console.log('✅ Tawk.to custom CSS injected');
            }
        };

        // Inject styles immediately
        injectStyles();

        // MutationObserver to watch for widget appearance
        const observer = new MutationObserver((mutations) => {
            for (const mutation of mutations) {
                if (mutation.addedNodes.length) {
                    mutation.addedNodes.forEach((node) => {
                        if (node instanceof HTMLElement) {
                            // Check if this is the Tawk widget or contains it
                            if (node.id && node.id.includes('tawk')) {
                                console.log('🔍 Tawk widget element detected:', node.id);
                                updateWidgetPosition();
                            }
                            if (node.querySelector && node.querySelector('[id*="tawk"]')) {
                                console.log('🔍 Tawk widget found in subtree');
                                updateWidgetPosition();
                            }
                        }
                    });
                }
            }
        });

        // Start observing
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });

        // Tawk.to onLoad callback
        (window as any).Tawk_API.onLoad = function () {
            console.log('🎯 Tawk.to widget loaded');

            // Try multiple times to ensure position is set
            const attempts = [100, 300, 500, 1000, 2000, 3000];
            attempts.forEach(delay => {
                setTimeout(updateWidgetPosition, delay);
            });
        };

        // Load Tawk.to script with NEW widget ID
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://embed.tawk.to/67f6f4c551a7ae190c39edc3/1jc7p5dtp';
        script.charset = 'UTF-8';
        script.setAttribute('crossorigin', '*');

        const firstScript = document.getElementsByTagName('script')[0];
        if (firstScript?.parentNode) {
            firstScript.parentNode.insertBefore(script, firstScript);
        }
        }; // End of loadTawk function

        // Defer Tawk.to loading by 3 seconds for better initial page performance
        const timeoutId = setTimeout(loadTawk, 3000);

        // Cleanup
        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    return null;
}
