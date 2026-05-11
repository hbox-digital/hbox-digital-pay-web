"use client";

import { useEffect } from 'react';
import Script from 'next/script';

// Declare Calendly on window object
declare global {
    interface Window {
        Calendly: any;
    }
}

export default function CalendlyBadge() {
    useEffect(() => {
        if (typeof window !== 'undefined' && window.Calendly) {
            window.Calendly.initBadgeWidget({
                url: 'https://calendly.com/hboxdigital-info/30min',
                text: 'Schedule time with me',
                color: '#0069ff',
                textColor: '#ffffff',
                branding: true
            });
        }
    }, []);

    return (
        <>
            <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
            <Script
                src="https://assets.calendly.com/assets/external/widget.js"
                strategy="lazyOnload"
                onLoad={() => {
                    if (window.Calendly) {
                        window.Calendly.initBadgeWidget({
                            url: 'https://calendly.com/hboxdigital-info/30min',
                            text: 'Schedule time with me',
                            color: '#0069ff',
                            textColor: '#ffffff',
                            branding: true
                        });
                    }
                }}
            />
        </>
    );
}