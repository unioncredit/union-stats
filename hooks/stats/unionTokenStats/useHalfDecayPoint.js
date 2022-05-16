import { Contract } from "@ethersproject/contracts";
import useSWR from "swr";
import useComptrollerContract from "hooks/contracts/useComptrollerContract";
import useReadProvider from "hooks/useReadProvider";

const getHalfDecayPoint = (comptrollerContract) => async (_) => {
  return comptrollerContract.halfDecayPoint();
};
export default function useHalfDecayPoint() {
  const readProvider = useReadProvider();
  const comptrollerContract = useComptrollerContract(readProvider);
  const shouldFetch = !!comptrollerContract;
  return useSWR(shouldFetch ? ["halfDecayPoint"] : null, getHalfDecayPoint(comptrollerContract));
}
