import styles from "./MealCard.module.css";
import { useNavigate } from "react-router-dom";

export const MealCard = ({ data }) => {
  let navigate = useNavigate();
  return (
    <>
      {!data
        ? "Not Found"
        : data.map((item) => {
            return (
              <div
                key={item.idMeal}
                className={styles.card}
                onClick={() => {
                  navigate(`/${item.idMeal}`);
                }}
              >
                <div className={styles.header}>
                  <img
                    className={styles.cardImg}
                    src={item.strMealThumb}
                    alt={item.strMeal}
                  />
                </div>
                <div className={styles.content}>
                  <h3 className={styles.cardTitle}>{item.strMeal}</h3>
                </div>
              </div>
            );
          })}
    </>
  );
};
