import cn from "classnames";
import styles from "./style.module.css";
import { CiUser } from "react-icons/ci";
import { IoMenuOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import useMediaQuery from "../../../hooks/useMediaQurey";
import { CiLogin } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import { APP_PATHS } from "../../../utils/consts/appConsts";
const Header = () => {
  const [auth, setAuth] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useMediaQuery(1000);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={cn(styles["nav-header"])}>
      <div className={cn(styles[""])}>
        <Link style={{ color: "black" }} className={cn(styles[""])} to="/">
          JobApplicator
        </Link>
      </div>
      {isMobile ? (
        <div className={styles["menu-icon"]} onClick={toggleMenu}>
          <IoMenuOutline className={styles["IoMenuOutline"]} />
        </div>
      ) : (
        <div className={cn(styles["nav-link-wrapper"])}>
          <NavLink
            style={{ textAlign: "center" }}
            className={({ isActive }) =>
              cn(styles["nav-link"], { [styles["active"]]: isActive })
            }
            to={APP_PATHS.FILTERS_PAGE.RELATIVE}
          >
            ФИЛЬТРЫ
          </NavLink>
          <NavLink
            style={{ textAlign: "center" }}
            className={({ isActive }) =>
              cn(styles["nav-link"], { [styles["active"]]: isActive })
            }
            to={APP_PATHS.OFFERS_PAGE.RELATIVE}
          >
            ПРЕДЛОЖЕНИЯ
          </NavLink>
          <NavLink
            style={{ textAlign: "center" }}
            className={({ isActive }) =>
              cn(styles["nav-link"], { [styles["active"]]: isActive })
            }
            to={APP_PATHS.RESULT_PAGE.RELATIVE}
          >
            РЕЗУЛЬТАТ
          </NavLink>
        </div>
      )}

      {!isMobile && (
        <div className={cn(styles["nav-icon-wrapper"])}>
          <div className={styles["avatar-wrapper"]}>
            <Link to={APP_PATHS.PROFILE_PAGE.RELATIVE} style={{ color: 'black' }}>
              <CiUser className={styles["CiUser"]} />
            </Link>
          </div>
          {auth ? (
            <CiLogout className={styles["CiLogout"]} />
          ) : (
            <Link to={APP_PATHS.LOGIN_PAGE.ABSOLUTE}>
              <CiLogin className={styles["CiLogin"]} />
            </Link>
          )}
        </div>
      )}

      {/* {menuOpen && isMobile && (
        <div className={styles["sidebar-menu"]}>
          <div className={styles["close-icon"]} onClick={toggleMenu}>
            <IoMdClose className={styles["IoMdClose"]} />
          </div>
          <NavLink
            className={({ isActive }) =>
              cn(styles[""], {
                [styles["active"]]: isActive && !isMobile,
              })
            }
            to="/filters"
            onClick={toggleMenu}
          >
            <span>ФИЛЬТРЫ</span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              cn(styles[""], {
                [styles["active"]]: isActive && !isMobile,
              })
            }
            to="/offers"
            onClick={toggleMenu}
          >
            <span>ПРЕДЛОЖЕНИЯ</span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              cn(styles[""], {
                [styles["active"]]: isActive && !isMobile,
              })
            }
            to="/result"
            onClick={toggleMenu}
          >
            <span>РЕЗУЛЬТАТ</span>
          </NavLink>
          <div className={styles["icon-wrapper-mobile"]}>
            <CiUser className={styles["CiUser"]} />

            {auth ? (
              <CiLogout className={styles["CiLogout"]} />
            ) : (
              <Link to="auth/login" style={{ display: "inline" }}>
                <CiLogin className={styles["CiLogin"]} />
              </Link>
            )}
          </div>
        </div>
      )} */}
    </header>
  );
};

export default Header;
