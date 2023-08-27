import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../SRC/Screens/Home";
import Profile from "../../SRC/Screens/Profile";

const Tab = createBottomTabNavigator();

export default function Bottomnavigation() {
  return (
    <Tab.Navigator

      screenOptions={{
        headerShown: false,
        tabBarStyle: { height: 65, backgroundColor:"#006d77"},
        tabBarActiveTintColor:"white",
        tabBarLabelStyle: {
            fontSize: 15,
            margin: 4,
            padding: 0,
          },
        
    
      }}
    >
      <Tab.Screen name="Home" component={Home}
      options />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
