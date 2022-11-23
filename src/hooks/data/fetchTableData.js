import useSWR from "swr";
import useChainId from "hooks/useChainId";
import axios from "axios";
import {NETWORK_NAMES} from "../../constants/app";

const unionDataFetcher = async (_, chainId, searchQuery, sortOptions, page, size) => {
  try {
    let data = {
      "union": {},
    };
    if (searchQuery) {
      data["filter"] = `${searchQuery}*`;
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

export default function useTableData(searchQuery, sortOptions, page, size) {
  const chainId = useChainId();
  return useSWR(["unionData", chainId, searchQuery, sortOptions, page, size], unionDataFetcher);
}