import React, { useContext } from "react";
import styled from "styled-components";
import * as t from "../../styles/themeStyles";
import { StylesContext } from "../../state/StylesContext";
import { GlobalContext } from "../../state/GlobalContext";
import { FaCloudSun, FaCloudMoon } from "react-icons/fa";
import { WiCelsius, WiFahrenheit } from "react-icons/wi";

const ThemeButton = () => {
  const { tempUnit, setTempUnit } = useContext(GlobalContext);
  const [styles, setStyling] = useContext(StylesContext);

  const changeTheme = () => {
    if (styles === "bright") {
      setStyling("dim");
    }
    if (styles === "dim") {
      setStyling("bright");
    }
  };
  const changeUnit = () => {
    if (tempUnit === "Metric") {
      setTempUnit("Imperial");
    }
    if (tempUnit === "Imperial") {
      setTempUnit("Metric");
    }
  };

  return (
    <DivForPosition>
      <BoxTheme>
        <Button onClick={changeTheme}>
          <SunButton styles={styles}>{<FaCloudSun />}</SunButton>
          <MoonButton styles={styles}>{<FaCloudMoon />}</MoonButton>
        </Button>
      </BoxTheme>
      <BoxUnit>
        <Button onClick={changeUnit}>
          <CelButton tempUnit={tempUnit}>{<WiCelsius />}</CelButton>
          <FahButton tempUnit={tempUnit}>{<WiFahrenheit />}</FahButton>
        </Button>
      </BoxUnit>
    </DivForPosition>
  );
};

export default ThemeButton;

const DivForPosition = styled.div``;

const BoxTheme = styled.div`
  position: relative;
  top: 60px;
  right: 5px;
  border-radius: 50%;
  width: 50px;
  color: ${t.text};
  position: fixed;
`;
const BoxUnit = styled(BoxTheme)`
  right: 55px;
  top: 52px;
`;

const Button = styled.div`
  background: none;
  border-radius: 50%;
  /* width: 50px; */
  font-size: 30px;
  outline: none;
  position: absolute;
  left: 5px;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 1400px) {
    top: -50px;
  }
  @media (max-width: 800px) {
    left: -33px;
  }
`;

const SunButton = styled.div`
  opacity: ${({ styles }) => (styles === "bright" ? "1" : "0")};
  transform: ${({ styles }) => (styles === "dim" ? "translate(0, 20px)" : "")};
  transition: 0.3s ease-out;
`;

const MoonButton = styled.div`
  opacity: ${({ styles }) => (styles === "dim" ? "1" : "0")};
  transform: ${({ styles }) =>
    styles === "bright" ? "translate(0, -20px)" : ""};
  transition: 0.3s ease-out;
  position: absolute;
  top: 1px;
`;

const CelButton = styled(SunButton)`
  opacity: ${({ tempUnit }) => (tempUnit === "Metric" ? "1" : "0")};
  transform: ${({ tempUnit }) =>
    tempUnit === "Imperial" ? "translate(0, -20px)" : ""};
  font-size: 50px;
`;

const FahButton = styled(MoonButton)`
  opacity: ${({ tempUnit }) => (tempUnit === "Imperial" ? "1" : "0")};
  transform: ${({ tempUnit }) =>
    tempUnit === "Metric" ? "translate(0, 20px)" : ""};
  transition: 0.3s ease-out;
  font-size: 50px;
`;

// const switchPlaces = keyframes`
// from {
//   opacity: 1,
//   transform: translate(30px, 30px);
// }
// 90% {
//   opacity: 0,
// }
// to {
//   opacity: 0
//   transform: translateY(0);
// }
// `

// animation: ${switchPlaces} 2s linear
