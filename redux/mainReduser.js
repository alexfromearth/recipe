import MealAPI from '../api/api';

const mealAPI = new MealAPI();
// actioaction type consts
const SET_MEALS = "SET_MEALS"
const CLEAR_MEALS = "CLEAR_MEALS"
const CLEAR_CATEG = "CLEAR_CATEG"
const SET_CATEGORIES = "SET_CATEGORIES"
const SET_MEAL = "SET_MEAL"
const CLEAR_MEAL = "CLEAR_MEAL"

const initialState = {
        categories: [
            // {
            //     idCategory: "1",
            //     strCategory: "Beef",
            //     strCategoryThumb: "https://www.themealdb.com/images/category/beef.png",
            //     strCategoryDescription: "Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times.[1] Beef is a source of high-quality protein and essential nutrients.[2]"
            // },
            // {
            //     idCategory: "2",
            //     strCategory: "Chicken",
            //     strCategoryThumb: "https://www.themealdb.com/images/category/chicken.png",
            //     strCategoryDescription: "Chicken is a type of domesticated fowl, a subspecies of the red junglefowl. It is one of the most common and widespread domestic animals, with a total population of more than 19 billion as of 2011.[1] Humans commonly keep chickens as a source of food (consuming both their meat and eggs) and, more rarely, as pets."
            // },
            // {
            //     idCategory: "3",
            //     strCategory: "Dessert",
            //     strCategoryThumb: "https://www.themealdb.com/images/category/dessert.png",
            //     strCategoryDescription: "Dessert is a course that concludes a meal. The course usually consists of sweet foods, such as confections dishes or fruit, and possibly a beverage such as dessert wine or liqueur, however in the United States it may include coffee, cheeses, nuts, or other savory items regarded as a separate course elsewhere. In some parts of the world, such as much of central and western Africa, and most parts of China, there is no tradition of a dessert course to conclude a meal.\r\n\r\nThe term dessert can apply to many confections, such as biscuits, cakes, cookies, custards, gelatins, ice creams, pastries, pies, puddings, and sweet soups, and tarts. Fruit is also commonly found in dessert courses because of its naturally occurring sweetness. Some cultures sweeten foods that are more commonly savory to create desserts."
            // },
            // {
            //     idCategory: "4",
            //     strCategory: "Lamb",
            //     strCategoryThumb: "https://www.themealdb.com/images/category/lamb.png",
            //     strCategoryDescription: "Lamb, hogget, and mutton are the meat of domestic sheep (species Ovis aries) at different ages.\r\n\r\nA sheep in its first year is called a lamb, and its meat is also called lamb. The meat of a juvenile sheep older than one year is hogget; outside the USA this is also a term for the living animal. The meat of an adult sheep is mutton, a term only used for the meat, not the living animals. The term mutton is almost always used to refer to goat meat in the Indian subcontinent.\r\n\r\n"
            // },
        ],
        category: null,
        meals: [],
        meal: {},
        isFetching: false,
    }


const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MEALS: {
            return {
                ...state, meals: action.category
            }
        }
        case CLEAR_MEALS: {
            return {
                ...state, meals: [],
            }
        }
        case CLEAR_MEAL: {
            return {
                ...state, meal: {},
            }
        }
        case CLEAR_CATEG: {
            return {
                ...state, categories: []
            }
        }
        case SET_CATEGORIES: {
            return {
                ...state, categories: action.categories
            }
        }
        case SET_MEAL: {
            return {
                ...state, meal: action.meal
            }
        }
        default:
            return state;
    }
}


//thunk and action creators

const setCurrentMeals = (category) => ({type: SET_MEALS, category})
const setCategories = (categories) => ({type: SET_CATEGORIES, categories})
const setMeal = (meal) => ({type: SET_MEAL, meal})
const clearMeals = () => ({type: CLEAR_MEALS})
const clearCategories = () => ({type: CLEAR_CATEG})
const clearMeal = () => ({type: CLEAR_MEAL})

export const getCategoryInfo = (categoryName) => {
    return async (dispatch) => {
        dispatch(clearMeals());
        const response = await mealAPI.filterByMainCategory(categoryName);
        if (response) {
            dispatch(setCurrentMeals(response));
        }
    }
}


export const getCategories = () => {
    return async (dispatch) => {
        dispatch(clearCategories());
        const response = await mealAPI.getAllCategories();
        if (response) {
            dispatch(setCategories(response));
        }
    }
}

export const getMealByName = (mealName) => {
    return async (dispatch) => {
        dispatch(clearMeal());
        const response = await mealAPI.getMealByName(mealName);
        if (response) {
            dispatch(setMeal(response));
        }
    }
}

export default mainReducer;
