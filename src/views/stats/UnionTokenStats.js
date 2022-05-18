import { Label, Text } from "@unioncredit/ui";
import useUnionTokenStats from "hooks/stats/unionTokenStats";
import UnionStat from "components/UnionStat";
import StatCardHeader from "components/StatCardHeader";
import useChainId from "hooks/useChainId";
import { unionValue, daiValue } from "./values";

import styles from "./stats.module.css";

function useUnionStatsView() {
  const {
    totalSupply,
  } = useUnionTokenStats();


  const blocksPerDay = 5760;

  return [
    {
      label: "Total supply",
      value: (unionValue(totalSupply)),
      chainIds: [1, 42, 42161],
    },
    {
      label: "Supply on Ethereum",
      value: "ETHSUPPLy",
      chainIds: [1, 42, 42161],
    },
    {
      label: "Supply on Arbitrum",
      value: "413,647.01 UNION",
      chainIds: [1, 42, 42161],
    },
  ];
}

export default function UTokenStats() {
  const stats = useUnionStatsView();
  const chainId = useChainId();

  const unionToken = {
    1: {
      label: "Ethereum",
      address: "0x5Dfe42eEA70a3e6f93EE54eD9C321aF07A85535C",
      cardTitle: "UNION Token"
    },
    42161: {
      label: "Arbitrum",
      address: "0x6DBDe0E7e563E34A53B1130D6B779ec8eD34B4B9",
      cardTitle: "arbUNION Token"
    },
    42: {
      label: "Kovan",
      address: "0x08AF898e65493D8212c8981FAdF60Ff023A91150",
      cardTitle: "UNION Token"
    },
  };

  {/*
  Todo - this card is only going to show Total supply of UNION, and the total supply on all networks
  only need to show 3 stats and that is the total supply of Union and the supply on both networks
*/}


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
          <Label className={"text--grey400"}>
            Contract Address · Ethereum
          </Label>
          <Text className={"text--blue500"}>0x5Dfe42eEA70a3e6f93EE54eD9C321aF07A85535C</Text>

          <Label className={"text--grey400"}>
            Contract Address · Arbitrum
          </Label>
          <Text className={"text--blue500"}>0x6DBDe0E7e563E34A53B1130D6B779ec8eD34B4B9</Text>
        </div>
      </div>
    </div>
  );
}
