import React from "react";
import mergeSx from "@/utils/mergeSx";
import Box, { BoxProps } from "@/components/layout/Box";

export type ClipProps = BoxProps;

const DEFAULT_SX = {
  width: "20px",
  height: "20px",
  position: "relative",
  borderRadius: "20px",
  background: "#F9CD8B",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
};

function Clip({ sx }: ClipProps) {
  const sxMerged = mergeSx(DEFAULT_SX, sx);
  return <Box sx={sxMerged} />;
}

export default Clip;
