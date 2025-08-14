# CompAI – AI-Powered Property Comparison & Valuation Tool

Find Property Comps 10x Faster & Easier with AI. The data-driven way to calculate, compare, and close deals.

## 🚀 Features

- **AI Comp Finder** – Enter an address → Get the 5–10 most relevant comps in seconds
- **Smart Filters** – Year built, square footage, condition, sale recency
- **AI Price Estimator** – Custom ML model for fair market value prediction
- **Deal Analyzer** – ROI, rental yield, and flip margin calculations
- **Neighborhood Insights** – AI-generated summaries of market trends
- **Export Reports** – Download branded PDF comps for clients
- **Batch Search** – Upload CSV to get comps for multiple properties at once

## 🎯 Target Users

- Real estate agents & brokers
- Investors & house flippers
- Appraisers & analysts
- Serious homebuyers/sellers

## 🛠 Tech Stack

- **Frontend**: Next.js 14 + TypeScript + TailwindCSS
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL / Supabase (planned)
- **AI Models**: OpenAI GPT-4 + custom ML (planned)
- **APIs**: Zillow API, MLS Data Feed, Realtor.com API, Google Maps API (planned)
- **Hosting**: Vercel
- **UI**: Lucide React Icons, Framer Motion, Recharts
- **Forms**: React Hook Form + Zod validation

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ahmed86-star/CompAI.git
   cd CompAI
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗 Project Structure

```
CompAI/
├── app/                    # Next.js 14 App Router
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── results/           # Results page
├── components/            # Reusable components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   ├── CompSearch.tsx     # Property search
│   ├── FeatureCard.tsx    # Feature display
│   ├── PricingCard.tsx    # Pricing plans
│   └── TestimonialCard.tsx # Customer testimonials
├── public/                # Static assets
│   ├── manifest.json      # PWA manifest
│   ├── robots.txt         # SEO robots
│   └── sitemap.xml        # SEO sitemap
├── demo/                  # Static HTML demo
├── package.json           # Dependencies & scripts
├── tailwind.config.js     # TailwindCSS config
├── next.config.js         # Next.js config
├── tsconfig.json          # TypeScript config
├── vercel.json            # Vercel deployment config
└── README.md              # This file
```

## 🚀 Usage

1. **Search Properties**: Enter an address to find comparable properties
2. **Apply Filters**: Use smart filters to refine your search
3. **View Results**: See detailed property comparisons and market insights
4. **Export Reports**: Download professional comp reports for clients

## 💰 Pricing Plans

- **Free Plan**: 5 searches/month, basic data
- **Pro Plan**: Unlimited searches + full reports ($29/mo)
- **Enterprise**: API access for brokerages

## 🛠 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Environment Variables

Copy `env.example` to `.env.local` and fill in your values:

```bash
# Next.js
NEXT_PUBLIC_APP_URL=https://your-app.vercel.app

# API Keys (for future use)
# ZILLOW_API_KEY=your_zillow_api_key
# REALTOR_API_KEY=your_realtor_api_key
# GOOGLE_MAPS_API_KEY=your_google_maps_api_key
# OPENAI_API_KEY=your_openai_api_key
```

## 🚀 Deployment

### Quick Deploy to Vercel

1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

## 🗺 Roadmap

- [ ] Real API integrations (Zillow, Realtor.com)
- [ ] AI-powered price predictions
- [ ] Advanced filtering options
- [ ] PDF report generation
- [ ] Batch processing
- [ ] Mobile app
- [ ] API for developers

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the CC0-1.0 License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: [README.md](./README.md)
- **Issues**: [GitHub Issues](https://github.com/ahmed86-star/CompAI/issues)
- **Email**: programming079@gmail.com

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Vercel for seamless deployment
- TailwindCSS for beautiful styling
- All contributors and supporters

---

**CompAI** - Making real estate data-driven and AI-powered! 🏠✨
