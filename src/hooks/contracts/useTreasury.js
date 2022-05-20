import ABI from "constants/abis/treasury.json";
import { RESERVOIR_1_ADDRESSES } from "constants/variables";
import useChainId from "hooks/useChainId";
import useContract from "../useContract";

export default function useUserContract(provider) {
  const chainId = useChainId();
  return useContract(RESERVOIR_1_ADDRESSES[chainId], ABI, provider);
}
