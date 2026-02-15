'use client'

import { Activity, TrendingUp, Layers, Zap, Sparkles } from 'lucide-react'

export default function NetworkStats() {
  const stats = {
    totalContracts: 12847,
    contractsToday: 143,
    totalTransactions: 2456789,
    transactionsToday: 15234,
    averageGas: 0.0023,
    activeContracts: 8945
  }

  const recentActivity = [
    { time: '2 min ago', type: 'Contract Deploy', contract: 'CAAA...D2KM', network: 'Testnet', icon: '🚀' },
    { time: '5 min ago', type: 'Function Call', contract: 'CBBB...E3LN', network: 'Mainnet', icon: '⚡' },
    { time: '8 min ago', type: 'Contract Deploy', contract: 'CCCC...F4MO', network: 'Testnet', icon: '🚀' },
    { time: '12 min ago', type: 'Function Call', contract: 'CDDD...G5NP', network: 'Mainnet', icon: '⚡' },
    { time: '15 min ago', type: 'Contract Deploy', contract: 'CEEE...H6OQ', network: 'Testnet', icon: '🚀' }
  ]

  const StatCard = ({ icon: Icon, title, value, change, gradient }: any) => (
    <div className="glass-card p-6 rounded-2xl border border-white/10 hover:border-web3-cyan/50 transition-all group relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity" style={{ background: gradient }} />
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className={`w-14 h-14 rounded-xl flex items-center justify-center shadow-glow-blue group-hover:scale-110 transition-transform`}
               style={{ background: gradient }}>
            <Icon className="w-7 h-7" />
          </div>
          {change && (
            <div className="flex items-center space-x-1 px-3 py-1 bg-green-500/20 rounded-full">
              <TrendingUp className="w-4 h-4 text-green-400" />
              <span className="text-green-400 text-sm font-semibold">{change}</span>
            </div>
          )}
        </div>
        <h3 className="text-gray-400 text-sm font-medium mb-2">{title}</h3>
        <p className="text-3xl font-bold text-white">{value}</p>
      </div>
    </div>
  )

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-2 mb-2">
        <Sparkles className="w-5 h-5 text-web3-cyan" />
        <h2 className="text-2xl font-bold gradient-text">Network Analytics</h2>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard
          icon={Layers}
          title="Total Contracts"
          value={stats.totalContracts.toLocaleString()}
          change="+143 today"
          gradient="linear-gradient(135deg, #7B61FF 0%, #4A90E2 100%)"
        />
        <StatCard
          icon={Activity}
          title="Total Transactions"
          value={stats.totalTransactions.toLocaleString()}
          change="+5.2%"
          gradient="linear-gradient(135deg, #4A90E2 0%, #5DD9F5 100%)"
        />
        <StatCard
          icon={Zap}
          title="Active Contracts"
          value={stats.activeContracts.toLocaleString()}
          change="+2.8%"
          gradient="linear-gradient(135deg, #5DD9F5 0%, #7B61FF 100%)"
        />
        <StatCard
          icon={TrendingUp}
          title="Contracts Today"
          value={stats.contractsToday}
          gradient="linear-gradient(135deg, #FF61E6 0%, #7B61FF 100%)"
        />
        <StatCard
          icon={Activity}
          title="Transactions Today"
          value={stats.transactionsToday.toLocaleString()}
          gradient="linear-gradient(135deg, #7B61FF 0%, #FF61E6 100%)"
        />
        <StatCard
          icon={Zap}
          title="Avg Gas Cost"
          value={`${stats.averageGas} XLM`}
          gradient="linear-gradient(135deg, #5DD9F5 0%, #4A90E2 100%)"
        />
      </div>

      {/* Recent Activity */}
      <div className="glass-card p-8 rounded-3xl border border-white/10">
        <div className="flex items-center space-x-2 mb-6">
          <Activity className="w-5 h-5 text-web3-cyan" />
          <h2 className="text-xl font-bold gradient-text">Live Network Activity</h2>
        </div>
        <div className="space-y-3">
          {recentActivity.map((activity, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-5 glass-card rounded-xl hover:bg-white/10 transition-all group cursor-pointer"
            >
              <div className="flex items-center space-x-4">
                <div className="text-2xl">{activity.icon}</div>
                <div>
                  <p className="text-white font-semibold group-hover:text-web3-cyan transition-colors">
                    {activity.type}
                  </p>
                  <p className="text-sm text-gray-400">{activity.time}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-white font-mono text-sm">{activity.contract}</p>
                <div className="inline-block px-3 py-1 bg-web3-blue/20 rounded-full mt-1">
                  <p className="text-xs text-web3-cyan font-medium">{activity.network}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Network Health */}
      <div className="glass-card p-8 rounded-3xl border border-white/10">
        <h2 className="text-xl font-bold gradient-text mb-6">Network Health</h2>
        <div className="space-y-6">
          <div>
            <div className="flex justify-between mb-3">
              <span className="text-white font-medium">Testnet Status</span>
              <span className="text-green-400 font-semibold flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                Operational
              </span>
            </div>
            <div className="w-full h-3 glass-card rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full shadow-glow-cyan" style={{ width: '98%' }} />
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-3">
              <span className="text-white font-medium">Mainnet Status</span>
              <span className="text-green-400 font-semibold flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                Operational
              </span>
            </div>
            <div className="w-full h-3 glass-card rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full shadow-glow-cyan" style={{ width: '99%' }} />
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-3">
              <span className="text-white font-medium">Response Time</span>
              <span className="text-web3-cyan font-semibold">124ms</span>
            </div>
            <div className="w-full h-3 glass-card rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-web3-cyan to-web3-blue rounded-full shadow-glow-blue" style={{ width: '85%' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
