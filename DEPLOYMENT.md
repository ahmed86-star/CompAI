# Deploying CompAI to Vercel

## Quick Deploy (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/compai.git
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect Next.js
   - Click "Deploy"

## Manual Deploy with Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

## Environment Variables

After deployment, add these environment variables in your Vercel dashboard:

- `NEXT_PUBLIC_APP_URL`: Your Vercel app URL
- (Future) `ZILLOW_API_KEY`: For real property data
- (Future) `REALTOR_API_KEY`: For MLS data
- (Future) `GOOGLE_MAPS_API_KEY`: For maps integration
- (Future) `OPENAI_API_KEY`: For AI features

## Custom Domain

1. Go to your Vercel project dashboard
2. Navigate to "Settings" → "Domains"
3. Add your custom domain
4. Update DNS records as instructed

## Performance Optimization

The app is already optimized with:
- ✅ Next.js 14 with App Router
- ✅ TailwindCSS for optimized CSS
- ✅ Image optimization
- ✅ API routes for backend functionality
- ✅ SEO meta tags
- ✅ PWA manifest

## Post-Deployment Checklist

- [ ] Test all features work correctly
- [ ] Update `sitemap.xml` with your actual domain
- [ ] Update `robots.txt` with your actual domain
- [ ] Test mobile responsiveness
- [ ] Set up analytics (Google Analytics, etc.)
- [ ] Configure error monitoring (Sentry, etc.)

## Troubleshooting

**Build Errors:**
- Check that all dependencies are in `package.json`
- Ensure Node.js version is 18+ in Vercel settings

**API Errors:**
- Verify environment variables are set correctly
- Check API route paths match your code

**Performance Issues:**
- Enable Vercel Analytics
- Use Next.js Image component for images
- Implement proper caching headers
