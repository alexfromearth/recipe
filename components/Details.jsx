import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function Details(props) {
    return (
        <View style={styles.container}>
            <Text>werwer</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    Text: {
        color: 'white',
    }
});
export default Details;
