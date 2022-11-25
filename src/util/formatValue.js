import {commify} from "@ethersproject/units";

/**
 * @name format
 * @description Takes in a string or number value and either returns K-formatted or with commas
 *
 * @param {string|number} number
 * @param {number} decimals
 */
export default function format(num, digits = 2) {
  if (!num) return "0." + Array(digits).fill("0").join("");

  const numStr = Number(num).toLocaleString("en", {
    useGrouping: false,
    minimumFractionDigits: digits,
  });

  const parts = numStr.split(".");
  const lhs = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  if (digits > 0 && parts[1]) {
    return `${lhs}.${parts[1]}`;
  }
  return lhs;
}

export function formatDetailed(number, unit = null, decimals = 4) {
  if (number === null || number === undefined) return "NaN";
  const fullNumber = Number(number);
  const fixedNumber = Number(fullNumber.toFixed(decimals));
  const integerPart = Number(fullNumber.toFixed(0));
  const fixedDecimalPart = fixedNumber - integerPart;
  const fullDecimalPart = fullNumber - integerPart;

  let result = fixedNumber;
  // if the decimal part is being rounded to zero then set lowest decimal as 1
  if (fixedDecimalPart == 0 && fullDecimalPart > 0) {
    result += Math.pow(10, -1 * decimals);
  }

  return commify(result) + (unit ? " " + unit : "");
}

// Takes an int/float value and casts it to string, helps to remove scientific notation
export const expandToString = (value) => {
  return value.toLocaleString('fullwide', {useGrouping: false});
}
