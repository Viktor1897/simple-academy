import { Box, Button, Typography } from "@mui/material";
import headerBg from "assets/header_bg.jpg";
import { MAX_CONTENT_WIDTH } from "consts";

import Navbar from "../Navbar/Navbar";


const Header = () => {
    return (
        //todo изучить вопрос семантики вместе с MUI
        <header>
            <Box sx={{ background: `no-repeat center top url(${headerBg})`}} display="flex" justifyContent="center">
                <Box maxWidth={MAX_CONTENT_WIDTH} width="100%" display="flex" flexDirection="column" alignItems="center">
                    <Navbar sx={{ mb: 23 }} />
                    <Typography variant="h2" color="#FFFFFF" mb={8.5} textAlign="center">ZOSTAŃ BARBEREM ZA 30 DNI I ZARABIAJ OD 5000 ZŁ/MES</Typography>
                    <Button variant="contained" sx={{ mb: 40 }}>SKONTAKTUJ SIĘ</Button>
                </Box>
            </Box>
        </header>
    );
};

export default Header;