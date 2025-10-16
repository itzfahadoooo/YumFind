import { Heart, ChefHat, Users, X } from 'lucide-react';
import IngredientList from './IngredientList';
import InstructionList from './InstructionList';
import VideoEmbed from './VideoEmbed';

const RecipeDetails = ({ recipe, onClose, isFavorite, onToggleFavorite }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 overflow-y-auto">
      <div className="min-h-screen px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl">
          {/* Header Image */}
          <div className="relative">
            <img
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
              className="w-full h-64 md:h-96 object-cover rounded-t-2xl"
            />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 cursor-pointer"
            >
              <X size={24} />
            </button>
            <button
              onClick={() => onToggleFavorite(recipe.idMeal)}
              className="absolute top-4 left-4 bg-white p-2 rounded-full shadow-lg hover:scale-110 transition-transform cursor-pointer"
            >
              <Heart
                size={24}
                className={isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'}
              />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {recipe.strMeal}
            </h1>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full">
                <ChefHat size={18} />
                {recipe.strCategory}
              </span>
              <span className="flex items-center gap-2 bg-gray-100 text-gray-600 px-4 py-2 rounded-full">
                <Users size={18} />
                {recipe.strArea}
              </span>
            </div>

            {/* Ingredients */}
            <IngredientList recipe={recipe} />

            {/* Instructions */}
            <InstructionList instructions={recipe.strInstructions} />

            {/* Video */}
            <VideoEmbed youtubeUrl={recipe.strYoutube} />

            {/* Source Link */}
            {recipe.strSource && (
              <a
                href={recipe.strSource}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors font-semibold"
              >
                View Original Recipe
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;