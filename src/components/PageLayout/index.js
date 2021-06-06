import React from "react";
import { Box } from "@chakra-ui/layout";
import { NavigationBar } from "../NavigationBar";

export const PageLayout = ({ children }) => {
  return (
    <Box overflowX="hidden">
      <NavigationBar />
      {children}
    </Box>
  );
};
