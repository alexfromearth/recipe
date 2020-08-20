import React, {useEffect} from 'react';
import {Text, Button} from "react-native-elements";
import {connect} from "react-redux";
import {getMealByName} from "../../../../redux/mainReduser";
import {FlatList, Image, ScrollView, StyleSheet, View} from "react-native";
import {DataTable} from "react-native-paper";
import Icon from 'react-native-vector-icons/FontAwesome'
import * as WebBrowser from 'expo-web-browser';
import {Linking} from 'react-native'

function Meal(props) {

    const ingrMeas = Array(20).fill(undefined)
        .map((el, index) => {
            return {
                id: `${index}`,
                ingredient: props.meal[`strIngredient${index + 1}`],
                measure: props.meal[`strMeasure${index + 1}`]
            }
        }).filter((el) => {
            if (el.ingredient && el.measure) {
                return el;
            }
        })

    const {
        idMeal, strMeal, strMealThumb, strInstructions, strArea, strCategory, strYoutube
    } = props.meal;

    useEffect(() => {
        props.getMealByName(props.route.params.name)
    }, [props.getMealByName, props.route.params.name]);

    const handleOpenWithLinking = () => {
        Linking.openURL(strYoutube);
    };

    const handleOpenWithWebBrowser = () => {
        WebBrowser.openBrowserAsync(strYoutube);
    };
    return (
        <View style={styles.container}>
            <ScrollView>
                <Text h1 style={styles.h1}>{strMeal}</Text>
                {strMealThumb && <Image
                    style={styles.logo}
                    source={{
                        uri: strMealThumb,
                    }}
                />}
                <Text style={styles.smallText}>
                    {strArea} dish
                </Text>
                <View>
                    <Text h2 style={styles.h1}>Instructions</Text>
                    <Text style={styles.instText}>{strInstructions}</Text>
                </View>
                <Text h2 style={styles.h1}>Ingredients</Text>
                <DataTable>
                    <DataTable.Header>
                        <DataTable.Title>Ingredients</DataTable.Title>
                        <DataTable.Title numeric>Measure</DataTable.Title>
                    </DataTable.Header>
                    {ingrMeas && ingrMeas.map(({id, ingredient, measure}) => {
                        return (
                            <DataTable.Row key={id}>
                                <DataTable.Cell>{ingredient}</DataTable.Cell>
                                <DataTable.Cell numeric>{measure}</DataTable.Cell>
                            </DataTable.Row>
                        )
                    })}
                </DataTable>
                <Text h2 style={styles.h1}>Video</Text>
                <Button
                    title="Open Video in YouTube App"
                    onPress={handleOpenWithLinking}
                    style={styles.mar}
                /><Button
                    title="Open Video in Browser"
                    onPress={handleOpenWithWebBrowser}
                />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    },
    h1: {
        textAlign: 'center',
    },
    logo: {
        height: 200,
        width: '100%',
    },
    smallText: {
      textAlign: 'center',
    },
    instText: {
        padding: 10,
        textAlign: 'justify',
        fontSize: 15
    },
    mar: {
        marginBottom: 10
    }
});

const mapStateToProps = (state) => {
    return {
        meal: state.appMain.meal,
    }
}

export default connect(mapStateToProps, {
    getMealByName
})(Meal);
