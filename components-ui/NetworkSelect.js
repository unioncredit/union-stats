import { Select } from "@unioncredit/ui";
import { useWeb3React } from "@web3-react/core";
import { useState } from "react";
import { switchChain, options } from "util/switchChain";
import useReadProvider from "../hooks/useReadProvider";

export function NetworkSelect() {
  const [loading, setIsLoading] = useState(false);
  const { chainId, value } = useWeb3React();

  const defaultValueIndex = options.findIndex(
    (option) => option.chainId === chainId
  );

  const handleChangeNetwork = async (value) => {
    setIsLoading(true);
    await switchChain(value);
    setIsLoading(false);
    console.log(value)
  };

  return (
    <Select
      options={options}
      name={value}
      mb="20px"
      onChange={handleChangeNetwork}
      isLoading={loading}
      defaultValue={!!~defaultValueIndex && options[defaultValueIndex]}
    />
  );
}
