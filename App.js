/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

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
    fontSize: 32,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    fontSize: 16,
  },
});

const helloWorld = Platform.select({
  ios: 'iOS',
  android: 'Android',
});

const instructions = Platform.select({
  ios: `
    Press Cmd+R to reload,
    Cmd+D or Shake for dev menu`,
  android: `
    Double tap R on your keyboard to reload,
    Cmd+M or Shake for dev menu`,
});

export default class App extends Component {
  render() {
    return (
      <View style={ styles.container }>
        <Text style={ styles.welcome }>React Native</Text>
        <Text style={ styles.helloWorld }>Hello { helloWorld } World</Text>
        <Text style={ styles.instructions }>{ instructions }</Text>
      </View>
    );
  }
}
