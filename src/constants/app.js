export const DEFAULT_CHAIN_ID = null;
export const DEFAULT_TOKEN = "DAI";

export const links = {
  twitter: "https://twitter.com/unionprotocol",
  blog: "https://medium.com/union-finance",
  website: "https://union.finance/",
  governance: "https://union.finance/governance",
  docs: "https://docs.union.finance/",
  discord: "https://discord.gg/cZagzJ3p8G",
  github: "https://github.com/unioncredit",
};

export const contextMenuItems = [
  { label: "App", href: "https://app.union.finance/" },
  {
    label: "Docs",
    target: "_blank",
    href: "https://docs.union.finance/",
  },
  { label: "Blog", target: "_blank", href: "https://medium.com/union-finance" },
  {
    label: "Twitter",
    target: "_blank",
    href: "https://twitter.com/unionprotocol",
  },
  { label: "Discord", target: "_blank", href: "https://discord.gg/cZagzJ3p8G" },
  { label: "Github", target: "_blank", href: "https://github.com/unioncredit" },
];

// Free public endpoints, ordered; viem's fallback() walks each list in order.
export const chain = {
  mainnet: {
    id: 1,
    label: "Ethereum (v1)",
    rpcUrls: [
      "https://ethereum-rpc.publicnode.com",
      "https://eth.drpc.org",
    ],
  },
  optimism: {
    id: 10,
    label: "Optimism (v2)",
    rpcUrls: [
      "https://optimism-rpc.publicnode.com",
      "https://optimism.drpc.org",
    ],
  },
  base: {
    id: 8453,
    label: "Base (v2)",
    rpcUrls: [
      "https://base-rpc.publicnode.com",
      "https://mainnet.base.org",
      "https://base.drpc.org",
    ],
  },
  arbitrum: {
    id: 42161,
    label: "Arbitrum One (v1)",
    rpcUrls: [
      "https://arbitrum-one-rpc.publicnode.com",
      "https://arbitrum.drpc.org",
    ],
  },
};

export const NETWORK_NAMES = {
  [chain.mainnet.id]: "mainnet",
  [chain.optimism.id]: "optimism-mainnet",
  [chain.arbitrum.id]: "arbitrum-mainnet",
  [chain.base.id]: "base-mainnet",
};
