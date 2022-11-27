import {useState} from "react";

export default function useFilterModals() {
  const [openModalKey, setOpenModalKey] = useState(null);

  const open = (key) => {
    setOpenModalKey(key);
  }

  const closeAll = () => {
    setOpenModalKey(null);
  }

  const isOpen = (key) => {
    return openModalKey === key;
  }

  return {
    open,
    closeAll,
    isOpen,
  }
}