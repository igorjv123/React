import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addRecipe, deleteRecipe, fetchRecipes } from '../actions/recipes';
import Recipe from './Recipe';
import "../App.css"

class recipes extends Component {
  state = {
    newRecipe: {
      title: '',
      description: '',
      rating: ''
    }
  };
  componentDidMount() {
    this.props.fetchRecipes()
  }
  handleSubmint = () => {
    this.props.addRecipe(this.state.newRecipe);
    this.props.history.push('/recipes');
  }

  render() {
    let { activeRecipe } = this.state
    const { recipes, isLoading, isSaving, error } = this.props

    const total = recipes.length

    return (
      <section className="">
        <h1 className="1title white">Cookbook</h1>
        <div className="1white">
          Кількість рецептів: {total}
        </div>

        <form className="addForm">
          <input type="text"
            placeholder="Назва"
            onChange={(e) => this.state.newRecipe.title = e.target.value}
            /><br/>

            <textarea type="text"
              placeholder="Опис"
              onChange={(e) => this.state.newRecipe.description = e.target.value}
            >
            </textarea>
            <br/>

            <input type="text"
              placeholder="Рейтинг"
              onChange={(e) => this.state.newRecipe.rating = e.target.value}
            /><br/>

            <button onClick={this.handleSubmint} >
              Додати
            </button>
        </form>
        <hr/>
        <div>
            {recipes.map((recipe) => <Recipe key={recipe._id}
              id={recipe._id}
              recipe={recipe}
              onDelete={() => this.props.deleteRecipe(recipe._id)}
            />)}
        </div>
        </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes.items,
    isLoading: state.recipes.loading,
    isSaving: state.recipes.saving,
    error: state.recipes.error
  }
}

const mapDispatchToProps = {
  addRecipe,
  deleteRecipe,
  fetchRecipes
}

export default connect(mapStateToProps, mapDispatchToProps)(recipes)
