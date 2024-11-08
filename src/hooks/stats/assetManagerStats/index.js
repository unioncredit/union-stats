import useLoanableAmount from "./useLoanableAmount";
import usePoolBalance from "./usePoolBalance";
import useAssetManagerTokenBalance from "./useAssetManagerTokenBalance";
import useTokenInLendingProtocols from "./useTokenInLendingProtocols";
import useTokenInCompound from "./useTokenInCompound";
import useCompoundFloor from "./useCompoundFloor";
import useCompoundCeiling from "./useCompoundCeiling";
import useTokenInAave from "./useTokenInAave";
import useAaveFloor from "./useAaveFloor";
import useAaveCeiling from "./useAaveCeiling";
import useTokenInPureAdapter from "./useTokenInPureAdapter";
import usePureFloor from "./usePureFloor";
import usePureCeiling from "./usePureCeiling";
import useTokenInAaveV3 from "./useTokenInAaveV3";
import useAaveV3Floor from "./useAaveV3Floor";
import useAaveV3Ceiling from "./useAaveV3Ceiling";

export default function useAssetManagerStats() {
  const { data: loanableAmount } = useLoanableAmount();
  const { data: poolBalance } = usePoolBalance();
  const { data: assetManagerTokenBalance } = useAssetManagerTokenBalance();
  const { data: tokenInLendingProtocols } = useTokenInLendingProtocols();

  const { data: tokenInCompound } = useTokenInCompound();
  const { data: compoundFloor } = useCompoundFloor();
  const { data: compoundCeiling } = useCompoundCeiling();

  const { data: tokenInAave } = useTokenInAave();
  const { data: aaveFloor } = useAaveFloor();
  const { data: aaveCeiling } = useAaveCeiling();

  const { data: tokenInPureAdapter } = useTokenInPureAdapter();
  const { data: pureFloor } = usePureFloor();
  const { data: pureCeiling } = usePureCeiling();

  const { data: tokenInAaveV3 } = useTokenInAaveV3();
  const { data: aaveV3Floor } = useAaveV3Floor();
  const { data: aaveV3Ceiling } = useAaveV3Ceiling();

  return {
    loanableAmount,
    poolBalance,
    assetManagerTokenBalance,
    tokenInLendingProtocols,

    tokenInCompound,
    compoundFloor,
    compoundCeiling,

    tokenInAave,
    aaveFloor,
    aaveCeiling,

    tokenInPureAdapter,
    pureFloor,
    pureCeiling,

    tokenInAaveV3,
    aaveV3Floor,
    aaveV3Ceiling,
  };
}
