import { Select } from "@unioncredit/ui";
import { useState } from "react";
import { options } from "util/switchChain";
import { chainIdState } from "hooks/useChainId";

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
