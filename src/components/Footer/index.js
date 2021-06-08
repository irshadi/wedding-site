import React from "react";
import { Flex, Text } from "@chakra-ui/layout";
import { COLOR_MAP } from "../../constants/color";
import { useColorModeValue } from "@chakra-ui/color-mode";

export const Footer = () => {
  const bg = useColorModeValue(COLOR_MAP.BEIGE, COLOR_MAP.DARK_GRAY);
  return (
    <Flex
      w="100%"
      py="2em"
      px={["2.5em", "12.5em"]}
      mt="2em"
      fontFamily="Georgia"
      bg={bg}
      justify="center"
    >
      <Text fontWeight="bold">© {new Date().getFullYear()}</Text>
      <Text> | Made from JKT - IDN</Text>
    </Flex>
  );
};
