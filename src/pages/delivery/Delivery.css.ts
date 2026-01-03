import { style } from "@vanilla-extract/css";

export const MainWrapper = style({
  display: "flex",
  flexDirection: "column",
  padding: "20px 20px 0",
  overflow: "hidden",
  height: "100dvh",
  width: "360px",
});

export const Coupon = style({
  borderRadius: "10px",
  width: "100%",
  height: "auto",
});

export const AppLogoStyle = style({
  width: "97px",
  height: "97px",
  borderRadius: "10px",
});

export const BadgeStyle = style({
  width: "100px",
  height: "auto",
});
