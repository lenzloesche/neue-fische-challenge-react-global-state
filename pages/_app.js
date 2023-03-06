import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

const initialLights = [
  { id: 1, name: "Living Room", isOn: false },
  { id: 2, name: "Kitchen", isOn: false },
  { id: 3, name: "Bedroom", isOn: false },
  { id: 4, name: "Bathroom", isOn: false },
  { id: 5, name: "Garage", isOn: false },
  { id: 6, name: "Porch", isOn: false },
  { id: 7, name: "Garden", isOn: false },
  { id: 8, name: "Office", isOn: false },
];

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState(initialLights);
  const lightsOnSum = lights.filter((light) => light.isOn)?.length;
  const isDimmed = lightsOnSum === 0 ? true : false;

  function onToggle(currentLightId) {
    const newLights = lights.map((light) =>
      light.id === currentLightId ? { ...light, isOn: !light.isOn } : light
    );
    setLights(newLights);
  }

  function turnAllLightsOff() {
    const newLights = lights.map((light) => {
      return { ...light, isOn: false };
    });
    setLights(newLights);
  }

  function turnAllLightsOn() {
    const newLights = lights.map((light) => {
      return { ...light, isOn: true };
    });
    setLights(newLights);
  }
  return (
    <Layout isDimmed={isDimmed}>
      <GlobalStyle />
      <Component
        lights={lights}
        onToggle={onToggle}
        lightsOnSum={lightsOnSum}
        turnAllLightsOff={turnAllLightsOff}
        turnAllLightsOn={turnAllLightsOn}
        {...pageProps}
      />
    </Layout>
  );
}
