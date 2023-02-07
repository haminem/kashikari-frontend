import React from "react";
import { BoxProps as MuiBoxProps } from "@mui/material/Box";
import Box from "./Box";
import mergeSx from "@/utils/mergeSx";

export type StackRestProps = MuiBoxProps;

const DEFAULT_SX = {
  flexGrow: 1,
  flexBasis: 0,
  overflowY: "clip",
};

function StackRest({ sx, children }: StackRestProps) {
  const sxMerged = mergeSx(DEFAULT_SX, sx);

  return <Box sx={sxMerged}>{children}</Box>;
}

export default StackRest;
