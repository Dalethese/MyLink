import { Platform, StatusBar } from "react-native";
import styled from "styled-components/native";

export const ContainerLogo = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: ${Platform.OS === "ios" ? 35 + "px" : 15 + "px"};
`;

export const Logo = styled.Image`
  width: 150px;
  height: 150px;
`;

export const ContainerContent = styled.View`
  margin-top: ${Platform.OS === "ios" ? 25 + "%" : 15 + "%"};
  padding: 0 15px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 35px;
  font-weight: bold;
  text-align: center;
`;

export const Subtitle = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  padding-bottom: 10%;
`;

export const ContainerInput = styled.View`
  align-items: center;
  flex-direction: row;
  width: 100%;
  border-radius: 7px;
  margin: 15px 0;
`;

export const BoxIcon = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  padding-left: 10px;
  width: 11%;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.15);
  border-radius: 7px 0 0 7px;
`;

export const Input = styled.TextInput`
  width: 90%;
  height: 50px;
  padding: 10px;
  padding-right: 35px;
  background-color: rgba(255, 255, 255, 0.15);
  border-radius: 0 7px 7px 0;
  color: #fff;
  font-size: 17px;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const ButtonLink = styled.TouchableOpacity`
  height: 50px;
  margin-bottom: 15px;
  background-color: #fff;
  border-radius: 7px;
  align-items: center;
  justify-content: center;
`;

export const ButtonLinkText = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const BoxErase = styled.TouchableOpacity`
  position: absolute;
  right: 1%;
  width: 35px;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
