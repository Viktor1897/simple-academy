// import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import { /* Navigate,*/ Route, Routes } from "react-router-dom";

// import { LOGIN_ROUTE } from "routers/consts";
// import { ADMINISTRATION_ROUTE } from "routers/consts";
// import { auth } from "../../firebase/firebase";
import HomeLayout from "../../pages/HomeLayout/HomeLayout";
import { privateRoutes, publicRoutes } from "../routes";

const AppRouter = () => {
    const [isLogined, setIsLogined] = useState<boolean>();

    // onAuthStateChanged(auth, (user) => {
    //     if (user) {
    //         setIsLogined(true);
    //     } else {
    //         setIsLogined(false);
    //     }
    // });

    return isLogined ? (
        <Routes>
            {privateRoutes.map(({path, Component}) => 
                <Route key={path} path={path} element={<Component/>} />)}
            {/* <Route path={LOGIN_ROUTE} element={<Navigate to={ADMINISTRATION_ROUTE} />}/> */}
            <Route path="*" element={<HomeLayout />}/>
        </Routes>
    ) : (
        <Routes>
            {publicRoutes.map(({path, Component}) => 
                <Route key={path} path={path} element={<Component/>} />)}
            {/* <Route path={ADMINISTRATION_ROUTE} element={<Navigate to={LOGIN_ROUTE} />}/> */}
            <Route path="*" element={<HomeLayout />}/>
        </Routes>
    );
};

export default AppRouter;