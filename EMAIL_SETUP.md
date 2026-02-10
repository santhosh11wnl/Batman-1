# Email Setup Instructions

## Using Resend (Free - 100 emails/day)

1. **Sign up for Resend**:
   - Go to https://resend.com/signup
   - Sign up with your email (no credit card required)

2. **Get API Key**:
   - After signup, go to https://resend.com/api-keys
   - Click "Create API Key"
   - Copy the API key

3. **Add API Key to Project**:
   - Open `.env.local` file in the portfolio folder
   - Replace `your_resend_api_key_here` with your actual API key:
   ```
   RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxx
   ```

4. **Restart Dev Server**:
   ```bash
   npm run dev
   ```

5. **Test the Form**:
   - Go to the Contact section
   - Fill in the form and submit
   - You should receive an email at ijazahamed.cse@gmail.com

## Notes

- Free tier: 100 emails/day, 3,000/month
- No credit card required
- Emails sent from: onboarding@resend.dev
- Reply-to will be set to the sender's email
- For production, verify your domain for custom sender email

## Troubleshooting

If emails don't arrive:
1. Check spam folder
2. Verify API key is correct in `.env.local`
3. Check browser console for errors
4. Restart the dev server after adding API key
