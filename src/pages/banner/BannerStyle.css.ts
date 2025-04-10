import { style, globalStyle } from "@vanilla-extract/css"

export const swiperTheme = {
  themeColor: "#007aff",
}

export const swiper = style({
  marginLeft: "auto",
  marginRight: "auto",
  position: "relative",
  overflow: "hidden",
  listStyle: "none",
  padding: 0,
  zIndex: 1,
  display: "block",
})

export const swiperWrapper = style({
  position: "relative",
  width: "100%",
  height: "100%",
  zIndex: 1,
  display: "flex",
  transitionProperty: "transform",
  transitionTimingFunction: "initial",
  boxSizing: "content-box",
})

globalStyle(`.${swiper} .swiper-slide`, {
  flexShrink: 0,
  width: "100%",
  height: "100%",
  position: "relative",
  transitionProperty: "transform",
  display: "block",
})

globalStyle(
  `.${swiper}.swiper-autoheight, .${swiper}.swiper-autoheight .swiper-slide`,
  {
    height: "auto",
  }
)

globalStyle(`.${swiper}.swiper-autoheight .${swiperWrapper}`, {
  alignItems: "flex-start",
  transitionProperty: "transform, height",
})

globalStyle(`.${swiper}.swiper-3d`, {
  perspective: "1200px",
})

globalStyle(`.${swiper}.swiper-3d .${swiperWrapper}`, {
  transformStyle: "preserve-3d",
})

export const swiperLazyPreloader = style({
  width: "42px",
  height: "42px",
  position: "absolute",
  left: "50%",
  top: "50%",
  marginLeft: "-21px",
  marginTop: "-21px",
  zIndex: 10,
  transformOrigin: "50%",
  boxSizing: "border-box",
  border: "4px solid var(--swiper-preloader-color, var(--swiper-theme-color))",
  borderRadius: "50%",
  borderTopColor: "transparent",
  animation: "swiper-preloader-spin 1s infinite linear",
})

// globalStyle("@keyframes swiper-preloader-spin", {
//   "0%": { transform: "rotate(0deg)" },
//   "100%": { transform: "rotate(360deg)" },
// })
