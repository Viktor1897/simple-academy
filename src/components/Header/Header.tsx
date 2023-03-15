import { Box } from "@mui/material";
import headerBg from "assets/header_bg.jpg";
import { MAX_CONTENT_WIDTH } from "consts";

import Navbar from "../Navbar/Navbar";


const Header = () => {
    console.log("img", headerBg);
    return (
        //todo изучить вопрос семантики вместе с MUI
        <header>
            <Box sx={{ background: `no-repeat center top url(${headerBg})`}} display="flex" justifyContent="center">
                <Box maxWidth={MAX_CONTENT_WIDTH} width="100%">
                    <Navbar />
                </Box>
            </Box>
        </header>
    );
};

export default Header;