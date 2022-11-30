import {expandToString} from "./formatValue";
import {Range} from "../constants/filters";

export const parseFilterValue = (value, isDai = false) => {
  value = parseFloat(value);

  if (isDai) {
    value = expandToString(value * 1e18);
  }

  return value;
}

export const parseRangeQuery = (type, options, values, isDai) => {
  switch (type) {
    case Range.GTE:
    case Range.LTE:
      return {
        [options.field]: {
          [type]: parseFilterValue(values[type], isDai)
        }
      };

    case Range.BETWEEN:
      return {
        [options.field]: {
          [Range.LTE]: parseFilterValue(values[Range.LTE], isDai),
          [Range.GTE]: parseFilterValue(values[Range.GTE], isDai),
        }
      }
  }
}

export const parseCheckboxQuery = (options, values) => {
  return values.reduce((prev, value) => ({
    ...prev,
    ...options.values.find(v => v.label === value).query
  }), {});
}