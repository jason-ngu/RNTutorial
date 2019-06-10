import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Header from './Header';
import ItemList from './ItemList';

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View>
        <Header headerText={'Testing'}/>
        <ItemList />
      </View>
    );
  }
}