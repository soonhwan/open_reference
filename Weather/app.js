import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import Weather from './Weather';

export default class App extends Component {
  state = {
    isLoaded: true
  }
  
  render() {
    const { isLoaded } = this.state;
    return (
      <View style={styles.container}>
        {isLoaded ? (<Weather />) : (
          <View style={styles.loading}>
            <Text style={styles.loadingText}>Getting the fucking weather</Text>
            
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1'
  },
  loading:{
    flex:1,
    backgroundColor:'#dfd6aa',
    justifyContent: 'flex-end'
  },
  loadingText:{
    fontSize: 38,
    marginBottom: 100,
    marginLeft: 25
  }
});
