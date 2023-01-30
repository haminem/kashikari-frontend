import React from "react";
import mergeSx from "@/utils/mergeSx";
import Box from "@/components/layout/Box";

export type BoardProps = {
  /** The title of the board */
};

const sxProps = {
  height: "262px",
  width: "230px",
  boxShadow: "0px 4px 4px 0px #00000040",
  display: "flex",
  justifyContent: "space-between",
};

const clipSx = {
  width: "24px",
  height: "24px",
  position: "relative",
  top: "10px",
  borderRadius: "24px",
  background: "#F9CD8B",
  boxShadow: "0px 4px 4px 0px #00000040",
};

function Board() {
  return (
    <>
      <Box sx={sxProps}>
        <Box sx={mergeSx(clipSx, { left: "10px" })} />
        <Box sx={mergeSx(clipSx, { right: "10px" })} />
      </Box>
    </>
  );
}

export default Board;
