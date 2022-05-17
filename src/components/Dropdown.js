import React, { useState } from 'react';
import styles from "./TableFilter.module.css";
import {Button} from "@unioncredit/ui";

export function Dropdown({ items, multiSelect = false }) {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState([]);
  const toggle = () => setOpen(!open);

  function handleOnClick(item) {
    let selectionAfterRemoval = selection;
    selectionAfterRemoval = selectionAfterRemoval.filter(
        current => current.id !== item.id
    );
    setSelection([...selectionAfterRemoval]);
  }

  function isItemInSelection(item) {
    if (selection.some(current => current.id === item.id)) {
      return true;
    }
    return false;
  }

  return (
      <div className={styles.filterButton}>
        <Button
            variant={"button--withIcon"}
            tabIndex={0}
            className="dd-header"
            role="button"
            iconPosition={"start"}
            onKeyPress={() => toggle(!open)}
            onClick={() => toggle(!open)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M16.9927 12C16.9927 12.4142 16.6569 12.75 16.2427 12.75L12.75 12.75L12.75 16.2426C12.75 16.6569 12.4143 16.9926 12 16.9926C11.5858 16.9926 11.25 16.6569 11.25 16.2426L11.25 12.75L7.7574 12.75C7.34319 12.75 7.0074 12.4142 7.0074 12C7.0074 11.5858 7.34319 11.25 7.7574 11.25L11.25 11.25L11.25 7.75736C11.25 7.34315 11.5858 7.00736 12 7.00736C12.4143 7.00736 12.75 7.34315 12.75 7.75736L12.75 11.25L16.2427 11.25C16.6569 11.25 16.9927 11.5858 16.9927 12Z" fill="#57534E"/>
          </svg>
          Add a filter
        </Button>

        {open && (
          <div className={styles.filterList}>
            {items.map(item => (
              <div onClick={() => handleOnClick(item)} className={styles.filterListItem} key={item.id}>
                <span>{item.value}</span>
                <span>{isItemInSelection(item) && 'Selected'}</span>
              </div>
            ))}
          </div>
        )}
      </div>
  );
}