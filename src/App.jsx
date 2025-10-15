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
  const [searchTerm, setSearchTerm] = useState('chicken');
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [showFavorites, setShowFavorites] = useState(false);
  
  const { recipes, loading, error, fetchRecipes, loadSampleData } = useRecipes();
  const { favorites, toggleFavorite } = useFavorites();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (recipes.length === 0 && !loading) {
        loadSampleData();
      }
    }, 5000);
    
    fetchRecipes('chicken');
    
    return () => clearTimeout(timeoutId);
  }, []);

  const handleSearch = (term) => {
    if (term.trim()) {
      setShowFavorites(false);
      fetchRecipes(term);
    }
  };

  const handleToggleFavorites = () => {
    setShowFavorites(!showFavorites);
  };

  const displayedRecipes = showFavorites
    ? recipes.filter(recipe => favorites.includes(recipe.idMeal))
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
            onLoadSample={loadSampleData}
          />
        )}

        {!loading && !error && displayedRecipes.length === 0 && showFavorites && (
          <EmptyFavorites />
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