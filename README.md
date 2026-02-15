# Soroban Explorer

A modern, feature-rich web application for exploring and analyzing Soroban smart contracts on the Stellar network. Built with Next, TypeScript, and Tailwind CSS(The frontend of the application.

![Soroban Explorer](https://img.shields.io/badge/Stellar-Soroban-purple)
![License](https://img.shields.io/badge/license-MIT-blue)
![React](https://img.shields.io/badge/React-18.2-61dafb)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178c6)

## 🌟 Features

- **Contract Explorer**: Search and view detailed information about Soroban smart contracts
- **Network Statistics**: Real-time analytics and metrics for the Stellar network
- **Recent Contracts**: Browse recently deployed contracts with filtering options
- **Multi-Network Support**: Switch between Testnet and Mainnet
- **Modern UI**: Beautiful, responsive design with dark mode
- **Fast Performance**: Built with Vite for lightning-fast development and builds

## 🚀 Live Demo

[Coming Soon - Deploy on Vercel/Netlify]

## 📸 Screenshots

[Add screenshots of your application here]

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.2
- **Language**: TypeScript 5.0
- **Build Tool**: Vite 4.3
- **Styling**: Tailwind CSS 3.3
- **Icons**: Lucide React
- **Blockchain SDK**: Stellar SDK 12.0

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 16 or higher)
- npm or yarn package manager
- Git

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/soroban-explorer.git
   cd soroban-explorer
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   
   Navigate to `http://localhost:3000` to view the application.

## 📦 Build for Production

To create a production-ready build:

```bash
npm run build
```

The built files will be in the `dist` directory.

To preview the production build locally:

```bash
npm run preview
```

## 🌐 Deployment

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/soroban-explorer)

### Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/yourusername/soroban-explorer)

### Manual Deployment

1. Build the project: `npm run build`
2. Upload the `dist` folder to your hosting service
3. Configure your server to serve the `index.html` for all routes (for SPA routing)

## 🎯 Project Structure

```
soroban-explorer/
├── src/
│   ├── components/
│   │   ├── ContractExplorer.tsx    # Contract search and details
│   │   ├── NetworkStats.tsx         # Network statistics dashboard
│   │   └── RecentContracts.tsx      # Recently deployed contracts
│   ├── App.tsx                      # Main application component
│   ├── main.tsx                     # Application entry point
│   └── index.css                    # Global styles
├── public/                          # Static assets
├── index.html                       # HTML template
├── package.json                     # Project dependencies
├── tsconfig.json                    # TypeScript configuration
├── vite.config.ts                   # Vite configuration
├── tailwind.config.js              # Tailwind CSS configuration
└── README.md                        # Project documentation
```

## 🔑 Key Features Explained

### Contract Explorer
- Search contracts by ID
- View contract details and metadata
- See available contract functions
- Copy contract IDs to clipboard
- Direct links to Stellar Expert

### Network Statistics
- Total contracts deployed
- Transaction volumes
- Active contract metrics
- Recent network activity
- Network health monitoring

### Recent Contracts
- Browse recently deployed contracts
- Filter by contract type (Token, DeFi, NFT, DAO)
- Filter by network (Testnet/Mainnet)
- View deployer information
- Track contract call statistics

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

### Development Guidelines

- Follow the existing code style
- Write meaningful commit messages
- Add comments for complex logic
- Test your changes thoroughly
- Update documentation as needed

## 🐛 Bug Reports

If you find a bug, please create an issue with:
- A clear title and description
- Steps to reproduce the bug
- Expected behavior
- Screenshots (if applicable)
- Your environment details

## 💡 Feature Requests

Have an idea for a new feature? Open an issue with:
- A clear description of the feature
- Use cases and benefits
- Any relevant examples or mockups

## 📚 Resources

- [Stellar Documentation](https://stellar.org/developers)
- [Soroban Documentation](https://soroban.stellar.org/docs)
- [Stellar SDK Documentation](https://stellar.github.io/js-stellar-sdk/)
- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 🔮 Roadmap

- [ ] Real-time contract event monitoring
- [ ] Advanced contract interaction capabilities
- [ ] Historical data and analytics
- [ ] Contract verification system
- [ ] API for programmatic access
- [ ] Mobile application
- [ ] Integration with Stellar wallets
- [ ] Contract source code viewer

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

Your Name
- GitHub: [@yourusername](https://github.com/yourusername)
- Twitter: [@yourtwitter](https://twitter.com/yourtwitter)

## 🙏 Acknowledgments

- Stellar Development Foundation for the amazing Soroban platform
- The Stellar community for inspiration and support
- All contributors who help improve this project

## 📞 Support

If you have any questions or need help, feel free to:
- Open an issue on GitHub
- Join the [Stellar Discord](https://discord.gg/stellar)
- Check the [Stellar Stack Exchange](https://stellar.stackexchange.com/)

## ⭐ Star History

If you find this project useful, please consider giving it a star on GitHub!

---

**Built with ❤️ for the Stellar ecosystem**
