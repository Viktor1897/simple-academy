// import styled from "@emotion/styled";
import styled from "@emotion/styled";
import { COLORS, LANGUAGES } from "consts";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function LanguageSelect() {

    const { i18n } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState(LANGUAGES[0].code);

    const onChangeLang = (lang_code: string) => {
        setSelectedLanguage(lang_code);
        i18n.changeLanguage(lang_code);
    };

    return (
        <div style={{ display: "flex", gap: "1rem" }}>
            {LANGUAGES.map(({code, label}) => (
                <LanguageButton isActive={code === selectedLanguage} key={code} onClick={() => onChangeLang(code)}>
                    {label}
                </LanguageButton>
            ))}
        </div>
    );
}

export default LanguageSelect;

type LanguageButtonProps = {
    isActive: boolean;
};

const LanguageButton = styled.button<LanguageButtonProps>`
    cursor: pointer;
    background: none;
    border: none;
    font-size: 2.1rem;
    color: ${props => props.isActive ? COLORS.gold : COLORS.white};
    &:hover {
        transform: scale(1.15);
        transition: transform .3s;
    };
`;