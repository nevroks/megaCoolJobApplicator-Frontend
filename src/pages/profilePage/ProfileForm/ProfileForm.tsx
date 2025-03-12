import styles from "./style.module.css";
import { useForm, SubmitHandler } from "react-hook-form";
import cn from 'classnames'
interface ProfileFormProps {
  firstName?: string;
  lastName?: string;
  gender?: string;
  country?: string;
  language?: string;
  timezone?: string;
}

export function ProfileForm({
  firstName,
  lastName,
  gender,
  country,
  language,
  timezone,
}: ProfileFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormProps>();

  const onSubmit: SubmitHandler<ProfileFormProps> = (data) => {
    console.log(data);
  };

  return (
    <form className={styles.profileForm} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.formRow}>
        <input
          type="text"
          placeholder="Имя"
          className={styles.formInput}
          aria-label="First name"
          defaultValue={firstName}
          {...register("firstName", {
            required: "Имя обязательно",
            minLength: {
              value: 2,
              message: "Имя должно содержать как минимум 2 символа",
            },
          })}
        />
        {errors.firstName && (
          <span
            className={cn(styles.error, styles.firstNameError)}
            style={{ fontSize: "0.8rem" }}
          >
            {errors.firstName.message}
          </span>
        )}
        <input
          type="text"
          placeholder="Фамилия"
          className={styles.formInput}
          aria-label="Last name"
          defaultValue={lastName}
          {...register("lastName", {
            required: "Фамилия обязательна",
            minLength: {
              value: 2,
              message: "Фамилия должна содержать как минимум 2 символа",
            },
          })}
        />
        {errors.lastName && (
          <span
            className={cn(styles.error, styles.lastNameError)}
            style={{ fontSize: "0.8rem" }}
          >
            {errors.lastName.message}
          </span>
        )}
      </div>
      <div className={styles.formLabels}>
        <label htmlFor="gender">Пол</label>
        <label htmlFor="country">Страна</label>
      </div>
      <div className={styles.formRow}>
        <select
          id="gender"
          className={styles.formInput}
          aria-label="Select gender"
          defaultValue={gender}
          {...register("gender", { required: "Пол обязателен" })}
        >
          <option value="">Выберите пол</option>
          <option value="ml">Мужской</option>
          <option value="fm">Женский</option>
        </select>
        {errors.gender && (
          <span
            className={cn(styles.error, styles.gender)}
            style={{ fontSize: "0.8rem" }}
          >
            {errors.gender.message}
          </span>
        )}
        <select
          id="country"
          className={styles.formInput}
          aria-label="Select country"
          defaultValue={country}
          {...register("country", { required: "Страна обязательна" })}
        >
          <option value="">Страна</option>
          <option value="ru">Россия</option>
          <option value="by">Беларусь</option>
        </select>
        {errors.country && (
          <span
            className={cn(styles.error, styles.country)}
            style={{ fontSize: "0.8rem" }}
          >
            {errors.country.message}
          </span>
        )}
      </div>
      <div className={styles.formLabels}>
        <label htmlFor="language">Язык</label>
        <label htmlFor="timezone">Временная зона</label>
      </div>
      <div className={styles.formRow}>
        <select
          id="language"
          className={styles.formInput}
          aria-label="Select language"
          defaultValue={language}
          {...register("language", { required: "Язык обязателен" })}
        >
          <option value="">Ваш язык</option>
          <option value="ru">русский</option>
          <option value="kz">казахский</option>
          <option value="by">белорусский</option>
        </select>
        {errors.language && (
          <span
            className={cn(styles.error, styles.language)}
            style={{ fontSize: "0.8rem" }}
          >
            {errors.language.message}
          </span>
        )}
        <select
          id="timezone"
          className={styles.formInput}
          aria-label="Select timezone"
          defaultValue={timezone}
          {...register("timezone", { required: "Временная зона обязательна" })}
        >
          <option value="">Временная зона</option>
          <option value="3">GMT + 3.00</option>
          <option value="0">GMT + 0.00</option>
          <option value="5">GMT + 5.00</option>
        </select>
        {errors.timezone && (
          <span
            className={cn(styles.error, styles.timezone)}
            style={{ fontSize: "0.8rem" }}
          >
            {errors.timezone.message}
          </span>
        )}
      </div>
      <button type="submit" className={styles.saveButton}>
        Сохранить
      </button>
    </form>
  );
}
