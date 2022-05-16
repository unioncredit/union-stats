import { isAddress } from "@ethersproject/address";
import { Contract } from "@ethersproject/contracts";
import { useMemo } from "react";

export default function useContract(address, ABI, provider) {
  return useMemo(() => {
    return isAddress(address) && !!ABI && !!provider
      ? new Contract(address, ABI, provider)
      : undefined;
  }, [address, ABI, provider]);
}
