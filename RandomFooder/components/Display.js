import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class Display extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{ uri: 'https://via.placeholder.com/250' }}
          />
        </View>
        <View style={styles.infoBlock}>
          <Text>Test</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow',
    flex: 4,
  },
  imageContainer: {
    flex: 2.5,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 250,
    width: 250,
  },
  infoBlock: {
    flex: 1.5,
    flexDirection: 'row',
    backgroundColor: 'green',
  }
});

export default Display;
