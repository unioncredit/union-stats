import { Navigate } from "react-router";
import { chainIdState } from "hooks/useChainId";

export const NetworkRedirect = ({ chainId, to }) => {
  chainIdState.set(chainId);
  return <Navigate to={to} />;
};
