import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import { auth } from "../../firebase/firebase";
import HomeLayout from "../../pages/HomeLayout/HomeLayout";
import { privateRoutes, publicRoutes } from "../routes";

const AppRouter = () => {
    const [isLogined, setIsLogined] = useState<boolean>();

    onAuthStateChanged(auth, (user) => {
        if (user) {
            setIsLogined(true);
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