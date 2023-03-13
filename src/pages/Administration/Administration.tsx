import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import { auth } from "../../firebase/firebase";
import { HOME_ROUTE } from "../../routers/consts";

function Administration() {
    const navigate = useNavigate();

    const handleSignOutClick = () => {
        signOut(auth).then(() => {
            // TODO скорее всего можно будет выпилить когда настрою редиректы к роутерам с недоступных путей на главную.
            navigate(HOME_ROUTE);
        }).catch((error) => {
            console.log(error);
        });
    };
  

    return (
        <Box>
            <AppBar>
                <Toolbar variant='dense'>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Administrative panel
                    </Typography>
                    <Typography mr={2}>{auth.currentUser?.email}</Typography>
                    <Button variant='outlined' sx={{ color: "white", borderColor: "white" }} onClick={handleSignOutClick}>Logout</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Administration;