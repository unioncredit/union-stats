import { chain } from "constants/app";

export function isChainV2(chainId) {
  return [chain.optimism.id, chain.opgoerli.id].includes(chainId);
}
