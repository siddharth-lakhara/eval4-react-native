import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import Header from './components/header/header';
import BodyComponent from './components/body/body';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    };
    this.setHeaderText = this.setHeaderText.bind(this);
  }

  setHeaderText(newUserName) {
    this.setState({
      username: newUserName,
    });
  }

  render() {
    return (
      <View style={styles.App}>
        {/* <Text>its working</Text> */}
        <Header username={this.state.username} />
        {/* <BodyComponent setHeaderText={this.setHeaderText} /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  App: {
    display: 'flex',
    flexDirection: 'column',
    padding: 0,
    margin: 0,
    height: '100%',
  },
});
