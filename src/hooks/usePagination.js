import {useState} from "react";

export default function usePagination() {
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(50);

  const getMaxPages = (total) => {
    return Math.ceil(total / size);
  }

  const getLowerBound = (total) => {
    return total > 0 ? (page - 1) * size + 1 : 0;
  }

  const getUpperBound = (total) => {
    return Math.min(page * size, total);
  }

  return {
    page,
    size,
    setPage: (n) => setPage(Number(n)),
    setSize: (n) => setSize(Number(n)),
    setPagination: (p, s) => {
      setPage(Number(p));
      setSize(Number(s));
    },
    getMaxPages,
    getLowerBound,
    getUpperBound,
  };
}
