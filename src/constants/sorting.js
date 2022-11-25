export const SortDirections = {
  ASC: "asc",
  DESC: "desc",
}

export const SortOptions = {
  VOUCHES_RECEIVED: {
    key: "vouches-received",
    queries: {
      [SortDirections.ASC]: {
        "contracts.vouches.number_received": "asc"
      },
      [SortDirections.DESC]: {
        "contracts.vouches.number_received": "desc"
      }
    }
  },
  VOUCHES_GIVEN: {
    key: "vouches-given",
    queries: {
      [SortDirections.ASC]: {
        "contracts.vouches.number_given": "asc"
      },
      [SortDirections.DESC]: {
        "contracts.vouches.number_given": "desc"
      }
    }
  },
  TRUST: {
    key: "trust",
    queries: {
      [SortDirections.ASC]: {
        "contracts.vouches.amount_received": "asc"
      },
      [SortDirections.DESC]: {
        "contracts.vouches.amount_received": "desc"
      }
    }
  },
  AVAILABLE_CREDIT: {
    key: "available-credit",
    queries: {
      [SortDirections.ASC]: {
        "contracts.credit_limit": "asc"
      },
      [SortDirections.DESC]: {
        "contracts.credit_limit": "desc"
      }
    }
  },
  BALANCE_OWED: {
    key: "balance-owed",
    queries: {
      [SortDirections.ASC]: {
        "contracts.total_owed.total": "asc"
      },
      [SortDirections.DESC]: {
        "contracts.total_owed.total": "desc"
      }
    }
  },
  LOAN_STATUS: {
    key: "loan-status",
    queries: {
      [SortDirections.ASC]: {
        "contracts.is_overdue": "asc",
        "contracts.total_owed.total": "asc",
        "contracts.is_member": "asc",
      },
      [SortDirections.DESC]: {
        "contracts.is_overdue": "desc",
        "contracts.total_owed.total": "desc",
        "contracts.is_member": "desc",
      }
    }
  },
  STAKE_TOTAL: {
    key: "stake-total",
    queries: {
      [SortDirections.ASC]: {
        "contracts.stake.total": "asc"
      },
      [SortDirections.DESC]: {
        "contracts.stake.total": "desc"
      }
    }
  },
  STAKE_UTILISED: {
    key: "stake-utilised",
    queries: {
      [SortDirections.ASC]: {
        "contracts.stake.locked": "asc"
      },
      [SortDirections.DESC]: {
        "contracts.stake.locked": "desc"
      }
    }
  },
  STAKE_FROZEN: {
    key: "stake-frozen",
    queries: {
      [SortDirections.ASC]: {
        "contracts.stake.frozen": "asc"
      },
      [SortDirections.DESC]: {
        "contracts.stake.frozen": "desc"
      }
    }
  },
};