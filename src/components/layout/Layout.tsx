import { Suspense } from 'react';
import { Outlet } from 'react-router';
import styles from './style.module.css'
import Header from './header/Header';
const Layout = () => {
    return (
        <div className={styles['Layout-content']}>
            <Suspense fallback={<div>Loading Header...</div>}>
                <Header />
            </Suspense>
            <main className={styles['layout-container']}>
                <div className={styles['layout-container-content']}>
                    <Suspense fallback={<div>Loading Content...</div>}>
                        <Outlet />
                    </Suspense>
                </div>
            </main>
        </div>
    );
}

export default Layout;
