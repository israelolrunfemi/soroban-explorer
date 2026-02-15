'use client'

import { useState } from 'react'
import { 
  Search, Activity, TrendingUp, Code, Github, 
  ArrowRight, Zap, Shield, Sparkles, Globe, 
  Terminal, Layers, ChevronRight
} from 'lucide-react'
import ContractExplorer from '@/components/ContractExplorer'
import NetworkStats from '@/components/NetworkStats'
import RecentContracts from '@/components/RecentContracts'

export default function Home() {
  const [showApp, setShowApp] = useState(false)
  const [activeTab, setActiveTab] = useState<'explorer' | 'stats' | 'recent'>('explorer')

  if (showApp) {
    return (
      <div className="min-h-screen">
        {/* App Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-web3-cyan to-web3-purple rounded-xl flex items-center justify-center shadow-glow-blue">
                  <Code className="w-6 h-6" />
                </div>
                <div>
                  <h1 className="text-xl font-bold gradient-text">Soroban Explorer</h1>
                  <p className="text-xs text-gray-400">Premium Contract Analytics</p>
                </div>
              </div>
              <button
                onClick={() => setShowApp(false)}
                className="btn-secondary"
              >
                Back to Home
              </button>
            </div>
          </div>
        </nav>

        {/* Tab Navigation */}
        <div className="fixed top-[88px] left-0 right-0 z-40 glass-card border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex space-x-1">
              <button
                onClick={() => setActiveTab('explorer')}
                className={`flex items-center space-x-2 px-6 py-4 border-b-2 transition-all duration-300 ${
                  activeTab === 'explorer'
                    ? 'border-web3-cyan text-web3-cyan'
                    : 'border-transparent text-gray-400 hover:text-white'
                }`}
              >
                <Search className="w-5 h-5" />
                <span>Explorer</span>
              </button>
              <button
                onClick={() => setActiveTab('stats')}
                className={`flex items-center space-x-2 px-6 py-4 border-b-2 transition-all duration-300 ${
                  activeTab === 'stats'
                    ? 'border-web3-cyan text-web3-cyan'
                    : 'border-transparent text-gray-400 hover:text-white'
                }`}
              >
                <TrendingUp className="w-5 h-5" />
                <span>Analytics</span>
              </button>
              <button
                onClick={() => setActiveTab('recent')}
                className={`flex items-center space-x-2 px-6 py-4 border-b-2 transition-all duration-300 ${
                  activeTab === 'recent'
                    ? 'border-web3-cyan text-web3-cyan'
                    : 'border-transparent text-gray-400 hover:text-white'
                }`}
              >
                <Activity className="w-5 h-5" />
                <span>Recent</span>
              </button>
            </div>
          </div>
        </div>

        {/* App Content */}
        <main className="pt-[168px] pb-20 px-4">
          <div className="max-w-7xl mx-auto">
            {activeTab === 'explorer' && <ContractExplorer />}
            {activeTab === 'stats' && <NetworkStats />}
            {activeTab === 'recent' && <RecentContracts />}
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-web3-blue/20 rounded-full filter blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-web3-purple/20 rounded-full filter blur-[120px] animate-pulse-slow delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-web3-cyan/10 rounded-full filter blur-[150px]" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-web3-cyan to-web3-purple rounded-xl flex items-center justify-center shadow-glow-blue">
                <Code className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold gradient-text">Soroban Explorer</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
              <a href="https://soroban.stellar.org" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">Docs</a>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/yourusername/soroban-explorer"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <button
                onClick={() => setShowApp(true)}
                className="btn-primary flex items-center space-x-2"
              >
                <span>Launch App</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 glass-card px-4 py-2 rounded-full mb-8 animate-float">
            <Sparkles className="w-4 h-4 text-web3-cyan" />
            <span className="text-sm text-gray-300">Built for the Stellar ecosystem</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Borderless contracts</span>
            <br />
            <span className="text-white">made simple for</span>
            <br />
            <span className="gradient-text">Web3 builders</span>
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
            Explore, analyze, and interact with Soroban smart contracts on Stellar—fast, secure, and reliable.
            The most advanced contract explorer for the decentralized future.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <button
              onClick={() => setShowApp(true)}
              className="btn-primary flex items-center space-x-2 text-lg px-10 py-4"
            >
              <span>Start Exploring</span>
              <ChevronRight className="w-5 h-5" />
            </button>
            <a
              href="https://github.com/yourusername/soroban-explorer"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center space-x-2 text-lg px-10 py-4"
            >
              <Github className="w-5 h-5" />
              <span>View on GitHub</span>
            </a>
          </div>

          {/* Trusted By */}
          <div className="glass-card p-8 rounded-3xl max-w-5xl mx-auto">
            <p className="text-sm text-gray-400 mb-6">Powered by the Stellar network</p>
            <div className="flex flex-wrap items-center justify-center gap-12 opacity-60">
              <div className="flex items-center space-x-2">
                <Globe className="w-5 h-5 text-web3-cyan" />
                <span className="text-lg font-semibold">Stellar</span>
              </div>
              <div className="flex items-center space-x-2">
                <Terminal className="w-5 h-5 text-web3-blue" />
                <span className="text-lg font-semibold">Soroban</span>
              </div>
              <div className="flex items-center space-x-2">
                <Layers className="w-5 h-5 text-web3-purple" />
                <span className="text-lg font-semibold">Horizon</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-400">Everything you need to explore the Soroban ecosystem</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="glass-card-hover p-8 group">
              <div className="w-16 h-16 bg-gradient-to-br from-web3-cyan to-web3-blue rounded-2xl flex items-center justify-center mb-6 shadow-glow-cyan group-hover:scale-110 transition-transform">
                <Search className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Contract Explorer</h3>
              <p className="text-gray-400">
                Search and analyze any Soroban contract with detailed metadata, function calls, and real-time data.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="glass-card-hover p-8 group">
              <div className="w-16 h-16 bg-gradient-to-br from-web3-blue to-web3-purple rounded-2xl flex items-center justify-center mb-6 shadow-glow-blue group-hover:scale-110 transition-transform">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Live Analytics</h3>
              <p className="text-gray-400">
                Real-time network statistics, transaction volumes, and contract activity monitoring at your fingertips.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="glass-card-hover p-8 group">
              <div className="w-16 h-16 bg-gradient-to-br from-web3-purple to-web3-pink rounded-2xl flex items-center justify-center mb-6 shadow-glow-purple group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Lightning Fast</h3>
              <p className="text-gray-400">
                Optimized for speed with server-side rendering and edge caching for instant results.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="glass-card-hover p-8 group">
              <div className="w-16 h-16 bg-gradient-to-br from-web3-cyan to-web3-purple rounded-2xl flex items-center justify-center mb-6 shadow-glow-cyan group-hover:scale-110 transition-transform">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Multi-Network</h3>
              <p className="text-gray-400">
                Seamlessly switch between Testnet and Mainnet to explore contracts across all Stellar environments.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="glass-card-hover p-8 group">
              <div className="w-16 h-16 bg-gradient-to-br from-web3-blue to-web3-cyan rounded-2xl flex items-center justify-center mb-6 shadow-glow-blue group-hover:scale-110 transition-transform">
                <Activity className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Recent Activity</h3>
              <p className="text-gray-400">
                Browse newly deployed contracts with advanced filtering by type, network, and deployment time.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="glass-card-hover p-8 group">
              <div className="w-16 h-16 bg-gradient-to-br from-web3-purple to-web3-blue rounded-2xl flex items-center justify-center mb-6 shadow-glow-purple group-hover:scale-110 transition-transform">
                <Code className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Open Source</h3>
              <p className="text-gray-400">
                Built in public with TypeScript and Next.js. Contribute, fork, and make it your own.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-12 rounded-3xl text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-web3-cyan/10 via-web3-blue/10 to-web3-purple/10" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Ready to explore?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Join developers building the future of decentralized finance on Stellar
              </p>
              <button
                onClick={() => setShowApp(true)}
                className="btn-primary flex items-center space-x-2 text-lg px-12 py-5 mx-auto"
              >
                <span>Launch Explorer</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-web3-cyan to-web3-purple rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5" />
              </div>
              <span className="text-lg font-bold gradient-text">Soroban Explorer</span>
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="https://soroban.stellar.org" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                Soroban Docs
              </a>
              <a href="https://stellar.org" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                Stellar.org
              </a>
              <a href="https://github.com/yourusername/soroban-explorer" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                GitHub
              </a>
            </div>
          </div>
          <div className="text-center mt-8 text-sm text-gray-500">
            <p>Built with ❤️ for the Stellar ecosystem</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
