import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Header = (props) => {
  return (
    <View>
      <Text style={styles.header}>{props.headerText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 64,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 50,
    marginBottom: 50
  },
})

export default Header;
