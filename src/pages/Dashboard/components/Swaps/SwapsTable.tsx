import type { Swap } from "models/swaps.model"



interface ISwapsTable {
    swaps:Swap[];
}

export const SwapsTable = ({swaps}:ISwapsTable) => {
console.log(swaps)
  return (
    <div className="overflow-x-auto w-full">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-900 rounded-lg shadow-md">
        <thead className="bg-gray-100 dark:bg-gray-800">
          <tr>
            <th className="px-4 py-2 text-left text-xs font-semibold text-gray-700 dark:text-gray-200 uppercase">Date</th>
            <th className="px-4 py-2 text-left text-xs font-semibold text-gray-700 dark:text-gray-200 uppercase">Hash</th>
            <th className="px-4 py-2 text-left text-xs font-semibold text-gray-700 dark:text-gray-200 uppercase">Wallet</th>
            <th className="px-4 py-2 text-left text-xs font-semibold text-gray-700 dark:text-gray-200 uppercase">Base</th>
            <th className="px-4 py-2 text-left text-xs font-semibold text-gray-700 dark:text-gray-200 uppercase">Quote</th>
            {/* <th className="px-4 py-2 text-right text-xs font-semibold text-gray-700 dark:text-gray-200 uppercase">Amount</th> */}
            <th className="px-4 py-2 text-right text-xs font-semibold text-gray-700 dark:text-gray-200 uppercase">USD Value</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          {swaps.map((swap) => (
            <tr key={swap.transactionHash} className="hover:bg-blue-50 dark:hover:bg-blue-900 transition-colors">
              <td className="px-4 py-2 whitespace-nowrap text-xs text-gray-600 dark:text-gray-300">
                {new Date(swap.blockTimestamp).toLocaleString()}
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-xs text-blue-600 dark:text-blue-300 font-mono">
                <a href={`https://etherscan.io/tx/${swap.transactionHash}`} target="_blank" rel="noopener noreferrer" className="underline">
                  {swap.transactionHash.slice(0, 8)}...{swap.transactionHash.slice(-6)}
                </a>
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-xs text-gray-700 dark:text-gray-200 font-mono">
                {swap.walletAddressLabel || swap.walletAddress.slice(0, 6) + '...' + swap.walletAddress.slice(-4)}
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-xs flex items-center gap-2">
                {swap.bought.logo && <img src={swap.bought.logo} alt={swap.bought.symbol} className="w-4 h-4 inline-block" />}
                <span className="font-semibold dark:text-blue-300">{swap.bought.symbol}</span>
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-xs flex items-center gap-2">
                {swap.sold.logo && <img src={swap.sold.logo} alt={swap.sold.symbol} className="w-4 h-4 inline-block" />}
                <span className="font-semibold dark:text-blue-300">{swap.sold.symbol}</span>
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-xs t dark:text-blue-300 text-left">
                {Number(swap.bought.amount).toFixed(4)}
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-xs text-right text-green-700 dark:text-green-300 font-bold">
                ${swap.totalValueUsd.toFixed(4)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
