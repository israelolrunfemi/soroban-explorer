# Setup Guide for Soroban Explorer

This guide will help you set up and deploy your Soroban Explorer project.

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

This will install all required packages including:
- React & React DOM
- TypeScript
- Vite (build tool)
- Tailwind CSS
- Stellar SDK
- Lucide React (icons)

### 2. Run Development Server

```bash
npm run dev
```

Your app will be available at `http://localhost:3000`

### 3. Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

## Deployment Options

### Option 1: GitHub Pages (Free)

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/soroban-explorer.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Source: Deploy from GitHub Actions
   - The workflow in `.github/workflows/deploy.yml` will automatically deploy

3. **Your site will be live at**: `https://yourusername.github.io/soroban-explorer/`

### Option 2: Vercel (Recommended - Free)

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. Follow the prompts, and your site will be live in seconds!

### Option 3: Netlify (Free)

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Deploy**
   ```bash
   netlify deploy --prod
   ```

3. Follow the prompts to link your site.

### Option 4: Traditional Hosting

1. Build the project: `npm run build`
2. Upload the contents of the `dist` folder to your web server
3. Configure your server to serve `index.html` for all routes

## Customization

### Update Repository Links

Replace these placeholders in the code:
- `yourusername` in App.tsx (GitHub link)
- `yourusername` in README.md
- Update author information in package.json

### Change Styling

- Edit `tailwind.config.js` to customize colors and themes
- Modify `src/index.css` for global styles
- Component styles are in individual `.tsx` files

### Add Your Own Features

The project structure is modular:
- Add new components in `src/components/`
- Create new pages or features
- Integrate real Stellar API calls

## Connecting to Real Stellar Network

To connect to the actual Stellar network:

1. **Install additional dependencies if needed**
   ```bash
   npm install @stellar/stellar-sdk
   ```

2. **Update the contract explorer to use real data**
   
   In `src/components/ContractExplorer.tsx`, replace mock data with:
   ```typescript
   import * as StellarSdk from '@stellar/stellar-sdk';
   
   const server = new StellarSdk.Horizon.Server(
     network === 'testnet' 
       ? 'https://horizon-testnet.stellar.org'
       : 'https://horizon.stellar.org'
   );
   ```

3. **Fetch real contract data**
   ```typescript
   const contract = await server.getContract(contractId);
   ```

## Environment Variables

Create a `.env` file for sensitive data:

```env
VITE_STELLAR_NETWORK=testnet
VITE_API_KEY=your_api_key_here
```

Access in code:
```typescript
const network = import.meta.env.VITE_STELLAR_NETWORK;
```

## Troubleshooting

### Port already in use
```bash
# Use a different port
npm run dev -- --port 3001
```

### Build errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Type errors
```bash
# Check TypeScript configuration
npx tsc --noEmit
```

## Next Steps

1. ✅ Deploy your project
2. ✅ Add it to your GitHub profile
3. ✅ Apply to Stellar Drip Wave
4. ✅ Share with the Stellar community
5. ✅ Keep improving and adding features

## Support

- [Stellar Documentation](https://developers.stellar.org)
- [Soroban Docs](https://soroban.stellar.org)
- [Stellar Discord](https://discord.gg/stellar)

Good luck with your Drip Wave application! 🚀
