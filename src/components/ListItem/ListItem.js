import React, { Fragment } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default ({ placeName }) => (
  <Fragment>
    <View style={ styles.listItem }>
      <Text>Hello, { placeName }</Text>
    </View>
  </Fragment>
);

const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    padding: 15,
    marginBottom: 5,
    backgroundColor: '#eee',
  },
});
