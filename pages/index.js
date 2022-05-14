import { PageHead } from "components-ui";
import StatsView from "views/stats";

export default function StatsPage() {
  return (
    <>
      <PageHead title="Union Stats" />
      <StatsView />
    </>
  );
}
