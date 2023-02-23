import styles from "./stats.module.css";

import { Label, Text } from "@unioncredit/ui";

import UnionStat from "components/UnionStat";
import StatCardHeader from "components/StatCardHeader";
import useUnionTokenStats from "hooks/stats/unionTokenStats";
import useChainId from "hooks/useChainId";
import getEtherscanLink from "util/getEtherscanLink";
import { unionValue } from "./values";
import { chain } from "constants/app";

function useUnionStatsView() {
  const { totalSupply, arbUnionWrapperBalance } = useUnionTokenStats();

  const ethSupply =
    Number(totalSupply || 0) - Number(arbUnionWrapperBalance || 0);

  return [
    {
      label: "Total supply",
      value: unionValue(totalSupply),
      chainIds: [1, 42, 42161],
    },
    {
      label: "Supply on Ethereum",
      value: unionValue(ethSupply),
      chainIds: [1, 42, 42161],
    },
    {
      label: "Supply on Arbitrum",
      value: unionValue(arbUnionWrapperBalance, 4, "arbUNION"),
      chainIds: [1],
    },
  ];
}

export default function UnionTokenStats() {
  const stats = useUnionStatsView();
  const chainId = useChainId();
  if (!chainId) return null;

  const unionTokenAddress = "0x5Dfe42eEA70a3e6f93EE54eD9C321aF07A85535C";
  const arbUnionTokenAddress = "0x6DBDe0E7e563E34A53B1130D6B779ec8eD34B4B9";
  const opUnionTokenAddress = "0x146C98A62aAaf96A7051c5828b4c12D9c7B7DDa1";

  const unionToken = {
    [chain.mainnet.id]: {
      label: "UNION",
      address: unionTokenAddress,
      cardTitle: "UNION Token",
    },
    [chain.arbitrum.id]: {
      label: "arbUNION",
      address: arbUnionTokenAddress,
      cardTitle: "arbUNION Token",
    },
    [chain.opgoerli.id]: {
      label: "opUNION",
      address: opUnionTokenAddress,
      cardTitle: "opUNION Token",
    },
  };

  return (
    <div className={styles.unionStatCard}>
      <StatCardHeader
        cardTitle={unionToken[chainId].cardTitle}
        cardSubtitle={"The native token of the Union Protocol"}
      ></StatCardHeader>

      <div className={styles.unionStatCardBody}>
        {stats
          .slice(0, 1)
          .map((stat) =>
            stat.chainIds.includes(chainId) ? (
              <UnionStat
                align="center"
                mb="28px"
                key={stat.label}
                label={stat.label}
                value={stat.value}
                valueSize={"text--x--large"}
                valueColor={"text--grey700"}
                labelSize={"text--small"}
              ></UnionStat>
            ) : null
          )}

        <div className={styles.statCardSpacerSmall}></div>

        <div className={styles.managerCardInnerWrapper}>
          {stats
            .slice(1, 2)
            .map((stat) =>
              stat.chainIds.includes(chainId) ? (
                <UnionStat
                  align="center"
                  mb="28px"
                  key={stat.label}
                  label={stat.label}
                  value={stat.value}
                  valueSize={"text--large"}
                  valueColor={"text--grey700"}
                  labelSize={"text--small"}
                ></UnionStat>
              ) : null
            )}

          {stats
            .slice(2, 3)
            .map((stat) =>
              stat.chainIds.includes(chainId) ? (
                <UnionStat
                  align="center"
                  mb="28px"
                  key={stat.label}
                  label={stat.label}
                  value={stat.value}
                  valueSize={"text--large"}
                  valueColor={"text--grey700"}
                  labelSize={"text--small"}
                ></UnionStat>
              ) : null
            )}
        </div>

        <div className={styles.networkWrapper}>
          <Label className={"text--grey400"}>Contract Address · UNION</Label>
          <Text className={"text--blue500"}>
            <a
              href={getEtherscanLink(1, unionTokenAddress, "ADDRESS")}
              target="_blank"
            >
              {unionTokenAddress}
            </a>
          </Text>

          <Label className={"text--grey400"}>Contract Address · arbUNION</Label>
          <Text className={"text--blue500"}>
            <a
              href={getEtherscanLink(42161, arbUnionTokenAddress, "ADDRESS")}
              target="_blank"
            >
              {arbUnionTokenAddress}
            </a>
          </Text>
        </div>
      </div>
    </div>
  );
}
