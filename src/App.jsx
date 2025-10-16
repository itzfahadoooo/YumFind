import { useEffect, useState } from "react"
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
import EmptyFavorites from "./components/EmptyFavorites"
import ErrorMessage from "./components/ErrorMessage"
import Header from "./components/Header"
import LoadingSpinner from "./components/LoadingSpinner"
import RecipeDetails from "./components/RecipeDetails"
import RecipeList from "./components/RecipeList"
import { useFavorites } from "./hooks/useFavorites"
import { useRecipes } from "./hooks/useRecipes"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

// const itemVariants = {
//   hidden: { opacity: 0, y: 10 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.5, ease: "easeOut" },
//   },
// }

const App = () => {
  const [searchTerm, setSearchTerm] = useState("chicken")
  const [selectedRecipe, setSelectedRecipe] = useState(null)
  const [showFavorites, setShowFavorites] = useState(false)

  const { recipes, loading, error, fetchRecipes, allRecipes } = useRecipes()
  const { favorites, toggleFavorite } = useFavorites()

  useEffect(() => {
    fetchRecipes("chicken")
  }, [])

  const handleSearch = (term) => {
    if (term.trim()) {
      setSearchTerm(term)
      fetchRecipes(term)
    }
  }

  const handleToggleFavorites = () => {
    setShowFavorites(!showFavorites)
  }

  const displayedRecipes = showFavorites
    ? allRecipes.filter((recipe) => favorites.includes(recipe.idMeal))
    : recipes

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
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-2xl font-bold text-gray-800 mb-6"
          >
            My Favorite Recipes ({favorites.length})
          </motion.h2>
        )}

        {loading && <LoadingSpinner />}

        {error && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <ErrorMessage
              message={error}
              onRetry={() => fetchRecipes(searchTerm)}
            />
          </motion.div>
        )}

        {!loading && !error && displayedRecipes.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
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
          </motion.div>
        )}

        {!loading && !error && displayedRecipes.length > 0 && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <RecipeList
              recipes={displayedRecipes}
              onRecipeClick={setSelectedRecipe}
              favorites={favorites}
              onToggleFavorite={toggleFavorite}
            />
          </motion.div>
        )}
      </main>

      {selectedRecipe && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <RecipeDetails
            recipe={selectedRecipe}
            onClose={() => setSelectedRecipe(null)}
            isFavorite={favorites.includes(selectedRecipe.idMeal)}
            onToggleFavorite={toggleFavorite}
          />
        </motion.div>
      )}
    </div>
  )
}

export default App