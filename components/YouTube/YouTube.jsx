import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import YouTube from 'react-native-youtube';

export default class YoutubeExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isReady: false,
            status: "",
            quality: "",
            error: ""
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>{`Status: ${this.state.status}`}</Text>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    youtube: {
        alignSelf: 'stretch',
        height: 300
    }
});
