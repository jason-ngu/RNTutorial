import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

export default class ItemList extends Component {
    state = { myList: [] };

    componentWillMount() {
        axios.get('http://reduxblog.herokuapp.com/api/posts')
            .then(response => this.setState({ myList: response.data }));
    }

    render() {
        console.log(this.state);

        return (
            <View>
                <Text>This is my list!!!</Text>
            </View>
        );
    }
}
