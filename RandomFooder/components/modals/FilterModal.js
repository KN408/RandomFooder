import React, {Component} from 'react';
import { Modal, Picker, TouchableHighlight, View, Alert, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();

class FilterModal extends Component {
  state = {
    modalVisible: false,
    typeFilter: 'food',
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <View>
        <Modal
          animationType="slide"
          style={styles.modalStyle}
          transparent={ true }
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
              <Picker
                selectedValue={this.state.language}
                style={{height: 50, width: 100}}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ typeFilter: itemValue })
                }>
                <Picker.Item label="Any Food" value="food" />
                <Picker.Item label="Any Drinks" value="japanese" />
                <Picker.Item label="Milk Tea" value="japanese" />
                <Picker.Item label="Japanese" value="japanese" />
              </Picker>
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
  modalStyle: {
    margin: 0,
    height: 100,
    width: 100,
    backgroundColor: 'green',
  },
});

export default FilterModal;
