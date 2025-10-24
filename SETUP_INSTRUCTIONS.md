# InteriorX - Home Interior Design Landing Page

A beautiful, high-converting landing page for home interior design services targeting Hyderabad.

## Features

- Modern, responsive design inspired by Livspace
- Lead capture form with Firebase Firestore integration
- Automatic email notifications for new leads
- WhatsApp and Call-to-Action buttons
- Portfolio gallery with hover effects
- Customer testimonials section
- Smooth scroll navigation

## Setup Instructions

### 1. Firebase Configuration

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project (or use existing one)
3. Enable Firestore Database:
   - Click on "Firestore Database" in the left sidebar
   - Click "Create database"
   - Start in production mode
   - Select a region close to your users (e.g., asia-south1 for India)

4. Get your Firebase configuration:
   - Go to Project Settings (gear icon)
   - Scroll down to "Your apps"
   - Click on the web icon (</>)
   - Register your app
   - Copy the configuration values

5. Update the `.env` file with your Firebase credentials:
```env
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
VITE_FIREBASE_APP_ID=your-app-id
```

### 2. Email Notifications Setup

1. **Create Gmail App Password:**
   - Go to your Google Account settings
   - Navigate to Security > 2-Step Verification (enable if not already)
   - Scroll down to "App passwords"
   - Generate a new app password for "Mail"
   - Copy the 16-character password

2. **Update Firebase Cloud Function:**
   - Open `functions/index.js`
   - Replace `YOUR_APP_PASSWORD` with your Gmail app password
   - Update the email address if needed

3. **Deploy Firebase Functions:**
```bash
cd functions
npm install
cd ..
firebase login
firebase init functions  # Select existing project
firebase deploy --only functions
```

### 3. Update Firebase Project ID

1. Open `.firebaserc`
2. Replace `your-project-id` with your actual Firebase project ID

### 4. Install Dependencies

```bash
npm install
```

### 5. Run Development Server

```bash
npm run dev
```

### 6. Build for Production

```bash
npm run build
```

### 7. Deploy to Firebase Hosting (Optional)

```bash
firebase deploy --only hosting
```

## Customization

### Change Phone Number
- Update phone number in `src/App.tsx` (search for `+919154658651`)
- Update WhatsApp link in the CTA section

### Change Email Address
- Update email in `functions/index.js`
- Update email in footer section of `src/App.tsx`

### Modify Colors
- Primary color is `#D94C50` (defined throughout the app)
- You can search and replace to change the accent color

### Update Images
- All images are from Pexels (free stock photos)
- Replace image URLs in `src/App.tsx` with your own project photos

### Modify Content
- Update company name, address, and descriptions in `src/App.tsx`
- Customize testimonials and portfolio projects

## Tech Stack

- React + TypeScript
- Tailwind CSS
- Firebase (Firestore + Cloud Functions)
- Vite
- Lucide React (for icons)

## Form Data Structure

Leads are stored in Firestore under the collection `leads_hyderabad` with the following structure:

```javascript
{
  name: string,
  phone: string,
  email: string,
  city: string,
  projectType: string,
  timestamp: string,
  source: 'landing_page'
}
```

## Contact

For support or questions, contact: pavankalyanchowdary9154@gmail.com
