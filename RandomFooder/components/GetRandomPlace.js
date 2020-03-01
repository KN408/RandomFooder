import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import { yelp } from '../Private/key.js';
import axios from 'axios';

Geolocation.setRNConfiguration({
  skipPermissionRequests: false,
  authorizationLevel: 'whenInUse',
});

class GetRandomPlace extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      places: [],
    };
  }

  findPlaceToEat = () => {
    axios
      .get('https://api.yelp.com/v3/businesses/search', {
        params: {
          term: 'drinks',
          latitude: this.props.latitude,
          longitude: this.props.longitude,
          limit: 1,
        },
        headers: {
          Authorization: 'Bearer ' + yelp,
        },
      })
      .then(response => {
        console.log(
          'name: ', response.data.businesses[0].name,
          'imageUrl: ', response.data.businesses[0].image_url,
          'url', response.data.businesses[0].url,
          'coordinates', response.data.businesses[0].coordinates,
          'price:', response.data.businesses[0].price,
          'location', response.data.businesses[0].location);
        this.setState({
          places: response.data.businesses[0],
        });
      })
      .catch(error => {
        console.log(error);
        Alert.alert(error.message);
      });
  };

  render() {
    return (
      <TouchableOpacity style={styles.button} onPress={this.findPlaceToEat}>
        <Text style={styles.text}>Give me a place to eat!</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    height: 60,
    width: 240,
    borderRadius: 100 + 250 / 2,
    backgroundColor: '#6A8D92',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default GetRandomPlace;
