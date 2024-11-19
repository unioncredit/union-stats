import ERC20_TOKEN_ABI from "constants/abis/erc20Detailed.json";
import { TOKENS } from "constants/variables";
import useChainId from "hooks/useChainId";
import useContract from "../useContract";

export default function useERC20Contract(provider) {
  const chainId = useChainId();

  return useContract(TOKENS[chainId]?.TOKEN, ERC20_TOKEN_ABI, provider);
}
