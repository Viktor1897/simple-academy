import styled from "@emotion/styled";
import { Button, ContentWrapper, H3, Section, VerticalFlexContainer } from "components/StyledHtml/StyledHtml";
import { COLORS } from "consts";

const GraduatesSection = () => {
    return (
        <Section padding="60px 0 75px 0">
            <ContentWrapper flexDirection="column" alignItems="center">
                <H3 color={COLORS.black}>ABSOLWENCI</H3>
                <FlexContainer>
                    <VerticalFlexContainer>
                        <DummyPhotoSm/>
                        <DummyPhotoLg/>
                    </VerticalFlexContainer>
                    <VerticalFlexContainer>
                        <DummyPhotoLg/>
                        <DummyPhotoSm/>
                    </VerticalFlexContainer>
                    <VerticalFlexContainer>
                        <DummyPhotoSm/>
                        <DummyPhotoLg/>
                    </VerticalFlexContainer>
                </FlexContainer>
                <Button variant="outlined">Więcej zdjęć na instagramie</Button>
            </ContentWrapper>
        </Section>
    );
};

export default GraduatesSection;

const FlexContainer = styled.div`
    display: flex;
    width: 100%;
    gap: 30px;
`;


const DummyPhotoSm = styled.div`
    background-color: #979797;
    border-radius: 20px;
    width: 100%;
    height: 184px;
`;

const DummyPhotoLg = styled.div`
    background-color: #979797;
    border-radius: 20px;
    width: 100%;
    height: 476px;
`;