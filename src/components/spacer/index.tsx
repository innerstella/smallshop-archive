export const Spacer = ({
  width,
  height,
}: {
  width?: number;
  height: number;
}) => {
  return <div style={{ width: `${width}px`, height: `${height}px` }} />;
};
