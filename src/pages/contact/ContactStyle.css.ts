import { style } from "@vanilla-extract/css";

export const ContactWrapper = style({
  display: "flex",
  flexDirection: "column",
  padding: "20px 20px 0",
  overflow: "hidden",
  height: "100dvh",
  width: "360px",
});

export const ScrollWrapper = style({
  height: "100%",
  overflowY: "scroll",
});
