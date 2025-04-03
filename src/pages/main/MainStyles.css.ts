import { style } from "@vanilla-extract/css"

export const MainWrapper = style({
  display: "flex",
  flexDirection: "column",
  padding: "30px 20px 0",
  overflow: "hidden",
})

export const EmptyWrapper = style({
  width: "350px",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  alignContent: "center",
  justifyContent: "center",
})

export const IconStyle = style({
  width: "100px",
})
