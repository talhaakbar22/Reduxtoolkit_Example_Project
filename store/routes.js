import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Input from "./input";
import ViewInput from "./viewinput";

const Stack = createStackNavigator();

const Routes = ({ }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
       <Stack.Screen name="Input" component={Input} options={{ headerShown: false }} />
       <Stack.Screen name="ViewInput" component={ViewInput} options={{ headerShown: false }} />
       </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Routes;
