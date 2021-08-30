import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Input from "./store/input";
import ViewInput from "./store/viewinput";
const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
       <NavigationContainer>
      <Stack.Navigator>
       <Stack.Screen name="Input" component={Input} options={{ headerShown: false }} />
       <Stack.Screen name="ViewInput" component={ViewInput} options={{ headerShown: false }} />
       </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
};
export default App;
