import { call, put, takeLatest, takeEvery } from 'redux-saga/effects'
import {
  ADD_RECIPE, DELETE_RECIPE, UPDATE_RECIPE, FETCH_RECIPES,
  loadedRecipes, addRecipeSuccess, FETCH_ONE_RECIPE
} from '../actions/recipes'
function* getAllRecipes() {
  try {
    const res = yield call(fetch, '/api/recipes');
    const recipes = yield res.json();
    yield put(loadedRecipes(recipes));
  } catch (e) {
    console.log(e);
  }
}

function* saveRecipeRating(action) {
  try {
    const options = {
      method: 'POST',
      body: JSON.stringify(action.recipe.rating),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }

    const res = yield call(fetch, `/api/recipe/${action.recipe.id}/rating`, options)
    const recipe = yield res.json()
    yield put(addRecipeSuccess(recipe))
  } catch (e) {
    console.log(e);
  }
}

function* fetchOneRecipe(action) {
  try {
    const res = yield call(fetch, `/api/recipe/${action.id}`);
    const recipes = yield res.json();
    yield put(loadedRecipes(recipes));
  } catch (e) {
    console.log(e);
  }
}

function* addRecipe(action) {
  try {
    const options = {
      method: 'POST',
      body: JSON.stringify(action.recipe),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }
    const res = yield call(fetch, `/api/recipes/`, options)
    const recipe = yield res.json()
    yield put(addRecipeSuccess(recipe))
  } catch (e) {
    console.log(e);
  }
}

function* deleteRecipe(action) {
  try {
    yield call(fetch, `/api/recipes/${action.id}`, { method: 'DELETE' })
  } catch (e) {
    console.log(e);
  }
}

function* updateRecipe(action) {
  try {
    const options = {
      method: 'PATCH',
      body: JSON.stringify(action.recipe),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }

    yield call(fetch, `/api/recipes/${action.recipe.id}`, options);
  } catch (e) {
    console.log(e);
  }
}

function* rootSaga() {
  yield takeLatest(FETCH_RECIPES, getAllRecipes)
  yield takeLatest(ADD_RECIPE, addRecipe);
  yield takeLatest(FETCH_ONE_RECIPE, fetchOneRecipe);
  yield takeLatest(DELETE_RECIPE, deleteRecipe);
  yield takeEvery(UPDATE_RECIPE, updateRecipe);

}

export default rootSaga;
