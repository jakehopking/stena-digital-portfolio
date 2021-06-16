import {createGlobalStyle} from "styled-components";
import reset from "styled-reset";
import {hexToRGBA} from "../utils/css";
import {COLOUR, SIZE, PALLET} from "../theme/theme";

// Theme is set within the _app.js

export const GlobalStyles = createGlobalStyle`
  /* Reset and set box-sizing */
  ${reset}
  * {
    box-sizing: border-box;
  }
  @font-face {
    font-family: "Stena Sans";
    src: url("/fonts/StenaSans-Regular.ttf");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }
  @font-face {
    font-family: "Stena Sans";
    src: url("/fonts/StenaSans-Medium.ttf");
    font-style: normal;
    font-weight: 500;
    font-display: swap;
  }
  @font-face {
    font-family: "Stena Sans";
    src: url("/fonts/StenaSans-Bold.ttf");
    font-style: normal;
    font-weight: 700;
    font-display: swap;
  }
  /* CSS Colour variable declarations */
  html {
    --color-bg: ${({theme}) => hexToRGBA(theme.color.background)};
    --color-nav-bg: ${({theme}) => hexToRGBA(theme.color.navigation.background)};
    --color-panel-bg: ${({theme}) => hexToRGBA(theme.color.panel.background)};
    --color-text: ${({theme}) => hexToRGBA(theme.color.text.default)};
    --color-text-accent: ${({theme}) => hexToRGBA(theme.color.text.accent)};

    /* Buttons */
    --color-btn-nav-bg-active: ${({theme}) =>
      hexToRGBA(theme.color.button.nav.background.active)};
    --radius-btn: ${SIZE.radius.button};
    
    /*** 
    * Please only use these breakpoints for reactive css variables. 
    * Class specific media queries belong in their respective components.
    ***/

    /* Small breakpoint */
    @media (min-width: ${SIZE.bp.sm}) {

    }
    /* Medium breakpoint */
    @media (min-width: ${SIZE.bp.md}) {

    }
    /* Large breakpoint */
    @media (min-width: ${SIZE.bp.lg}) {

    }
    /* Extra large breakpoint */
    @media (min-width: ${SIZE.bp.xl}) {

    }
    /* Extra extra large breakpoint */
    @media (min-width: ${SIZE.bp.xxl}) {

    }
  }
  html,
  body {
    font-family: "Stena Sans";
    color: var(--color-text);
    background-color: var(--color-bg);
    height: 100%;
    font-size: 100%;
  }

  body > div:first-child,
  div#__next,
  div#__next > div {
    height: 100%;
  }

  body {
    display: flex;
    flex-direction: column;
    font-weight: 400;
    line-height: 1.75;
  }

  main {
    flex: 1;
    padding: ${SIZE.spacing._6};
    background-color: var(--color-bg)
  }

  p {margin-bottom: 1rem;}
  h1, h2, h3, h4, h5 {
    margin: 3rem 0 1.38rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    line-height: 1.3;
    display: block;
  }
  h1, .h1 {
    margin-top: 0;
    font-size: 1.802rem;
  }
  h2, .h2 {font-size: 1.602rem;}
  h3, .h3 {font-size: 1.424rem;}
  h4, .h4 {font-size: 1.266rem;}
  h5, .h5 {font-size: 1.125rem;}
  small, .text_small {font-size: 0.889rem;}

  .u-color-text-accent {
    color: var(--color-text-accent)
  };
`;
