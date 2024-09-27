import React from "react";
import UseFetch from "../hooks/UseFetch";
import UseWindowResize from "../hooks/useWindowResize";

export default function RecipiesList() {
  const { data, error, loading } = UseFetch("https://dummyjson.com/recipes");
  const windowSize = UseWindowResize();

  if (loading) {
    return <h1>Fetching Recipies! Please Wait</h1>;
  }

  if (error) {
    return <h1>Error fetching recipes: {error.message}</h1>;
  }

  // Ensure `data` exists and check for correct key from the API
  const recipes = data?.recipes || [];  // Assuming the API returns `recipes`, not `recipies`

  return (
    <div>
      <h1 style={{color:windowSize.width < 768 ? "red" : "black"}}>Recipies List</h1>
      <h3>Window width: {windowSize.width}</h3>
      <h3>Window height: {windowSize.height}</h3>
      <ul>
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <div key={recipe.id}>
              <label>{recipe.name}</label>
              <img src={recipe.image} alt={recipe.name} />
            </div>
          ))
        ) : (
          <p>No recipes available</p>
        )}
      </ul>
    </div>
  );
}
