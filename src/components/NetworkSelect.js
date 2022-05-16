import { useState } from "react";
import { Select } from "@unioncredit/ui";

import { chainIdState } from "hooks/useChainId";

export const options = [
  {
    value: "ethereum",
    label: "Ethereum",
    provider: `https://mainnet.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_KEY}`,
    imageSrc: "/images/ethereum.svg",
    chainId: 1,
  },
  {
    value: "arbitrum one",
    label: "Arbitrum One",
    provider: "https://arb1.arbitrum.io/rpc",
    imageSrc: "/images/arbitrum.svg",
    chainId: 42161,
  },
  {
    value: "kovan",
    label: "Kovan",
    provider: `https://kovan.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_KEY}`,
    imageSrc: "/images/kovan.svg",
    chainId: 42,
  },
];

export function NetworkSelect() {
  const [loading] = useState(false);
  const chainId = chainIdState.useValue([]);

  const handleChangeNetwork = (value) => {
    if (value.chainId) {
      chainIdState.set(value.chainId);
    }
  };

  const defaultValueIndex = options.findIndex(
    (option) => option.chainId === chainId
  );

  return (
    <Select
      options={options}
      mb="20px"
      onChange={handleChangeNetwork}
      isLoading={loading}
      defaultValue={!!~defaultValueIndex && options[defaultValueIndex]}
    />
  );
}
