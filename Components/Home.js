//components/Home.js

// voir numcolumns with flatLits to wrap!!!!

import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet
} from "react-native";
import { getPopularFilm, getImageFromApi } from "../API/TMDBApi";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      popularFilm: []
    };
  }

  componentDidMount() {
    getPopularFilm().then(data => {
      this.setState({
        popularFilm: [...this.state.popularFilm, ...data.results]
      });
    });
  }

  render() {
    return (
      <View>
        <Text>TEST</Text>
        <FlatList
          data={this.state.popularFilm}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.main_container}>
              <Image
                style={styles.image}
                source={{ uri: getImageFromApi(item.poster_path) }}
              />
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    flex: 1
  },
  main_container: {
    flex: 1,
    backgroundColor: "black"
  },
  image: {
    width: 180,
    height: 270
  }
});
