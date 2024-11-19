import styles from "./stats.module.css";

import { Text } from "@unioncredit/ui";

import UnionStat from "components/UnionStat";
import StatCardHeader from "components/StatCardHeader";
import useUnionTokenStats from "hooks/stats/unionTokenStats";
import useChainId from "hooks/useChainId";
import getEtherscanLink from "util/getEtherscanLink";
import { unionValue } from "./values";
import { chain } from "constants/app";
import { UNION_TOKEN_ADDRESSES } from "../../constants/variables";

function useUnionStatsView() {
  const { totalSupply, unionWrapperBalance } = useUnionTokenStats();

  const ethSupply = Number(totalSupply || 0) - Number(unionWrapperBalance || 0);

  return [
    {
      label: "Total supply",
      value: unionValue(totalSupply),
      chainIds: [
        chain.mainnet.id,
        chain.optimism.id,
        chain.opgoerli.id,
        chain.arbitrum.id,
        chain.base.id,
      ],
    },
    {
      label: "Supply on Ethereum",
      value: unionValue(ethSupply),
      chainIds: [
        chain.mainnet.id,
        chain.optimism.id,
        chain.opgoerli.id,
        chain.arbitrum.id,
        chain.base.id,
      ],
    },
    {
      label: "Supply on Arbitrum",
      value: unionValue(unionWrapperBalance, 4, "arbUNION"),
      chainIds: [chain.arbitrum.id],
    },
    {
      label: "Supply on Optimism",
      value: unionValue(unionWrapperBalance, 4, "opUNION"),
      chainIds: [chain.optimism.id],
    },
    {
      label: "Supply on Optimism Goerli",
      value: unionValue(unionWrapperBalance, 4, "opUNION"),
      chainIds: [chain.opgoerli.id],
    },
    {
      label: "Supply on Base",
      value: unionValue(unionWrapperBalance, 4, "baseUNION"),
      chainIds: [chain.base.id],
    },
  ];
}

export default function UnionTokenStats() {
  const stats = useUnionStatsView();
  const chainId = useChainId();
  if (!chainId) return null;

  const unionToken = {
    [chain.mainnet.id]: {
      label: "UNION",
      address: UNION_TOKEN_ADDRESSES[chain.mainnet.id],
      cardTitle: "UNION Token",
    },
    [chain.optimism.id]: {
      label: "opUNION",
      address: UNION_TOKEN_ADDRESSES[chain.optimism.id],
      cardTitle: "opUNION Token",
    },
    [chain.arbitrum.id]: {
      label: "arbUNION",
      address: UNION_TOKEN_ADDRESSES[chain.arbitrum.id],
      cardTitle: "arbUNION Token",
    },
    [chain.opgoerli.id]: {
      label: "opUNION",
      address: UNION_TOKEN_ADDRESSES[chain.opgoerli.id],
      cardTitle: "opUNION Token",
    },
    [chain.base.id]: {
      label: "baseUNION",
      address: UNION_TOKEN_ADDRESSES[chain.base.id],
      cardTitle: "baseUNION Token",
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
          <Text className={"text--grey400"}>Contract Address · UNION</Text>
          <Text className={"text--blue500"}>
            <a
              href={getEtherscanLink(
                chain.mainnet.id,
                unionToken[chain.mainnet.id].address,
                "ADDRESS"
              )}
              target="_blank"
            >
              {unionToken[chain.mainnet.id].address}
            </a>
          </Text>

          <Text className={"text--grey400"}>Contract Address · arbUNION</Text>
          <Text className={"text--blue500"}>
            <a
              href={getEtherscanLink(
                chain.arbitrum.id,
                unionToken[chain.arbitrum.id].address,
                "ADDRESS"
              )}
              target="_blank"
            >
              {unionToken[chain.arbitrum.id].address}
            </a>
          </Text>

          <Text className={"text--grey400"}>Contract Address · opUNION</Text>
          <Text className={"text--blue500"}>
            <a
              href={getEtherscanLink(
                chain.optimism.id,
                unionToken[chain.optimism.id].address,
                "ADDRESS"
              )}
              target="_blank"
            >
              {unionToken[chain.optimism.id].address}
            </a>
          </Text>

          <Text className={"text--grey400"}>Contract Address · baseUNION</Text>
          <Text className={"text--blue500"}>
            <a
              href={getEtherscanLink(
                chain.base.id,
                unionToken[chain.base.id].address,
                "ADDRESS"
              )}
              target="_blank"
            >
              {unionToken[chain.base.id].address}
            </a>
          </Text>

          <Text className={"text--grey400"}>
            Contract Address · opUNION (Testnet)
          </Text>
          <Text className={"text--blue500"}>
            <a
              href={getEtherscanLink(
                chain.opgoerli.id,
                unionToken[chain.opgoerli.id].address,
                "ADDRESS"
              )}
              target="_blank"
            >
              {unionToken[chain.opgoerli.id].address}
            </a>
          </Text>
        </div>
      </div>
    </div>
  );
}
