import React from "react";
import Box, { BoxProps } from "@/components/layout/Box";
import Clip from "./clip";
import Stack from "@/components/layout/Stack";
import mergeSx from "@/utils/mergeSx";

export type BoardProps = {
  pins?: "side" | "square";
} & BoxProps;

const DEFAULT_SX = {
  background: "#FFFFFF",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
};

function Board({ sx, pins, children }: BoardProps) {
  const sxMerged = mergeSx(DEFAULT_SX, sx);
  return (
    <>
      <Box sx={sxMerged}>
        {(pins === "side" || pins === "square") && (
          <Stack direction="row" justifyContent="space-between">
            <Clip sx={{ top: "10px", left: "10px" }} />
            <Clip sx={{ top: "10px", right: "10px" }} />
          </Stack>
        )}
        <Box>{children}</Box>
        {pins === "square" && (
          <Stack direction="row" justifyContent="space-between">
            <Clip sx={{ bottom: "10px", left: "10px" }} />
            <Clip sx={{ bottom: "10px", right: "10px" }} />
          </Stack>
        )}
      </Box>
    </>
  );
}

export default Board;
