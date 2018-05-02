import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import MapView from 'react-native-maps-clusters';




export default class App extends Component {
  render() {

    const data = [
      { id: 1, currency: '€', price: 123, latitude: 55.6732765, longitude: 12.5670903 },
      { id: 2, currency: '$', price: 69, latitude: 55.6839255, longitude: 12.5576476 },
      { id: 3, currency: '£', price: 666, latitude: 55.6799209, longitude: 12.5800284 },
    ]

    
    return (
      <View style={styles.container}>
            <MapView data={data} />
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
