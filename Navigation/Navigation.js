// Navigation/Navigation.js

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
import Search from "../Components/Search";
// import FilmDetail from "../Components/FilmDetail";
import Favorites from "../Components/Favorites";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen name="Rechercher" component={Search} />
        <Stack.Screen name="FilmDetail" component={FilmDetail} />
      </Stack.Navigator> */}
      <Tab.Navigator>
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Favorites" component={Favorites} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const Tab = createBottomTabNavigator();

export default Navigation;
