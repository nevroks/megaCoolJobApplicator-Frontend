import styles from "./style.module.css";
import { UserProfile } from "./UserProfile/UserProfile";
import { ProfileForm } from "./ProfileForm/ProfileForm";
import { EmailSection } from "./EmailSection/EmailSection";

const mockUserValue = {
  firstName: 'Alexa',
  lastName: 'Rawles',
  gender: "женский",
  country: "USA",
  language: 'english',
  timezone: 'GMT+3.00'
}
const profilePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.profilesetting}>
        <section className={styles.mainContent}>
          <article className={styles.profileCard}>
            <div className={styles.profileContent}>
              <UserProfile />
              <ProfileForm {...mockUserValue} />
              <EmailSection />
            </div>
          </article>
        </section>
      </div>
    </div>
  );
};

export default profilePage;

