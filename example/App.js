/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import PercentageBar from 'react-native-percentage-reactangle';
type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <PercentageBar 
        width={150}
        percent={20}
        borderWidth={10}
         />
        <PercentageBar 
        source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}  
        width={30}
        percent={80}
        borderWidth={2}
        />
        <PercentageBar 
        width={230}
        percent={75}
        borderWidth={4}
         />
         <PercentageBar 
        width={50}
        percent={13}
        borderWidth={4}
         />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
