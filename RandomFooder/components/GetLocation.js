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
      latitude: null,
      longitude: null,
      places: [],
    };
  }

  sendUserInfo = (str) => {
    this.props.grabUserLocation(str);
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
        this.sendUserInfo(latitude + ',' + longitude);
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
      <View style={styles.button}>
        <GetRandomPlace
          latitude={this.state.latitude}
          longitude={this.state.longitude}
          grabInfo={this.props.grabInfo}
          searchTerm={this.props.searchTerm}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    flex: 0.75,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default GetLocation;
