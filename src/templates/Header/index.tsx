import React from "react";
import Box from "@/components/layout/Box";

const headerSx = {
  height: "12.5vh",
  background: "#A3B9E0",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
};

function Header() {
  return <Box sx={headerSx}></Box>;
}

export default Header;
