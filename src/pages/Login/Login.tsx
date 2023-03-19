import styled from "@emotion/styled";

import LoginForm from "../../components/LoginForm/LoginForm";

const Section = styled.section`
    background-color: #262626;
    height: 100vh;
`;

const Login = () => {
    return (
        <Section>
            <LoginForm />
        </Section>
    );
};

export default Login;