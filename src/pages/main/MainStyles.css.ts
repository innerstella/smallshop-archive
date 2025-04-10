import { style } from "@vanilla-extract/css"

export const MainWrapper = style({
  display: "flex",
  flexDirection: "column",
  padding: "20px 20px 0",
  overflow: "hidden",
  height: "100dvh",
  width: "360px",
})

export const ScrollWrapper = style({
  width: "100%",
  height: "100dvh",
  padding: "20px 0 10px",
  overflowY: "scroll",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  justifyContent: "start",
  alignItems: "center",
})

export const headerStyle = style({
  position: "fixed",
  top: 0,
  width: "100%",
  height: "60px",
  backgroundColor: "white",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.3s ease-in-out",
})

export const hiddenStyle = style({
  transform: "translateY(-100%)",
})

export const spacerStyle = style({
  paddingTop: "10px",
})
