# Book Demo Modal - Setup Guide

## Overview
A complete implementation of a "Book Demo" modal with form submission via SMTP email.

## Features
- ✅ Modern modal UI using shadcn components
- ✅ Form validation with react-hook-form
- ✅ SMTP email sending with nodemailer
- ✅ Confirmation email to user (optional)
- ✅ Thank you page redirect after submission
- ✅ Responsive design with animations

## Files Created

### 1. Modal Component
**Location:** `src/components/modals/BookDemoModal.tsx`
- Form fields: Full Name, Email, Phone, Message
- Privacy policy & terms consent checkbox
- Form validation
- Loading states

### 2. API Endpoint
**Location:** `src/app/api/book-demo/route.ts`
- Handles form submission
- Sends email via SMTP
- Optional confirmation email to user
- Error handling

### 3. Thank You Page
**Location:** `src/app/(root)/thank-you/page.tsx`
- Success confirmation
- Next steps information
- Navigation options

### 4. Environment Configuration
**Location:** `.env.example`
- SMTP configuration template
- Multiple provider examples

## Setup Instructions

### Step 1: Configure Environment Variables

Create a `.env.local` file in the root directory:

```bash
# Copy the example file
cp .env.example .env.local
```

Then edit `.env.local` with your SMTP credentials:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
SMTP_TO_EMAIL=your-email@gmail.com
SMTP_TO_EMAIL=demo-requests@hboxdigital.com
SEND_CONFIRMATION_EMAIL=true
```

### Step 2: Gmail Configuration (if using Gmail)

1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Navigate to **Security** → **2-Step Verification**
3. Scroll to **App passwords**
4. Generate a new app password
5. Use this password in `SMTP_PASSWORD`

### Step 3: Test the Implementation

1. Start the development server:
```bash
pnpm dev
```

2. Navigate to the homepage
3. Click the "Book a demo" button
4. Fill out and submit the form
5. Verify:
   - Email received at `SMTP_TO_EMAIL` address
   - Confirmation email sent to user (if enabled)
   - Redirect to `/thank-you` page

## Alternative SMTP Providers

### SendGrid
```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASSWORD=your-sendgrid-api-key
```

### Mailgun
```env
SMTP_HOST=smtp.mailgun.org
SMTP_PORT=587
SMTP_USER=your-mailgun-username
SMTP_PASSWORD=your-mailgun-password
```

### Outlook/Office 365
```env
SMTP_HOST=smtp.office365.com
SMTP_PORT=587
SMTP_USER=your-email@outlook.com
SMTP_PASSWORD=your-password
```

## Customization

### Modal Styling
Edit `src/components/modals/BookDemoModal.tsx`:
- Colors: Search for `#53B033` and `#8CEE54`
- Spacing: Modify Tailwind classes
- Fields: Add/remove form fields as needed

### Email Template
Edit `src/app/api/book-demo/route.ts`:
- Modify the `mailOptions.html` content
- Change subject line
- Update email styling

### Thank You Page
Edit `src/app/(root)/thank-you/page.tsx`:
- Customize messaging
- Add tracking code
- Modify action buttons

## Troubleshooting

### Email Not Sending

1. **Check SMTP credentials**: Verify all environment variables are set correctly
2. **Gmail blocks**: Make sure 2-Step Verification is enabled and you're using an App Password
3. **Firewall**: Ensure port 587 or 465 is not blocked
4. **Check logs**: Look at terminal for error messages

### Modal Not Opening

1. **Check imports**: Verify BookDemoModal is imported in HeroSection
2. **State management**: Ensure `isModalOpen` state is properly set
3. **Dialog component**: Verify shadcn Dialog component is installed

### Form Validation Issues

1. **Check react-hook-form**: Ensure package is installed
2. **Field names**: Verify all field names match the form schema
3. **Console errors**: Check browser console for validation errors

## Security Notes

- ✅ `.env.local` is in `.gitignore` (never commit credentials)
- ✅ API route is server-side only
- ✅ Form validation on both client and server
- ✅ Email sanitization in API endpoint

## Support

For issues or questions, contact the development team or create an issue in the project repository.
