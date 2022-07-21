import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  color: {
    primary: "#222222",
    accent: "#ffffff",
  },
};

const customMediaQuery = (maxWidth: number): string =>
  `@media (max-width: ${maxWidth}px)`;

export const media = {
  custom: customMediaQuery,
  mobile: customMediaQuery(767),
};
