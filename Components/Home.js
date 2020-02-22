//components/Home.js

import React from "react";
import { View, Text } from "react-native";
import getpopularFilm from "../API/TMDBApi";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      popularFilm: []
    };
  }

  render() {
    console.log("-----------------");
    return (
      <View>
        <Text>Home</Text>
        <Text>Home</Text>
      </View>
    );
  }
}

export default Home;
