import { FileCode, ExternalLink, Calendar, User } from 'lucide-react';

export default function RecentContracts() {
  // Mock data - in real implementation, fetch from Stellar Horizon
  const contracts = [
    {
      id: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD2KM',
      name: 'Token Contract',
      deployer: 'GDDD...XYZ',
      network: 'Testnet',
      deployedAt: '2 hours ago',
      calls: 1247,
      type: 'Token'
    },
    {
      id: 'CBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBE3LN',
      name: 'AMM Pool',
      deployer: 'GEEE...ABC',
      network: 'Mainnet',
      deployedAt: '5 hours ago',
      calls: 3456,
      type: 'DeFi'
    },
    {
      id: 'CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCF4MO',
      name: 'NFT Marketplace',
      deployer: 'GFFF...DEF',
      network: 'Testnet',
      deployedAt: '8 hours ago',
      calls: 892,
      type: 'NFT'
    },
    {
      id: 'CDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDG5NP',
      name: 'Lending Protocol',
      deployer: 'GGGG...GHI',
      network: 'Mainnet',
      deployedAt: '12 hours ago',
      calls: 2134,
      type: 'DeFi'
    },
    {
      id: 'CEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEH6OQ',
      name: 'Governance',
      deployer: 'GHHH...JKL',
      network: 'Testnet',
      deployedAt: '1 day ago',
      calls: 567,
      type: 'DAO'
    },
    {
      id: 'CFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFI7PR',
      name: 'Staking Contract',
      deployer: 'GIII...MNO',
      network: 'Mainnet',
      deployedAt: '1 day ago',
      calls: 4521,
      type: 'DeFi'
    }
  ];

  const getTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      Token: 'bg-blue-500/20 text-blue-400',
      DeFi: 'bg-green-500/20 text-green-400',
      NFT: 'bg-purple-500/20 text-purple-400',
      DAO: 'bg-orange-500/20 text-orange-400'
    };
    return colors[type] || 'bg-gray-500/20 text-gray-400';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
        <h2 className="text-xl font-semibold mb-2">Recently Deployed Contracts</h2>
        <p className="text-slate-400 text-sm">
          Explore the latest smart contracts deployed on the Stellar network
        </p>
      </div>

      {/* Filters */}
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-slate-700">
        <div className="flex flex-wrap gap-2">
          <button className="px-4 py-2 bg-purple-500 text-white rounded-lg transition-colors">
            All
          </button>
          <button className="px-4 py-2 bg-slate-700 text-slate-300 hover:bg-slate-600 rounded-lg transition-colors">
            Token
          </button>
          <button className="px-4 py-2 bg-slate-700 text-slate-300 hover:bg-slate-600 rounded-lg transition-colors">
            DeFi
          </button>
          <button className="px-4 py-2 bg-slate-700 text-slate-300 hover:bg-slate-600 rounded-lg transition-colors">
            NFT
          </button>
          <button className="px-4 py-2 bg-slate-700 text-slate-300 hover:bg-slate-600 rounded-lg transition-colors">
            DAO
          </button>
          <div className="flex-1"></div>
          <select className="px-4 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 focus:ring-2 focus:ring-purple-500 outline-none">
            <option>All Networks</option>
            <option>Testnet</option>
            <option>Mainnet</option>
          </select>
        </div>
      </div>

      {/* Contracts List */}
      <div className="space-y-4">
        {contracts.map((contract, index) => (
          <div
            key={index}
            className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-purple-500/50 transition-colors"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileCode className="w-5 h-5 text-purple-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-semibold text-white">{contract.name}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs ${getTypeColor(contract.type)}`}>
                        {contract.type}
                      </span>
                    </div>
                    <p className="text-sm text-slate-400 font-mono break-all">
                      {contract.id}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 ml-13">
                  <div className="flex items-center gap-2 text-sm">
                    <User className="w-4 h-4 text-slate-400" />
                    <div>
                      <p className="text-slate-400">Deployer</p>
                      <p className="text-white font-mono">{contract.deployer}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-slate-400" />
                    <div>
                      <p className="text-slate-400">Deployed</p>
                      <p className="text-white">{contract.deployedAt}</p>
                    </div>
                  </div>
                  <div className="text-sm">
                    <p className="text-slate-400">Network</p>
                    <p className="text-white">{contract.network}</p>
                  </div>
                  <div className="text-sm">
                    <p className="text-slate-400">Total Calls</p>
                    <p className="text-white font-semibold">{contract.calls.toLocaleString()}</p>
                  </div>
                </div>
              </div>

              <div className="flex lg:flex-col gap-2">
                <button className="flex-1 lg:flex-none px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors text-sm">
                  View Details
                </button>
                <a
                  href={`https://stellar.expert/explorer/${contract.network.toLowerCase()}/contract/${contract.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 lg:flex-none px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors text-sm flex items-center justify-center gap-2"
                >
                  Explorer
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center">
        <button className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors">
          Load More Contracts
        </button>
      </div>
    </div>
  );
}
