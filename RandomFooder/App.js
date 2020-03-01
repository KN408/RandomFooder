import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './components/Header.js';
import GetLocation from './components/GetLocation.js';
import Display from './components/Display.js';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Display />
        <GetLocation />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
