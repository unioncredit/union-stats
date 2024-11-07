import { chain } from "constants/app";

export function isChainV2(chainId) {
  return [chain.optimism.id, chain.base.id, chain.opgoerli.id].includes(
    chainId
  );
}
