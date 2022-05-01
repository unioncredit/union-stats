export const options = [
  {
    value: "ethereum",
    label: "Ethereum",
    provider: `https://mainnet.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_KEY}`,
    buttonVariant: "ethereum",
    description:
      "Union on mainnet is more frequently used by accounts staking and borrowing larger amounts of DAI.",
    imageSrc: "/images/ethereum.png",
    chainId: 1,
    networkData: {
      chainId: "0x1",
    },
  },
  {
    value: "arbitrum one",
    label: "Arbitrum One",
    provider: "https://arb1.arbitrum.io/rpc",
    buttonVariant: "secondary",
    description:
      "Use Arbitrum’s L2 to manage your credit in a cheaper and faster way",
    imageSrc: "/images/arbitrum.png",
    chainId: 42161,
    networkData: {
      chainId: "0xA4B1",
      rpcUrls: ["https://arb1.arbitrum.io/rpc"],
      chainName: "Arbitrum One",
    },
  },
  {
    value: "kovan",
    label: "Kovan",
    provider: `https://kovan.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_KEY}`,
    buttonVariant: "secondary",
    description:
      "Use a test version of Ethereum to try out Union and learn more about how it works",
    imageSrc: "/images/kovan.png",
    chainId: 42,
    networkData: {
      chainId: "0x2A",
    },
  },
];


export const switchChain = (value) => {
  const chainId = value.networkData.chainId;
  const provider = value.provider;
  console.log(provider)

  try {
      provider.request({
      params: [{ chainId }, {provider}],
    });
  } catch (switchError) {
    if (switchError.message === "User rejected the request.") {
      return;
    }
  }
};
