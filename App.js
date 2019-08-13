import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {

  UNSAFE_componentWillMount(props) {
    navigator.geolocation.getCurrentPosition(position => {
      console.log('1');
      this._getPM(position.coords.latitude, position.coords.longitude)
    }, error => {
      console.log(error)
    })
  }
  
  _getPM = (lat, long) => {
    fetch(`https://api.airvisual.com/v2/nearest_city?lat=50&lon=50&key=occ77kxtDezR39ADA`)//fetch(`https://api.airvisual.com/v2/nearest_city?lat=${lat}&lon=${long}&key=occ77kxtDezR39ADA`)
    .then(response => JSON.parse(response._bodyInit) )
    .then(json => {
      console.log(json)
    })
  }

  render() {
    let i = this._getPM();
    return (
    
      <View style={styles.container}>
        <Text>asdf</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
