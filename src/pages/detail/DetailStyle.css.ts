import { style } from "@vanilla-extract/css";

export const MainWrapper = style({
  display: "flex",
  flexDirection: "column",
  padding: "20px 20px 0",
  overflowY: "scroll",
  height: "100dvh",
  width: "360px",
});

export const DividerStyle = style({
  border: "1px solid gray",
});

export const ScrollWrapper = style({});
