import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Bottomnavigation from "../../SRC/Componets/Bottomtap";
import LoginScreen from "../../SRC/Screens/LoginScreen";
import Signup from "../Screens/Signup";
import Loginwithphone from "../../SRC/Screens/Loginwithphone"


const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator
    
      screenOptions={{
        headerShown: false,
       
      }
     
    }
    >
      
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="Loginwithphone" component={Loginwithphone} />
      <Stack.Screen name="Bottomnavigation" component={Bottomnavigation} />
    </Stack.Navigator>
  );
};
export default MyStack;
