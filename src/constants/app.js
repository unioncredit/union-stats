export const DEFAULT_CHAIN_ID = null;

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

export const chain = {
  mainnet: {
    id: 1,
    label: "Ethereum",
    rpcUrl: `https://eth-mainnet.g.alchemy.com/v2/${process.env.REACT_APP_MAINNET_ALCHEMY_KEY}`,
  },
  optimism: {
    id: 10,
    label: "Optimism",
    rpcUrl: `https://opt-mainnet.g.alchemy.com/v2/${process.env.REACT_APP_OPTIMISM_ALCHEMY_KEY}`,
  },
  opgoerli: {
    id: 420,
    label: "Optimism Goerli",
    rpcUrl: `https://opt-goerli.g.alchemy.com/v2/${process.env.REACT_APP_OPGOERLI_ALCHEMY_KEY}`,
  },
  arbitrum: {
    id: 42161,
    label: "Arbitrum One",
    rpcUrl: `https://arb-mainnet.g.alchemy.com/v2/${process.env.REACT_APP_ARBITRUM_ALCHEMY_KEY}`,
  },
};

export const NETWORK_NAMES = {
  [chain.mainnet.id]: "mainnet",
  [chain.optimism.id]: "optimism-mainnet",
  [chain.opgoerli.id]: "optimism-goerli",
  [chain.arbitrum.id]: "arbitrum-mainnet",
};
