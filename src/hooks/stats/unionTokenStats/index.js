import useUnionTokenSupply from "./useUnionTokenSupply";
import useTreasuryVestorBalance from "./useTreasuryVestorBalance";
import useReservoir1UnionBalance from "./useReservoir1UnionBalance";
import useReservoir2UnionBalance from "./useReservoir2UnionBalance";
import useComptrollerUnionBalance from "./useComptrollerUnionBalance";
import useUnionPausedState from "./useUnionPausedState";
import useUnionInflationPerBlock from "./useUnionInflationPerBlock";
import useUnionInflationPerSecond from "./useUnionInflationPerSecond";
import useHalfDecayPoint from "./useHalfDecayPoint";
import useUnionPerDAIStaked from "./useUnionPerDAIStaked";
import useTotalFrozenStake from "./useTotalFrozenStake";
import useUnionWrapperUnionBalance from "./useUnionWrapperUnionBalance";

export default function useUnionTokenStats() {
  const { data: totalSupply } = useUnionTokenSupply();
  const { data: treasuryVestorBalance } = useTreasuryVestorBalance();
  const { data: reservoir1UnionBalance } = useReservoir1UnionBalance();
  const { data: reservoir2UnionBalance } = useReservoir2UnionBalance();
  const { data: comptrollerUnionBalance } = useComptrollerUnionBalance();
  const { data: isUnionTransferPaused } = useUnionPausedState();
  const { data: unionInflationPerBlock } = useUnionInflationPerBlock();
  const { data: unionInflationPerSecond } = useUnionInflationPerSecond();
  const { data: halfDecayPoint } = useHalfDecayPoint();
  const { data: unionPerDAIStaked } = useUnionPerDAIStaked();
  const { data: totalFrozenStake } = useTotalFrozenStake();
  const { data: unionWrapperBalance } = useUnionWrapperUnionBalance();

  return {
    totalSupply,
    treasuryVestorBalance,
    reservoir1UnionBalance,
    reservoir2UnionBalance,
    comptrollerUnionBalance,
    isUnionTransferPaused,
    unionInflationPerBlock,
    unionInflationPerSecond,
    halfDecayPoint,
    unionPerDAIStaked,
    totalFrozenStake,
    unionWrapperBalance,
  };
}
