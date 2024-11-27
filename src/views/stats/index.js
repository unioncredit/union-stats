import style from "./stats.module.css";
import { useEffect } from "react";
import { Grid, Header } from "@unioncredit/ui";

import UnionTokenStats from "./UnionTokenStats";
import UTokenStats from "./UTokenStats";
import UserManagerStats from "./UserManagerStats";
import AssetManagerStats from "./AssetManagerStats";
import MarketSettingsStats from "./MarketSettingsStats";
import GovernanceStats from "./GovernanceStats";
import ComptStats from "./ComptStats";
import TreasuryStats from "./TreasuryStats";
import { Navigation, NetworkSelect } from "components";
import { chainIdState } from "hooks/useChainId";
import { chain } from "constants/app";
import { curTokenState } from "hooks/useCurToken";
import { TOKENS } from "constants/variables";

export default function StatsView({ chainId }) {
  useEffect(() => {
    chainIdState.set(chainId);
    curTokenState.set(TOKENS[chainId].SYMBOL);
  }, [chainId]);

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
            {chainId === chain.mainnet.id && <UnionTokenStats />}
          </Grid.Col>
          <Grid.Col>
            <AssetManagerStats></AssetManagerStats>
            <ComptStats></ComptStats>
            {[
              chain.optimism.id,
              chain.opgoerli.id,
              chain.arbitrum.id,
              chain.base.id,
            ].includes(chainId) && <UnionTokenStats />}
            {chainId === chain.mainnet.id && (
              <>
                <GovernanceStats />
                <TreasuryStats />
              </>
            )}
          </Grid.Col>
        </Grid.Row>
      </div>
    </div>
  );
}
