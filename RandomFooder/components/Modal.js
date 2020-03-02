import React, {Component} from 'react';
import { Modal, Text, TouchableHighlight, View, Alert, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();

class ModalTest extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={styles.close}>
            <View style={styles.edit}>
              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Icon name="times-circle" size={35} color="black" />
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Icon name="edit" size={35} color="white" />
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
  edit: {
    backgroundColor: 'blue',
  },
});

export default ModalTest;
