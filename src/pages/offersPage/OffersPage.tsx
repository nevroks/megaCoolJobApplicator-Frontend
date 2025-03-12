import React from "react";
import styles from "./style.module.css";
import VacancyCard from "../../components/VacancyCard/VacancyCard";

const OffersPage = () => {
  return (
    <div className={styles.offersPage}>
      {Array(8)
        .fill(null)
        .map((_, index) => (
          <VacancyCard key={index} />
        ))}
    </div>
  );
};

export default OffersPage;
