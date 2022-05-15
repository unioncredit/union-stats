import useSWR from "swr";
import { fetchTableData } from "fetchers/fetchTableData";

export default function useTableData() {
  return useSWR("tableData", fetchTableData);
}
