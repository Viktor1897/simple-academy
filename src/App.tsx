import "./App.css";

import { HashRouter } from "react-router-dom";

import AppRouter from "./routers/AppRouter/AppRouter";

function App() {

    return (
    // TODO replace HashRouter with BrowserRouter. HashRouter was used only for github pages, as BrouwserRouter doesn't work there.
        <HashRouter basename="/">
            <AppRouter />
        </HashRouter>
    );
}

export default App;
