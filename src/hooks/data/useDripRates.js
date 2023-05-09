import useSWR from "swr";
import useTreasury from "hooks/contracts/useTreasury";
import useReadProvider from "hooks/useReadProvider";
import useChainId from "hooks/useChainId";
import {
  ARB_CONNECTOR,
  OP_CONNECTOR,
  COMPTROLLER_ADDRESSES,
} from "constants/variables";

const getDripRates = async (_, chainId, treasury) => {
  const comptroller = await treasury.tokenSchedules(
    COMPTROLLER_ADDRESSES[chainId]
  );
  const arbConnector = await treasury.tokenSchedules(ARB_CONNECTOR[chainId]);

  const opConnector = await treasury.tokenSchedules(OP_CONNECTOR[chainId]);
  return {
    comptroller,
    arbConnector,
    opConnector,
  };
};

export default function useDripRates() {
  const chainId = useChainId();
  const readProvider = useReadProvider();
  const treasury = useTreasury(readProvider);
  const shouldFetch = !!treasury;
  return useSWR(
    shouldFetch ? ["DripRates", chainId, treasury] : null,
    getDripRates
  );
}
