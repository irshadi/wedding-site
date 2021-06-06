import React from "react";
import { Flex, Heading, Text, Box } from "@chakra-ui/layout";
import { COLOR_MAP } from "../constants/color";
import { useColorMode } from "../hooks/useColorMode";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Image } from "@chakra-ui/image";
import { Button } from "@chakra-ui/button";

export const HeaderViews = () => {
  const { isUsingDarkMode } = useColorMode();
  const bgColor = useColorModeValue(COLOR_MAP.BEIGE, COLOR_MAP.DARK_GRAY);
  // FIXME
  const imgSource = "";

  return (
    <Flex w="100%" h="40em">
      <Flex w="50%" bg={bgColor}>
        <Flex
          flexDir="column"
          w="100%"
          h="100%"
          justifyContent="flex-end"
          p="2em"
        >
          <Flex py="1em" mb="1em">
            <Heading
              fontSize="1em"
              fontFamily="Georgia"
              fontWeight="normal"
              color={COLOR_MAP.CHARCOAL_SHADE_3}
            >
              19.06.2021
            </Heading>
          </Flex>
          {/* <Flex>
            <Button
              isDisabled={true}
              bg={COLOR_MAP.CHARCOAL_SHADE_2}
              color={COLOR_MAP.BEIGE}
            >
              Watch Live Straming
            </Button>
            <Text
              fontSize="1em"
              fontFamily="Georgia"
              fontWeight="normal"
              color={COLOR_MAP.CHARCOAL_SHADE_3}
            >
              In a week
            </Text>
          </Flex> */}
          <Flex w="100%" justify="start">
            <Heading
              justifyContent="start"
              fontFamily="MAK"
              fontWeight="normal"
              fontSize="4em"
              color={COLOR_MAP.CHARCOAL_SHADE_2}
            >
              LARASATI
            </Heading>
            <Heading
              fontFamily="MAK-bold"
              fontSize="4em"
              px="0.5em"
              color={COLOR_MAP.CHARCOAL_SHADE_3}
            >
              {"&"}
            </Heading>
          </Flex>
          <Heading
            w="100%"
            justifyContent="end"
            fontFamily="MAK"
            fontWeight="normal"
            fontSize="4em"
            color={COLOR_MAP.CHARCOAL_SHADE_2}
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
