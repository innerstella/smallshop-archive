import { style } from "@vanilla-extract/css";

export const templateStyle = style({
  display: "flex",
  justifyContent: "center",
  overflowX: "hidden",
  height: "100dvh",

  "@media": {
    "screen and (min-width: 400px)": {
      width: "100vw",
      backgroundColor: "gray",
    },
  },
});

export const contentStyle = style({
  display: "flex",
  flexDirection: "column",
  width: "100vw",
  justifyContent: "center",
  alignItems: "center",
  background: "white",
  overflow: "hidden",

  "@media": {
    "screen and (min-width: 400px)": {
      width: "400px",
    },
  },
});
