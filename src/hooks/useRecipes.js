import { useState } from "react";

export const useRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [allRecipes, setAllRecipes] = useState([]);

  const fetchRecipes = async (term) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`
      );
      const data = await response.json();
      const newRecipes = data.meals || [];
      setRecipes(newRecipes);
      setAllRecipes((prev) => {
        const combined = [...prev, ...newRecipes];
        const unique = Array.from(
          new Map(combined.map((r) => [r.idMeal, r])).values()
        );
        return unique;
      });
    } catch {
      setError("Failed to fetch recipes. Please try again.");
    }
    setLoading(false);
  };

  return { recipes, loading, error, fetchRecipes, allRecipes };
};