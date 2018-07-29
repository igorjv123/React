import { combineReducers } from 'redux';
import recipesReducer, { RECIPES_DEFAULT_STATE } from './recipes';
import 'bulma/css/bulma.css'
export const DEFAULT_STATE = {
    recipes: RECIPES_DEFAULT_STATE
}

export default combineReducers({
    recipes: recipesReducer
});