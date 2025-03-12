
import React, { useState } from "react";
import styles from "./style.module.css";
const TextArea: React.FC = () => {
  const [value, setValue] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };
  return (
    <div className={styles.textareaContainer}>
      <div className={styles.labelContainer}>
        <div className={styles.labelInnerContainer}>
          <p className={styles.label}>Опишите работу Вашей мечты?</p>
          <div className={styles.required}>*</div>
        </div>
      </div>
      <textarea
        className={styles.textareaInput}
        placeholder="Lorem Ipsum"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};
export default TextArea;
