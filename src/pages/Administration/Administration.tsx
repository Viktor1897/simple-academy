import styled from "@emotion/styled";
import { Button, Text } from "components/StyledHtml/StyledHtml";
import { COLORS } from "consts";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

// import { auth } from "../../firebase/firebase";
import { HOME_ROUTE } from "../../routers/consts";

function Administration() {
    const navigate = useNavigate();

    // const handleSignOutClick = () => {
    //     signOut(auth).then(() => {
    //         // TODO скорее всего можно будет выпилить когда настрою редиректы к роутерам с недоступных путей на главную.
    //         navigate(HOME_ROUTE);
    //     }).catch((error) => {
    //         console.log(error);
    //     });
    // };
  

    return (
        <AppBar>
            <Text color={COLORS.white}>Administrative panel</Text>
            <UserContainer>
                {/* <Text color={COLORS.white}>{auth.currentUser?.email}</Text>
                <Button padding="0.5rem 1rem" fontSize="1.8rem" color={COLORS.white} onClick={handleSignOutClick}>Logout</Button> */}
            </UserContainer>
        </AppBar>
    );
}

export default Administration;

const AppBar = styled.div`
    padding: 1rem 3rem;
    display: flex;
    align-items: center;
    background-color: ${COLORS.bgDark};
    color: ${COLORS.white};
    box-shadow: 0 0 0.5rem ${COLORS.bgDark};
`;

const UserContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-left: auto;
`;