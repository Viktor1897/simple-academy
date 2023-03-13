import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Button, Grid, IconButton, InputAdornment, TextField } from "@mui/material";
import { lightBlue } from "@mui/material/colors";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { auth } from "../../firebase/firebase";
import { ADMINISTRATION_ROUTE } from "../../routers/consts";

const LoginForm = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const login = async () => {
        await signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                navigate(ADMINISTRATION_ROUTE);
            })
            .catch((error) => {
                console.log(error.message);
            });

    };

    return (
        <Grid
            container
            width="400px"
            gap={2}
            padding={2}
            direction="column"
            sx={{
                backgroundColor: lightBlue[50],
                borderRadius: 2,
                margin: "0 auto",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
            }}>
            <TextField
                InputLabelProps={{
                    shrink: true,
                }}
                label="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
                label="Password"
                required
                type={showPassword ? "text" : "password"}
                InputLabelProps={{
                    shrink: true,
                }}
                InputProps={{
                    endAdornment:
            <InputAdornment position="end">
                <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
            </InputAdornment>

                }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button variant='outlined' onClick={login}>Login</Button>
        </Grid>
    );
};

export default LoginForm;