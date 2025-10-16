import React from 'react';
import RecipeCard from './RecipeCard';

const RecipeList = ({ recipes, onRecipeClick, favorites, onToggleFavorite }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.idMeal}
          recipe={recipe}
          onClick={() => onRecipeClick(recipe)}
          isFavorite={favorites.includes(recipe.idMeal)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
};

export default RecipeList;