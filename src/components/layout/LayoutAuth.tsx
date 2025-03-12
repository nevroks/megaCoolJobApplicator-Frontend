import { Suspense } from "react";
import { Outlet } from "react-router";
import styles from './style.module.css'
const LayoutAuth = () => {
  return (
    <div className={styles["authlayout-container"]}>
      <div className={""}>
        <Suspense fallback={<div>Loading Content...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default LayoutAuth;
