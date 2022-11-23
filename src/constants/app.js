const INFURA_KEY = "070e63ab0d164a7686aea64c6d172651";

export const DEFAULT_CHAIN_ID = 1;

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

export const RPC_URLS = {
  1: `https://mainnet.infura.io/v3/${INFURA_KEY}`,
  4: `https://rinkeby.infura.io/v3/${INFURA_KEY}`,
  42: `https://kovan.infura.io/v3/${INFURA_KEY}`,
  137: `https://polygon-mainnet.infura.io/v3/${INFURA_KEY}`,
  42161: "https://arb1.arbitrum.io/rpc",
  421611: "https://rinkeby.arbitrum.io/rpc",
};

export const NETWORK_NAMES = {
  1: "mainnet",
  42161: "arbitrum-mainnet",
}