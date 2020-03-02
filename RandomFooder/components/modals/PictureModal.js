import React, {Component} from 'react';
import { Modal, ScrollView, TouchableHighlight, View, Alert, StyleSheet, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import { yelp } from '../../Private/key.js';

Icon.loadFont();

class PictureModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
      photos: [],
    };
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  getPhotos = (id) => {
    axios
      .get(`https://api.yelp.com/v3/businesses/${id}`, {
        headers: {
          Authorization: 'Bearer ' + yelp,
        },
      })
      .then(response => {
        let newPhotos = response.data.photos;
        this.setState({
          photos: newPhotos,
        });
      })
      .catch(error => {
        Alert.alert('Error grabbing photos.');
      });
  };

  componentDidMount() {
    if (this.props.id !== undefined) {
      this.getPhotos(this.props.id);
    }
  }

  render() {
    let photoArray = this.state.photos;
    let pictures = photoArray.map((picture, index) => {
      return <Image style={styles.image} source={{ uri: picture }} key={index} />;
    });

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
            <View style={styles.scrollContainer}>
              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Icon style={styles.icon} name="times-circle" size={35} color="black" />
              </TouchableHighlight>
              <ScrollView style={styles.scrollView}>{pictures}</ScrollView>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
            this.getPhotos(this.props.id);
          }}>
          <Icon name="image" size={35} color="black" />
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
  scrollView: {
    backgroundColor: 'white',
    marginHorizontal: 10,
  },
  scrollContainer: {
    flex: 1,
    alignContent: 'center',
  },
  image: {
    height: 350,
    width: 350,
    margin: 5,
  },
});

export default PictureModal;
