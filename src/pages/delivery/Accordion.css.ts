import { keyframes, style } from "@vanilla-extract/css";

const slideDown = keyframes({
  from: { height: "0" },
  to: { height: "var(--radix-accordion-content-height)" },
});

const slideUp = keyframes({
  from: { height: "var(--radix-accordion-content-height)" },
  to: { height: "0" },
});

export const root = style({
  borderRadius: "6px",
  width: "300px",
  border: "none",
  backgroundColor: "transparent",
});

export const item = style({
  overflow: "hidden",
  marginTop: "1px",
  backgroundColor: "transparent",
  selectors: {
    "&:first-child": {
      backgroundColor: "transparent",
      marginTop: 0,
      borderTopLeftRadius: "4px",
      borderTopRightRadius: "4px",
    },
    "&:last-child": {
      backgroundColor: "transparent",
      borderBottomLeftRadius: "4px",
      borderBottomRightRadius: "4px",
    },
    "&:focus-within": {
      backgroundColor: "transparent",
      position: "relative",
      zIndex: 1,
    },
  },
});

export const header = style({
  all: "unset",
  display: "flex",
});

export const trigger = style({
  all: "unset",
  fontFamily: "inherit",
  backgroundColor: "transparent",
  height: "45px",
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  fontSize: "20px",
  fontWeight: "bold",
  lineHeight: "1",
  color: "var(--jade-11)",
  borderBottom: "2px solid var(--jade-6)",
  marginBottom: "10px",
});

export const content = style({
  overflow: "hidden",
  fontSize: "15px",
  selectors: {
    '&[data-state="open"]': {
      animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
    },
    '&[data-state="closed"]': {
      animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
    },
  },
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  border: "none",
});

export const contentText = style({
  padding: "15px 20px",
});

export const chevron = style({
  color: "var(--violet-10)",
  transition: "transform 300ms cubic-bezier(0.87, 0, 0.13, 1)",
  selectors: {
    '[data-state="open"] > &': {
      transform: "rotate(180deg)",
    },
  },
});
