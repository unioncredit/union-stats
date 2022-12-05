import useSWR from "swr";
import useComptrollerContract from "hooks/contracts/useComptrollerContract";
import useReadProvider from "hooks/useReadProvider";

const getHalfDecayPoint = async (_, comptrollerContract) => {
  return comptrollerContract.halfDecayPoint();
};
export default function useHalfDecayPoint() {
  const readProvider = useReadProvider();
  const comptrollerContract = useComptrollerContract(readProvider);
  const shouldFetch = !!comptrollerContract;
  return useSWR(
    shouldFetch ? ["halfDecayPoint", comptrollerContract] : null,
    getHalfDecayPoint
  );
}
