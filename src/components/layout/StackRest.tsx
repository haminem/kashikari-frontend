import React from "react";
import Stack, { StackProps as MuiStackProps } from "@mui/material/Stack";

export type StackRestProps = MuiStackProps;

function StackRest({ children }: StackRestProps) {
  return (
    <Stack
      sx={{
        flexGrow: 1,
        flexBasis: 0,
        overflowY: "clip",
      }}
    >
      {children}
    </Stack>
  );
}

export default StackRest;
