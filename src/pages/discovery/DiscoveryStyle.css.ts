import { style } from "@vanilla-extract/css"
import { globalStyle } from "@vanilla-extract/css"

export const DiscoveryWrapper = style({
  display: "flex",
  flexDirection: "column",
  padding: "20px 20px 0",
  overflow: "hidden",
  height: "100dvh",
  width: "360px",
})

export const CardWrapper = style({
  padding: "10px",
})

export const ScrollWrapper = style({
  overflowX: "hidden",
  overflowY: "scroll",
})

globalStyle(".tweet .swiper-wrapper", {
  height: "1400px",
})

export const GifStyle = style({
  width: "100px",
  position: "relative",
  top: "10px",
})
