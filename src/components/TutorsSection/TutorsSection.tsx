import styled from "@emotion/styled";
import Anastazja from "assets/ANASTAZJA.jpg";
import Anton from "assets/ANTON.jpg";
import { ContentWrapperResponsive, H3, Section, Text, VerticalFlexContainer } from "components/StyledHtml/StyledHtml";
import { COLORS, LINKS } from "consts";
import { useTranslation } from "react-i18next";

const TutorsSection = () => {
    const { t } = useTranslation();

    return (
        <Section id={LINKS.TUTORS} padding="6rem 0 10rem 0" backgroundColor={COLORS.bgGray}>
            <H3 marginBottom="8rem">{t("tutors.title")}</H3>
            <ContentWrapperResponsive gap="4rem" flexDirection="row" alignItems="center">
                <VerticalFlexContainer gap="initial">
                    <Photo src={Anton} />
                    <Text marginBottom="1.5rem" fontWeight="700">{t("tutor1.name")}</Text>
                    <Text fontSize="1.9rem" style={{ maxWidth: "38.9rem" }}>{t("tutor1.description")}</Text>
                </VerticalFlexContainer>
                <VerticalFlexContainer gap="initial">
                    <Photo src={Anastazja} />
                    <Text marginBottom="1.5rem" fontWeight="700">{t("tutor2.name")}</Text>
                    <Text fontSize="1.9rem" style={{ maxWidth: "38.9rem" }}>{t("tutor2.description")}</Text>
                </VerticalFlexContainer>
            </ContentWrapperResponsive>
        </Section>
    );
};

export default TutorsSection;

const Photo = styled.img`
    border-radius: 50%;
    width: 34rem;
    height: 34rem;
    margin-bottom: 4.5rem;
`;
