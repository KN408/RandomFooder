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
      searchTerm: 'food',
    };
  }

  sendInfo = (obj) => {
    this.props.grabInfo(obj);
  }

  getRandomNumber = () => {
    let number = Math.floor(Math.random() * 10);
    return number;
  }

  findPlaceToEat = () => {
    axios
      .get('https://api.yelp.com/v3/businesses/search', {
        params: {
          term: this.state.searchTerm,
          latitude: this.props.latitude,
          longitude: this.props.longitude,
          limit: 11,
        },
        headers: {
          Authorization: 'Bearer ' + yelp,
        },
      })
      .then(response => {
        let random = this.getRandomNumber();
        let result = {
          name: response.data.businesses[random].name,
          imageUrl: response.data.businesses[random].image_url,
          url: response.data.businesses[random].url,
          coordinates: response.data.businesses[random].coordinates,
          latitude: response.data.businesses[random].coordinates.latitude,
          longitude: response.data.businesses[random].coordinates.longitude,
          locationStr:
            `${response.data.businesses[random].coordinates.latitude},` +
            `${response.data.businesses[random].coordinates.longitude}`,
          price: response.data.businesses[random].price,
          address: response.data.businesses[random].location.address1,
          city: response.data.businesses[random].location.city,
          state: response.data.businesses[random].location.state,
          zip_code: response.data.businesses[random].location.zip_code,
          category: response.data.businesses[random].categories[0].title,
          rating: response.data.businesses[random].rating,
          distance: response.data.businesses[random].distance,
          id: response.data.businesses[random].id,
        };
        this.sendInfo(result);
      })
      .catch(error => {
        console.log(error);
        Alert.alert(error.message);
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={this.findPlaceToEat}>
          <Text style={styles.text}>Give me a place to eat!</Text>
        </TouchableOpacity>
      </View>
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
    alignContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});

export default GetRandomPlace;
