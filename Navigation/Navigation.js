// Navigation/Navigation.js

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Search from "../Components/Search";

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Rechercher" component={Search} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
