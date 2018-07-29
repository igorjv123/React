export const FETCH_RECIPES = 'FETCH_RECIPES';
export const FETCH_ONE_RECIPE = 'FETCH_ONE_RECIPE';
export const ADD_RECIPE = 'ADD_RECIPE';
export const UPDATE_RECIPE = 'UPDATE_RECIPE';
export const DELETE_RECIPE = 'DELETE_RECIPE';
export const LOADED_RECIPES = 'LOADED_RECIPES';
export const ADD_RECIPE_SUCCESS = 'ADD_RECIPE_SUCCESS';
export const SORT_RECIPE_RATING = 'SORT_RECIPE_RATING';

export function fetchRecipes() {
    return { type: FETCH_RECIPES }
}

export function fetchOneRecipe(id) {
    return { type: FETCH_ONE_RECIPE, id }
}

export function addRecipe(recipe) {
    return { type: ADD_RECIPE, recipe }
}

export function updateRecipe(recipe) {
    return { type: UPDATE_RECIPE, recipe }
}

export function deleteRecipe(id) {
    return { type: DELETE_RECIPE, id }
}

export function loadedRecipes(recipes) {
    return { type: LOADED_RECIPES, recipes }
}

export function addRecipeSuccess(recipe) {
    return { type: ADD_RECIPE_SUCCESS, recipe }
}

