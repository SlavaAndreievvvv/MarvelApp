import styles from "./RecipeIndex.module.css";

export const RecipeIndex = ({ alphaIndex }) => {
  const alpha = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "J",
    "I",
    "J",
    "k",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  let num = 0;

  return (
    <>
      {alpha.map((item) => {
        return (
          <h3
            key={num++}
            className={styles.alphaLetter}
            onClick={() => alphaIndex(item)}
          >
            {item}
          </h3>
        );
      })}
    </>
  );
};
