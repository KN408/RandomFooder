import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.text}>RandomFooder</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: 85,
    padding: 10,
    backgroundColor: '#6D676E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 24,
    paddingTop: 30,
  },
});

export default Header;
