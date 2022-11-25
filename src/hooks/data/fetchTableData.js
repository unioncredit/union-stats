import useSWR from "swr";
import useChainId from "hooks/useChainId";
import axios from "axios";
import {NETWORK_NAMES} from "constants/app";

const unionDataFetcher = async (_, chainId, searchQuery, filters, page, size, sortOptions) => {
  let parsedFilters = {};
  for (const filter of filters) {
    parsedFilters = {
      ...parsedFilters,
      ...filter.query,
    }
  }

  try {
    let data = {
      "union": parsedFilters,
    };
    if (searchQuery) {
      data["filter"] = searchQuery.includes("*") ? searchQuery : `${searchQuery}*`;
    }
    if (sortOptions) {
      data["sort"] = sortOptions;
    }

    const network = NETWORK_NAMES[chainId];
    if (!network) {
      throw "Invalid chainId selected";
    }

    const apiUrl = `http://localhost:8000/api/v1/${network}?page=${page}&size=${size}`;
    const response = await axios.post(apiUrl, data);
    return response.data;
  } catch (err) {
    console.error(err);
    return false;
  }
}

export default function useTableData(searchQuery, filters, pagination, sortQuery) {
  const chainId = useChainId();
  return useSWR(["unionData", chainId, searchQuery, filters, pagination.page, pagination.size, sortQuery], unionDataFetcher);
}