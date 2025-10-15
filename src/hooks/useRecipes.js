import { useState } from "react";
import { sampleRecipes } from "../utils/sampleData";
import recipeService from "../services/recipeService";

export const useRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchRecipes = async (query) => {
    setLoading(true);
    setError(null);
    try {
      const meals = await recipeService.searchRecipes(query);
      if (meals.length > 0) {
        setRecipes(meals);
      } else {
        setRecipes([]);
        setError('No recipes found. Try a different search term!');
      }
    } catch (err) {
      console.error('Fetch error:', err);
      setError(`Failed to fetch recipes: ${err.message}. Please check your internet connection and try again.`);
      setRecipes([]);
    } finally {
      setLoading(false);
    }
  };

  const loadSampleData = () => {
    setRecipes(sampleRecipes);
    setError(null);
    setLoading(false);
  };

  return { recipes, loading, error, fetchRecipes, loadSampleData };
};