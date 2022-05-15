import useInterestRate from "./useInterestRate";
import useOriginationFee from "./useOriginationFee";
import useOverdueBlocks from "./useOverdueBlocks";
import useReserveFactor from "./useReserveFactor";
import useMaxBorrow from "./useMaxBorrow";
import useMinBorrow from "./useMinBorrow";
import useDebtCeiling from "./useDebtCeiling";
import useMemberFee from "hooks/data/useMemberFee";

export default function useMarketSettingsStats() {
  const { data: interestRate } = useInterestRate();
  const { data: originationFee } = useOriginationFee();
  const { data: overdueBlocks } = useOverdueBlocks();
  const { data: reserveFactor } = useReserveFactor();
  const { data: maxBorrow } = useMaxBorrow();
  const { data: minBorrow } = useMinBorrow();
  const { data: debtCeiling } = useDebtCeiling();
  const { data: memberFee } = useMemberFee();

  return {
    interestRate,
    originationFee,
    overdueBlocks,
    reserveFactor,
    maxBorrow,
    minBorrow,
    debtCeiling,
    memberFee,
  };
}
