import styled from "@emotion/styled";
import { Button, H4 } from "components/StyledHtml/StyledHtml";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FormEvent, SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";

import { auth } from "../../firebase/firebase";
import { ADMINISTRATION_ROUTE } from "../../routers/consts";

const Form = styled.form`
    width: 40rem;
    background-color: rgba(255,255,255,0.13);
    position: absolute;
    transform: translate(-50%,-50%);
    top: 50%;
    left: 50%;
    border-radius: 1rem;
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255,255,255,0.1);
    box-shadow: 0 0 4rem rgba(8,7,16,0.6);
    padding: 5rem 3.5rem;

    *{
        font-family: 'Poppins',sans-serif;
        color: #ffffff;
        letter-spacing: 0.5px;
        outline: none;
        border: none;
    }

    label {
        display: block;
        font-size: 1.6rem;
        font-weight: 500;
    }

    input {
        display: block;
        height: 5rem;
        width: 100%;
        background-color: rgba(255,255,255,0.07);
        border-radius: 0.3rem;
        padding: 0 1rem;
        margin-top: 0.8rem;
        font-size: 1.4rem;
        font-weight: 300;
        margin-bottom: 3rem;

        ::placeholder{
            color: #e5e5e5;
        }
    }
`;

const LoginForm = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleEmailInput = (e: { target: { value: SetStateAction<string>; }; }) => {
        setEmail(e.target.value);
    };

    const handlePasswordInput = (e: { target: { value: SetStateAction<string>; }; }) => {
        setPassword(e.target.value);
    };

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
        <Form onSubmit={handleSubmit}>
            <H4 marginBottom="3rem">Login Here</H4>
            <label htmlFor="username">Email</label>
            <input value={email} onChange={handleEmailInput} type="email" placeholder="Email" id="username"/>
            <label htmlFor="password">Password</label>
            <input value={password} onChange={handlePasswordInput} type="password" placeholder="Password" id="password"/>
            <Button variant="contained">Log In</Button>
        </Form>
    );
};

export default LoginForm;