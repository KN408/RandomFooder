import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Display extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <View style={styles.container} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: 'green',
  },
});

export default Display;
