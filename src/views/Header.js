import React from "react";
import { Flex, Heading } from "@chakra-ui/layout";
import { COLOR_MAP } from "../constants/color";
import { useColorMode } from "../hooks/useColorMode";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";

export const HeaderViews = () => {
  const { isUsingDarkMode } = useColorMode();
  const bgColor = useColorModeValue(COLOR_MAP.BEIGE, COLOR_MAP.DARK_GRAY);

  return (
    <Flex w="100%" h="35em">
      <Flex w="50%" bg={bgColor}>
        <Flex
          flexDir="column"
          w="100%"
          h="100%"
          justifyContent="flex-end"
          p="2em"
        >
          <Flex py="1em" mb="1em">
            <Heading fontSize="1em" fontFamily="Georgia" fontWeight="normal">
              19.06.2021
            </Heading>
            <Text></Text>
          </Flex>
          <Flex w="100%" justify="start">
            <Heading
              justifyContent="start"
              fontFamily="MAK"
              fontWeight="normal"
              fontSize="4em"
            >
              LARASATI
            </Heading>
            <Heading fontFamily="MAK-bold" fontSize="4em" px="0.5em">
              {"&"}
            </Heading>
          </Flex>
          <Heading
            w="100%"
            justifyContent="end"
            fontFamily="MAK"
            fontWeight="normal"
            fontSize="4em"
          >
            BAGASPUTRO
          </Heading>
        </Flex>
      </Flex>
      <Flex w="50%">
        <Image
          w="100%"
          src="images/traditional_main_header_alt.jpg"
          fit="cover"
        />
      </Flex>
    </Flex>
  );
};
