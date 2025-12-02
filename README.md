# Block08 Security Audits Website

Enterprise-grade smart contract security audits and blockchain auditing services. A specialized division of Route07 Information Technology.

![Block08 Security](./public/logo.png)

## 🔒 About Block08

Block08 Security Audits is a specialized security division of Route07 Information Technology, focused exclusively on blockchain security and smart contract auditing services. Based in Muscat, Oman, we serve Web3 projects worldwide.

## 🚀 Services

- **Smart Contract Security Audits** - Comprehensive security audits for Solidity and EVM-based contracts
- **Formal Verification** - Mathematical proof of smart contract correctness
- **Security Monitoring** - 24/7 on-chain monitoring for deployed contracts
- **Incident Response** - Emergency response for security breaches
- **Smart Contract Development** - Secure-by-design contract development
- **Security Training** - Security workshops for Web3 development teams

## 💻 Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS 3.4
- **Code Quality**: ESLint + Prettier
- **Deployment**: GitHub Pages with GitHub Actions

## 📦 Installation

### Prerequisites

- Node.js 20+ (LTS)
- npm or yarn

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/yourusername/block08-security-website.git
cd block08-security-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## 📤 Deployment

### GitHub Pages Deployment

This website is configured for automatic deployment to GitHub Pages using GitHub Actions.

#### Setup Instructions:

1. **Create GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/block08-security-website.git
   git push -u origin main
   ```

2. **Configure GitHub Pages**
   - Go to repository **Settings → Pages**
   - Set Source to **GitHub Actions**
   - The workflow will automatically deploy on push to `main` branch

3. **Custom Domain Setup** (Optional)
   - Add your domain in **Settings → Pages → Custom domain**
   - Configure DNS records at your domain registrar:
     ```
     Type: A    Name: @    Value: 185.199.108.153
     Type: A    Name: @    Value: 185.199.109.153
     Type: A    Name: @    Value: 185.199.110.153
     Type: A    Name: @    Value: 185.199.111.153
     ```
   - Update `public/CNAME` with your domain name
   - Enable **Enforce HTTPS** after DNS verification

4. **Automatic Deployment**
   - Every push to `main` branch triggers automatic build and deployment
   - Check deployment status in **Actions** tab

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  primary: {
    // Your custom color palette
  },
  dark: {
    bg: '#0a0e1a',
    card: '#1a1f2e',
    border: '#2a2f3e',
  }
}
```

### Content

Update component files in `src/components/` to modify content:

- `Hero.tsx` - Hero section
- `Services.tsx` - Services offerings
- `About.tsx` - Company information
- `Contact.tsx` - Contact form and information

### Contact Form

The contact form uses `mailto:` integration. Update the email address in `src/components/Contact.tsx`:

```typescript
const mailtoLink = `mailto:your-email@domain.com?subject=...`
```

## 📁 Project Structure

```
block08-security-website/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment
├── public/
│   ├── CNAME                   # Custom domain configuration
│   ├── favicon.svg
│   └── logo.png
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Highlights.tsx
│   │   ├── Services.tsx
│   │   ├── Process.tsx
│   │   ├── Experience.tsx
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── vite.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

## 🔍 SEO

The website includes comprehensive meta tags for SEO and social media:

- Open Graph tags for Facebook
- Twitter Card tags
- Structured data for search engines
- Optimized meta descriptions and keywords

## ♿ Accessibility

- WCAG AA compliant
- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly

## 📊 Performance

- Lighthouse score: 90+
- Code splitting with Vite
- Optimized assets and images
- Minimal dependencies

## 📄 License

© 2025 Block08 Security Audits. A division of Route07 Information Technology. All rights reserved.

## 📞 Contact

- **Email**: security@block08.com
- **Emergency Hotline**: +968 XXXX XXXX (24/7)
- **Location**: Muscat, Oman
- **Website**: [block08security.com](https://block08security.com)

## 🤝 About Route07

Block08 is a specialized security division of [Route07 Information Technology](https://route07.com), a leading IT services company based in Muscat, Oman.

---

Built with ❤️ by Route07 Information Technology

