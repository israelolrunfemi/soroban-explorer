'use client'

import { FileCode, ExternalLink, Calendar, User, Sparkles, Filter } from 'lucide-react'

export default function RecentContracts() {
  const contracts = [
    {
      id: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD2KM',
      name: 'Token Contract',
      deployer: 'GDDD...XYZ',
      network: 'Testnet',
      deployedAt: '2 hours ago',
      calls: 1247,
      type: 'Token',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'CBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBE3LN',
      name: 'AMM Pool',
      deployer: 'GEEE...ABC',
      network: 'Mainnet',
      deployedAt: '5 hours ago',
      calls: 3456,
      type: 'DeFi',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      id: 'CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCF4MO',
      name: 'NFT Marketplace',
      deployer: 'GFFF...DEF',
      network: 'Testnet',
      deployedAt: '8 hours ago',
      calls: 892,
      type: 'NFT',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 'CDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDG5NP',
      name: 'Lending Protocol',
      deployer: 'GGGG...GHI',
      network: 'Mainnet',
      deployedAt: '12 hours ago',
      calls: 2134,
      type: 'DeFi',
      gradient: 'from-green-500 to-teal-500'
    },
    {
      id: 'CEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEH6OQ',
      name: 'Governance',
      deployer: 'GHHH...JKL',
      network: 'Testnet',
      deployedAt: '1 day ago',
      calls: 567,
      type: 'DAO',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      id: 'CFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFI7PR',
      name: 'Staking Contract',
      deployer: 'GIII...MNO',
      network: 'Mainnet',
      deployedAt: '1 day ago',
      calls: 4521,
      type: 'DeFi',
      gradient: 'from-emerald-500 to-green-500'
    }
  ]

  const getTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      Token: 'from-blue-500/20 to-cyan-500/20 text-cyan-400 border-cyan-500/30',
      DeFi: 'from-green-500/20 to-emerald-500/20 text-emerald-400 border-emerald-500/30',
      NFT: 'from-purple-500/20 to-pink-500/20 text-pink-400 border-pink-500/30',
      DAO: 'from-orange-500/20 to-red-500/20 text-orange-400 border-orange-500/30'
    }
    return colors[type] || 'from-gray-500/20 to-gray-400/20 text-gray-400 border-gray-500/30'
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="glass-card p-8 rounded-3xl border border-white/10">
        <div className="flex items-center space-x-2 mb-3">
          <Sparkles className="w-5 h-5 text-web3-cyan" />
          <h2 className="text-2xl font-bold gradient-text">Recently Deployed</h2>
        </div>
        <p className="text-gray-400">
          Discover the latest smart contracts deployed on the Stellar network
        </p>
      </div>

      {/* Filters */}
      <div className="glass-card p-6 rounded-2xl border border-white/10">
        <div className="flex items-center space-x-2 mb-4">
          <Filter className="w-4 h-4 text-web3-cyan" />
          <span className="text-sm font-medium text-gray-300">Filter by</span>
        </div>
        <div className="flex flex-wrap gap-3">
          <button className="px-6 py-3 bg-gradient-to-r from-web3-cyan to-web3-blue text-white rounded-xl font-semibold shadow-glow-cyan transition-all hover:scale-105">
            All
          </button>
          <button className="px-6 py-3 glass-card rounded-xl font-semibold text-gray-300 hover:bg-white/10 hover:text-white transition-all">
            Token
          </button>
          <button className="px-6 py-3 glass-card rounded-xl font-semibold text-gray-300 hover:bg-white/10 hover:text-white transition-all">
            DeFi
          </button>
          <button className="px-6 py-3 glass-card rounded-xl font-semibold text-gray-300 hover:bg-white/10 hover:text-white transition-all">
            NFT
          </button>
          <button className="px-6 py-3 glass-card rounded-xl font-semibold text-gray-300 hover:bg-white/10 hover:text-white transition-all">
            DAO
          </button>
          <div className="flex-1 min-w-[200px]">
            <select className="w-full px-6 py-3 glass-card rounded-xl text-white font-semibold focus:ring-2 focus:ring-web3-cyan outline-none cursor-pointer">
              <option>All Networks</option>
              <option>Testnet</option>
              <option>Mainnet</option>
            </select>
          </div>
        </div>
      </div>

      {/* Contracts List */}
      <div className="space-y-4">
        {contracts.map((contract, index) => (
          <div
            key={index}
            className="glass-card p-6 rounded-2xl border border-white/10 hover:border-web3-cyan/50 hover:shadow-glow-cyan transition-all group"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-14 h-14 bg-gradient-to-br ${contract.gradient} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                    <FileCode className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <h3 className="text-xl font-bold text-white group-hover:text-web3-cyan transition-colors">
                        {contract.name}
                      </h3>
                      <div className={`px-3 py-1 bg-gradient-to-r ${getTypeColor(contract.type)} border rounded-full`}>
                        <span className="text-xs font-semibold">{contract.type}</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-400 font-mono break-all">
                      {contract.id}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="glass-card p-3 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <User className="w-4 h-4 text-web3-cyan" />
                      <span className="text-xs text-gray-400">Deployer</span>
                    </div>
                    <p className="text-white font-mono text-sm">{contract.deployer}</p>
                  </div>
                  <div className="glass-card p-3 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <Calendar className="w-4 h-4 text-web3-cyan" />
                      <span className="text-xs text-gray-400">Deployed</span>
                    </div>
                    <p className="text-white text-sm font-medium">{contract.deployedAt}</p>
                  </div>
                  <div className="glass-card p-3 rounded-lg">
                    <span className="text-xs text-gray-400 block mb-1">Network</span>
                    <p className="text-white text-sm font-medium">{contract.network}</p>
                  </div>
                  <div className="glass-card p-3 rounded-lg">
                    <span className="text-xs text-gray-400 block mb-1">Total Calls</span>
                    <p className="text-white text-sm font-bold">{contract.calls.toLocaleString()}</p>
                  </div>
                </div>
              </div>

              <div className="flex lg:flex-col gap-3">
                <button className="flex-1 lg:flex-none px-6 py-3 bg-gradient-to-r from-web3-cyan to-web3-blue text-white rounded-xl font-semibold hover:from-web3-blue hover:to-web3-purple transition-all hover:scale-105 shadow-lg">
                  View Details
                </button>
                <a
                  href={`https://stellar.expert/explorer/${contract.network.toLowerCase()}/contract/${contract.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 lg:flex-none px-6 py-3 glass-card rounded-xl font-semibold text-white hover:bg-white/10 transition-all flex items-center justify-center gap-2 group"
                >
                  Explorer
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center">
        <button className="px-8 py-4 glass-card rounded-xl font-semibold text-white hover:bg-white/10 hover:border-web3-cyan/50 transition-all hover:scale-105">
          Load More Contracts
        </button>
      </div>
    </div>
  )
}
