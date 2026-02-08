# Deployment Guide

## Deploy to Vercel (Recommended)

### Method 1: Vercel Dashboard
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"

### Method 2: Vercel CLI
```bash
npm install -g vercel
cd portfolio
vercel
```

## Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

3. Deploy:
```bash
netlify deploy --prod
```

Build settings:
- Build command: `npm run build`
- Publish directory: `.next`

## Deploy to AWS Amplify

1. Push code to GitHub
2. Go to AWS Amplify Console
3. Connect your repository
4. Build settings:
   - Build command: `npm run build`
   - Output directory: `.next`
5. Deploy

## Environment Variables

If you add environment variables, make sure to set them in your deployment platform:

- Vercel: Project Settings → Environment Variables
- Netlify: Site Settings → Build & Deploy → Environment
- AWS Amplify: App Settings → Environment Variables

## Custom Domain

### Vercel
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

### Netlify
1. Go to Domain Settings
2. Add custom domain
3. Configure DNS

## Performance Optimization

The site is already optimized with:
- ✅ Code splitting
- ✅ Image optimization
- ✅ Font optimization
- ✅ CSS minification
- ✅ Tree shaking

## Post-Deployment Checklist

- [ ] Test all sections scroll smoothly
- [ ] Verify contact form works
- [ ] Check mobile responsiveness
- [ ] Test all external links
- [ ] Verify SEO meta tags
- [ ] Test accessibility with keyboard navigation
- [ ] Check performance with Lighthouse
- [ ] Verify animations work on all devices

## Monitoring

Consider adding:
- Google Analytics for traffic monitoring
- Sentry for error tracking
- Vercel Analytics for performance insights
