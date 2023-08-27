import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MyStack from "./SRC/Componets/Navigation";

export default function App() {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}
