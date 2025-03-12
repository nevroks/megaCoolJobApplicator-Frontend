import styles from "./style.module.css";
import cn from "classnames";
import Input from "../../components/Input/Input";
import { FcGoogle } from "react-icons/fc";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
interface RegisterFormInputs {
  name: string;
  sirname: string;
  email: string;
  password: string;
  confirmpassword: string;
}
const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<RegisterFormInputs>();
  const [isConfident, setIsConfident] = useState(false);
  const onSubmit: SubmitHandler<RegisterFormInputs> = (data) => {
    console.log(data);
  };
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsConfident(event.target.checked);

    if (event.target.checked) {
      const passwordValue = watch("password");
      setValue("confirmpassword", passwordValue);
    } else {
      setValue("confirmpassword", "");
    }
  };
  return (
    <div className={cn("container", styles["register-form-container"])}>
      <form
        className={styles["register-form"]}
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2>Регистрация</h2>
        <Input
          type="text"
          label="Имя"
          className={styles["enter"]}
          {...register("name", {
            required: "Имя обязательно",
            minLength: {
              value: 2,
              message: "Имя должно содержать как минимум 2 символа",
            },
          })}
        />
        {errors.name && (
          <span className={styles.error} style={{ fontSize: "0.8rem" }}>
            {errors.name.message}
          </span>
        )}
        <Input
          type="text"
          label="Фамилия"
          className={styles["enter"]}
          {...register("sirname", {
            required: "Фамилия обязательна",
            minLength: {
              value: 2,
              message: "Фамилия должна содержать как минимум 2 символа",
            },
          })}
        />
        {errors.sirname && (
          <span className={styles.error} style={{ fontSize: "0.8rem" }}>
            {errors.sirname.message}
          </span>
        )}
        <Input
          type="email"
          label="E-mail"
          className={styles["enter"]}
          {...register("email", {
            required: "Email обязателен",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Некорректный адрес электронной почты",
            },
          })}
        />
        {errors.email && (
          <span className={styles.error} style={{ fontSize: "0.8rem" }}>
            {errors.email.message}
          </span>
        )}
        <Input
          type="password"
          label="Пароль"
          className={styles["enter"]}
          {...register("password", {
            required: "Пароль обязателен",
            minLength: {
              value: 6,
              message: "Длина пароля как минимум 6 символов",
            },
          })}
        />
        {errors.password && (
          <span className={styles.error} style={{ fontSize: "0.8rem" }}>
            {errors.password.message}
          </span>
        )}
        <Input
          type="password"
          label="Подтвердите пароль"
          className={styles["enter"]}
          {...register("confirmpassword", {
            required: "Подтверждение пароля обязательно",
            validate: (value) => {
              if (value !== watch("password")) {
                return "Пароли не совпадают";
              }
            },
          })}
        />
        {errors.confirmpassword && (
          <span className={styles.error} style={{ fontSize: "0.8rem" }}>
            {errors.confirmpassword.message}
          </span>
        )}
        <div className={cn(styles["remember"])}>
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            checked={isConfident}
            onChange={handleCheckboxChange}
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Уверен в себе ?
          </label>
        </div>
        <button type="submit" className={cn(styles["register-submit"])}>
          РЕГИСТРАЦИЯ
        </button>
        <div className={styles["border"]}></div>
        <button type="button" className={cn(styles["register-submit-google"])}>
          <FcGoogle className={styles["google-icon"]} />
          продолжить с Google
        </button>
      </form>
    </div>
  );
};
export default RegisterPage;
