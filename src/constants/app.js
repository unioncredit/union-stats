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

const alchemyUrl = (subdomain, key) =>
  key ? [`https://${subdomain}.g.alchemy.com/v2/${key}`] : [];

// Ordered per chain: Alchemy (when a key is configured) first, then free
// public fallbacks so reads keep working when the key is missing or the
// Alchemy plan is out of capacity.
export const chain = {
  mainnet: {
    id: 1,
    label: "Ethereum (v1)",
    rpcUrls: [
      ...alchemyUrl("eth-mainnet", process.env.REACT_APP_MAINNET_ALCHEMY_KEY),
      "https://ethereum-rpc.publicnode.com",
    ],
  },
  optimism: {
    id: 10,
    label: "Optimism (v2)",
    rpcUrls: [
      ...alchemyUrl("opt-mainnet", process.env.REACT_APP_OPTIMISM_ALCHEMY_KEY),
      "https://optimism-rpc.publicnode.com",
    ],
  },
  base: {
    id: 8453,
    label: "Base (v2)",
    rpcUrls: [
      ...alchemyUrl("base-mainnet", process.env.REACT_APP_BASE_ALCHEMY_KEY),
      "https://base-rpc.publicnode.com",
      "https://mainnet.base.org",
    ],
  },
  arbitrum: {
    id: 42161,
    label: "Arbitrum One (v1)",
    rpcUrls: [
      ...alchemyUrl("arb-mainnet", process.env.REACT_APP_ARBITRUM_ALCHEMY_KEY),
      "https://arbitrum-one-rpc.publicnode.com",
    ],
  },
};

export const NETWORK_NAMES = {
  [chain.mainnet.id]: "mainnet",
  [chain.optimism.id]: "optimism-mainnet",
  [chain.arbitrum.id]: "arbitrum-mainnet",
  [chain.base.id]: "base-mainnet",
};
