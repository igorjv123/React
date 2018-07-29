import {
    FETCH_RECIPES,
    ADD_RECIPE,
    DELETE_RECIPE,
    LOADED_RECIPES,
    ADD_RECIPE_SUCCESS,
    SORT_RECIPE_RATING,
    FETCH_ONE_RECIPE,
    UPDATE_RECIPE
} from '../actions/recipes'
import 'bulma/css/bulma.css'
export const RECIPES_DEFAULT_STATE = {
    loading: false,
    saving: false,
    error: '',
    items: []
}

export default function recipes(state = RECIPES_DEFAULT_STATE, action) {
    switch (action.type) {
        case LOADED_RECIPES:
            return { ...state, items: action.recipes, loading: false }
        case FETCH_RECIPES: {
            return { ...state, loading: true }
        }
        case ADD_RECIPE:
            return { ...state, saving: true }

        case ADD_RECIPE_SUCCESS:
            return {
                ...state,
                items: state.items.concat(action.recipe),
                saving: false
            }
        case DELETE_RECIPE:
            return {
                ...state,
                items: state.items.reduce((items, recipe) =>
                    recipe._id !== action.id ? items.concat(recipe) : items, []
                )
            }
        case SORT_RECIPE_RATING:
            return {

            }
        case FETCH_ONE_RECIPE:
            return {
                ...state,
                items: state.items.concat(action.recipe)
            }
        case UPDATE_RECIPE:
            return {
                ...state
            }

        default:
            return state
    }
}