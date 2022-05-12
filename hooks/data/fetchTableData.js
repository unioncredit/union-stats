import useSWR from "swr";
import getBorrows from "./getBorrows";

async function fetchTableData() {
  const borrows = await getBorrows();

  // do something here to merge your data.
  const data = borrows.map((borrow) => {
    borrow;
  });

  return data;
}

export default function useTableData() {
  return useSWR("tableData", fetchTableData);
}
