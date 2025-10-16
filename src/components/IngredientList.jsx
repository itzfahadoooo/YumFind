const IngredientList = ({ recipe }) => {
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    if (recipe[`strIngredient${i}`]) {
      ingredients.push({
        ingredient: recipe[`strIngredient${i}`],
        measure: recipe[`strMeasure${i}`]
      });
    }
  }

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Ingredients</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {ingredients.map((item, index) => (
          <div key={index} className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg">
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            <span className="text-gray-700">
              <strong>{item.measure}</strong> {item.ingredient}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IngredientList;