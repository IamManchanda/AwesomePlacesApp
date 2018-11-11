import React, { Fragment, Component } from 'react';
import { View } from 'react-native';
import styles from './stylesApp';

import PlaceInput from '../shared/place-input/logicPlaceInput';
import ListItem from '../shared/list-item/logicListItem';

export default class App extends Component {
  state = {
    places: [],
  };

  placeAddedHandler = (placeName) => {
    this.setState((prevState) => {
      return {
        places: [...prevState.places, placeName],
      };
    });
  }

  get renderPlacesOutput() {
    return this.state.places.map((place, index) => (
      <Fragment key={ index }>
        <ListItem placeName={ place } />
      </Fragment>
    ));
  }

  render() {
    const { placeAddedHandler, renderPlacesOutput } = this; // Methods & Computed

    return (
      <Fragment>
        <View style={ styles.container }>
          <PlaceInput placeAddedHandler={ placeAddedHandler } />
          <View style={ styles.listContainer }>{ renderPlacesOutput }</View>
        </View>
      </Fragment>
    );
  }
};
