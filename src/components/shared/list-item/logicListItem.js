import React, { Fragment } from 'react';
import { View, Text } from 'react-native';
import styles from './stylesListItem';

export default ({ placeName }) => (
  <Fragment>
    <View style={ styles.listItem }>
      <Text>Hello, { placeName }</Text>
    </View>
  </Fragment>
);