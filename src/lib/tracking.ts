/**
 * Utility for capturing and managing UTM parameters and traffic source data
 */

export interface TrackingData {
  utm_source?: string | null;
  utm_medium?: string | null;
  utm_campaign?: string | null;
  utm_term?: string | null;
  utm_content?: string | null;
  referrer?: string;
  landing_page?: string;
  user_agent?: string;
  timestamp?: string;
  gad_source?: string | null;
  gad_campaignid?: string | null;
}

const STORAGE_KEY = 'hbox_original_source';
const SESSION_DURATION = 30 * 60 * 1000; // 30 minutes

/**
 * Capture UTM parameters and original traffic source
 */
export function captureTrackingData(): TrackingData {
  if (typeof window === 'undefined') return {};

  const urlParams = new URLSearchParams(window.location.search);
  
  const trackingData: TrackingData = {
    utm_source: urlParams.get('utm_source'),
    utm_medium: urlParams.get('utm_medium'),
    utm_campaign: urlParams.get('utm_campaign'),
    utm_term: urlParams.get('utm_term'),
    utm_content: urlParams.get('utm_content'),
    referrer: document.referrer || 'direct',
    landing_page: window.location.href,
    user_agent: navigator.userAgent,
    timestamp: new Date().toISOString(),
    gad_source: urlParams.get('gad_source'),
    gad_campaignid: urlParams.get('gad_campaignid'),
  };

  return trackingData;
}

/**
 * Store tracking data in sessionStorage
 */
export function storeTrackingData(data: TrackingData): void {
  if (typeof window === 'undefined') return;

  try {
    const storageData = {
      ...data,
      storedAt: Date.now(),
    };
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(storageData));
  } catch (error) {
    console.error('Error storing tracking data:', error);
  }
}

/**
 * Get stored tracking data from sessionStorage
 */
export function getStoredTrackingData(): TrackingData | null {
  if (typeof window === 'undefined') return null;

  try {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (!stored) return null;

    const data = JSON.parse(stored);
    const storedAt = data.storedAt || 0;
    
    // Check if data is still valid (within session duration)
    if (Date.now() - storedAt > SESSION_DURATION) {
      sessionStorage.removeItem(STORAGE_KEY);
      return null;
    }

    return data;
  } catch (error) {
    console.error('Error retrieving tracking data:', error);
    return null;
  }
}

/**
 * Get tracking data - either from storage or capture new
 */
export function getTrackingData(): TrackingData {
  const captured = captureTrackingData();
  storeTrackingData(captured);
  if (captured.utm_medium && captured.utm_medium !== null || captured.gad_source && captured.gad_source !== null) return captured;

  const stored = getStoredTrackingData();
  return stored || {};
}

/**
 * Format tracking data as a readable string for notes
 */
export function formatTrackingDataForNotes(data: TrackingData): string {
  const parts: string[] = [];

  if (data.utm_source) parts.push(`Source: ${data.utm_source}`);
  if (data.utm_medium) parts.push(`Medium: ${data.utm_medium}`);
  if (data.utm_campaign) parts.push(`Campaign: ${data.utm_campaign}`);
  if (data.utm_term) parts.push(`Term: ${data.utm_term}`);
  if (data.utm_content) parts.push(`Content: ${data.utm_content}`);
  if (data.referrer && data.referrer !== 'direct') parts.push(`Referrer: ${data.referrer}`);
  if (data.landing_page) parts.push(`Landing Page: ${data.landing_page}`);
  if (data.gad_source) parts.push(`GAD Source: ${data.gad_source}`);
  if (data.gad_campaignid) parts.push(`GAD Campaign ID: ${data.gad_campaignid}`);

  return parts.length > 0 ? `\n\n--- Traffic Source ---\n${parts.join('\n')}` : '';
}

/**
 * Initialize tracking on page load
 * Call this in your layout or main component
 */
export function initializeTracking(): void {
  if (typeof window === 'undefined') return;

  // Only capture if not already stored
  const existing = getStoredTrackingData();
  if (!existing) {
    const data = captureTrackingData();
    storeTrackingData(data);
  }
}
