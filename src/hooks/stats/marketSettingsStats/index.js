import useInterestRate from "./useInterestRate";
import useOriginationFee from "./useOriginationFee";
import useOverdueBlocks from "./useOverdueBlocks";
import useReserveFactor from "./useReserveFactor";
import useMaxBorrow from "./useMaxBorrow";
import useMinBorrow from "./useMinBorrow";
import useMaxStake from "./useMaxStake";
import useDebtCeiling from "./useDebtCeiling";
import useMemberFee from "hooks/data/useMemberFee";
import useMaxOverdueTime from "./useMaxOverdueTime";

export default function useMarketSettingsStats() {
  const { data: interestRate } = useInterestRate();
  const { data: originationFee } = useOriginationFee();
  const { data: overdueBlocks } = useOverdueBlocks();
  const { data: maxOverdueTime } = useMaxOverdueTime();
  const { data: reserveFactor } = useReserveFactor();
  const { data: maxBorrow } = useMaxBorrow();
  const { data: minBorrow } = useMinBorrow();
  const { data: maxStake } = useMaxStake();
  const { data: debtCeiling } = useDebtCeiling();
  const { data: memberFee } = useMemberFee();

  return {
    interestRate,
    originationFee,
    overdueBlocks,
    maxOverdueTime,
    reserveFactor,
    maxBorrow,
    minBorrow,
    maxStake,
    debtCeiling,
    memberFee,
  };
}
