import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Header = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.tcontainer}>{props.headerText}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',   // vertical
        justifyContent: 'center',   // horizontal
        backgroundColor: '#F8F8F8',
        paddingTop: 20,
        height: 64,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative',
        marginBottom: 50,
    },
    tcontainer: {
        justifyContent: 'center',
        fontSize: 64,
        fontWeight: 'bold',
        color: 'black',
    },
})

export default Header;
