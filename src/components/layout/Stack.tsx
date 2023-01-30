import React from "react";
import MuiStack, { StackProps as MuiStackProps } from "@mui/material/Stack";

export type StackProps = MuiStackProps;

function Stack({ spacing = 0, children, ...rest }: StackProps) {
  return (
    <MuiStack spacing={spacing} {...rest}>
      {children}
    </MuiStack>
  );
}

export default Stack;
