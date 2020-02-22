// Components/Favorite.js

import React from "react";
import { StyleSheet, Text } from "react-native";
import { connect } from "react-redux";
import FilmList from "../Components/FilmList";

class Favorites extends React.Component {
  render() {
    return (
      <FilmList
        films={this.props.favoritesFilm}
        navigation={this.props.navigation}
        FavoriteList={true} // ici on est bien dans le cas de la liste des films favoris. Ce booléen à true permettra d'empêcher de lancer la recherche de plus de films après le scroll lorsquon est sur la vue Favoris.
      />
    );
  }
}

const styles = StyleSheet.create({});

const mapStateToProps = state => {
  return {
    favoritesFilm: state.favoritesFilm
  };
};

export default connect(mapStateToProps)(Favorites);
