import PhoneIcon from "@mui/icons-material/Phone";
import { Button, Grid, Typography } from "@mui/material";
import { ReactComponent as AcademyLogo } from "assets/logo.svg";
import Navigation from "components/Navigation/Navigation";


const Navbar = () => {
    return (
        <Grid color="#FFFFFF" justifyContent="space-between" container py={5} direction="row">
            <AcademyLogo />
            <Grid item spacing={0.25}>
                <Grid container>
                    <PhoneIcon sx={{ mr: 1 }}/>
                    <Typography>+ 48 786 677 659</Typography>
                </Grid>
                <Grid container justifyContent="flex-end">
                    <Typography sx={{ textDecoration: "underline" }}>Oddzwoń do mnie</Typography>
                </Grid>
            </Grid>
            <Grid>
                <Button variant="text" sx={{ minWidth: "unset" }}>RU</Button>
                <Button variant="text" sx={{ minWidth: "unset" }}>PL</Button>
            </Grid>
            <Navigation />
        </Grid>
    );
};

export default Navbar;