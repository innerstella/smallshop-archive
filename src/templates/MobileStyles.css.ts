import { style } from "@vanilla-extract/css"

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
})

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
})

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
