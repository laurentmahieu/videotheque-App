// Navigation/Navigation.js

import { createStackNavigator } from "react-navigation";
import Search from "../Components/Search";

const SearchStackNavigator = createStackNavigator({
  Search: {
    screen: Search,
    navigationOptions: {
      title: "Rechercher"
    }
  }
});
