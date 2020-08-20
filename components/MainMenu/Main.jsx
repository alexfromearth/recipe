import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import Home from "./components/Home";
import Details from "./components/Details";
import {Ionicons, AntDesign} from "@expo/vector-icons";

const MaterialBottomTabNavigator = createMaterialBottomTabNavigator();

function Main(props) {
    return (
        <NavigationContainer>
            <MaterialBottomTabNavigator.Navigator screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'ios-information-circle'
                            : 'ios-information-circle-outline';
                        return <Ionicons name={iconName} size={size} color={color}/>;
                    } else if (route.name === 'Details') {
                        iconName = focused ? 'star' : 'staro';
                        return <AntDesign name={iconName} size={size} color={color}/>
                    }
                },
            })} tabBarOptions={{activeTintColor: 'tomato', inactiveTintColor: 'gray',}}>
                <MaterialBottomTabNavigator.Screen name="Home" component={Home}/>
                <MaterialBottomTabNavigator.Screen name="Details" component={Details}/>
            </MaterialBottomTabNavigator.Navigator>
        </NavigationContainer>
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
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    }
});


export default Main;
