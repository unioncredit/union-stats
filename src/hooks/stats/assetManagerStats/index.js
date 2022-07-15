import useLoanableAmount from "./useLoanableAmount";
import usePoolBalance from "./usePoolBalance";
import useAssetManagerDAIBalance from "./useAssetManagerDAIBalance";
import useDAIInLendingProtocols from "./useDAIInLendingProtocols";
import useDAIInCompound from "./useDAIInCompound";
import useCompoundFloor from "./useCompoundFloor";
import useCompoundCeiling from "./useCompoundCeiling";
import useDAIInAave from "./useDAIInAave";
import useAaveFloor from "./useAaveFloor";
import useAaveCeiling from "./useAaveCeiling";
import useDAIInPureAdapter from "./useDAIInPureAdapter";
import usePureFloor from "./usePureFloor";
import usePureCeiling from "./usePureCeiling";
import useDAIInAaveV3 from "./useDAIInAaveV3";
import useAaveV3Floor from "./useAaveV3Floor";
import useAaveV3Ceiling from "./useAaveV3Ceiling";

export default function useAssetManagerStats() {
  const { data: loanableAmount } = useLoanableAmount();
  const { data: poolBalance } = usePoolBalance();
  const { data: assetManagerDAIBalance } = useAssetManagerDAIBalance();
  const { data: daiInLendingProtocols } = useDAIInLendingProtocols();

  const { data: daiInCompound } = useDAIInCompound();
  const { data: compoundFloor } = useCompoundFloor();
  const { data: compoundCeiling } = useCompoundCeiling();

  const { data: daiInAave } = useDAIInAave();
  const { data: aaveFloor } = useAaveFloor();
  const { data: aaveCeiling } = useAaveCeiling();

  const { data: daiInPureAdapter } = useDAIInPureAdapter();
  const { data: pureFloor } = usePureFloor();
  const { data: pureCeiling } = usePureCeiling();

  const { data: daiInAaveV3 } = useDAIInAaveV3();
  const { data: aaveV3Floor } = useAaveV3Floor();
  const { data: aaveV3Ceiling } = useAaveV3Ceiling();

  return {
    loanableAmount,
    poolBalance,
    assetManagerDAIBalance,
    daiInLendingProtocols,

    daiInCompound,
    compoundFloor,
    compoundCeiling,

    daiInAave,
    aaveFloor,
    aaveCeiling,

    daiInPureAdapter,
    pureFloor,
    pureCeiling,

    daiInAaveV3,
    aaveV3Floor,
    aaveV3Ceiling,
  };
}
