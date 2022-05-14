import { UsageChart } from "@unioncredit/ui";

import UnionStat from "components/UnionStat";
import StatCardHeader from "components/StatCardHeader";
import useUnionTokenStats from "hooks/stats/unionTokenStats";

import styles from "./stats.module.css";

export default function MarketSettingsStats() {
  const { reservoir1UnionBalance } = useUnionTokenStats();
  const { comptrollerUnionBalance } = useUnionTokenStats();

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
          value={reservoir1UnionBalance}
          direction={styles.statVertical}
          valueSize={"text--x--large"}
          valueColor={"text--grey700"}
        />
        <div className={styles.assetInnerWrapper}>
          <UsageChart
            data={[reservoir1UnionBalance, comptrollerUnionBalance]}
          />
        </div>
        <UnionStat
          pb="28px"
          label="Comptroller Balance"
          value={comptrollerUnionBalance}
          direction={styles.statHorizontal}
          valueColor={"text--grey600"}
        />
      </div>
    </div>
  );
}
