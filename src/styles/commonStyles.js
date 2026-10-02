import { colors, radius, shadow } from "./theme";

export const panelStyle = {

    background: colors.panel,

    border: `1px solid ${colors.border}`,

    borderRadius: radius.card,

    padding: "18px",

    boxShadow: shadow.glow,

};

export const titleStyle = {

    color: colors.primary,

    marginTop: 0,

    marginBottom: "16px",

};

export const subtitleStyle = {

    color: colors.muted,

    fontSize: "14px",

};