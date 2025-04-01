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
  width: "100%",
  background: "white",

  "@media": {
    "screen and (min-width: 400px)": {
      width: "400px",
    },
  },
})
