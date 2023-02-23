import { Select } from "@unioncredit/ui";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { trimEnd } from "lodash/string";

import useChainId, { chainIdState } from "hooks/useChainId";
import { chain } from "constants/app";

export const options = [
  {
    value: "ethereum",
    label: chain.mainnet.label,
    provider: chain.mainnet.rpcUrl,
    chainId: chain.mainnet.id,
    imageSrc: "/images/ethereum.png",
    suffix: "/",
  },
  {
    value: "arbitrum one",
    label: chain.arbitrum.label,
    provider: chain.arbitrum.rpcUrl,
    chainId: chain.arbitrum.id,
    imageSrc: "/images/arbitrum.png",
    suffix: "/arbitrum",
  },
  {
    value: "optimism goerli",
    label: chain.opgoerli.label,
    provider: chain.opgoerli.rpcUrl,
    chainId: chain.opgoerli.id,
    imageSrc: "/images/arbitrum.png", // todo: change this
    suffix: "/opgoerli",
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
