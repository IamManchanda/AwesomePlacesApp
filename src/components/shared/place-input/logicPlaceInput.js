import React, { Component, Fragment } from 'react';
import { View, TextInput, Button } from 'react-native';

import styles from './stylesPlaceInput';

export default class PlaceInput extends Component {
  state = {
    placeName: ''
  };

  placeNameChangedHandler = (value) => {
    this.setState({ 
      placeName: value 
    });
  };

  placeSubmitHandler = () => {
    const { placeName } = this.state;
    if (placeName.trim() === '') return undefined;
    this.props.placeAddedHandler(placeName);
  };

  render () {
    const { placeName } = this.state; // Data
    const { placeNameChangedHandler, placeSubmitHandler } = this; // Methods

    return (
      <Fragment>
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
      </Fragment>
    );
  }
};