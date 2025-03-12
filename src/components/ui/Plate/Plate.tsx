import React from "react";
import styles from "./style.module.css";
import { IoIosClose } from "react-icons/io";
interface IPlate {
  text: string
}
const Plate: React.FC<IPlate> = ({ text }: IPlate) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{text}</div>
      <div className={styles.iconContainer}>
        <IoIosClose className={styles.IoIosClose} />
      </div>
    </div>
  );
};

export default Plate;
