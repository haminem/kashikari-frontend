import React from "react";
import mergeSx from "@/utils/mergeSx";
import Box, { BoxProps } from "@/components/layout/Box";

export type TitleProps = BoxProps & {
  title: string;
};

const DEFAULT_SX = {
  "&:before": {
    content: "''",
    position: "absolute",
    left: "-18px",
    width: "10px",
    height: "36px",
    background: "#A3B9E0",
  },
  position: "relative",
  fontSize: "24px",
};

function Title({ title, sx }: TitleProps) {
  const sxMerged = mergeSx(DEFAULT_SX, sx);
  return <Box sx={sxMerged}>{title}</Box>;
}

export default Title;
