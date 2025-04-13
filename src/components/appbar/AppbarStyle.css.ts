import { style } from "@vanilla-extract/css"

export const appBarStyle = style({
  width: "100%",
  height: "50px",
  backgroundColor: "#51A185",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
})

export const ButtonStyle = style({
  cursor: "pointer",
  backgroundColor: "transparent",
  border: "none",
})
