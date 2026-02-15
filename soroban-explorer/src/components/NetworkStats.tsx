import { Activity, TrendingUp, Layers, Zap } from 'lucide-react';

export default function NetworkStats() {
  // Mock data - in real implementation, fetch from Stellar Horizon or RPC
  const stats = {
    totalContracts: 12847,
    contractsToday: 143,
    totalTransactions: 2456789,
    transactionsToday: 15234,
    averageGas: 0.0023,
    activeContracts: 8945
  };

  const recentActivity = [
    { time: '2 min ago', type: 'Contract Deploy', contract: 'CAAA...D2KM', network: 'Testnet' },
    { time: '5 min ago', type: 'Function Call', contract: 'CBBB...E3LN', network: 'Mainnet' },
    { time: '8 min ago', type: 'Contract Deploy', contract: 'CCCC...F4MO', network: 'Testnet' },
    { time: '12 min ago', type: 'Function Call', contract: 'CDDD...G5NP', network: 'Mainnet' },
    { time: '15 min ago', type: 'Contract Deploy', contract: 'CEEE...H6OQ', network: 'Testnet' }
  ];

  const StatCard = ({ icon: Icon, title, value, change, color }: any) => (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${color}`}>
          <Icon className="w-6 h-6" />
        </div>
        {change && (
          <span className="text-green-400 text-sm font-medium flex items-center">
            <TrendingUp className="w-4 h-4 mr-1" />
            {change}
          </span>
        )}
      </div>
      <h3 className="text-slate-400 text-sm mb-1">{title}</h3>
      <p className="text-2xl font-bold text-white">{value}</p>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard
          icon={Layers}
          title="Total Contracts"
          value={stats.totalContracts.toLocaleString()}
          change="+143 today"
          color="bg-purple-500/20"
        />
        <StatCard
          icon={Activity}
          title="Total Transactions"
          value={stats.totalTransactions.toLocaleString()}
          change="+5.2%"
          color="bg-blue-500/20"
        />
        <StatCard
          icon={Zap}
          title="Active Contracts"
          value={stats.activeContracts.toLocaleString()}
          change="+2.8%"
          color="bg-green-500/20"
        />
        <StatCard
          icon={TrendingUp}
          title="Contracts Today"
          value={stats.contractsToday}
          color="bg-orange-500/20"
        />
        <StatCard
          icon={Activity}
          title="Transactions Today"
          value={stats.transactionsToday.toLocaleString()}
          color="bg-pink-500/20"
        />
        <StatCard
          icon={Zap}
          title="Avg Gas Cost"
          value={`${stats.averageGas} XLM`}
          color="bg-cyan-500/20"
        />
      </div>

      {/* Recent Activity */}
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <Activity className="w-5 h-5 mr-2 text-purple-400" />
          Recent Network Activity
        </h2>
        <div className="space-y-3">
          {recentActivity.map((activity, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 bg-slate-900/50 rounded-lg hover:bg-slate-900/70 transition-colors"
            >
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <div>
                  <p className="text-white font-medium">{activity.type}</p>
                  <p className="text-sm text-slate-400">{activity.time}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-white font-mono text-sm">{activity.contract}</p>
                <p className="text-xs text-slate-400">{activity.network}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Network Health */}
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
        <h2 className="text-xl font-semibold mb-4">Network Health</h2>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-slate-300">Testnet Status</span>
              <span className="text-green-400 font-medium">Operational</span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: '98%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-slate-300">Mainnet Status</span>
              <span className="text-green-400 font-medium">Operational</span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: '99%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-slate-300">Average Response Time</span>
              <span className="text-blue-400 font-medium">124ms</span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-2">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: '85%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
