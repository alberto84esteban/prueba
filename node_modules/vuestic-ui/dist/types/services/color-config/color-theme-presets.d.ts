import { CssColor } from './color-config';
declare type VuesticColorsPreset = {
    primary: CssColor;
    secondary: CssColor;
    success: CssColor;
    info: CssColor;
    danger: CssColor;
    warning: CssColor;
    gray: CssColor;
    dark: CssColor;
    background: CssColor;
    divider: CssColor;
};
export declare const colorsPresets: Record<string, VuesticColorsPreset>;
export {};
