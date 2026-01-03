import { style } from "@vanilla-extract/css";

export const AdminWrapper = style({
  padding: "30px",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  width: "90vw",
  overflowY: "scroll",
  paddingBottom: "30px",
});

export const inputStyle = style({
  width: "100%",
  height: "24px",
  padding: "8px",
  border: "1px solid #ccc",
  borderRadius: "4px",
});
