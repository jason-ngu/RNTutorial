import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './Header';
import LoginBtn from './LoginBtn';

export default class Tutorial extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header headerText={'Welcome!'} />
        <LoginBtn />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
})