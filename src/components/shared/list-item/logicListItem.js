import React, { Fragment } from 'react';
import { View, Text, TouchableOpacity, TouchableNativeFeedback } from 'react-native';
import styles from './stylesListItem';

// TODO: Implement `<TouchableNativeFeedback />` for android instead of `<TouchableOpacity />`

export default ({ placeName, placeId, pressedItemHandler }) => (
  <Fragment>
    <TouchableOpacity onPress={ pressedItemHandler }>
      <View style={ styles.listItem }>
        <Text>{ placeId }. { placeName }</Text>
      </View>
    </TouchableOpacity>
  </Fragment>
);
