import { commify } from "@ethersproject/units";
import { Dai, Union } from "components";

export const unionValue = (value) => (
  <Union value={commify(Number(value?.toString() || 0).toFixed(4))} />
);

export const daiValue = (value) => (
  <Dai value={commify(Number(value?.toString() || 0).toFixed(4))} />
);
