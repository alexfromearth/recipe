import React, {useEffect, useState} from 'react';
import {ScrollView, Text, TextInput, View} from "react-native";
import {connect} from "react-redux";
import {getCategoryInfo} from "../../../redux/mainReduser";
import {ListItem} from "react-native-elements";

function Category(props) {
    const [text, onChangeText] = useState('');
    useEffect(() => {
        props.getCategoryInfo(props.route.params.name);
    }, [props.getCategoryInfo, props.route.params.name])

    function goToOtherScreen(ScreenName, params) {
        props.navigation.navigate(ScreenName, params);
    }

    return (
        <View>
            <ScrollView>
            {props.meals && props.meals.map(({idMeal, strMealThumb, strMeal}) => {
                return <ListItem
                    key={idMeal}
                    leftAvatar={{
                        title: strMeal[0],
                        source: { uri: strMealThumb },
                    }}
                    title={strMeal}
                    onPress={() => (goToOtherScreen('Meal', {name: strMeal}))}
                    chevron
                />
            })}
            </ScrollView>
        </View>

    );
}

const mapStateToProps = (state) => {
    return {
        meals: state.appMain.meals
    }
}

export default connect(mapStateToProps, {
    getCategoryInfo
})(Category);

