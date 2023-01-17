import { Select } from "@unioncredit/ui";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { trimEnd } from "lodash/string";

import useChainId, { chainIdState } from "hooks/useChainId";

export const options = [
  {
    value: "ethereum",
    label: "Ethereum",
    provider: `https://mainnet.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_KEY}`,
    imageSrc: "/images/ethereum.png",
    chainId: 1,
    suffix: "/",
  },
  {
    value: "arbitrum one",
    label: "Arbitrum One",
    provider: "https://arb1.arbitrum.io/rpc",
    imageSrc: "/images/arbitrum.png",
    chainId: 42161,
    suffix: "/arbitrum",
  },
];

export function NetworkSelect({ sort, pagination }) {
  const [loading] = useState(false);
  const chainId = useChainId();
  const location = useLocation();
  const navigate = useNavigate();

  const handleChangeNetwork = (value) => {
    if (value.chainId) {
      if (sort && pagination) {
        sort.reset();
        pagination.setPage(1);
      }

      chainIdState.set(value.chainId);
    }
  };

  const defaultValueIndex = options.findIndex(
    (option) => option.chainId === chainId
  );

  useEffect(() => {
    const option = options.find((o) => o.chainId === chainId);
    if (!option) {
      return;
    }

    const trimmed = options.reduce(
      (url, o) => trimEnd(url, o.suffix),
      location.pathname
    );

    const url =
      trimmed === "" ? option.suffix : trimEnd(trimmed + option.suffix, "/");

    if (location.pathname !== url) {
      navigate(url);
    }
  }, [chainId, location, navigate]);

  return (
    <Select
      options={options}
      mb="20px"
      onChange={handleChangeNetwork}
      isLoading={loading}
      value={!!~defaultValueIndex && options[defaultValueIndex]}
    />
  );
}
