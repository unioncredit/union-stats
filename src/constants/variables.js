import { chain } from "constants/app";

export const AddressZero = "0x0000000000000000000000000000000000000000";
export const DATA_API_URL = "https://api.union.finance/api/v1";

export const BLOCKS_PER_YEAR = {
  [chain.mainnet.id]: 2407328,
  [chain.opgoerli.id]: 2407328, // todo: set real value
  [chain.arbitrum.id]: 2407328,
};

export const ASSET_MANAGER_ADDRESSES = {
  [chain.mainnet.id]: "0xb91a874D9AA8fF7E478bA61286ECc77c1A3E384d",
  [chain.opgoerli.id]: "0x54fF159764A7B02c1Bff84A1BB889FEDcdBf5aEA",
  [chain.arbitrum.id]: "0x7Aecd107Cb022e1DFd42cC43E9BA94C38BC83275",
};

export const MARKET_REGISTRY_ADDRESSES = {
  [chain.mainnet.id]: "0x1ddB9a1F6Bc0dE1d05eBB0FDA61A7398641ae6BE",
  [chain.opgoerli.id]: "0xdB1D5B70C33BD59545C55E70aEa3d7BCe47AAc82",
  [chain.arbitrum.id]: "0x82c7cA392644a6c66fcaF9d4efF89e6d875D58D9",
};

export const USER_MANAGER_ADDRESSES = {
  [chain.mainnet.id]: "0x49c910Ba694789B58F53BFF80633f90B8631c195",
  [chain.opgoerli.id]: "0x72a4E84255322C8852E0424fD2137EA1B4Cda305",
  [chain.arbitrum.id]: "0xb71F3D4342AaE0b8D531E14D2CF2F45d6e458A5F",
};

export const UNION_TOKEN_ADDRESSES = {
  [chain.mainnet.id]: "0x5Dfe42eEA70a3e6f93EE54eD9C321aF07A85535C",
  [chain.opgoerli.id]: "0xCE11f3F2A9aDABf6244b0015959605C4A162baE0",
  [chain.arbitrum.id]: "0x6DBDe0E7e563E34A53B1130D6B779ec8eD34B4B9",
};

export const UNION_WRAPPED_TOKEN_ADDRESSES = {
  [chain.mainnet.id]: "0x20c375e822b6264E22941B74943F940A1CfE5F25",
  [chain.opgoerli.id]: AddressZero,
  [chain.arbitrum.id]: AddressZero,
};

export const COMPTROLLER_ADDRESSES = {
  [chain.mainnet.id]: "0x216dE4089dCdD7B95BC34BdCe809669C788a9A5d",
  [chain.opgoerli.id]: "0xab986c3Fd541D80C64B883FC84f82faB20C6D3cd",
  [chain.arbitrum.id]: "0x641DD6258cb3E948121B10ee51594Dc2A8549fe1",
};

export const U_TOKEN_ADDRESSES = {
  [chain.mainnet.id]: "0x954F20DF58347b71bbC10c94827bE9EbC8706887",
  [chain.opgoerli.id]: "0xc49a11229804ad944F432362802f7959E5d1E590",
  [chain.arbitrum.id]: "0x954F20DF58347b71bbC10c94827bE9EbC8706887",
};

export const TREASURY_VESTOR_ADDRESSES = {
  [chain.mainnet.id]: "0x641DD6258cb3E948121B10ee51594Dc2A8549fe1",
  [chain.opgoerli.id]: AddressZero,
  [chain.arbitrum.id]: AddressZero,
};

export const RESERVOIR_1_ADDRESSES = {
  [chain.mainnet.id]: "0x6DBDe0E7e563E34A53B1130D6B779ec8eD34B4B9",
  [chain.opgoerli.id]: AddressZero,
  [chain.arbitrum.id]: AddressZero,
};

