import React from 'react';
import {Heart} from 'lucide-react';

const RecipeCard = ({ recipe, onClick, isFavorite, onToggleFavorite }) => {
  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    onToggleFavorite(recipe.idMeal);
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
      <div className="relative" onClick={onClick}>
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="w-full h-48 object-cover"
        />
        <button
          onClick={handleFavoriteClick}
          className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-lg hover:scale-110 transition-transform"
        >
          <Heart
            size={20}
            className={isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'}
          />
        </button>
      </div>
      <div className="p-4" onClick={onClick}>
        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
          {recipe.strMeal}
        </h3>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
            {recipe.strCategory}
          </span>
          <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
            {recipe.strArea}
          </span>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;