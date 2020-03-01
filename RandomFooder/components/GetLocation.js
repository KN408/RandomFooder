import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import GetRandomPlace from './GetRandomPlace.js';

Geolocation.setRNConfiguration({
  skipPermissionRequests: false,
  authorizationLevel: 'whenInUse',
});

class GetLocation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: '0',
      longitude: '0',
      places: [],
    };
  }
  // Function for finding user's location
  findCoordinates = () => {
    Geolocation.getCurrentPosition(
      position => {
        const latitude = JSON.stringify(position.coords.latitude);
        const longitude = JSON.stringify(position.coords.longitude);
        this.setState({
          latitude: latitude,
          longitude: longitude,
        });
      },
      error => {
        Alert.alert(error.message);
      },
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 60 * 60,
      },
    );
  };

  componentDidMount() {
    this.findCoordinates();
  }

  render() {
    return (
      <View style={styles.container}>
        <GetRandomPlace
          latitude={this.state.latitude}
          longitude={this.state.longitude}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'flex-end',
    paddingBottom: 60,
    alignItems: 'center',
  },
});

export default GetLocation;
