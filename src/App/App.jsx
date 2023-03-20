import { Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import { Meal } from "../components/Meal";
import { RecipeIndex } from "../components/RecipeIndex/RecipeIndex";
import { RecipeInfo } from "../components/RecipeInfo/RecipeInfo";

export default function App() {
  return (
    <div className={styles.App}>
      <Routes>
        <Route path="/" element={<Meal />} />
        <Route path="/:MealId" element={<RecipeInfo />} />
      </Routes>
    </div>
  );
}
