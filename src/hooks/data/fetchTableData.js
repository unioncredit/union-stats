import useSWR from "swr";
import { fetchTableData } from "fetchers/fetchTableData";
import useChainId from "hooks/useChainId";

function fetcher(_, chainId) {
  return fetchTableData(chainId);
}

export default function useTableData() {
  const chainId = useChainId();
  return useSWR(["tableData", chainId], fetcher);
}
