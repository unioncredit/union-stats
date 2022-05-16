import { Grid, Header } from "@unioncredit/ui";
import UnionTokenStats from "./UnionTokenStats";
import UTokenStats from "./UTokenStats";

import MarketSettingsStats from "./MarketSettingsStats";
import GovernanceStats from "./GovernanceStats";
import TreasuryStats from "./TreasuryStats";
import { Navigation, NetworkSelect } from "components";
import style from "./stats.module.css";
import useChainId from "../../hooks/useChainId";

export default function StatsView() {
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

      <div className={style.statDropdownWrapper}>
        <NetworkSelect></NetworkSelect>
      </div>

      <Grid.Row>
        <Grid.Col>
          <UTokenStats></UTokenStats>
          <div>{governenceStatCard}</div>
          <UnionTokenStats></UnionTokenStats>
        </Grid.Col>
        <Grid.Col>
          <MarketSettingsStats></MarketSettingsStats>
          <TreasuryStats></TreasuryStats>
        </Grid.Col>
      </Grid.Row>
    </div>
  );
}
