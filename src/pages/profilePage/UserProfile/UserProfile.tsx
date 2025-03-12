import styles from "./style.module.css";

export function UserProfile() {
  return (
    <section className={styles.userProfileSection}>
      <div className={styles.profileInfo}>
        <div className={styles.avatarContainer}>
          <img
            src="../../../../public/Ellipse.png"
            alt="Alexa Rawles"
            className={styles.avatarImage}
          />
          <span className={styles.fullName}>Полное имя</span>
        </div>

        <div className={styles.userDetails}>
          <h2 className={styles.userName}>Alexa Rawles</h2>
          <p className={styles.userEmail}>alexarawles@gmail.com</p>
        </div>
      </div>

      <div className={styles.profileActions}>
        <span className={styles.nickName}>Nick Name</span>
        <button className={styles.editButton}>Редакт...</button>
      </div>
    </section>
  );
}
