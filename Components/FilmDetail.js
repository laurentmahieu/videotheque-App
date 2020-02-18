// Components/FilmDetail.js

import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  Image,
  Button
} from "react-native";
import { getFilmDetailFromApi, getImageFromApi } from "../API/TMDBApi";
import { ScrollView } from "react-native-gesture-handler";
import moment from "moment";
import { connect } from "react-redux";

class FilmDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      film: undefined,
      isLoading: true
    };
  }

  componentDidMount() {
    getFilmDetailFromApi(this.props.route.params.idFilm).then(data => {
      this.setState({
        film: data,
        isLoading: false
      });
    });
  }

  _toggleFavorite() {
    const action = { type: "TOGGLE_FAVORITE", value: this.state.film };
    this.props.dispatch(action);
  }

  _displayLoading() {
    if (this.state.Loading) {
      return (
        <View style={styles.loading_container}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
  }

  _displayFilm() {
    if (this.state.film != undefined) {
      const film = this.state.film;
      return (
        <ScrollView style={styles.scrollview_container}>
          <Image
            style={styles.image}
            source={{ uri: getImageFromApi(film.backdrop_path) }}
          />
          <View style={styles.main_container}>
            <Image
              style={styles.poster}
              source={{ uri: getImageFromApi(film.poster_path) }}
            />
            <View style={styles.content_container}>
              <Text style={styles.title}>{film.title}</Text>
              <Button title="Favoris" onPress={() => this._toggleFavorite()} />
              <Text>
                Sorti le: {moment(film.release_date).format("DD/MM/YYYY")}
              </Text>
              <Text>Durée: {film.runtime} min</Text>
              <Text>
                Note: {film.vote_average} ({film.vote_count} votants)
              </Text>
              <Text>
                Genre:{" "}
                {film.genres
                  .map(function(company) {
                    return company.name;
                  })
                  .join(" / ")}
              </Text>
            </View>
          </View>
          <Text style={styles.synopsis}>synopsis: {film.overview}</Text>
        </ScrollView>
      );
    }
  }

  render() {
    return (
      <View style={styles.main_container}>
        {this._displayLoading()}
        {this._displayFilm()}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    favoritesFilm: state.favoritesFilm
  };
};

const styles = StyleSheet.create({
  scrollview_container: {
    flex: 1
  },
  main_container: {
    flex: 1,
    height: 190,
    flexDirection: "row"
  },
  poster: {
    width: 120,
    height: 180,
    margin: 5,
    backgroundColor: "gray"
  },
  content_container: {
    flex: 1,
    margin: 5
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 10
  },
  synopsis: {
    textAlign: "justify",
    margin: 5
  },
  loading_container: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    flex: 1,
    width: 400,
    height: 150,
    backgroundColor: "gray"
  }
});

const mapDispatchToProps = dispatch => {
  return {
    dispatch: action => {
      dispatch(action);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilmDetail);
