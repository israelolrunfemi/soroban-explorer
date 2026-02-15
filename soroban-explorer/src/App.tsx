import { useState } from 'react';
import { Search, Activity, TrendingUp, Code, FileText, Star } from 'lucide-react';
import ContractExplorer from './components/ContractExplorer';
import NetworkStats from './components/NetworkStats';
import RecentContracts from './components/RecentContracts';

function App() {
  const [activeTab, setActiveTab] = useState<'explorer' | 'stats' | 'recent'>('explorer');

  return (
    <div className="min-h-screen text-white">
      {/* Header */}
      <header className="bg-slate-900/50 backdrop-blur-sm border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Code className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Soroban Explorer</h1>
                <p className="text-sm text-slate-400">Smart Contract Analytics for Stellar</p>
              </div>
            </div>
            <a
              href="https://github.com/yourusername/soroban-explorer"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-lg transition-colors"
            >
              <Star className="w-4 h-4" />
              <span>Star on GitHub</span>
            </a>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-slate-900/30 backdrop-blur-sm border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex space-x-1">
            <button
              onClick={() => setActiveTab('explorer')}
              className={`flex items-center space-x-2 px-6 py-4 border-b-2 transition-colors ${
                activeTab === 'explorer'
                  ? 'border-purple-500 text-white'
                  : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              <Search className="w-5 h-5" />
              <span>Contract Explorer</span>
            </button>
            <button
              onClick={() => setActiveTab('stats')}
              className={`flex items-center space-x-2 px-6 py-4 border-b-2 transition-colors ${
                activeTab === 'stats'
                  ? 'border-purple-500 text-white'
                  : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              <TrendingUp className="w-5 h-5" />
              <span>Network Stats</span>
            </button>
            <button
              onClick={() => setActiveTab('recent')}
              className={`flex items-center space-x-2 px-6 py-4 border-b-2 transition-colors ${
                activeTab === 'recent'
                  ? 'border-purple-500 text-white'
                  : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              <Activity className="w-5 h-5" />
              <span>Recent Contracts</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {activeTab === 'explorer' && <ContractExplorer />}
        {activeTab === 'stats' && <NetworkStats />}
        {activeTab === 'recent' && <RecentContracts />}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900/50 backdrop-blur-sm border-t border-slate-700 mt-20">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-slate-400">
              <FileText className="w-4 h-4" />
              <span>Built for the Stellar ecosystem</span>
            </div>
            <div className="flex space-x-6 text-sm text-slate-400">
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
        </div>
      </footer>
    </div>
  );
}

export default App;
