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
            label="Total Balance in Treasury"
            value={unionValue(treasuryVestorBalance)}
            direction={styles.statVertical}
            valueColor={"text--grey600"}
            valueSize={"text--x--large"}
        />

        <div className={styles.assetInnerWrapper}>
          <UsageChart
            data={[treasuryVestorBalance, reservoir1UnionBalance].map((x) =>
              Number(ethers.utils.formatEther(x))
            )}
          />
        </div>

        <div className={styles.statCardSpacerSmall}></div>

        <div className={styles.treasuryCompBalance}>
            <UnionStat
                pb="28px"
                label="Comptroller Ethereum"
                value="Comptroller Ethereum"
                direction={styles.statHorizontal}
                labelSize={"label--medium"}
                valueColor={"text--grey700"}
                indicatorLabelColor={"blue-indicator"}
            />

            <UnionStat
                pb="28px"
                label="Comptroller Arb. Bridge"
                value="Comptroller Arb. Bridge"
                direction={styles.statHorizontal}
                labelSize={"label--medium"}
                valueColor={"text--grey700"}
                indicatorLabelColor={"indicator-purple"}
            />

            <UnionStat
                pb="28px"
                label="Comptroller Arbitrum"
                value="Comptroller Arbitrum"
                direction={styles.statHorizontal}
                labelSize={"label--medium"}
                valueColor={"text--grey700"}
                indicatorLabelColor={"indicator-yellow"}
            />
          </div>
        </div>
    </div>
  );
}
