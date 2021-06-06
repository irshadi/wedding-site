import React from "react";
import { Box } from "@chakra-ui/layout";
import { NavigationBar } from "../NavigationBar";
import { Footer } from "../Footer";

export const PageLayout = ({ children }) => {
  return (
    <Box overflowX="hidden">
      <NavigationBar />
      {children}
      <Footer />
    </Box>
  );
};
