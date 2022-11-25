import {Grid, Header} from "@unioncredit/ui";
import UnionTokenStats from "./UnionTokenStats";
import UTokenStats from "./UTokenStats";
import UserManagerStats from "./UserManagerStats";
import AssetManagerStats from "./AssetManagerStats";
import MarketSettingsStats from "./MarketSettingsStats";
import GovernanceStats from "./GovernanceStats";
import ComptStats from "./ComptStats";
import TreasuryStats from "./TreasuryStats";
import {Navigation, NetworkSelect} from "components";
import style from "./stats.module.css";
import useChainId from "../../hooks/useChainId";


export default function StatsView() {
  const chainId = useChainId();

  return (
    <div className={style.protocolPageWidth}>
      <Header className={style.memberHeader}>
        <Navigation />
      </Header>

      <span className={"divider-content"}></span>

      <div className={style.networkContentWrapper}>
        <div className={style.controls}>
          <NetworkSelect></NetworkSelect>
        </div>
      </div>
      <div className={style.unionStatCardContentWrapper}>
        <Grid.Row>
          <Grid.Col>
            <UserManagerStats></UserManagerStats>
            <UTokenStats></UTokenStats>
            <MarketSettingsStats></MarketSettingsStats>
            {chainId === 1 && <UnionTokenStats/>}
          </Grid.Col>
          <Grid.Col>
            <AssetManagerStats></AssetManagerStats>
            <ComptStats></ComptStats>
            {chainId === 42 && <UnionTokenStats/>}
            {chainId === 42161 && <UnionTokenStats/>}
            {chainId === 1 && <GovernanceStats />}
            {chainId === 1 && <TreasuryStats />}
          </Grid.Col>
        </Grid.Row>
      </div>
    </div>
  );
}
