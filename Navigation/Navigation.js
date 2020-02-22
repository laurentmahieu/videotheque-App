// Navigation/Navigation.js

import React from "react";
import { StyleSheet, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Favorites from "../Components/Favorites";
import Search from "../Components/Search";
import Home from "../Components/Home";
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

const FavoritesStack = createStackNavigator();

function FavoritesStackScreen() {
  return (
    <FavoritesStack.Navigator>
      <FavoritesStack.Screen name="Favoris" component={Favorites} />
      <FavoritesStack.Screen name="FilmDetail" component={FilmDetail} />
    </FavoritesStack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        screenOptions={route => ({
          tabBarIcon: () => {
            if (route.route.name === "Rechercher") {
              return (
                <Image
                  source={require("../Images/ic_search.png")}
                  style={styles.icon}
                />
              );
            } else if (route.route.name === "Favorites") {
              return (
                <Image
                  source={require("../Images/ic_favorite.png")}
                  style={styles.icon}
                />
              );
            }
          }
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray"
        }}
      >
        <BottomTab.Screen name="Rechercher" component={SearchStackScreen} />
        <BottomTab.Screen name="Home" component={Home} />
        <BottomTab.Screen name="Favorites" component={FavoritesStackScreen} />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30
  }
});

export default Navigation;
