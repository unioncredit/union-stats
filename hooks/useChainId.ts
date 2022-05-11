import { newRidgeState } from "react-ridge-state";
import { DEFAULT_CHAIN_ID } from "constants/app";

export const chainIdState = newRidgeState(DEFAULT_CHAIN_ID);

export default function useChainId() {
  const chainId = chainIdState.useValue();
  console.log(chainId, "chainID");
  return chainId || DEFAULT_CHAIN_ID;
}
