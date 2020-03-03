import React, {Component} from 'react';
import { Modal, ScrollView, TouchableHighlight, View, Alert, StyleSheet, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import { key } from '../../Private/key.js';

Icon.loadFont();

console.disableYellowBox = true;

class MapModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
      url: 'https://via.placeholder.com/250',
    };
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  getMapImg = () => {
    let url = `https://maps.googleapis.com/maps/api/staticmap?zoom=15&size=375x600&key=${key}&markers=size:mid%7Ccolor:green%7Clabel:A%7C${this.props.userLocation}&markers=size:mid%7Ccolor:red%7Clabel:B%7C${this.props.eatLocation}&format=jpg`;

    axios
      .get(url)
      .then(response => {
        this.setState({
          url: response.request.responseURL,
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <View>
        <Modal
          animationType="slide"
          style={styles.modalStyle}
          transparent={ false }
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={styles.close}>
            <View style={styles.mapContainer}>
              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                  this.getMapImg();
                }}>
                <Icon style={styles.icon} name="times-circle" size={35} color="black" />
              </TouchableHighlight>
              <Image style={styles.image} source={{uri: this.state.url}} />
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
            this.getMapImg();
          }}>
          <Icon name="map" size={35} color="white" />
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  close: {
    flex: 1,
    marginTop: 20,
    paddingLeft: 15,
    paddingTop: 15,
  },
  icon: {
    paddingLeft: 20,
  },
  modalStyle: {
    margin: 0,
    height: 100,
    width: 100,
    backgroundColor: 'green',
  },
  mapContainer: {
    flex: 1,
    alignContent: 'center',
  },
  image: {
    height: 600,
    width: 375,
    margin: 5,
  },
});

export default MapModal;
