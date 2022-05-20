import { commify } from "@ethersproject/units";
import { Dai, Union, DaiNoComma } from "components";

export const commifyNoDecimals = (value) => (
  <DaiNoComma value={commify(Number(value?.toString() || 0).toFixed(0))}/>
);

export const unionValue = (value) => (
  <Union value={commify(Number(value?.toString() || 0).toFixed(4))} />
);

export const daiValue = (value) => (
  <Dai value={commify(Number(value?.toString() || 0).toFixed(4))} />
);



