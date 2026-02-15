'use client'

import { useState } from 'react'
import { Search, ExternalLink, Copy, CheckCircle, Sparkles } from 'lucide-react'

interface ContractInfo {
  id: string
  network: string
  status: string
}

export default function ContractExplorer() {
  const [contractId, setContractId] = useState('')
  const [network, setNetwork] = useState<'testnet' | 'mainnet'>('testnet')
  const [loading, setLoading] = useState(false)
  const [contractInfo, setContractInfo] = useState<ContractInfo | null>(null)
  const [copied, setCopied] = useState(false)

  const handleSearch = async () => {
    if (!contractId.trim()) return
    
    setLoading(true)
    setTimeout(() => {
      setContractInfo({
        id: contractId,
        network: network,
        status: 'Active'
      })
      setLoading(false)
    }, 1000)
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="space-y-6">
      {/* Search Card */}
      <div className="glass-card p-8 rounded-3xl border border-white/10">
        <div className="flex items-center space-x-2 mb-6">
          <Sparkles className="w-5 h-5 text-web3-cyan" />
          <h2 className="text-2xl font-bold gradient-text">Search Contract</h2>
        </div>
        
        <div className="space-y-6">
          {/* Network Selector */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-3">
              Select Network
            </label>
            <div className="flex space-x-4">
              <button
                onClick={() => setNetwork('testnet')}
                className={`flex-1 px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  network === 'testnet'
                    ? 'bg-gradient-to-r from-web3-cyan to-web3-blue text-white shadow-glow-cyan'
                    : 'glass-card hover:bg-white/10'
                }`}
              >
                Testnet
              </button>
              <button
                onClick={() => setNetwork('mainnet')}
                className={`flex-1 px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  network === 'mainnet'
                    ? 'bg-gradient-to-r from-web3-cyan to-web3-blue text-white shadow-glow-cyan'
                    : 'glass-card hover:bg-white/10'
                }`}
              >
                Mainnet
              </button>
            </div>
          </div>

          {/* Contract ID Input */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-3">
              Contract ID
            </label>
            <div className="flex space-x-3">
              <input
                type="text"
                value={contractId}
                onChange={(e) => setContractId(e.target.value)}
                placeholder="Enter contract ID (e.g., CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD2KM)"
                className="flex-1 px-6 py-4 glass-card rounded-xl focus:ring-2 focus:ring-web3-cyan focus:border-transparent outline-none text-white placeholder-gray-500 transition-all"
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              />
              <button
                onClick={handleSearch}
                disabled={loading || !contractId.trim()}
                className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2 px-8"
              >
                <Search className="w-5 h-5" />
                <span className="hidden sm:inline">{loading ? 'Searching...' : 'Search'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Results Card */}
      {contractInfo && (
        <div className="glass-card p-8 rounded-3xl border border-white/10">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold gradient-text">Contract Details</h2>
            <div className="px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full">
              <span className="text-green-400 text-sm font-semibold">{contractInfo.status}</span>
            </div>
          </div>

          <div className="space-y-4">
            {/* Contract ID */}
            <div className="glass-card p-6 rounded-xl hover:bg-white/10 transition-all">
              <div className="flex justify-between items-start mb-3">
                <span className="text-sm text-gray-400 font-medium">Contract ID</span>
                <button
                  onClick={() => copyToClipboard(contractInfo.id)}
                  className="text-gray-400 hover:text-web3-cyan transition-colors"
                >
                  {copied ? (
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  ) : (
                    <Copy className="w-5 h-5" />
                  )}
                </button>
              </div>
              <p className="text-white font-mono text-sm break-all">{contractInfo.id}</p>
            </div>

            {/* Network */}
            <div className="glass-card p-6 rounded-xl hover:bg-white/10 transition-all">
              <span className="text-sm text-gray-400 font-medium block mb-3">Network</span>
              <p className="text-white font-semibold capitalize">{contractInfo.network}</p>
            </div>

            {/* External Link */}
            <div className="glass-card p-6 rounded-xl hover:bg-white/10 transition-all">
              <span className="text-sm text-gray-400 font-medium block mb-3">View on Explorer</span>
              <a
                href={`https://stellar.expert/explorer/${contractInfo.network}/contract/${contractInfo.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-web3-cyan hover:text-web3-blue transition-colors group"
              >
                <span className="font-medium">Stellar Expert</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Contract Functions */}
            <div className="glass-card p-6 rounded-xl">
              <span className="text-sm text-gray-400 font-medium block mb-4">Available Functions</span>
              <div className="space-y-3">
                {['transfer()', 'balance()', 'approve()'].map((func, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 glass-card rounded-lg hover:bg-white/10 transition-all group">
                    <div>
                      <p className="text-white font-mono font-medium">{func}</p>
                      <p className="text-xs text-gray-400 mt-1">
                        {idx === 0 && 'Transfer tokens between accounts'}
                        {idx === 1 && 'Get account balance'}
                        {idx === 2 && 'Approve spending allowance'}
                      </p>
                    </div>
                    <button className="px-4 py-2 bg-web3-cyan/20 text-web3-cyan rounded-lg text-sm font-medium hover:bg-web3-cyan/30 transition-all group-hover:scale-105">
                      Call
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Empty State */}
      {!contractInfo && (
        <div className="glass-card p-16 rounded-3xl border border-white/10 text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-web3-cyan to-web3-blue rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-glow-cyan">
            <Search className="w-10 h-10" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">
            Search for a Soroban Contract
          </h3>
          <p className="text-gray-400 max-w-md mx-auto">
            Enter a contract ID above to view its details, functions, and interact with it on the Stellar network.
          </p>
        </div>
      )}
    </div>
  )
}
