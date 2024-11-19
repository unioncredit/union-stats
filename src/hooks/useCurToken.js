import { newRidgeState } from "react-ridge-state";
import { DEFAULT_TOKEN } from "constants/app";

export const curTokenState = newRidgeState(DEFAULT_TOKEN);

export default function useCurToken() {
  const token = curTokenState.useValue();
  return token || DEFAULT_TOKEN;
}
