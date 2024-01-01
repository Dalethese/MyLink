import { StatusBar } from "react-native";
import { useIsFocused } from "@react-navigation/native";

export function StatusBarPage(props) {
  const isFocus = useIsFocused();

  return isFocus ? <StatusBar {...props} /> : null;
}
