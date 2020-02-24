//components/Home.js

import React from "react";
import {
  View,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet
} from "react-native";
import { getPopularFilm, getImageFromApi } from "../API/TMDBApi";
import { vw } from "react-native-viewport-units";

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
    width: 50 * vw,
    height: 75 * vw
  }
});
