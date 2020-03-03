import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PictureModal from './modals/PictureModal.js';

Icon.loadFont();

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uri: 'https://i.picsum.photos/id/429/300/300.jpg',
      photos: [],
    };
  }

  render() {
    let info = this.props.info;
    let url;
    let name = '';
    let icon;

    if (info.imageUrl === undefined) {
      url = this.state.uri;
    } else {
      url = info.imageUrl;
      name = info.name;
    }

    if (info.rating === undefined) {
      icon = <Icon name="star" size={20} color="white" />;
    } else {
      icon = <Icon name="star" size={20} color="#F3DE2C" />;
    }

    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: url }} />
          <View style={styles.titleContainer}>
            <PictureModal id={info.id} />
            <Text style={styles.title}>{name}</Text>
            <Icon style={styles.rightIcon} name="share-square" size={30} color="black" />
          </View>
        </View>
        <View style={styles.infoBlock}>
          <View style={styles.categoryView}>
            <Text style={styles.categoryText}>{info.category}</Text>
          </View>
          <View style={styles.priceStarView}>
            <Text style={styles.priceStarText}>{info.price}</Text>
            <Text>
              <Text style={styles.priceStarText}>{info.rating} </Text>
              {icon}
            </Text>
          </View>
          <View style={styles.addressView}>
            <Text style={styles.addressText}>{info.address}, {info.city}</Text>
            <Text style={styles.addressText}>{info.state} {info.zip_code}</Text>
          </View>
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
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderColor: 'white',
    borderBottomColor: 'black',
    borderWidth: 2,
  },
  image: {
    height: 300,
    width: 300,
  },
  infoBlock: {
    flex: 1.5,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 34,
    textAlign: 'center',
    fontWeight: '400',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  leftIcon: {
    paddingLeft: 20,
  },
  rightIcon: {
    paddingRight: 15,
  },
  priceStarView: {
    flex: 0.15,
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceStarText: {
    fontSize: 20,
    margin: 5,
  },
  categoryView: {
    flex: 0.2,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryText: {
    fontSize: 24,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  addressView: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  addressText: {
    fontSize: 18,
  },
});

export default Display;
