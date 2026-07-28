import styled from "@emotion/styled";
import { BlueSection, Eyebrow, MarkerButton, ScribbleLabel, SectionHeading } from "components/StyledHtml/StyledHtml";
import { useState } from "react";
import { useTranslation } from "react-i18next";

type CoursesSectionProps = {
  onNavigate: (id: string) => void;
};

const CoursesSection = ({ onNavigate }: CoursesSectionProps) => {
    const { t } = useTranslation();
    const [activeCourse, setActiveCourse] = useState(0);

    return (
        <CoursesContainer id="courses" paperTop paperBottom>
            <SectionHeading light>
                <ScribbleLabel>{t("labels.courses")}</ScribbleLabel>
                <h2>{t("courses.title")} <mark>{t("courses.highlight")}</mark></h2>
                <p>{t("courses.description")}</p>
            </SectionHeading>

            <CourseTabs role="tablist" aria-label={t("courses.title")}>
                {[0, 1].map((course) => (
                    <TabButton
                        key={course}
                        isActive={activeCourse === course}
                        onClick={() => setActiveCourse(course)}
                        role="tab"
                        aria-selected={activeCourse === course}
                    >
                        {t(`courses.items.${course}.short`)}
                    </TabButton>
                ))}
            </CourseTabs>

            <CourseCard>
                <CourseNumber>0{activeCourse + 1}</CourseNumber>
                <CourseMain>
                    <Eyebrow>{t(`courses.items.${activeCourse}.audience`)}</Eyebrow>
                    <h3>{t(`courses.items.${activeCourse}.title`)}</h3>
                    <p>{t(`courses.items.${activeCourse}.description`)}</p>
                    <CourseMeta>
                        <div>
                            <span>{t("courses.duration")}</span>
                            <strong>{t(`courses.items.${activeCourse}.duration`)}</strong>
                        </div>
                        <div>
                            <span>{t("courses.group")}</span>
                            <strong>{t(`courses.items.${activeCourse}.group`)}</strong>
                        </div>
                        <div>
                            <span>{t("courses.price")}</span>
                            <strong>{t(`courses.items.${activeCourse}.price`)}</strong>
                        </div>
                    </CourseMeta>
                </CourseMain>
                <CourseAction>
                    <CourseStamp>SIMPLE<br />ACADEMY</CourseStamp>
                    <MarkerButton onClick={() => onNavigate("contact")}>
                        {t("courses.button")}
                    </MarkerButton>
                </CourseAction>
            </CourseCard>
        </CoursesContainer>
    );
};

export default CoursesSection;

const CoursesContainer = styled(BlueSection)`
  padding-top: 150px;
  padding-bottom: 160px;
`;

const CourseTabs = styled.div`
  max-width: var(--content, 1180px);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 0 auto;
  border-top: 1px solid rgba(255, 255, 255, 0.4);
  border-right: 1px solid rgba(255, 255, 255, 0.4);
  border-left: 1px solid rgba(255, 255, 255, 0.4);
`;

type TabButtonProps = {
  isActive: boolean;
};

const TabButton = styled.button<TabButtonProps>`
  padding: 20px;
  color: ${props => props.isActive ? "var(--ink, #161616)" : "rgba(255, 255, 255, 0.58)"};
  background: ${props => props.isActive ? "#fff" : "transparent"};
  border: 0;
  border-right: 1px solid rgba(255, 255, 255, 0.4);
  font-size: 14px;
  font-weight: 900;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  cursor: pointer;

  &:last-child {
    border-right: 0;
  }
`;

const CourseCard = styled.div`
  max-width: var(--content, 1180px);
  min-height: 480px;
  display: grid;
  grid-template-columns: 140px 1fr 300px;
  gap: 44px;
  margin: 0 auto;
  padding: clamp(35px, 6vw, 78px);
  color: var(--ink, #161616);
  background:
    linear-gradient(115deg, rgba(0, 0, 0, 0.025) 0 1px, transparent 1px 14px),
    var(--paper-bright, #fbfaf7);
  border: 1px solid rgba(255, 255, 255, 0.65);
  box-shadow: 14px 16px 0 rgba(7, 73, 132, 0.42);

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const CourseNumber = styled.div`
  align-self: start;
  color: var(--coral, #ff5b4d);
  font-size: 96px;
  font-weight: 900;
  letter-spacing: -0.1em;
  line-height: 0.8;
`;

const CourseMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  & h3 {
    margin-bottom: 22px;
    font-size: clamp(38px, 4.3vw, 66px);
    font-weight: 900;
    letter-spacing: -0.06em;
    line-height: 0.95;
    text-transform: uppercase;
  }

  & > p {
    max-width: 590px;
    color: var(--muted, #716f6b);
  }
`;

const CourseMeta = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 44px;
  padding-top: 24px;
  border-top: 1px solid var(--line, rgba(22, 22, 22, 0.22));

  & div {
    display: flex;
    flex-direction: column;
  }

  & span {
    margin-bottom: 5px;
    color: var(--muted, #716f6b);
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  & strong {
    font-size: 17px;
  }

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

const CourseAction = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;

  @media (max-width: 980px) {
    align-items: flex-start;
    gap: 24px;
  }
`;

const CourseStamp = styled.div`
  display: grid;
  width: 130px;
  height: 130px;
  place-items: center;
  color: var(--blue, #167bd5);
  border: 4px double var(--blue, #167bd5);
  border-radius: 50%;
  font-size: 16px;
  font-weight: 900;
  line-height: 1.05;
  text-align: center;
  transform: rotate(11deg);
`;