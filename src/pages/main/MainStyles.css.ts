import { style } from "@vanilla-extract/css"

export const MainWrapper = style({
  display: "flex",
  flexDirection: "column",
  padding: "30px 20px 0",
  overflow: "hidden",
  width: "100%",
  height: "100dvh",
})

export const ScrollWrapper = style({
  width: "100%",
  height: "100%",
  overflowY: "scroll",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  justifyContent: "start",
  alignItems: "center",
})
