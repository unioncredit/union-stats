import React from "react";
import styles from "./TablePagination.module.scss";
import {Box, Button, ContextMenu, Pagination} from "@unioncredit/ui";
import {ReactComponent as DropdownIcon} from "images/dropdown.svg";

const SizeSelect = ({pagination}) => {
  const items = [
    {label: "10", value: 10, onClick: () => pagination.setPagination(1, 10)},
    {label: "25", value: 25, onClick: () => pagination.setPagination(1, 25)},
    {label: "50", value: 50, onClick: () => pagination.setPagination(1, 50)},
    {label: "100", value: 100, onClick: () => pagination.setPagination(1, 100)},
  ];

  let selected = items.find(i => i.value === pagination.size);
  if (!selected) {
    selected = items[0];
  }

  return (
    <div className={styles.dropdown}>
      <p>Rows per page</p>
      <Box>
        <ContextMenu
          button={(toggleOpen) => (
            <Button
              onClick={toggleOpen}
              variant="lite"
              label={selected.label}
              icon={DropdownIcon}
              iconPosition="end"
            />
          )}
          items={items}
          position="left"
        />
      </Box>
    </div>
  )
}

export const TablePagination = ({total, pagination}) => {
  const handlePageChange = (newPage) => {
    pagination.setPage(newPage);
  }

  return (
    <div className={styles.container}>
      <div className="left">
        <p className={styles.label}>
          Showing: {pagination.getLowerBound(total)} - {pagination.getUpperBound(total)} of {total}
        </p>
      </div>

      <Pagination
        pages={pagination.getMaxPages(total)}
        activePage={pagination.page}
        onClick={handlePageChange}
      />

      <div className="right">
        <SizeSelect
          pagination={pagination}
        />
      </div>
    </div>
  )
}