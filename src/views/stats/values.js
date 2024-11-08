import { Token, Union, TokenNoComma } from "components";
import format from "util/formatValue";

export const commifyNoDecimals = (value, digits) => (
  <TokenNoComma value={format(value || 0, digits ? digits : value ? 4 : 1)} />
);

export const unionValue = (value, digits, symbol = "UNION") => (
  <Union
    value={format(value || 0, digits ? digits : value ? 4 : 1)}
    symbol={symbol}
  />
);

export const tokenValue = (value, digits, symbol = "DAI") => (
  <Token
    value={format(value || 0, digits ? digits : value ? 4 : 1)}
    symbol={symbol}
  />
);
