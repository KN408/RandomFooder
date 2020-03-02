import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uri: 'https://via.placeholder.com/250',
    };
  }

  render() {
    let info = this.props.info;
    let url;
    let name = '';

    if (info.imageUrl === undefined) {
      url = this.state.uri;
    } else {
      url = info.imageUrl;
      name = info.name;
    }

    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: url }} />
          <View style={styles.titleContainer}>
            <Icon name="heart" size={25} color="red" />
            <Text style={styles.title}>{name}</Text>
            <Icon name="map" size={25} color="green" />
          </View>
        </View>
        <View style={styles.infoBlock}>
          <Text>{info.price}</Text>
          <Text>
            <Text>{info.rating} </Text>
            <Icon name="star" size={18} color="#F3DE2C" />
          </Text>
          <Text>{info.category}</Text>
          <Text>{info.address}</Text>
          <Text>{info.city}</Text>
          <Text>{info.state}</Text>
          <Text>{info.zip_code}</Text>
          {/* <Text>
            {info.price}
            {info.category}
            {info.address}
            {info.city}
            {info.state}
            {info.zip_code}
          </Text> */}
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
    justifyContent: 'space-evenly',
  },
  image: {
    height: 300,
    width: 300,
  },
  infoBlock: {
    flex: 1.5,
    backgroundColor: 'green',
    alignItems: 'center',
  },
  title: {
    fontSize: 35,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'grey',
    width: '100%',
  },
});

export default Display;
