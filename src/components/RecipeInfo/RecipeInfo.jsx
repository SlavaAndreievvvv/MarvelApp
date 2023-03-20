import styles from "./RecipeInfo.module.css";
import { useParams } from "react-router-dom";
import { useState } from "react";

export const RecipeInfo = () => {
  const [item, setItem] = useState();

  const { MealId } = useParams();
  if (MealId !== "") {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`)
      .then((res) => res.json())
      .then((data) => setItem(data.meals[0]));
  }

  return (
    <div className={styles.RecipeInfo}>
      {!item ? (
        ""
      ) : (
        <div className={styles.content}>
          <img
            className={styles.img}
            src={item.strMealThumb}
            alt={item.strMeal}
          />
          <div className={styles.innerContent}>
            <h1>{item.strMeal}</h1>
            <h2>{item.strArea} Food</h2>
            <h3>Category {item.strCategory}</h3>
          </div>

          <div className={styles.recipeDetails}>
            <div className={styles.ingredients}>
              <h2>Ingredients</h2>
              <br />
              <h4>
                {item.strIngredient1}:{item.strMeasure1}
              </h4>
              <h4>
                {item.strIngredient2}:{item.strMeasure2}
              </h4>
              <h4>
                {item.strIngredient3}:{item.strMeasure3}
              </h4>
              <h4>
                {item.strIngredient4}:{item.strMeasure4}
              </h4>
              <h4>
                {item.strIngredient5}:{item.strMeasure5}
              </h4>
              <h4>
                {item.strIngredient6}:{item.strMeasure6}
              </h4>
              <h4>
                {item.strIngredient7}:{item.strMeasure7}
              </h4>
              <h4>
                {item.strIngredient8}:{item.strMeasure8}
              </h4>
            </div>
            <div className={styles.instructions}>
              <h2>Instructions</h2>
              <br />
              <h4>{item.strInstructions}</h4>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
