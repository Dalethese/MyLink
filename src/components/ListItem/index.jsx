import { View, Text } from "react-native";
export default function ListItem({ data }) {
  return (
    <View>
      <Text>{data.link}</Text>
    </View>
  );
}
