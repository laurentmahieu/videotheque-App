// Components/Search.js

import React from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  ActivityIndicator
} from "react-native";
import { getFilmsFromApiWithSearchedText } from "../API/TMDBApi";
import FilmList from "./FilmList";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.searchedText = "";
    this.page = 0;
    this.totalPages = 0;
    this.state = {
      films: [],
      isLoading: false
    };
    this._loadFilms = this._loadFilms.bind(this);
  }

  _loadFilms() {
    if (this.searchedText.length > 0) {
      this.setState({ isLoading: true });
      getFilmsFromApiWithSearchedText(this.searchedText, this.page + 1).then(
        data => {
          this.page = data.page;
          this.totalPages = data.total_pages;
          this.setState({
            films: [...this.state.films, ...data.results],
            isLoading: false
          });
        }
      );
    }
  }

  _searchTextInputChanged(text) {
    this.searchedText = text;
  }

  _searchFilms() {
    this.page = 0;
    this.totalPages = 0;
    this.setState(
      {
        films: []
      },
      () => {
        this._loadFilms();
      }
    );
  }

  _displayLoading() {
    if (this.state.isLoading) {
      return (
        <View style={styles.loading_container}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
  }

  render() {
    return (
      <View style={styles.main_container}>
        <TextInput
          style={styles.textinput}
          placeholder="Titre du film"
          onChangeText={text => this._searchTextInputChanged(text)}
          onSubmitEditing={() => this._searchFilms()}
        />
        <Button title="Rechercher" onPress={() => this._searchFilms()} />
        <FilmList
          films={this.state.films} // c'est bien Search qui récupère les donées depuis l'API et on les transmet ici pour que le component FilmList les affiche
          navigation={this.props.navigation} //ici on transmet les informations de navigation pour permettre au component FilmList de naviguer vers le détails d'un film
          loadFilms={this._loadFilms} //_loadFilms charge les films suivants, ça concerne l'API, le component FilmList va juste appeler cette méthode quand l'utilisateur aura parcouru tous les films et c'est le component Search qui lui fournira les films suivants
          page={this.page}
          totalPages={this.totalPages} // les infos page et totalPages vont être utile, coté component FilmList pour ne pas déclencher l'évènement pour ch  arger plus de film si on a atteint la dernière page
          favoritesList={false} //ic j'ai s'implement ajouté un booléen à false pour indiquer qu'on n'est pas dans le cas de l'affichage de la liste des films favoris. Et ainsi pouvoir déclancher le chargement de plus de films lorsque l'utilisateur scrolle.
        />
        {this._displayLoading()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: "#000000",
    borderWidth: 1,
    paddingLeft: 5
  },
  loading_container: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Search;
