import { useEffect, useState } from "react";
import EmptyFavorites from "./components/EmptyFavorites";
import ErrorMessage from "./components/ErrorMessage";
import Header from "./components/Header";
import LoadingSpinner from "./components/LoadingSpinner";
import RecipeDetails from "./components/RecipeDetails";
import RecipeList from "./components/RecipeList";
import { useFavorites } from "./hooks/useFavorites";
import { useRecipes } from "./hooks/useRecipes";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("chicken");
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [showFavorites, setShowFavorites] = useState(false);

  const { recipes, loading, error, fetchRecipes, allRecipes } = useRecipes();
  const { favorites, toggleFavorite } = useFavorites();

  useEffect(() => {
    fetchRecipes("chicken");
  }, []);

  const handleSearch = (term) => {
    if (term.trim()) {
      setSearchTerm(term);
      fetchRecipes(term);
    }
  };

  const handleToggleFavorites = () => {
    setShowFavorites(!showFavorites);
  };

  const displayedRecipes = showFavorites
    ? allRecipes.filter((recipe) => favorites.includes(recipe.idMeal))
    : recipes;

  return (
    <div className="min-h-screen bg-gray-100">
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onSearch={handleSearch}
        favoritesCount={favorites.length}
        showFavorites={showFavorites}
        onToggleFavorites={handleToggleFavorites}
      />

      <main className="container mx-auto px-4 py-8">
        {showFavorites && (
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            My Favorite Recipes ({favorites.length})
          </h2>
        )}

        {loading && <LoadingSpinner />}

        {error && (
          <ErrorMessage
            message={error}
            onRetry={() => fetchRecipes(searchTerm)}
          />
        )}

        {!loading && !error && displayedRecipes.length === 0 && (
          <>
            {showFavorites ? (
              <EmptyFavorites />
            ) : (
              <div className="text-center py-12">
                <p className="text-xl text-gray-600 mb-4">
                  No recipes found for "{searchTerm}"
                </p>
                <p className="text-gray-500">
                  Try searching for something else
                </p>
              </div>
            )}
          </>
        )}

        {!loading && !error && displayedRecipes.length > 0 && (
          <RecipeList
            recipes={displayedRecipes}
            onRecipeClick={setSelectedRecipe}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
          />
        )}
      </main>

      {selectedRecipe && (
        <RecipeDetails
          recipe={selectedRecipe}
          onClose={() => setSelectedRecipe(null)}
          isFavorite={favorites.includes(selectedRecipe.idMeal)}
          onToggleFavorite={toggleFavorite}
        />
      )}
    </div>
  );
};

export default App;