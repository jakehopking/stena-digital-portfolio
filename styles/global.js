import {createGlobalStyle} from "styled-components";
import {hexToRGBA} from "../utils/css";
import {COLOUR, SIZE, PALLET} from "../theme/theme";

// Theme is set within the _app.js

export const GlobalStyles = createGlobalStyle`
  /* CSS Colour variable declarations */
  html {
    /* Colours */
    --color-bg: ${({theme}) => hexToRGBA(theme.color.background)};
    --color-nav-bg: ${({theme}) => hexToRGBA(theme.color.navigation.background)};
    --color-panel-bg: ${({theme}) => hexToRGBA(theme.color.panel.background)};
    --color-text: ${({theme}) => hexToRGBA(theme.color.text.default)};
    --color-text-accent: ${({theme}) => hexToRGBA(theme.color.text.accent)};
    --color-grid-line: ${({theme}) => hexToRGBA(theme.color.grid.line.default)};

    --test: ${({theme}) => theme.variables.test + "px"};

    /* Buttons */
    --color-btn-nav-bg-active: ${({theme}) =>
      hexToRGBA(theme.color.button.nav.background.active)};

    /* Sizes */
    --radius-btn: ${SIZE.radius.button};
    --grid-main: ${SIZE.grid.main};

    /* Spacing units */
    --su-0: ${SIZE.spacing._0};
    --su-1: ${SIZE.spacing._1};
    --su-2: ${SIZE.spacing._2};
    --su-3: ${SIZE.spacing._3};
    --su-4: ${SIZE.spacing._4};
    --su-5: ${SIZE.spacing._5};
    --su-6: ${SIZE.spacing._6};
    --su-7: ${SIZE.spacing._7};
    --su-8: ${SIZE.spacing._8};

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
`;
