import {createGlobalStyle} from "styled-components";
import {hexToRGBA} from "../utils/css";
import {COLOUR, SIZE, PALLET} from "../theme/theme";

// Theme is set within the _app.js

export const GlobalStyles = createGlobalStyle`
  /* CSS Colour variable declarations */
  html {
    /* Colours */
    --color-default-bg: ${({theme}) => hexToRGBA(theme.color.default.background)};
    --color-default-fg: ${({theme}) => hexToRGBA(theme.color.default.foreground)};
    
    --color-bg: ${({theme}) => hexToRGBA(theme.color.background)};
    --color-nav-bg: ${({theme}) => hexToRGBA(theme.color.navigation.background)};
    --color-panel-bg: ${({theme}) => hexToRGBA(theme.color.panel.background)};
    --color-panel-border: ${({theme}) => hexToRGBA(theme.color.panel.border)};
    --color-panel-solid-bg: ${({theme}) => hexToRGBA(theme.color.panelSolid.background)};
    --color-panel-solid-border: ${({theme}) => hexToRGBA(theme.color.panelSolid.border)};
    --color-card-digitalBet: ${({theme}) =>
      hexToRGBA(theme.color.card.digitalBet.background)};
    --color-text: ${({theme}) => hexToRGBA(theme.color.text.default)};
    --color-text-accent: ${({theme}) => hexToRGBA(theme.color.text.accent)};
    --color-bigBet: ${({theme}) => hexToRGBA(theme.color.text.bigBet)};
    --color-grid-line: ${({theme}) => hexToRGBA(theme.color.grid.line.default)};

    /* Primary */
    --color-primary-0: ${({theme}) => hexToRGBA(theme.pallet.primary._00)};
    --color-primary-10: ${({theme}) => hexToRGBA(theme.pallet.primary._10)};
    --color-primary-15: ${({theme}) => hexToRGBA(theme.pallet.primary._15)};
    --color-primary-20: ${({theme}) => hexToRGBA(theme.pallet.primary._20)};
    /* Secondary */
    --color-secondary-0: ${({theme}) => hexToRGBA(theme.pallet.secondary._00)};
    /* Tertiary */
    --color-tertiary-0: ${({theme}) => hexToRGBA(theme.pallet.tertiary._00)};
    --color-tertiary-20: ${({theme}) => hexToRGBA(theme.pallet.tertiary._20)};
    /* Grey */
    --color-grey-01: ${({theme}) => hexToRGBA(theme.pallet.grey._01)};
    --color-grey-06: ${({theme}) => hexToRGBA(theme.pallet.grey._06)};
    --color-grey-08: ${({theme}) => hexToRGBA(theme.pallet.grey._08)};
    --color-grey-09: ${({theme}) => hexToRGBA(theme.pallet.grey._09)};
    --color-grey-70: ${({theme}) => hexToRGBA(theme.pallet.grey._70)};
    

    /* Buttons */
    --color-btn-nav-bg-active: ${({theme}) =>
      hexToRGBA(theme.color.button.nav.background.active)};

    /* Tags */
    --color-tag-external: ${({theme}) => hexToRGBA(theme.color.tag.external.border)};

    --color-tag-internal: ${({theme}) => hexToRGBA(theme.color.tag.internal.background)};

    /* Sizes */
    --radius-btn: ${SIZE.radius.default};
    --radius-default: ${SIZE.radius.default};
    --radius-small: ${SIZE.radius.small};
    --radius-round: ${SIZE.radius.round};
    
    /* Graphing grid */
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
    --su-9: ${SIZE.spacing._9};

    /* Font weights */
    --fw-0: ${SIZE.font.weight.hairline};
    --fw-1: ${SIZE.font.weight.thin};
    --fw-2: ${SIZE.font.weight.thin};
    --fw-3: ${SIZE.font.weight.medium};
    --fw-4: ${SIZE.font.weight.bold};
    --fw-5: ${SIZE.font.weight.bolder};
    --fw-6: ${SIZE.font.weight.thick};

    /* Font sizes */
    --fs-h1: ${SIZE.font.size.h1};
    --fs-h2: ${SIZE.font.size.h2};
    --fs-h3: ${SIZE.font.size.h3};
    --fs-h4: ${SIZE.font.size.h4};
    --fs-h5: ${SIZE.font.size.h5};
    --fs-h6: ${SIZE.font.size.h6};
    --fs-p: ${SIZE.font.size.p};
    --fs-sm: ${SIZE.font.size.sm};
    --fs-xs: ${SIZE.font.size.xs};
    

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
