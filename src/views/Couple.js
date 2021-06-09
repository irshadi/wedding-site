import React from "react";
import { SectionHeading } from "../components/SectionHeading";
import { Image } from "@chakra-ui/image";
import { useColorMode } from "../hooks/useColorMode";
import { Heading, Flex, Text, Box } from "@chakra-ui/layout";
import { COLOR_MAP } from "../constants/color";
import { FallbackImage } from "../components/Fallback/Image";
import { useColorModeValue } from "@chakra-ui/color-mode";

export const CoupleViews = () => {
  const { theme } = useColorMode();
  const bgBoxColor = useColorModeValue(COLOR_MAP.BEIGE, COLOR_MAP.DARK_GRAY);
  return (
    <Box mx={["2.5em", "12.5em"]}>
      <SectionHeading
        title="Happy Couple"
        label="A little bit of our background"
      />
      <Flex flexDir="column">
        <Flex flexDir={["column", "row"]} h={["auto", "37.5em"]} w="100%">
          <Flex w={["100%", "55%"]} maxH={["25em", "37.5em"]}>
            <Image
              w="100%"
              src={`images/${theme}_irshadi.jpg`}
              fit="cover"
              fallback={<FallbackImage />}
              objectPosition={["center center"]}
            />
          </Flex>
          <Flex
            w={["100%", "45%"]}
            bg={bgBoxColor}
            fontFamily="Georgia"
            h="auto"
          >
            <Box p={["2em", "3em"]} textAlign="start">
              <Heading
                fontFamily="MAK"
                fontWeight="normal"
                textTransform="uppercase"
              >
                Irshadi Bagasputro
              </Heading>
              <Box mt="1em">
                <Text textAlign="justify">
                  Born April 16th, 1995. Graduated from Universitas Padjajaran.
                  He is a funny and talented guy (according to him), and that's
                  why Laras loves him (again according to him). Currently worked
                  as Software Engineer for Indonesian Startup, delman.io.
                </Text>
              </Box>
              <Flex
                flexDir="column"
                align="flex-end"
                justify="flex-end"
                mt={["2.5em", "5em"]}
                w="100%"
              >
                <Text>First son of</Text>
                <Text
                  fontSize={["1.25em", "1.75em"]}
                  fontFamily="MAK"
                  textTransform="uppercase"
                  textAlign="right"
                >
                  Rahadi Saputro
                </Text>
                <Text>{"&"}</Text>
                <Text
                  fontSize={["1.25em", "1.75em"]}
                  fontFamily="MAK"
                  textTransform="uppercase"
                  textAlign="right"
                >
                  Yanita Susanti
                </Text>
              </Flex>
            </Box>
          </Flex>
        </Flex>
        <Flex
          flexDir={["column-reverse", "row"]}
          h={["auto", "37.5em"]}
          mt={["1em"]}
          w="100%"
        >
          <Flex w={["100%", "45%"]} bg={bgBoxColor} fontFamily="Georgia">
            <Box p={["2em", "3em"]} textAlign="start">
              <Heading
                fontFamily="MAK"
                fontWeight="normal"
                textTransform="uppercase"
              >
                Larasati Ayuningrum
              </Heading>
              <Box mt="1em">
                <Text textAlign="justify">
                  Born July 21st, 1995. Graduated from Universitas Indonesia.
                  (Fill your description here). Currently worked as Public
                  Relations for Indonesian Agency, SAC Indonesia.
                </Text>
                <Flex
                  flexDir="column"
                  align="flex-end"
                  justify="flex-end"
                  mt={["2.5em", "5em"]}
                  w="100%"
                >
                  <Text mt="1em" textAlign="right">
                    First daughter of
                  </Text>
                  <Text
                    fontSize={["1.25em", "1.75em"]}
                    fontFamily="MAK"
                    textTransform="uppercase"
                    textAlign="right"
                  >
                    Ismunanto Haribisono
                  </Text>
                  <Text textAlign="left">{"&"}</Text>
                  <Text
                    fontSize={["1.25em", "1.75em"]}
                    fontFamily="MAK"
                    textTransform="uppercase"
                    textAlign="right"
                  >
                    Asih Yuniarti
                  </Text>
                </Flex>
              </Box>
            </Box>
          </Flex>
          <Flex w={["100%", "55%"]} maxH={["25em", "37.5em"]}>
            <Image
              w="100%"
              src={`images/${theme}_larasati.jpg`}
              fit="cover"
              fallback={<FallbackImage />}
              objectPosition={["center center"]}
            />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};
