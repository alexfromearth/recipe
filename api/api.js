import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://www.themealdb.com/api/json/v1/1/',
})

class MealAPI {
    getMealByName(name) {
        return instance.get(`search.php?s=${name}`).then((response) => {
            return response.data.meals[0];
        })
    }

    getMealsByLetter(letter) {
        instance.get(`search.php?f=${letter}`).then((response) => {
            return response.meals;
        })
    }

    getMealById(Id) {
        instance.get(`lookup.php?i=${Id}`).then((response) => {
            return response.meals[0];
        })
    }

    getRandomMeal() {
        instance.get('random.php').then((response) => {
            return response.meals[0];
        })
    }

    getAllCategories() {
        return instance.get('categories.php').then((response) => {
            return response.data.categories;
        })
    }

    listNamesOfAllCategories() {
        instance.get('list.php?c=list').then((response) => {
            return response.meals;
        })
    }

    listNamesOfAllAreas() {
        instance.get('list.php?a=list').then((response) => {
            return response.meals;
        })
    }

    listNamesOfAllIngredients() {
        instance.get('list.php?i=list').then((response) => {
            return response.meals;
        })
    }

    filterByMainIngredient(ingredient) {
        instance.get(`filter.php?i=${ingredient}`).then((response) => {
            return response.meals;
        })
    }

    filterByMainCategory(category) {
        return instance.get(`filter.php?c=${category}`).then((response) => {
            return response.data.meals;
        })
    }

    filterByMainArea(area) {
        instance.get(`filter.php?a=${area}`).then((response) => {
            return response.meals;
        })
    }
}


export default MealAPI;
