# HubSpot Integration Setup Guide

## Overview
This integration submits form data to both your existing email system and HubSpot CRM using a dual-submission approach.

## Architecture
- **Option 1 (Current)**: Dual Submission
  - Frontend submits to `/api/contact` (existing email system)
  - Frontend also submits to `/api/hubspot/submit-lead` (HubSpot)
  - Non-blocking: Form succeeds even if HubSpot fails
  - Clean separation of concerns

## Setup Instructions

### Step 1: Choose HubSpot Integration Method

#### Method A: HubSpot Forms API (Simpler - Recommended for Start)
**Required Environment Variables:**
```env
HUBSPOT_PORTAL_ID=your_portal_id
HUBSPOT_FORM_GUID=your_form_guid
```

**How to get these:**
1. Log in to HubSpot
2. Go to Marketing → Lead Capture → Forms
3. Create a new form or select existing one
4. Get Portal ID from your account settings
5. Get Form GUID from the form URL or embed code

**Pros:**
- No SDK installation needed
- Simple HTTP POST
- Quick setup

**Cons:**
- Limited to form fields defined in HubSpot
- Less flexible

#### Method B: HubSpot Contacts API (More Flexible)
**Required Environment Variable:**
```env
HUBSPOT_ACCESS_TOKEN=your_private_app_access_token
```

**How to get this:**
1. Log in to HubSpot
2. Go to Settings → Integrations → Private Apps
3. Create a new Private App
4. Grant permissions: `crm.objects.contacts.write`, `crm.objects.contacts.read`
5. Copy the Access Token

**Optional - For Better Performance:**
```bash
npm install @hubspot/api-client
```
Then uncomment the SDK code in `/src/app/api/hubspot/submit-lead/route.ts`

**Pros:**
- Full control over contact properties
- Can create custom fields
- More powerful

**Cons:**
- Requires access token management
- Slightly more complex

### Step 2: Add Environment Variables

Create or update `.env.local`:

```env
# Existing variables (keep these)
GMAIL_APP_PASSWORD=your_gmail_app_password
SMTP_TO_EMAIL=info@hboxdigital.com

# HubSpot Configuration - Choose ONE method:

# METHOD A: Forms API (easier)
HUBSPOT_PORTAL_ID=12345678
HUBSPOT_FORM_GUID=xxxx-xxxx-xxxx-xxxx

# OR

# METHOD B: Contacts API (more flexible)
HUBSPOT_ACCESS_TOKEN=pat-na1-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
```

### Step 3: Add Tracking Initializer to Root Layout

Update `src/app/layout.tsx`:

```tsx
import TrackingInitializer from "@/components/TrackingInitializer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <TrackingInitializer />
        {children}
      </body>
    </html>
  );
}
```

### Step 4: Create Custom Properties in HubSpot (Optional but Recommended)

For better tracking, create these custom properties in HubSpot:

1. Go to Settings → Properties → Contact Properties
2. Create the following custom properties:

| Property Name | Internal Name | Type | Description |
|--------------|---------------|------|-------------|
| Original Source | `original_source` | Single-line text | UTM Source or Referrer |
| UTM Campaign | `utm_campaign` | Single-line text | Marketing Campaign |
| UTM Medium | `utm_medium` | Single-line text | Traffic Medium |
| UTM Term | `utm_term` | Single-line text | Search Term |
| UTM Content | `utm_content` | Single-line text | Ad Content |
| Landing Page | `landing_page` | Single-line text | First Page Visited |
| Inquiry Notes | `inquiry_notes` | Multi-line text | Form Message |

Then update the API route to map these fields.

## How It Works

### Data Flow
1. User fills out form on website
2. Frontend captures:
   - Form data (name, email, phone, message)
   - UTM parameters from URL
   - Referrer information
   - Landing page URL
3. Frontend submits to `/api/contact` (existing system) ✅
4. Frontend also submits to `/api/hubspot/submit-lead` (HubSpot) ✅
5. HubSpot creates/updates contact with all data

### Tracking Captured
- `utm_source` - Traffic source (e.g., google, facebook)
- `utm_medium` - Medium (e.g., cpc, email, social)
- `utm_campaign` - Campaign name
- `utm_term` - Keywords (paid search)
- `utm_content` - Ad variation
- `referrer` - Where user came from
- `landing_page` - First page they landed on

### Example URL with Tracking
```
https://yoursite.com/us-mobile-app-development?utm_source=google&utm_medium=cpc&utm_campaign=mobile_app_dev&utm_term=mobile+app+development
```

## Files Created/Modified

### New Files
- `src/lib/tracking.ts` - UTM tracking utility
- `src/app/api/hubspot/submit-lead/route.ts` - HubSpot API endpoint
- `src/components/TrackingInitializer.tsx` - Tracking initialization

### Modified Files
- `src/components/modals/bookCallModal.tsx` - Added dual submission
- `src/components/ppc/ppcfrom.tsx` - Added dual submission

## Testing

### 1. Test UTM Tracking
Visit your site with UTM parameters:
```
http://localhost:3000/?utm_source=test&utm_medium=email&utm_campaign=launch
```

Open browser console and check sessionStorage:
```javascript
JSON.parse(sessionStorage.getItem('hbox_original_source'))
```

### 2. Test Form Submission (Development)
1. Fill out a form
2. Check browser console for logs:
   - "HubSpot submission completed" (success)
   - Or error messages
3. Check Network tab for API calls to `/api/hubspot/submit-lead`

### 3. Test HubSpot Integration
**For Forms API:**
1. Submit a test form
2. Go to HubSpot → Contacts
3. Search for the email you submitted
4. Verify contact was created/updated

**For Contacts API:**
1. Same as above
2. Additionally check custom properties if you created them

### 4. Test Error Handling
1. Temporarily set wrong credentials in `.env.local`
2. Submit form
3. Should still succeed (email sent) but HubSpot submission logged as failed
4. Restore correct credentials

## Troubleshooting

### Common Issues

**Issue: "HubSpot not configured" error**
- Check `.env.local` has correct variables
- Restart development server after adding env vars
- Verify variable names match exactly

**Issue: Forms API returns 404**
- Verify Portal ID and Form GUID are correct
- Check form exists and is published in HubSpot
- Ensure form accepts API submissions

**Issue: Contacts API returns 401**
- Check Access Token is correct
- Verify Private App has correct permissions
- Token might be expired - generate new one

**Issue: Contact created but fields are empty**
- Check field mapping in `route.ts`
- Verify custom properties exist in HubSpot
- Check property internal names match

**Issue: Tracking not captured**
- Verify `TrackingInitializer` is added to layout
- Check browser console for errors
- Clear sessionStorage and test again

## Monitoring

### Check HubSpot Submissions
```javascript
// In browser console after form submission
sessionStorage.getItem('hbox_original_source')
```

### Check Server Logs
```bash
# Development
npm run dev

# Look for:
# "HubSpot submission completed" (success)
# "HubSpot submission failed: ..." (error)
```

## Next Steps

1. **Set up HubSpot Workflows** (Optional)
   - Auto-assign leads to sales reps
   - Send follow-up emails
   - Create tasks

2. **Add More Forms**
   - Contact forms
   - Newsletter signups
   - Other lead capture forms

3. **Enhance Tracking**
   - Add page view tracking
   - Track button clicks
   - Track scroll depth

## Support

For issues or questions:
1. Check logs in browser console
2. Check server logs
3. Verify HubSpot credentials
4. Test with curl/Postman first
5. Review HubSpot API docs: https://developers.hubspot.com/docs/api/overview
