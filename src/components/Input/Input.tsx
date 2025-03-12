import cn from "classnames";
import styles from "./style.module.css";
import { LuEyeClosed } from "react-icons/lu";
import { LiaEye } from "react-icons/lia";
import { useState, forwardRef } from "react";
interface InputProps {
  label?: string;
  type: string;
  className?: string;
  placeholder?: string;
  autocomplete?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { label = "", type = "text", className = "", placeholder = "", ...props },
    ref
  ) => {
    const [isVisiblePassword, setIsVisiblePassword] = useState(false);
    const toggleIsVisiblePassword = () => {
      setIsVisiblePassword(!isVisiblePassword);
    };
    return (
      <div
        className={cn(styles["input-wrapper"], {
          [className]: Boolean(className),
        })}
      >
        <label>{label}</label>
        <input
          type={!isVisiblePassword && type === "password" ? "password" : "text"}
          className={styles["input"]}
          placeholder={placeholder}
          ref={ref}
          {...props}
        />
        {type === "password" &&
          (!isVisiblePassword ? (
            <LuEyeClosed
              className={styles["LuEyeClosed"]}
              onClick={toggleIsVisiblePassword}
            />
          ) : (
            <LiaEye
              className={styles["LiaEye"]}
              onClick={toggleIsVisiblePassword}
            />
          ))}
      </div>
    );
  }
);
export default Input;
