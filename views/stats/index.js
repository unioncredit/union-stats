import { Grid, Header } from "@unioncredit/ui";
import { Navigation, NetworkSelect } from "components";
import style from "./stats.module.css";

export default function StatsView() {
  return (
    <div className={style.protocolPageWidth}>
      <Header className={style.memberHeader}>
        <Navigation />
      </Header>

      <div className={style.statDropdownWrapper}>
        <NetworkSelect></NetworkSelect>
      </div>

      <Grid.Row>
        <Grid.Col></Grid.Col>
        <Grid.Col></Grid.Col>
      </Grid.Row>
    </div>
  );
}
