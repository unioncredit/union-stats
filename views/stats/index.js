import { Heading, Grid, Text, Header } from "@unioncredit/ui";
import UnionTokenStats from "./UnionTokenStats";
import UTokenStats from "./UTokenStats";
import UserManagerStats from "./UserManagerStats";
import AssetManagerStats from "./AssetManagerStats";
import MarketSettingsStats from "./MarketSettingsStats";
import GovernanceStats from "./GovernanceStats";
import useIsMobile from "hooks/useIsMobile";
import TreasuryStats from "./TreasuryStats";
import { Navigation, NetworkSelect } from "components-ui";
import { Footer } from "components-ui";
import style from "./stats.module.css";
import useChainId from "../../hooks/useChainId";

export default function StatsView() {
  const isMobile = useIsMobile();
  const chainId = useChainId();
  let governenceStatCard;

  if (chainId === 1) {
    governenceStatCard = <GovernanceStats></GovernanceStats>;
  }

  return (
    <div className={style.protocolPageWidth}>
      <Header className={style.memberHeader}>
        <Navigation />
      </Header>

      <Heading
        size={isMobile ? "large" : "xxlarge"}
        align="center"
        mt={"24px"}
        className={"text--grey700"}
      >
        Union Protocol Statistics
      </Heading>

      <Text align="center" mb="24px" className={"text--grey400"}>
        Multi-chain statistics and analysis related to Union Protocol
      </Text>

      <div className={style.statDropdownWrapper}>
        <Text mr={"50"} className={"text--grey700"}>
          Displaying statistics for
        </Text>

        <NetworkSelect></NetworkSelect>
      </div>

      <Grid.Row>
        <Grid.Col>
          <UserManagerStats></UserManagerStats>
          <UTokenStats></UTokenStats>
          <div>{governenceStatCard}</div>
          <UnionTokenStats></UnionTokenStats>
        </Grid.Col>
        <Grid.Col>
          <AssetManagerStats></AssetManagerStats>
          <MarketSettingsStats></MarketSettingsStats>
          <TreasuryStats></TreasuryStats>
        </Grid.Col>
      </Grid.Row>
      <Footer></Footer>
    </div>
  );
}
