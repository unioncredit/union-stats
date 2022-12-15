import { useEffect, useState } from "react";
import { SortDirections } from "../constants/sorting";

export default function useSort() {
  const [sort, setSort] = useState(null);
  const [key, setKey] = useState(null);
  const [direction, setDirection] = useState(null);
  const [query, setQuery] = useState(null);

  useEffect(() => {
    if (sort) {
      setKey(sort.key);
      setDirection(SortDirections.DESC);
      setQuery(sort.queries[SortDirections.DESC]);
    } else {
      setKey(null);
      setDirection(null);
      setQuery(null);
    }
  }, [sort]);

  const toggleDirection = () => {
    const newDirection =
      direction === SortDirections.DESC
        ? SortDirections.ASC
        : SortDirections.DESC;

    setDirection(newDirection);
    setQuery(sort.queries[newDirection]);
  };

  const reset = () => {
    setSort(null);
  };

  const setNewSort = (newSort) => {
    if (!key) {
      // no existing sort, sort DESC by default
      return setSort(newSort);
    }

    if (key === newSort.key) {
      // if same sort column was clicked
      if (direction === SortDirections.DESC) {
        return toggleDirection();
      } else {
        return reset();
      }
    }

    // New column sort selected
    return setSort(newSort);
  };

  return {
    key,
    direction,
    query,
    reset,
    setNewSort,
  };
}
