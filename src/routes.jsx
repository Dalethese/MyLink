import { createDrawerNavigator } from "@react-navigation/drawer";
import { Home } from "./pages/Home";
import { MyLinks } from "./pages/MyLinks";
import { Ionicons } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

export default function Routes() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveBackgroundColor: "#2ccbb9",
        drawerActiveTintColor: "#fff",
        drawerLabelStyle: {
          fontSize: 20,
        },
        headerShown: false,
      }}
    >
      <Drawer.Screen
        name='Home'
        component={Home}
        options={{
          title: "Encurtar link",
          drawerIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "cube" : "cube-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name='MyLinks'
        component={MyLinks}
        options={{
          title: "Meus links",
          drawerIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "stats-chart" : "stats-chart-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
