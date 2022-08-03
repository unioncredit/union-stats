import { Dai, Union, DaiNoComma } from "components";
import format from "util/formatValue";

export const commifyNoDecimals = (value, digits) => (
  <DaiNoComma value={format(value || 0, digits ? digits : value ? 4 : 1)} />
);

export const unionValue = (value, digits, symbol = "UNION") => (
  <Union
    value={format(value || 0, digits ? digits : value ? 4 : 1)}
    symbol={symbol}
  />
);

export const daiValue = (value, digits) => (
  <Dai value={format(value || 0, digits ? digits : value ? 4 : 1)} />
);
