import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { PageLayout as Layout } from "./src/components/PageLayout";
import theme from "./src/@chakra-ui/gatsby-plugin/theme";

export const wrapPageElement = ({ element }) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Layout>{element}</Layout>
    </ChakraProvider>
  );
};
