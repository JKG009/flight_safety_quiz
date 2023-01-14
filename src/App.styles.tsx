import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --white: #ebe8e8;
        --green: #00645a;
        --lighter-grey: #c6c2c1;
        --darker-grey: #ababab;
        --darker-grey-boxshadow: #757575;

        --fs-xxs: 12px;
        --fs-xs: 14px;
        --fs-sm: 16px;
        --fs-md: 18px;
        --fs-lg: 20px;
        --fs-xl: 22px;
        --fs-xxl: 24px;
        --fs-heading: 32px;

        --max-width: 1440px;
        --border-radius: 4px;

        --transition-ease: all 0.5s ease;
        --transition-ease-faster: all 0.2s ease;
        --transition-ease-in-out: all 0.5s ease-in-out;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: var(--font-sans);
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        font-family: 'Roboto Slab', serif;
    }

    html {
        background-color: var(--white);
        overflow-x: hidden;

    }

    .section_container {
        max-width: var(--max-width);
        min-width: 500px;
        margin: auto;
    }
`;
