import React from "react";
import styles from "./style.module.css";

const TextInput: React.FC = () => {
  return (
    <div className={styles.inputContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.iconPlaceholder}>
          <input
            type="text"
            className={styles.textInput}
            placeholder="Vacancy Name"
          />
        </div>
      </div>
    </div>
  );
};

export default TextInput;
