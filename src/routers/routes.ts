import { ADMINISTRATION_ROUTE, HOME_ROUTE, LOGIN_ROUTE } from "./consts";
import Administration from "../pages/Administration/Administration";
import HomeLayout from "../pages/HomeLayout/HomeLayout";
import Login from "../pages/Login/Login";

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Login,
    },
    {
        path: HOME_ROUTE,
        Component: HomeLayout,
    },
]

export const privateRoutes = [
    {
        path: ADMINISTRATION_ROUTE,
        Component: Administration,
    },
    {
        path: HOME_ROUTE,
        Component: HomeLayout,
    },
]
