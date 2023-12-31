import { useNavigation } from "@react-navigation/native";
import { ButtonMenu } from "./styles";
import { Feather } from "@expo/vector-icons";

export function Menu() {
  const navigation = useNavigation();

  return (
    <ButtonMenu onPress={() => navigation.openDrawer()}>
      <Feather name="menu" size={40} color="#fff" />
    </ButtonMenu>
  );
}
