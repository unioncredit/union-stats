import useTotalStaked from "./useTotalStaked";
import useTotalFrozenStake from "./useTotalFrozenStake";
import { BigNumber, FixedNumber } from "@ethersproject/bignumber";

export default function useEffectiveTotalStake() {
  const { data: totalStaked } = useTotalStaked();
  const { data: totalFrozenStake } = useTotalFrozenStake();

  if (totalStaked && totalFrozenStake) {
    const totalStakedBN = FixedNumber.from(totalStaked);
    const totalFrozenStakeBN = FixedNumber.from(totalFrozenStake);
    return totalStakedBN.subUnsafe(totalFrozenStakeBN);
  }

  return undefined;
}