export const RESERVOIR_2_ADDRESSES = {
  [chain.mainnet.id]: AddressZero,
  [chain.opgoerli.id]: AddressZero,
  [chain.arbitrum.id]: AddressZero,
};

export const GOVERNOR_ADDRESSES = {
  [chain.mainnet.id]: "0xe1b3F07a9032F0d3deDf3E96c395A4Da74130f6e",
  [chain.opgoerli.id]: AddressZero,
  [chain.arbitrum.id]: AddressZero,
};

export const TIMELOCK_ADDRESSES = {
  [chain.mainnet.id]: "0xBBD3321f377742c4b3fe458b270c2F271d3294D8",
  [chain.opgoerli.id]: AddressZero,
  [chain.arbitrum.id]: AddressZero,
};

export const COMPOUND_ADAPTER_ADDRESSES = {
  [chain.mainnet.id]: "0x303CbdADF370F6bBa79651f680498E829cB860D5",
  [chain.opgoerli.id]: AddressZero,
  [chain.arbitrum.id]: AddressZero,
};

export const PURE_TOKEN_ADAPTER_ADDRESSES = {
  [chain.mainnet.id]: "0x62DD06026F5f8e874eEfF362b1280CD9A2057b7d",
  [chain.opgoerli.id]: "0x0a2db4d1aDB7B97A52d9027867d9CED08e6F5b1a",
  [chain.arbitrum.id]: "0xdC3c984f2Ecb7Ee2540bb0B9EfE9540204cdAB57",
};

export const AAVE_ADAPTER_ADDRESSES = {
  [chain.mainnet.id]: "0xE8c77A541c933Aa1320Aa2f89a61f91130e4012d",
  [chain.opgoerli.id]: AddressZero,
  [chain.arbitrum.id]: AddressZero,
};

export const AAVE_V3_ADAPTER_ADDRESSES = {
  [chain.mainnet.id]: AddressZero,
  [chain.opgoerli.id]: "0x4e06aEFC9D10a0ceb11AAFc476866e92f0bCA29e",
  [chain.arbitrum.id]: "0x393d7299c2caa940b777b014a094c3b2ea45ee2b",
};

export const ARB_CONNECTOR = {
  [chain.mainnet.id]: "0x307ED81138cA91637E432DbaBaC6E3A42699032a",
  [chain.opgoerli.id]: AddressZero,
  [chain.arbitrum.id]: AddressZero,
};

export const ARB_UNION_WRAPPER = {
  [chain.mainnet.id]: "0x20c375e822b6264E22941B74943F940A1CfE5F25",
  [chain.opgoerli.id]: AddressZero,
  [chain.arbitrum.id]: AddressZero,
};

export const BLOCK_SPEED = {
  [chain.mainnet.id]: 13,
  [chain.opgoerli.id]: 13, // todo: check this value
  [chain.arbitrum.id]: 13,
};

export const TOKENS = {
  [chain.mainnet.id]: {
    DAI: "0x6b175474e89094c44da98b954eedeac495271d0f",
    UNION: UNION_TOKEN_ADDRESSES[chain.mainnet.id],
    WRAPPED_UNION: UNION_WRAPPED_TOKEN_ADDRESSES[chain.mainnet.id],
  },
  [chain.opgoerli.id]: {
    DAI: "0xda10009cbd5d07dd0cecc66161fc93d7c9000da1",
    UNION: UNION_TOKEN_ADDRESSES[chain.opgoerli.id],
    WRAPPED_UNION: UNION_WRAPPED_TOKEN_ADDRESSES[chain.opgoerli.id],
  },
  [chain.arbitrum.id]: {
    DAI: "0xda10009cbd5d07dd0cecc66161fc93d7c9000da1",
    UNION: UNION_TOKEN_ADDRESSES[chain.arbitrum.id],
    WRAPPED_UNION: UNION_WRAPPED_TOKEN_ADDRESSES[chain.arbitrum.id],
  },
};
