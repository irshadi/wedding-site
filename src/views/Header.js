import React from "react";
import { Flex, Heading, Box } from "@chakra-ui/layout";
import { COLOR_MAP } from "../constants/color";
import { useColorMode } from "../hooks/useColorMode";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Image } from "@chakra-ui/image";
import { Button } from "@chakra-ui/button";
import { FallbackImage } from "../components/Fallback/Image";
import { SiYoutube } from "react-icons/si";
import { Divider } from "@chakra-ui/layout";

export const HeaderViews = () => {
  const { theme } = useColorMode();
  const bgColor = useColorModeValue(COLOR_MAP.BEIGE, COLOR_MAP.DARK_GRAY);
  const darkestColor = useColorModeValue(
    COLOR_MAP.BEIGE_TINT_2,
    COLOR_MAP.DARK_GRAY_SHADE_3
  );
  const lightestColor = useColorModeValue(
    COLOR_MAP.BEIGE_TINT_1,
    COLOR_MAP.DARK_GRAY_SHADE_1
  );
  const objectPosition = useColorModeValue("0% 70%", "0% 50%");

  return (
    <Flex w="100%" h="40em" flexDir={["column", "row"]}>
      <Flex w={["100%", "50%"]} bg={bgColor}>
        <Flex
          flexDir="column"
          w="100%"
          h="100%"
          justifyContent="flex-end"
          p="2em"
        >
          <Flex
            justify="space-between"
            align="center"
            w="100%"
            mb="2em"
            mt={["3.5em", 0]}
          >
            <Heading
              w={["35%", "25%"]}
              fontSize="1em"
              fontFamily="Georgia"
              fontWeight="normal"
              color={darkestColor}
            >
              19.06.2021
            </Heading>
            <Divider w={["25%", "45%"]} mt=".25em" />
            <Button
              w="30%"
              as="a"
              textAlign="start"
              variant="link"
              href="http://bit.ly/selarasdenganbagas"
              isExternal
              target="_blank"
              bg={"transparent"}
              color={lightestColor}
              rightIcon={<SiYoutube />}
              mr={[0, ".25em"]}
              alignSelf="center"
              fontSize="1em"
              fontFamily="Georgia"
              fontWeight="normal"
              // _hover={{ bg: lightestColor, opacity: 1 }}
              // _active={{ bg: lightestColor, opacity: 1 }}
              // _selected={{ bg: lightestColor, opacity: 1 }}
            >
              Watch
            </Button>
          </Flex>
          <Flex w="100%" justify="start">
            <Heading
              justifyContent="start"
              fontFamily="MAK"
              fontWeight="normal"
              fontSize={["2.5em", "4em"]}
              color={lightestColor}
            >
              LARASATI
            </Heading>
            <Heading
              fontFamily="MAK-bold"
              fontSize={["2.5em", "4em"]}
              px="0.5em"
              color={darkestColor}
            >
              {"&"}
            </Heading>
          </Flex>
          <Heading
            w="100%"
            justifyContent="end"
            fontFamily="MAK"
            fontWeight="normal"
            fontSize={["2.5em", "4em"]}
            color={lightestColor}
          >
            BAGASPUTRO
          </Heading>
        </Flex>
      </Flex>
      <Flex w={["100%", "50%"]} overflowY={["hidden", "visible"]}>
        <Image
          w="100%"
          src={`images/${theme}_main_header.jpg`}
          fit="cover"
          fallback={<FallbackImage />}
          objectPosition={objectPosition}
        />
      </Flex>
    </Flex>
  );
};
