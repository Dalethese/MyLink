import styled from "styled-components/native";

export const ModalContainer = styled.View`
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
  padding: 15px;
  height: 100px;
  background-color: #fff;
  border-radius: 10px 10px 0 0;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Button = styled.TouchableOpacity``;

export const LinkArea = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #1ccbae;
  font-size: 33px;
  font-weight: bold;
`;

export const LongUrl = styled.Text`
  margin-bottom: 30px;
  color: #a7a7a7;
  font-size: 17px;
`;

export const ShortLinkArea = styled.TouchableOpacity`
  width: 100%;
  height: 45px;
  padding: 0 10px;
  background-color: #172742;
  border-radius: 7px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ShortLinkUrl = styled.Text`
  width: 90%;
  color: #fff;
  font-size: 16px;
`;
