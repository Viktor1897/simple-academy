import styled from "@emotion/styled";
import { COLORS, LANGUAGES } from "consts";
import { useState } from "react";
import { useTranslation } from "react-i18next";

type LanguageSelectProps = {
    /**
     * @default "light"
     */
    tone?: "light" | "dark";
};

function LanguageSelect({ tone = "light" }: LanguageSelectProps) {
    const { i18n } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState(LANGUAGES[0].code);

    const onChangeLang = (lang_code: string) => {
        setSelectedLanguage(lang_code);
        i18n.changeLanguage(lang_code);
    };

    return (
        <Switcher tone={tone}>
            {LANGUAGES.map(({ code, label }) => (
                <LanguageButton
                    isActive={code === selectedLanguage}
                    tone={tone}
                    key={code}
                    onClick={() => onChangeLang(code)}
                >
                    {label}
                </LanguageButton>
            ))}
        </Switcher>
    );
}

export default LanguageSelect;

const Switcher = styled.div<LanguageSelectProps>`
    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.4rem;
    border-radius: 0;
    border: 1px solid ${props => (props.tone === "dark" ? "rgba(255,255,255,.25)" : "rgba(43,42,40,.2)")};
`;

type LanguageButtonProps = {
    isActive: boolean;
    tone?: "light" | "dark";
};

const LanguageButton = styled.button<LanguageButtonProps>`
    cursor: pointer;
    border: none;
    border-radius: 0;
    padding: 0.7rem 1.3rem;
    line-height: 1;
    font-size: 1.3rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    transition: background-color .25s ease, color .25s ease;
    background: ${props => (props.isActive ? COLORS.blue : "transparent")};
    color: ${props => {
        if (props.isActive) return COLORS.paper;
        return props.tone === "dark" ? COLORS.paper : COLORS.ink;
    }};
    &:hover {
        color: ${props => (props.isActive ? COLORS.paper : COLORS.blue)};
    }
`;
