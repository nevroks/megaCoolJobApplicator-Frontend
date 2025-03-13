import styles from './style.module.css'
import { VacancyCard } from '@components';
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