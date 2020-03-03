import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import FilterModal from './modals/FilterModal.js';
import MapModal from './modals/MapModal.js';

Icon.loadFont();

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  sendNewSearch = (str) => {
    this.props.updateSearchTerm(str);
  }

  render() {
    return (
      <View style={styles.footer}>
        <View style={styles.iconBox}>
          <FilterModal updateSearchTerm={this.sendNewSearch} />
        </View>
        <View style={styles.iconBox}>
          <Icon name="heart" size={35} color="white" />
        </View>
        <View style={styles.iconBox}>
          <Icon name="user-circle" size={45} color="white" />
        </View>
        <View style={styles.iconBox}>
          <Icon name="save" size={35} color="white" />
        </View>
        <View style={styles.iconBox}>
          <MapModal
            eatLocation={this.props.eatLocation}
            userLocation={this.props.userLocation}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    height: 90,
    backgroundColor: '#6D676E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 24,
  },
  iconBox: {
    flex: 1,
    height: '100%',
    backgroundColor: '#6D676E',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    paddingBottom: 25,
  },
});

export default Footer;
