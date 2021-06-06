import React from "react";
import { Flex, Text } from "@chakra-ui/layout";
import { COLOR_MAP } from "../../constants/color";

export const Footer = () => {
  return (
    <Flex
      w="100%"
      py="2em"
      px="10em"
      mt="2em"
      fontFamily="Georgia"
      bg={COLOR_MAP.BEIGE}
    >
      <Text w="100%" textAlign="center" fontWeight="bold">
        © {new Date().getFullYear()} | Made from JKT - IDN
      </Text>
    </Flex>
  );
};
