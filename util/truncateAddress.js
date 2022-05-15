/**
 * @name truncateAddress
 *
 * @param {String} address The address to truncate
 * @param {Number} digits The length to shorten
 *
 * @returns {String}
 */
export default function truncateAddress(address, digits = 4) {
  return `${address.slice(0, digits + 2)}...${address.slice(-digits)}`;
}

export function truncateMaxLengthStr(str, digits = 4) {
  if (str.length <= 32) return str;
  return `${str.slice(0, digits + 2)}...${str.slice(-digits)}`;
}
