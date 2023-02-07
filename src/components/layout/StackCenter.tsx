import React from "react";
import { StackProps as MuiStackProps } from "@mui/material/Stack";
import Stack from "./Stack";
import mergeSx from "@/utils/mergeSx";

export type StackCenterProps = MuiStackProps;

const DEFAULT_SX = {
  height: "100%",
};

function StackCenter({ sx, children }: StackCenterProps) {
  const sxMerged = mergeSx(DEFAULT_SX, sx);

  return (
    <Stack sx={sxMerged} justifyContent="center">
      <Stack direction="row" justifyContent="center">
        {children}
      </Stack>
    </Stack>
  );
}

export default StackCenter;
