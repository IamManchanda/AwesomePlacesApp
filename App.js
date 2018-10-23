/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

const helloWorld = Platform.select({
  ios: 'Hello iOS World!',
  android: 'Hello Android World!',
});

export default class App extends Component {
  render() {
    return (
      <View style={ styles.container }>
        <Text style={ styles.welcome }>React Native</Text>
        <Text style={ styles.helloWorld }>{ helloWorld }</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#decade',
  },
  welcome: {
    fontSize: 24,
    textAlign: 'center',
    margin: 10,
  },
  helloWorld: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    fontSize: 30,
  },
});
