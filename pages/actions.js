import Link from "../components/Link";
import QuickActions from "../components/QuickActions";

export default function Actions({
  turnAllLightsOn,
  turnAllLightsOff,
  lights,
  lightsOnSum,
}) {
  return (
    <>
      <Link href="/">← Back home</Link>
      <h1>Quick Actions</h1>
      <QuickActions
        turnAllLightsOn={turnAllLightsOn}
        turnAllLightsOff={turnAllLightsOff}
        lights={lights}
        lightsOnSum={lightsOnSum}
      />
    </>
  );
}
