import StatsView from "views/stats";
import { PageHead } from "components-ui";

export default function StatsPage() {
  return (
    <>
      <PageHead title="Union Stats" />
      <StatsView />
    </>
  );
}
