import { Grid, Header } from "@unioncredit/ui";
import GovernanceStats from "./GovernanceStats";

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
          <div>{governenceStatCard}</div>
        </Grid.Col>
        <Grid.Col></Grid.Col>
      </Grid.Row>
    </div>
  );
}
