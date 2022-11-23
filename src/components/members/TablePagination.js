import React from "react";
import styles from "./TablePagination.module.scss";
import {Box, Button, ContextMenu, Pagination} from "@unioncredit/ui";

const SizeSelect = ({size, setSize}) => {
    const items = [
        { label: "10", value: 10, onClick: () => setSize(10) },
        { label: "25", value: 25, onClick: () => setSize(25) },
        { label: "50", value: 50, onClick: () => setSize(50) },
        { label: "100", value: 100, onClick: () => setSize(100) },
    ];

    let selected = items.find(i => i.value === size);
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
                            variant="secondary"
                            label={selected.label}
                            icon="dropdown-arrow"
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

export const TablePagination = ({page, size, total, setPage, setSize}) => {
    const maxPages = Math.ceil(total / size);
    const lowerBound = total > 0 ? (page - 1) * size + 1 : 0;
    const upperBound = Math.min(page * size, total);

    const handlePageChange = (newPage) => {
        setPage(newPage);
    }

    return (
        <div className={styles.container}>
            <div className="left">
                <p className={styles.label}>Showing: {lowerBound} - {upperBound} of {total}</p>
            </div>

            <Pagination
                pages={maxPages}
                activePage={page}
                onClick={handlePageChange}
            />

            <div className="right">
                <SizeSelect
                    size={size}
                    setSize={setSize}
                />
            </div>
        </div>
    )
}