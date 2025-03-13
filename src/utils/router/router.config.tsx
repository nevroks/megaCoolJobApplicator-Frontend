import { createBrowserRouter, RouterProvider } from "react-router";

import Layout from "../../components/layout/Layout";
import LayoutAuth from "../../components/layout/LayoutAuth"; // Импортируйте новый лэйаут

import { APP_PATHS } from "@utils/consts/appConsts";
import FeedPage from "@pages/FeedPage/FeedPage";
import FiltersPage from "@pages/filtersPage/FiltersPage";
import ResultPage from "@pages/resultPage/ResultPage";
import OffersPage from "@pages/offersPage/OffersPage";
import ProfilePage from "@pages/profilePage/profilePage";
import LoginPage from "@pages/loginPage/LoginPage";
import RegisterPage from "@pages/registerPage/RegisterPage";

const router = createBrowserRouter([
  {
    path: APP_PATHS.FEED_PAGE.RELATIVE,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <FeedPage />,
      },
      {
        path: APP_PATHS.FILTERS_PAGE.RELATIVE,
        element: <FiltersPage />,
      },
      {
        path: APP_PATHS.RESULT_PAGE.RELATIVE,
        element: <ResultPage />,
      },
      {
        path: APP_PATHS.OFFERS_PAGE.RELATIVE,
        element: <OffersPage />,
      },
      {
        path: APP_PATHS.PROFILE_PAGE.RELATIVE,
        element: <ProfilePage />,
      },
    ],
  },
  {
    path: APP_PATHS.AUTH_PAGE.RELATIVE,
    element: <LayoutAuth />,
    children: [
      {
        path: APP_PATHS.LOGIN_PAGE.ABSOLUTE,
        element: <LoginPage />,
      },
      {
        path: APP_PATHS.REGISTER_PAGE.ABSOLUTE,
        element: <RegisterPage />,
      },
    ],
  },
]);



export default router;
