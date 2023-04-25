import { chain } from "constants/app";

export function isChainV2(chainId) {
  return [chain.opgoerli.id].includes(chainId);
}
