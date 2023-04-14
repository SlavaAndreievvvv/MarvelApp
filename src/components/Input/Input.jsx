import styles from "./Input.module.css";

export const Input = ({ placeholder, onChange, onKeyPress }) => {
  return (
    <div className={styles.container}>
      <input
        id="search"
        className={styles.input}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        onKeyPress={onKeyPress}
      />
      <svg
        className={styles.icon}
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.32741 13.6548C10.8219 13.6548 13.6548 10.8219 13.6548 7.32741C13.6548 3.83288 10.8219 1 7.32741 1C3.83288 1 1 3.83288 1 7.32741C1 10.8219 3.83288 13.6548 7.32741 13.6548Z"
          stroke="#B4C2D3"
          strokeWidth="1.2"
        />
        <rect
          x="11.4458"
          y="12.0531"
          width="0.790926"
          height="4.74556"
          rx="0.395463"
          transform="rotate(-45 11.4458 12.0531)"
          stroke="#B4C2D3"
          strokeWidth="0.790926"
        />
      </svg>
    </div>
  );
};
