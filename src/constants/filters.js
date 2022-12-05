export const Range = {
  LTE: "lte",
  GTE: "gte",
  BETWEEN: "between",
};

export const FilterTypes = {
  VOUCHES_RECIEVED: "vouches-received",
  VOUCHES_GIVEN: "vouches-given",
  TRUST: "trust",
  AVAILABLE_CREDIT: "available-credit",
  BALANCE_OWED: "balance-owed",
  TOTAL_STAKE: "total-stake",
  UTILISED_STAKE: "utilised-stake",
  FROZEN_STAKE: "frozen-stake",
  LOAN_STATUS: "loan-status",
};

export const CHECKBOX_FILTER_MODALS = [
  {
    key: FilterTypes.LOAN_STATUS,
    title: "Loan Status",
    values: [
      {
        label: "Overdue",
        query: {
          "contracts.is_overdue": true,
        },
      },
      {
        label: "Borrowing",
        query: {
          "contracts.total_owed.total": {
            gt: 0,
          },
        },
      },
      {
        label: "Member",
        query: {
          "contracts.is_member": true,
        },
      },
      {
        label: "Not a member",
        query: {
          "contracts.is_member": false,
        },
      },
    ],
  },
];

export const RANGE_FILTER_MODALS = [
  {
    key: FilterTypes.VOUCHES_RECIEVED,
    title: "Vouches Received",
    field: "contracts.vouches.number_received",
    is_dai: false,
  },
  {
    key: FilterTypes.VOUCHES_GIVEN,
    title: "Vouches Given",
    field: "contracts.vouches.number_given",
    is_dai: false,
  },
  {
    key: FilterTypes.TRUST,
    title: "Trust",
    field: "contracts.vouches.amount_received",
    is_dai: true,
  },
  {
    key: FilterTypes.AVAILABLE_CREDIT,
    title: "Available Credit",
    field: "contracts.credit_limit",
    is_dai: true,
  },
  {
    key: FilterTypes.BALANCE_OWED,
    title: "Balance Owed",
    field: "contracts.total_owed.total",
    is_dai: true,
  },
  {
    key: FilterTypes.TOTAL_STAKE,
    title: "Total Stake",
    field: "contracts.stake.total",
    is_dai: true,
  },
  {
    key: FilterTypes.UTILISED_STAKE,
    title: "Utilised Stake",
    field: "contracts.stake.locked",
    is_dai: true,
  },
  {
    key: FilterTypes.FROZEN_STAKE,
    title: "Frozen Stake",
    field: "contracts.stake.frozen",
    is_dai: true,
  },
];

export const FILTER_MODALS = [
  ...CHECKBOX_FILTER_MODALS,
  ...RANGE_FILTER_MODALS,
];
