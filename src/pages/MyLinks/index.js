import { Platform, SafeAreaView, Text, View } from "react-native";
import { StatusBarPage } from "../../components/StatusBarPage";

export const MyLinks = () => {
  return (
    <View>
      <SafeAreaView>
        <StatusBarPage
          backgroundColor="#132742"
          barStyle={Platform.OS === "ios" ? "default" : "light-content w"}
        />

        <Text>MyLinks</Text>
      </SafeAreaView>
    </View>
  );
};
