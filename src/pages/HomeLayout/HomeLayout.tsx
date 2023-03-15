import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import Header from "../../components/Header/Header";
import { LOGIN_ROUTE } from "../../routers/consts";


function HomeLayout() {

    const navigate = useNavigate();

    return (
        <Box>
            <Header />
            <Button onClick={() => navigate(LOGIN_ROUTE)}>Login</Button>
        </Box>
    );
}

export default HomeLayout;