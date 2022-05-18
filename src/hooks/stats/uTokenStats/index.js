import useLoanableAmount from "./useLoanableAmount";
import useTotalBorrows from "./useTotalBorrows";
import useTotalRedeemable from "./useTotalRedeemable";
import useTotalReserves from "./useTotalReserves";
import useUTokenSupply from "./useUTokenSupply";
import useUTokenRate from "./useUTokenRate";

export default function useUTokenStats() {
  const { data: totalBorrows } = useTotalBorrows();
  const { data: totalRedeemable } = useTotalRedeemable();
  const { data: totalReserves } = useTotalReserves();
  const { data: uTokenSupply } = useUTokenSupply();
  const { data: uTokenRate } = useUTokenRate();
  const { data: loanableAmount } = useLoanableAmount();

  return {
    totalBorrows,
    totalRedeemable,
    totalReserves,
    uTokenSupply,
    uTokenRate,
    loanableAmount,
  };
}
