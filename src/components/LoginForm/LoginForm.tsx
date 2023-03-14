import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Button, IconButton, InputAdornment, Paper, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import { auth } from "../../firebase/firebase";
import { ADMINISTRATION_ROUTE } from "../../routers/consts";

const LoginForm = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        await signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                navigate(ADMINISTRATION_ROUTE);
            })
            .catch((error) => {
                console.log(error.message);
            });

    };

    return (
        <Paper
            elevation={4}
            sx={{
                width: "400px",
                padding: 2,
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
            }}>
            <form onSubmit={handleSubmit}>
                <Stack gap={3}>
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
                    <Button type="submit" variant='outlined'>Login</Button>
                </Stack>
            </form>
        </Paper>
    );
};

export default LoginForm;