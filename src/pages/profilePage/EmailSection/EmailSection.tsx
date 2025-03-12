import styles from "./style.module.css";
import { FaEnvelope } from "react-icons/fa";
export function EmailSection() {
  return (
    <section className={styles.emailSection}>
      <h2 className={styles.sectionTitle}>Мой email</h2>
      <div className={styles.emailItem}>
        <div className={styles.emailIcon}>
          <FaEnvelope className={styles["FaEnvelope"]} />
        </div>
        <div className={styles.emailDetails}>
          <p className={styles.emailAddress}>alexarawles@gmail.com</p>
          <p className={styles.emailTimestamp}>1 месяц назад</p>
        </div>
      </div>

      <button className={styles.addEmailButton}>+ Добавить Email</button>
    </section>
  );
}
