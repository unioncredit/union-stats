import { Heading, Box, Grid, Text } from "@unioncredit/ui";
import UnionTokenStats from "./UnionTokenStats";
import UTokenStats from "./UTokenStats";
import UserManagerStats from "./UserManagerStats";
import AssetManagerStats from "./AssetManagerStats";
import MarketSettingsStats from "./MarketSettingsStats";
import GovernanceStats from "./GovernanceStats";
import useIsMobile from "hooks/useIsMobile";
import { NetworkSelect } from "components-ui";
import { Footer } from "components-ui";
import style from "./stats.module.css";

export default function StatsView() {
  const isMobile = useIsMobile();

  return (
    <Grid>
      <Grid.Row>
        <Grid.Col>
          <Box
            mb="56px"
            fluid
            align="center"
            justify="center"
            direction="vertical"
          >
            <Heading
              size={isMobile ? "large" : "xxlarge"}
              align="center"
              mt={"60px"}
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
          </Box>
        </Grid.Col>
      </Grid.Row>

      <Grid.Row>
        <Grid.Col>
          <div className={style.statCard}>
            <UserManagerStats></UserManagerStats>
          </div>

          <div className={style.statCard}>
            <UTokenStats></UTokenStats>
          </div>

          <div className={style.statCard}>
            <GovernanceStats></GovernanceStats>
          </div>
        </Grid.Col>
        <Grid.Col>
          <div className={style.statCard}>
            <AssetManagerStats></AssetManagerStats>
          </div>

          <div className={style.statCard}>
            <MarketSettingsStats></MarketSettingsStats>
          </div>

          <div className={style.statCard}>
            <UnionTokenStats></UnionTokenStats>
          </div>
        </Grid.Col>
      </Grid.Row>
      <Footer></Footer>
    </Grid>
  );
}
