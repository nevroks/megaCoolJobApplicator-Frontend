import React from 'react'
import VacancyCard from '../../components/VacancyCard/VacancyCard';
import styles from './style.module.css'
const ResultPage = () => {
  return (
    <div className={styles.offersPage}>
      {Array(8)
        .fill(null)
        .map((_, index) => (
          <VacancyCard key={index} />
        ))}
    </div>
  );
}

export default ResultPage