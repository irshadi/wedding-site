import React from "react";
import { Flex, Text } from "@chakra-ui/layout";
import { COLOR_MAP } from "../../constants/color";

export const Footer = () => {
  return (
    <Flex
      w="100%"
      py="2em"
      px={["2.5em", "12.5em"]}
      mt="2em"
      fontFamily="Georgia"
      bg={COLOR_MAP.BEIGE}
      justify="center"
    >
      <Text fontWeight="bold">© {new Date().getFullYear()}</Text>
      <Text> | Made from JKT - IDN</Text>
    </Flex>
  );
};
