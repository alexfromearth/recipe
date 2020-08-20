import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Button, ScrollView} from 'react-native';
import {ListItem} from "react-native-elements";
import {connect} from "react-redux";
import Category from "./Category";
import {getCategories} from "../../../redux/mainReduser";

function Categories(props) {
    const {categories} = props;

    useEffect(() => {
        props.getCategories();
    }, [])

    function goToOtherScreen(ScreenName, params) {
        props.navigation.navigate(ScreenName, params);
    }

    return (
        <View style={styles.container}>
            <ScrollView>
            {categories && categories.map(({idCategory, strCategory, strCategoryThumb}) => {
                return <ListItem
                    key={idCategory}
                    leftAvatar={{
                        title: strCategory[0],
                        source: { uri: strCategoryThumb },
                    }}
                    title={strCategory}
                    onPress={() => (goToOtherScreen('Meals', {name: strCategory}))}
                    chevron
                />
            })}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    }
})

const mapStateToProps = (state) => {
    return {
        categories: state.appMain.categories,
    }
}

export default connect(mapStateToProps, {
    getCategories
})(Categories);
