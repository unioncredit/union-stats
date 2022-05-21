import { Box, Label, UsageChart } from "@unioncredit/ui";
import useDripRates from "hooks/data/useDripRates";
import UnionStat from "components/UnionStat";
import StatCardHeader from "components/StatCardHeader";
import useUnionTokenStats from "hooks/stats/unionTokenStats";
import { formatEther } from "ethers/lib/utils";
import { unionValue } from "./values";
import styles from "./stats.module.css";
import truncateAddress from "util/truncateAddress";
import getEtherscanLink from "util/getEtherscanLink";
import useChainId from "hooks/useChainId";
import { daiValue, commifyNoDecimals } from "./values";


const formatUnion = (n) => unionValue(formatEther(n));
const formatTarget = (chainId) => (t) =>
  (
    <a target="_blank" href={getEtherscanLink(chainId, t, "ADDRESS")}>
      {truncateAddress(t)}
    </a>
  );

export default function MarketSettingsStats() {
  const chainId = useChainId();
  const { treasuryVestorBalance = "0", reservoir1UnionBalance = "0" } =
    useUnionTokenStats();
  const { data: dripRates = {} } = useDripRates();

  console.log(dripRates)

  const comptrollerDrip = [
    {
      value: dripRates.comptroller?.dripRate || "0",
      label: "Drip rate",
      fmt: formatUnion,
    },
    {
      value: dripRates.comptroller?.amount || "0",
      label: "Amount",
      fmt: formatUnion,
    },
    {
      value: dripRates.comptroller?.target || "0",
      label: "Target",
      fmt: formatTarget(chainId),
    },
    {
      value: dripRates.comptroller?.dripped || "0",
      label: "Total",
      fmt: formatUnion,
    },
  ];

  const arbConnectorDrip = [
    {
      value: dripRates.arbConnector?.dripRate || "0",
      label: "Drip rate",
      fmt: formatUnion,
    },
    {
      value: dripRates.arbConnector?.amount || "0",
      label: "Amount",
      fmt: formatUnion,
    },
    {
      value: dripRates.arbConnector?.target || "0",
      label: "Target",
      fmt: formatTarget(chainId),
    },
    {
      value: dripRates.arbConnector?.dripped || "0",
      label: "Total",
      fmt: formatUnion,
    },
  ];

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
          value={commifyNoDecimals(reservoir1UnionBalance)}
          valueTwo={" UNION"}
          direction={styles.statVertical}
          valueSize={"text--x--large"}
          valueColor={"text--grey700"}
          labelSize={"label--primary"}
        />

        <div className={styles.statCardSpacerSmall}></div>
          <div className={styles.mobileBreak}>
            <UnionStat
              pb="28px"
              label="Treasury Vestor Balance"
              value={commifyNoDecimals(treasuryVestorBalance)}
              valueTwo={" UNION"}
              direction={styles.statHorizontal}
              valueColor={"text--grey600"}
              labelSize={"label--primary"}
            />
            <Box mt="16px">
              <Label grey={700}>Comptroller Union Drip</Label>
            </Box>
        </div>

        {comptrollerDrip.map(({ label, value, fmt }) => (
          <UnionStat
            key={label}
            pb="28px"
            label={label}
            value={fmt ? fmt(value) : value}
            direction={styles.statHorizontal}
            valueColor={"text--grey600"}
            labelSize={"label--primary"}
          />
        ))}

        <Box mt="16px">
          <Label grey={700}>ArbConnector Union Drip</Label>
        </Box>
        {arbConnectorDrip.map(({ label, value, fmt }) => (
          <UnionStat
            key={label}
            pb="28px"
            label={label}
            value={fmt ? fmt(value) : value}
            direction={styles.statHorizontal}
            valueColor={"text--grey600"}
            labelSize={"label--primary"}
          />
        ))}
      </div>
    </div>
  );
}
