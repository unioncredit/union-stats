import useSWR from "swr";
import useReadProvider from "hooks/useReadProvider";
import useChainId from "../../useChainId";
import { isChainV2 } from "../../../util/chain";
import useUserContract from "../../contracts/useUserContract";
import { ethers } from "ethers";

const getMaxOverdueTime = async (_, userContract, chainId) => {
  return isChainV2(chainId)
    ? userContract.maxOverdueTime()
    : ethers.BigNumber.from("0");
};
export default function useMaxOverdueTime() {
  const readProvider = useReadProvider();
  const chainId = useChainId();
  const userContract = useUserContract(readProvider);
  const shouldFetch = !!userContract;
  return useSWR(
    shouldFetch ? ["maxOverdueTime", userContract, chainId] : null,
    getMaxOverdueTime
  );
}
