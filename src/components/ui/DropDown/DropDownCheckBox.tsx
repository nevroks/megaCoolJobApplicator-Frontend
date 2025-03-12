import React, { useState } from "react";
import styles from "./style.module.css";
import { IoIosArrowDown } from "react-icons/io";

const DropDownCheckBox: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionChange = (option: string) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((o) => o !== option)
        : [...prev, option]
    );
  };

  return (
    <div className={styles.termsLevel}>
      <div className={styles.heading} onClick={toggleDropdown}>
        <div className={styles.category}>Условия работы</div>
        <div className={styles.chevronDown}>
          <IoIosArrowDown
            style={{
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.1s ease",
              width: "24px",
            }}
          />
        </div>
      </div>
      {isOpen && (
        <div className={styles.allLevel}>
          {[
            "Частичная занятость",
            "Полный день",
            "Гибкий график",
            "Удаленная работа",
          ].map((term, index) => (
            <div key={index} className={styles.subcategory}>
              <div className={styles.frame}>
                <input
                  type="checkbox"
                  className={styles.checkBoxInput}
                  checked={selectedOptions.includes(term)}
                  onChange={() => handleOptionChange(term)}
                />
                <div className={styles.term}>{term}</div>
              </div>
              <div className={styles.termCode}>1345</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDownCheckBox;
