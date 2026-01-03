import { style } from "@vanilla-extract/css";

export const Container = style({
  display: "flex",
  backgroundColor: "#51A185",
  borderRadius: "10px",
  margin: "20px 0 0",
  padding: "20px",
  color: "white",
  gap: "10px",
  cursor: "pointer",
  justifyContent: "space-between",
});

export const plainLink = style({
  all: "unset", // ✅ 기본 스타일 전부 제거
  cursor: "pointer",
  color: "inherit",
  textDecoration: "none",
});
