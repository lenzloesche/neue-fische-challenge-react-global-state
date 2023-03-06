import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({
  lights,
  lightsOnSum,
  turnAllLightsOff,
  turnAllLightsOn,
}) {
  return (
    <StyledQuickActions>
      <Button
        disabled={lightsOnSum > 0 ? false : true}
        type="button"
        onClick={() => {
          turnAllLightsOff();
        }}
      >
        Turn all lights off
      </Button>
      <Button
        disabled={lightsOnSum === lights.length ? true : false}
        type="button"
        onClick={() => {
          turnAllLightsOn();
        }}
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
