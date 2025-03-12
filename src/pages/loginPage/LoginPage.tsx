import styles from "./style.module.css";
import cn from "classnames";
import Input from "../../components/Input/Input";
import { FcGoogle } from "react-icons/fc";
import AnimatedBalls from "../../components/AnimatedBalls/AnimatedBalls";
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
interface LoginFormInputs {
  email: string;
  password: string;
}
const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();
  const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {

    console.log(data);
  };
  return (
    <div className={cn("container", styles["register-form-container"])}>
      <AnimatedBalls />
      <form
        className={styles["register-form"]}
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2>ВХОД</h2>
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
        <button type="submit" className={cn(styles["register-submit"])}>
          ВОЙТИ
        </button>
        <div className={styles["border"]}></div>
        <Link
          to="/auth/register"
          style={{ textAlign: "left", width: "70%", color: "#0087D1" }}
        >
          Нету пароля ?
        </Link>
        <button type="button" className={cn(styles["register-submit-google"])}>
          <FcGoogle className={styles["google-icon"]} />
          продолжить с Google
        </button>
      </form>
    </div>
  );
};
export default LoginPage;
