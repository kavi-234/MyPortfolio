# EmailJS Setup Instructions

## Step 1: Get EmailJS Credentials
1. Go to https://www.emailjs.com/
2. Create account and log in
3. Add Email Service (Gmail recommended)
4. Create Email Template with these variables:
   - {{from_name}}
   - {{from_email}} 
   - {{message}}
5. Get your Service ID, Template ID, and Public Key

## Step 2: Update ContactSection.js
Replace these placeholders in the handleSubmit function:
- 'YOUR_SERVICE_ID' → Your actual Service ID
- 'YOUR_TEMPLATE_ID' → Your actual Template ID  
- 'YOUR_PUBLIC_KEY' → Your actual Public Key

## Step 3: Test
After updating the IDs, test the contact form to ensure emails are delivered to prabuddhiahk.22@uom.lk

## Alternative: Use Formspree
If you prefer Formspree (simpler setup):
1. Go to https://formspree.io/
2. Create account
3. Get your form endpoint
4. Replace EmailJS code with Formspree endpoint

Let me know if you need help with either approach!