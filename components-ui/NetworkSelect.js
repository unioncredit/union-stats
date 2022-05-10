import { Select } from "@unioncredit/ui";
import { useWeb3React } from "@web3-react/core";
import { useState } from "react";
import { switchChain, options } from "util/switchChain";

export function NetworkSelect() {
  const [loading] = useState(false);
  const { value } = useWeb3React();

  const handleChangeNetwork = (value) => {
    switchChain(value);
  };

  return (
    <Select
      options={options}
      name={value}
      mb="20px"
      onChange={handleChangeNetwork}
      isLoading={loading}
      defaultValue={options[0]}
    />
  );
}
