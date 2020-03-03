import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './components/Header.js';
import GetLocation from './components/GetLocation.js';
import Display from './components/Display.js';
import Footer from './components/Footer.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      grabbedInfo: {},
      searchTerm: 'food',
      userLocation: '',
    };
  }

  grabUserLocation = (str) => {
    this.setState({
      userLocation: str,
    });
  };

  grabInfo = (obj) => {
    this.setState({
      grabbedInfo: obj,
    });
  };

  updateSearchTerm = (str) => {
    this.setState({
      searchTerm: str,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Header style={styles.header} />
        <Display style={styles.body} info={this.state.grabbedInfo} />
        <GetLocation
          style={styles.randomButton}
          searchTerm={this.state.searchTerm}
          grabInfo={this.grabInfo}
          grabUserLocation={this.grabUserLocation}
        />
        <Footer
          eatLocation={this.state.grabbedInfo.locationStr}
          style={styles.footer}
          userLocation={this.state.userLocation}
          updateSearchTerm={this.updateSearchTerm}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
  },
  body: {
    flex: 2,
    justifyContent: 'center',
    alignContent: 'center',
  },
  randomButton: {
    flex: 1,
  },
  footer: {
    flex: 1,
  },
});

export default App;
