import useTotalStaked from "./useTotalStaked";
import useTotalFrozenStake from "./useTotalFrozenStake";
import useEffectiveTotalStake from "./useEffectiveTotalStake";
import useMaxStakeAmount from "hooks/data/useMaxStakeAmount";

export default function useUserManagerStats() {
  const { data: totalStaked } = useTotalStaked();
  const { data: totalFrozenStake } = useTotalFrozenStake();
  const effectiveTotalStake = useEffectiveTotalStake();
  const { data: maxStakeAmount = "0" } = useMaxStakeAmount();

  return {
    maxStakeAmount,
    totalStaked,
    totalFrozenStake,
    effectiveTotalStake,
  };
}
