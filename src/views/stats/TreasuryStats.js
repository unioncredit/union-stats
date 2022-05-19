import { UsageChart } from "@unioncredit/ui";

import UnionStat from "components/UnionStat";
import StatCardHeader from "components/StatCardHeader";
import useUnionTokenStats from "hooks/stats/unionTokenStats";
import { ethers } from "ethers";
import { unionValue } from "./values";

import styles from "./stats.module.css";
import useComptrollerUnionBalance from "../../hooks/stats/unionTokenStats/useComptrollerUnionBalance";

export default function MarketSettingsStats() {
  const { treasuryVestorBalance = "0", reservoir1UnionBalance = "0" } =
    useUnionTokenStats();

  {/*Todo
      this is supposed to show  "Total Balance in Treasury"
      and total balance in treasury on each network, stats needed are below...

      - Total balance of Union Tokens
      - Arb. bridge Comptroller balance
      - Arb Comptroller balance
      - Eth Comptroller balance
*/}


  return (
    <div className={styles.unionStatCard}>
      <StatCardHeader
        cardTitle={"Treasury"}
        cardSubtitle={"Network specific credit metrics"}
      ></StatCardHeader>

      <div className={styles.unionStatCardBody}>
        <UnionStat
            pb="28px"
            label="Treasury Vestor Balance"
            value={unionValue(treasuryVestorBalance)}
            direction={styles.statVertical}
            valueSize={"text--x--large"}
            valueColor={"text--grey700"}
            labelSize={"label--primary"}
            indicatorLabelColor={"blue-indicator"}
        />

        <div className={styles.assetInnerWrapper}>
          <UsageChart
              data={[reservoir1UnionBalance,treasuryVestorBalance].map((x) =>
                  Number(ethers.utils.formatEther(x))
              )}
          />
        </div>

        <div className={styles.statCardSpacerSmall}></div>

        <UnionStat
            pb="28px"
            label="Treasury 1 balance"
            value={unionValue(reservoir1UnionBalance)}
            direction={styles.statHorizontal}
            valueColor={"text--grey600"}
            labelSize={"label--primary"}
            indicatorLabelColor={"purple-indicator"}
        />
      </div>
    </div>
  );
}
