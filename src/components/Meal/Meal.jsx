import { useEffect, useState } from "react";
import { MealCard } from "../MealCard/MealCard";
import { RecipeIndex } from "../RecipeIndex/RecipeIndex";
import styles from "./Meal.module.css";

export const Meal = () => {
  const [url, setUrl] = useState(
    "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
  );
  const [item, setItem] = useState("");
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setItem(data.meals);
        setShow(true);
        console.log(data.meals);
      });
  }, [url]);

  const setIndex = (alpha) => {
    setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`);
  };
  const searchRecipe = (e) => {
    if (e.key === "Enter") {
      setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h1 className={styles.title}>Search Food</h1>
      </div>
      <div className={styles.searchBlock}>
        <input
          id="search"
          className={styles.input}
          type="search"
          placeholder="Search Food..."
          onChange={(e) => setSearch(e.target.value)}
          onKeyPress={searchRecipe}
        />
      </div>
      <div className={styles.indexContainer}>
        <RecipeIndex alphaIndex={(alpha) => setIndex(alpha)} />
      </div>
      <div className={styles.content}>
        {show ? <MealCard data={item} /> : "Not Found"}
      </div>
    </main>
  );
};
