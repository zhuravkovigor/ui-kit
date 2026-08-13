import { create } from "storybook/theming";

const theme = create({
  base: "dark",
  appBg: "#171717",
  appContentBg: "#202020",
  appBorderColor: "#3d3d3d",
  appBorderRadius: 6,
  barBg: "#202020",
  barSelectedColor: "#39c6a2",
  barTextColor: "#b5b5b5",
  barHoverColor: "#f2f2f2",
  colorPrimary: "#10a37f",
  colorSecondary: "#39c6a2",
  inputBg: "#292929",
  inputBorder: "#4b4b4b",
  inputTextColor: "#f2f2f2",
  textColor: "#f2f2f2",
  textInverseColor: "#171717",
  textMutedColor: "#b5b5b5",
});

export const manager = {
  theme,
};
