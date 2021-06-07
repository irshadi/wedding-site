import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { PageLayout as Layout } from "./src/components/PageLayout";
import theme from "./src/@chakra-ui/gatsby-plugin/theme";
import { Global } from "@emotion/react";
const Fonts = () => (
  <Global
    styles={`
      /* latin */
      @font-face {
        font-family: 'MAK';
        font-style: normal;
        font-display: swap;
        src: local('/fonts/MAK.woff2') url('./fonts/MAK.woff2') format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      `}
  />
);

export const wrapPageElement = ({ element }) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Layout>{element}</Layout>
    </ChakraProvider>
  );
};
