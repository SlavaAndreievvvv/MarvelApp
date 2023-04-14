import styles from "./RecipeInfo.module.css";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

export const RecipeInfo = () => {
  const [item, setItem] = useState();
  const navigate = useNavigate();

  const { MealId } = useParams();
  if (MealId !== "") {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`)
      .then((res) => res.json())
      .then((data) => setItem(data.meals[0]));
  }

  return (
    <div className={styles.RecipeInfo}>
      <button className={styles.button} onClick={() => navigate(-1)}>
        <svg
          className={styles.arrow}
          viewBox="0 0 9 14"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.20711 0.292893C7.81658 -0.0976311 7.18342 -0.0976311 6.79289 0.292893L0.792894 6.29289C0.40237 6.68342 0.40237 7.31658 0.792894 7.70711L6.79289 13.7071C7.18342 14.0976 7.81658 14.0976 8.20711 13.7071C8.59763 13.3166 8.59763 12.6834 8.20711 12.2929L2.91421 7L8.20711 1.70711C8.59763 1.31658 8.59763 0.683417 8.20711 0.292893Z"
          />
        </svg>
      </button>
      {!item ? (
        ""
      ) : (
        <div className={styles.content}>
          <div className={styles.head}>
            <img
              className={styles.img}
              src={item.strMealThumb}
              alt={item.strMeal}
            />
            <div className={styles.infoBlock}>
              <h1 className={styles.name}>{item.strMeal}</h1>
              <h2 className={styles.food}>{item.strArea} Food</h2>
              <h3 className={styles.food}>Category: {item.strCategory}</h3>
            </div>
          </div>

          <div className={styles.recipeDetails}>
            <div className={styles.ingredients}>
              <h2>Ingredients</h2>
              <br />
              <h4>
                {item.strIngredient1}: {item.strMeasure1}
              </h4>
              <h4>
                {item.strIngredient2}: {item.strMeasure2}
              </h4>
              <h4>
                {item.strIngredient3}: {item.strMeasure3}
              </h4>
              <h4>
                {item.strIngredient4}: {item.strMeasure4}
              </h4>
              <h4>
                {item.strIngredient5}: {item.strMeasure5}
              </h4>
              <h4>
                {item.strIngredient6}: {item.strMeasure6}
              </h4>
              <h4>
                {item.strIngredient7}: {item.strMeasure7}
              </h4>
              <h4>
                {item.strIngredient8}: {item.strMeasure8}
              </h4>
            </div>
            <div className={styles.instructions}>
              <h2>Instructions</h2>
              <br />
              <h4 className={styles.instructionsText}>
                {item.strInstructions}
              </h4>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
