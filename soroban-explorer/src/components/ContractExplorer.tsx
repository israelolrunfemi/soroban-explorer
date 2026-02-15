import { useState } from 'react';
import { Search, ExternalLink, Copy, CheckCircle } from 'lucide-react';

interface ContractInfo {
  id: string;
  network: string;
  status: string;
}

export default function ContractExplorer() {
  const [contractId, setContractId] = useState('');
  const [network, setNetwork] = useState<'testnet' | 'mainnet'>('testnet');
  const [loading, setLoading] = useState(false);
  const [contractInfo, setContractInfo] = useState<ContractInfo | null>(null);
  const [copied, setCopied] = useState(false);

  const handleSearch = async () => {
    if (!contractId.trim()) return;
    
    setLoading(true);
    
    // Simulate API call - in a real implementation, you'd fetch from Stellar RPC
    setTimeout(() => {
      setContractInfo({
        id: contractId,
        network: network,
        status: 'Active'
      });
      setLoading(false);
    }, 1000);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Search Section */}
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
        <h2 className="text-xl font-semibold mb-4">Search Contract</h2>
        
        <div className="space-y-4">
          {/* Network Selector */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Network
            </label>
            <div className="flex space-x-4">
              <button
                onClick={() => setNetwork('testnet')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  network === 'testnet'
                    ? 'bg-purple-500 text-white'
                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                }`}
              >
                Testnet
              </button>
              <button
                onClick={() => setNetwork('mainnet')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  network === 'mainnet'
                    ? 'bg-purple-500 text-white'
                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                }`}
              >
                Mainnet
              </button>
            </div>
          </div>

          {/* Contract ID Input */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Contract ID
            </label>
            <div className="flex space-x-2">
              <input
                type="text"
                value={contractId}
                onChange={(e) => setContractId(e.target.value)}
                placeholder="Enter contract ID (e.g., CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD2KM)"
                className="flex-1 px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-white placeholder-slate-500"
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              />
              <button
                onClick={handleSearch}
                disabled={loading || !contractId.trim()}
                className="px-6 py-3 bg-purple-500 hover:bg-purple-600 disabled:bg-slate-700 disabled:cursor-not-allowed rounded-lg transition-colors flex items-center space-x-2"
              >
                <Search className="w-5 h-5" />
                <span>{loading ? 'Searching...' : 'Search'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Results Section */}
      {contractInfo && (
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Contract Details</h2>
            <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
              {contractInfo.status}
            </span>
          </div>

          <div className="space-y-4">
            {/* Contract ID */}
            <div className="bg-slate-900/50 rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <span className="text-sm text-slate-400">Contract ID</span>
                <button
                  onClick={() => copyToClipboard(contractInfo.id)}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  {copied ? <CheckCircle className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <p className="text-white font-mono text-sm break-all">{contractInfo.id}</p>
            </div>

            {/* Network */}
            <div className="bg-slate-900/50 rounded-lg p-4">
              <span className="text-sm text-slate-400 block mb-2">Network</span>
              <p className="text-white capitalize">{contractInfo.network}</p>
            </div>

            {/* View on Explorer */}
            <div className="bg-slate-900/50 rounded-lg p-4">
              <span className="text-sm text-slate-400 block mb-2">External Links</span>
              <a
                href={`https://stellar.expert/explorer/${contractInfo.network}/contract/${contractInfo.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
              >
                <span>View on Stellar Expert</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Mock Contract Functions */}
            <div className="bg-slate-900/50 rounded-lg p-4">
              <span className="text-sm text-slate-400 block mb-3">Available Functions</span>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 bg-slate-800 rounded-lg">
                  <div>
                    <p className="text-white font-mono text-sm">transfer()</p>
                    <p className="text-xs text-slate-400">Transfer tokens between accounts</p>
                  </div>
                  <button className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded text-sm hover:bg-purple-500/30 transition-colors">
                    Call
                  </button>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-800 rounded-lg">
                  <div>
                    <p className="text-white font-mono text-sm">balance()</p>
                    <p className="text-xs text-slate-400">Get account balance</p>
                  </div>
                  <button className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded text-sm hover:bg-purple-500/30 transition-colors">
                    Call
                  </button>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-800 rounded-lg">
                  <div>
                    <p className="text-white font-mono text-sm">approve()</p>
                    <p className="text-xs text-slate-400">Approve spending allowance</p>
                  </div>
                  <button className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded text-sm hover:bg-purple-500/30 transition-colors">
                    Call
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Information Section */}
      {!contractInfo && (
        <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 text-center">
          <Search className="w-12 h-12 text-slate-500 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-slate-300 mb-2">
            Search for a Soroban Contract
          </h3>
          <p className="text-slate-400 text-sm">
            Enter a contract ID to view its details, functions, and interact with it on the Stellar network.
          </p>
        </div>
      )}
    </div>
  );
}
