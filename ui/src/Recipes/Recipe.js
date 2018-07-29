import React from 'react'

import "../App.css"

export default ({ recipe, onDelete}) => (
      <div className="recipe">
        <div className="rec_title">{recipe.title}</div>

        <div>
          {recipe.description}<br/>
          <div className = "rating">Рейтинг: {recipe.rating}</div>
        </div>
        <div>
          <button renderAs="a" onClick={onDelete}>Видалити</button>
        </div>
          <hr/>
      </div>
)
