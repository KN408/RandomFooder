import React, { Component } from 'react';
import { Modal, Picker, TouchableHighlight, View, Alert, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();

class FilterModal extends Component {
  state = {
    modalVisible: false,
    typeFilter: '',
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  sendNewSearchTerm = (str) => {
    this.props.updateSearchTerm(str);
  };

  render() {
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          itemStyle={styles.itemStyle}
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
                selectedValue={this.state.typeFilter}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) => {
                  this.setState({ typeFilter: itemValue });
                  this.sendNewSearchTerm(itemValue);
                }}>
                <Picker.Item label="Any Food" value="food" />
                <Picker.Item label="Any Drinks" value="drinks" />
                <Picker.Item label="Acai Bowl" value="acaibowls" />
                <Picker.Item label="Bagels" value="bagels" />
                <Picker.Item label="Bars" value="bars" />
                <Picker.Item label="Churros" value="churros" />
                <Picker.Item label="Coffee & Tea" value="coffee" />
                <Picker.Item label="Food Trucks" value="foodtrucks" />
                <Picker.Item label="Japanese" value="japanese" />
                <Picker.Item label="Mexican" value="mexican" />
                <Picker.Item label="Milk Tea" value="bubbletea" />
                <Picker.Item label="Pizza" value="pizza" />
                <Picker.Item label="Poke" value="poke" />
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
    flexDirection: 'column-reverse',
    marginTop: 20,
  },
  edit: {
    height: 300,
  },
  picker: {
    height: 300,
    width: 415,
    backgroundColor: '#d7d8d9',
    borderRadius: 50,
    alignContent: 'center',
    justifyContent: 'center',
    paddingBottom: 15,
  },
});

export default FilterModal;
