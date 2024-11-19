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
  UNION_BALANCE: "union-balance",
  UNION_VOTES: "union-votes",
  UNION_DELEGATED: "union-delegated",
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
    token: false,
    transform_value: false,
  },
  {
    key: FilterTypes.VOUCHES_GIVEN,
    title: "Vouches Given",
    field: "contracts.vouches.number_given",
    token: false,
    transform_value: false,
  },
  {
    key: FilterTypes.TRUST,
    title: "Trust",
    field: "contracts.vouches.amount_received",
    token: true,
    transform_value: true,
  },
  {
    key: FilterTypes.AVAILABLE_CREDIT,
    title: "Available Credit",
    field: "contracts.credit_limit",
    token: true,
    transform_value: true,
  },
  {
    key: FilterTypes.BALANCE_OWED,
    title: "Balance Owed",
    field: "contracts.total_owed.total",
    token: true,
    transform_value: true,
  },
  {
    key: FilterTypes.TOTAL_STAKE,
    title: "Total Stake",
    field: "contracts.stake.total",
    token: true,
    transform_value: true,
  },
  {
    key: FilterTypes.UTILISED_STAKE,
    title: "Utilised Stake",
    field: "contracts.stake.locked",
    token: true,
    transform_value: true,
  },
  {
    key: FilterTypes.FROZEN_STAKE,
    title: "Frozen Stake",
    field: "contracts.stake.frozen",
    token: true,
    transform_value: true,
  },
  {
    key: FilterTypes.UNION_BALANCE,
    title: "UNION Balance",
    field: "contracts.governance.balance",
    token: null,
    transform_value: true,
  },
  {
    key: FilterTypes.UNION_VOTES,
    title: "UNION Votes",
    field: "contracts.governance.votes",
    token: null,
    transform_value: true,
  },
  {
    key: FilterTypes.UNION_DELEGATED,
    title: "UNION Delegated",
    field: "contracts.governance.delegated_votes",
    token: null,
    transform_value: true,
  },
];

export const FILTER_MODALS = [
  ...CHECKBOX_FILTER_MODALS,
  ...RANGE_FILTER_MODALS,
];
