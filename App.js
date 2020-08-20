import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View, Button} from 'react-native';
import {createDrawerNavigator} from "@react-navigation/drawer";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Home from "./components/Home";
import First from "./components/Search/Category/First";
import Categories from "./components/Search/Category/Categories";
import {Provider} from "react-redux";
import store from "./redux/redux-store";
import Category from "./components/Search/Category/Category";
import Meal from "./components/Search/Category/Meal/Meal";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function App() {
    const createStackCategories = () => {
        return (
            <Stack.Navigator>
                <Stack.Screen name="Categories" component={Categories}/>
                <Stack.Screen name="Meals" component={Category}/>
                <Stack.Screen name="Meal" component={Meal}/>
            </Stack.Navigator>
        )
    }
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Drawer.Navigator>
                    <Drawer.Screen name="Home" component={Home}/>
                    <Drawer.Screen name="Categories" children={createStackCategories}/>
                </Drawer.Navigator>
            </NavigationContainer>
        </Provider>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontSize: 30,
        textAlign: 'center'
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    }
});

