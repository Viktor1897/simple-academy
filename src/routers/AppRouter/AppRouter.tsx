import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import { Route,Routes } from "react-router-dom";

import HomeLayout from "../../pages/HomeLayout/HomeLayout";
import { privateRoutes, publicRoutes } from "../routes";

const AppRouter = () => {
    const [isLogined, setIsLogined] = useState<boolean>();
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            setIsLogined(true);
            // ...
        } else {
            setIsLogined(false);
        }
    });

    return isLogined ? (
        <Routes>
            {privateRoutes.map(({path, Component}) => 
                <Route key={path} path={path} element={<Component/>} />)}
            <Route path="*" element={<HomeLayout />}/>
        </Routes>
    ) : (
        <Routes>
            {publicRoutes.map(({path, Component}) => 
                <Route key={path} path={path} element={<Component/>} />)}
            <Route path="*" element={<HomeLayout />}/>
        </Routes>
    );
};

export default AppRouter;