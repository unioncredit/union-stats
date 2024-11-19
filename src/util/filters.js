import { expandToString } from "./formatValue";
import { Range } from "../constants/filters";

export const parseFilterValue = (value, token) => {
  value = parseFloat(value);

  if (token == "DAI") {
    value = expandToString(value * 1e18);
  } else if (token == "USDC") {
    value = expandToString(value * 1e6);
  }

  return value;
};

export const parseRangeQuery = (type, options, values, token) => {
  switch (type) {
    case Range.GTE:
    case Range.LTE:
      return {
        [options.field]: {
          [type]: parseFilterValue(values[type], token),
        },
      };

    case Range.BETWEEN:
      return {
        [options.field]: {
          [Range.LTE]: parseFilterValue(values[Range.LTE], token),
          [Range.GTE]: parseFilterValue(values[Range.GTE], token),
        },
      };
  }
};

export const parseCheckboxQuery = (options, values) => {
  return values.reduce(
    (prev, value) => ({
      ...prev,
      ...options.values.find((v) => v.label === value).query,
    }),
    {}
  );
};
