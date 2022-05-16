import { UsageChart } from "@unioncredit/ui";

import UnionStat from "components/UnionStat";
import StatCardHeader from "components/StatCardHeader";
import useUnionTokenStats from "hooks/stats/unionTokenStats";
import { ethers } from "ethers";
import { unionValue } from "./values";

import styles from "./stats.module.css";

export default function MarketSettingsStats() {
  const { treasuryVestorBalance = "0", reservoir1UnionBalance = "0" } =
    useUnionTokenStats();

  return (
    <div className={styles.unionStatCard}>
      <StatCardHeader
        cardTitle={"Treasury"}
        cardSubtitle={"Network specific credit metrics"}
      ></StatCardHeader>

      <div className={styles.unionStatCardBody}>
        <UnionStat
          pb="28px"
          label="Treasury 1 balance"
          value={unionValue(reservoir1UnionBalance)}
          direction={styles.statVertical}
          valueSize={"text--x--large"}
          valueColor={"text--grey700"}
        />
        <div className={styles.assetInnerWrapper}>
          <UsageChart
            data={[treasuryVestorBalance, reservoir1UnionBalance].map((x) =>
              Number(ethers.utils.formatEther(x))
            )}
          />
        </div>
        <UnionStat
          pb="28px"
          label="Treasury Vestor Balance"
          value={unionValue(treasuryVestorBalance)}
          direction={styles.statHorizontal}
          valueColor={"text--grey600"}
        />
      </div>
    </div>
  );
}
