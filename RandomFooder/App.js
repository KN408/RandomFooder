import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './components/Header.js';
import GetLocation from './components/GetLocation.js';
import Display from './components/Display.js';
import Footer from './components/Footer.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      grabbedInfo: {},
      called: false,
    };
  }

  grabInfo = (obj) => {
    this.setState({
      grabbedInfo: obj,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Header style={styles.header} />
        <Display style={styles.body} info={this.state.grabbedInfo} />
        <GetLocation style={styles.randomButton} grabInfo={this.grabInfo} />
        <Footer style={styles.footer} />
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
