import { isAddress } from "@ethersproject/address";
import { formatUnits } from "@ethersproject/units";
import ABI from "constants/abis/erc20Detailed.json";
import useSWR from "swr";
import useContract from "../useContract";
import { AddressZero } from "constants/variables";
import useReadProvider from "hooks/useReadProvider";

const getTokenBalanceOfAccount = async (_, contract, account) => {
  const decimals = await contract.decimals();
  const balanceOf = await contract.balanceOf(account);
  const balance = formatUnits(balanceOf, decimals);
  return parseFloat(balance);
};

export default function useTokenBalanceOfAccount(tokenAddress, account) {
  const readProvider = useReadProvider();
  const contract = useContract(tokenAddress, ABI, readProvider);
  const shouldFetch =
    !!contract &&
    isAddress(tokenAddress) &&
    isAddress(account) &&
    account !== AddressZero;
  return useSWR(
    shouldFetch ? ["TokenBalance", contract, account] : null,
    getTokenBalanceOfAccount
  );
}
