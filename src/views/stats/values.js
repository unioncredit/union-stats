import { Dai, Union, DaiNoComma } from "components";
import format from "util/formatValue";

export const commifyNoDecimals = (value, digits = 4) => (
  <DaiNoComma value={format(value || 0, digits)} />
);

export const unionValue = (value, digits = 4, symbol = "UNION") => (
  <Union value={format(value || 0, digits)} symbol={symbol} />
);

export const daiValue = (value, digits = 4) => <Dai value={format(value || 0, digits)} />;
