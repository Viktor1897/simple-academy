

export const goTo = (href: string): void => {
    document.querySelector(`#${href}`)?.scrollIntoView({
        behavior: "smooth",
    });
};