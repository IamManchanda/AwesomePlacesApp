import React, { Fragment, Component } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import ListItem from './src/components/ListItem/ListItem';

export default class App extends Component {
  state = {
    placeName: '',
    places: [],
  };

  placeNameChangedHandler = (value) => {
    this.setState({ placeName: value });
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === '') return undefined;
    this.setState((prevState) => {
      return {
        places: [...prevState.places, prevState.placeName],
      };
    });
  };

  get renderPlacesOutput() {
    return this.state.places.map((place, index) => (
      <Fragment key={ index }>
        <ListItem placeName={ place } />
      </Fragment>
    ));
  }

  render() {
    const { placeName } = this.state; // Data
    const { placeNameChangedHandler, placeSubmitHandler } = this; // Methods
    const { renderPlacesOutput } = this; // Computed

    return (
      <Fragment>
        <View style={ styles.container }>
          <View style={ styles.inputContainer }>
            <TextInput
              value={ placeName }
              style={ styles.placeInput }
              placeholder="Search for an Awesome Place"
              onChangeText={ placeNameChangedHandler } />
            <Button
              title="Add"
              style={ styles.placeButton }
              onPress={ placeSubmitHandler }
            />
          </View>
          <View style={ styles.listContainer }>
            { renderPlacesOutput }
          </View>
        </View>
      </Fragment>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  inputContainer: {
    width: '100%',
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  placeInput: {
    width: '70%',
  },
  placeButton: {
    width: '30%',
  },
  listContainer: {
    width: '100%',
  },
});
