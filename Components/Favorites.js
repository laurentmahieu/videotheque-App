// Components/Favorite.js

import React from "react";
import { StyleSheet, Text } from "react-native";
import { connect } from "react-redux";

class Favorites extends React.Component {
  render() {
    return <Text>Mes Favoris</Text>;
  }
}

const styles = StyleSheet.create({});

const mapStateToProps = state => {
  return { 
    favoritesFilm: state.favoritesFilm 
  };
};

export default connect(mapStateToProps)(Favorites);
