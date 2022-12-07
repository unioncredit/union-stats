import useSWR from "swr";
import useChainId from "hooks/useChainId";
import axios from "axios";
import { NETWORK_NAMES } from "constants/app";
import { DATA_API_URL } from "constants/variables";

const unionDataFetcher = async (
  _,
  chainId,
  searchQuery,
  filters,
  page,
  size,
  sortOptions
) => {
  let parsedFilters = {};
  for (const filter of filters) {
    parsedFilters = {
      ...parsedFilters,
      ...filter.query,
    };
  }

  try {
    let data = {
      union: parsedFilters,
    };
    if (searchQuery) {
      data["filter"] = searchQuery.includes("*")
        ? searchQuery
        : `${searchQuery}*`;
    }
    if (sortOptions) {
      data["sort"] = sortOptions;
    }

    const network = NETWORK_NAMES[chainId];
    if (!network) {
      throw "Invalid chainId selected";
    }

    const apiUrl = `${DATA_API_URL}/${network}?page=${page}&size=${size}`;
    const response = await axios.post(apiUrl, data);
    return response.data;
  } catch (err) {
    console.error(err);
    return false;
  }
};

export default function useTableData(filters, pagination, sortQuery) {
  const chainId = useChainId();
  return useSWR(
    [
      "unionData",
      chainId,
      filters.searchQuery,
      filters.queries,
      pagination.page,
      pagination.size,
      sortQuery,
    ],
    unionDataFetcher
  );
}
