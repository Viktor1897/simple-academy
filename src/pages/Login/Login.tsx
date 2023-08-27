import styled from "@emotion/styled";
import { COLORS } from "consts";

// import LoginForm from "../../components/LoginForm/LoginForm";

const LoginSection = styled.section`
    background-color: ${COLORS.bgDark};
    height: 100vh;
`;

const Login = () => {
    return (
        <LoginSection>
            {/* <LoginForm /> */}
        </LoginSection>
    );
};

export default Login;