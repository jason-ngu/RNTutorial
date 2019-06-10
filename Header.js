import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Header = (props) => {
    return (
        <View style = {styles.container}>
            <Text style={styles.tcontainer}>{props.headerText}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F8F8F8',
    paddingTop: 20,
    height: 60,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  },
  tcontainer: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'red',
  },
})

export default Header;
