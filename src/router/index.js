import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "../screens/HomeScreen";
import BottomTabNav from "./bottomTabNav";

const Router = () => {
  const Root = createStackNavigator();
  return (
    <NavigationContainer>
      <Root.Navigator screenOptions={{ headerShown: false }}>
        <Root.Screen component={BottomTabNav} name="BottomTabs" />
      </Root.Navigator>
    </NavigationContainer>
  );
};

export default Router;
