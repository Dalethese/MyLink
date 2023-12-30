import { Platform, StatusBar } from "react-native";
import styled from "styled-components/native";

export const ButtonMenu = styled.TouchableOpacity`
  position: absolute;
  top: ${Platform.OS === "ios"
    ? StatusBar.currentHeight + 60 + "px"
    : 15 + "px"};
  margin: 0 20px;
  justify-content: space-around;
`;
