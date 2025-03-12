import React, { useState } from "react";
import styles from "./style.module.css";
import { IoHomeOutline } from "react-icons/io5";
import { GiConfirmed } from "react-icons/gi";
import { IoIosCheckmark } from "react-icons/io";
import { LuClock4 } from "react-icons/lu";
import { GoChecklist } from "react-icons/go";
import { FcShop } from "react-icons/fc";
const VacancyCard = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [animationDirection, setAnimationDirection] = useState("");
  const handleAccept = () => {
    setAnimationDirection("right");
    setTimeout(() => setIsVisible(false), 300); 
  };
  const handleReject = () => {
    setAnimationDirection("left");
    setTimeout(() => setIsVisible(false), 300); 
  };
  if (!isVisible) return null; 
  return (
    <div className={`${styles["VacancyCard"]} ${styles[animationDirection]}`}>
      <header className={styles["VacancyCard-header"]}>
        <FcShop className={styles["FcShop"]} />
        <div className={styles["VacancyCard-header-text-container"]}>
          <h3>Название вакансии</h3>
          <div className={styles["VacancyCard-header-company-title"]}>
            <h4>ООО "Компания"</h4>
            <IoHomeOutline className={styles["IoHomeOutline"]} />
            <h6 style={{ color: "#0062FF" }}>Удаленная работа</h6>
          </div>
        </div>
        <div className={styles["VacancyCard-header-percentage"]}>
          <GiConfirmed className={styles["GiConfirmed"]} />
          <span>70%</span>
        </div>
      </header>
      <div className={styles["border"]}></div>
      <main className={styles["VacancyCard-main"]}>
        <section className={styles["VacancyCard-main-section"]}>
          <div className={styles["VacancyCard-main-row"]}>
            <GoChecklist className={styles["GoChecklist"]} />
            <h4 style={{ display: "inline" }}>Требования к кандидату:</h4>
          </div>
          <div className={styles["VacancyCard-main-row"]}>
            <IoIosCheckmark className={styles["IoIosCheckmark"]} />
            <span>Опыт работы от 3 лет</span>
          </div>
          <div className={styles["VacancyCard-main-row"]}>
            <IoIosCheckmark className={styles["IoIosCheckmark"]} />
            <span>Знание современных технологий</span>
          </div>
          <div className={styles["VacancyCard-main-row"]}>
            <IoIosCheckmark className={styles["IoIosCheckmark"]} />
            <span>Умение работать в команде</span>
          </div>
        </section>
        <section className={styles["VacancyCard-main-section"]}>
          <div className={styles["VacancyCard-main-row"]}>
            <LuClock4 className={styles["LuClock4"]} />
            <h4 style={{ display: "inline" }}>Условия работы:</h4>
          </div>
          <div className={styles["VacancyCard-main-row"]}>
            <IoIosCheckmark className={styles["IoIosCheckmark"]} />
            <span>Полный рабочий день</span>
          </div>
          <div className={styles["VacancyCard-main-row"]}>
            <IoIosCheckmark className={styles["IoIosCheckmark"]} />
            <span>Конкурентная зарплата</span>
          </div>
          <div className={styles["VacancyCard-main-row"]}>
            <IoIosCheckmark className={styles["IoIosCheckmark"]} />
            <span>ДМС после испытательного срока</span>
          </div>
        </section>
      </main>
      <section className={styles["button-block"]}>
        <button className={styles["site"]}>Посмотреть на сайте</button>
        <button className={styles["accept"]} onClick={handleAccept}>
          Добавить
        </button>
        <button className={styles["reject"]} onClick={handleReject}>
          Игнор
        </button>
      </section>
      <footer className={styles["VacancyCard-footer"]}>
        <p className={styles["VacancyCard-footer-keyWord"]}>
          <span>Полный день</span>
        </p>
        <p className={styles["VacancyCard-footer-keyWord"]}>
          <span>Senior</span>
        </p>
      </footer>
    </div>
  );
};
export default VacancyCard;
