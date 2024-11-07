import { chain } from "constants/app";

const urls = {
  [chain.mainnet.id]: "https://etherscan.io",
  [chain.optimism.id]: "https://optimistic.etherscan.io",
  [chain.opgoerli.id]: "https://goerli-optimism.etherscan.io",
  [chain.arbitrum.id]: "https://arbiscan.io",
  [chain.base.id]: "https://basescan.org",
};

/**
 * @name getEtherscanLink
 *
 * @param {number} networkId The chain id of the network to link to
 * @param {String} data The hash of the transaction or address
 * @param {("TRANSACTION"|"ADDRESS")} type
 *
 * @returns {String}
 */
export default function getEtherscanLink(networkId, data, type) {
  let prefix = urls[networkId] || urls[1];

  switch (type) {
    case "TRANSACTION": {
      return `${prefix}/tx/${data}`;
    }
    case "ADDRESS":
    default: {
      return `${prefix}/address/${data}`;
    }
  }
}
