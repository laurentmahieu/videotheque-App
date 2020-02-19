// Navigation/Navigation.js

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Favorites from "../Components/Favorites";
import Search from "../Components/Search";
import FilmDetail from "../Components/FilmDetail";

const SearchStack = createStackNavigator();

function SearchStackScreen() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name="Rechercher" component={Search} />
      <SearchStack.Screen name="FilmDetail" component={FilmDetail} />
    </SearchStack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator>
        <BottomTab.Screen name="Search" component={SearchStackScreen} />
        <BottomTab.Screen name="Favorites" component={Favorites} />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
