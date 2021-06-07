import React from "react";
import { Box } from "@chakra-ui/layout";
import { SectionHeading } from "../components/SectionHeading";
import { Image } from "@chakra-ui/image";
import { useColorMode } from "../hooks/useColorMode";
import { Grid } from "@chakra-ui/layout";
import { Heading } from "@chakra-ui/layout";
import { COLOR_MAP } from "../constants/color";
import { Text } from "@chakra-ui/layout";
import { GridItem } from "@chakra-ui/layout";

export const CoupleViews = () => {
  const { theme } = useColorMode();
  return (
    <Box mx="12.5em">
      <SectionHeading
        title="Happy Couple"
        label="A little bit of our background"
      />
      <Grid templateColumns="repeat(2, 2fr)" gap={5}>
        <GridItem bg="red" colSpan={1}>
          <Image src={`images/${theme}_irshadi.jpg`} fit="contain" />
        </GridItem>
        <GridItem bg={COLOR_MAP.BEIGE} fontFamily="Georgia" h="auto">
          <Box p="2em" textAlign="start">
            <Heading
              fontFamily="MAK"
              fontWeight="normal"
              textTransform="uppercase"
            >
              Irshadi Bagasputro
            </Heading>
            <Box mt="1em">
              <Text>
                Born April 16th, 1995. Graduated from Universitas Padjajaran. He
                is a funny and talented guy (according to him), and that's why
                Laras loves him (again according to him). Currently worked as
                Software Engineer for Indonesian Startup, delman.io.
              </Text>
              <Text mt="1em">First son of</Text>
              <Text
                fontSize="1.75em"
                fontFamily="MAK"
                textTransform="uppercase"
              >
                Rahadi Saputro
              </Text>
              <Text>{"&"}</Text>
              <Text
                fontSize="1.75em"
                fontFamily="MAK"
                textTransform="uppercase"
              >
                Yanita Susanti
              </Text>
            </Box>
          </Box>
        </GridItem>
        <GridItem bg={COLOR_MAP.BEIGE} fontFamily="Georgia">
          <Box p="2em" textAlign="start">
            <Heading
              fontFamily="MAK"
              fontWeight="normal"
              textTransform="uppercase"
            >
              Larasati Ayuningrum
            </Heading>
            <Box mt="1em">
              <Text>
                Born July 25th, 1995. Graduated from Universitas Indonesia.
                (Fill your description here). Currently worked as Public
                Relations for Indonesian Agency, SAC Indonesia.
              </Text>
              <Text mt="1em">First daughter of</Text>
              <Text
                fontSize="1.75em"
                fontFamily="MAK"
                textTransform="uppercase"
              >
                Ismunanto Haribisono
              </Text>
              <Text>{"&"}</Text>
              <Text
                fontSize="1.75em"
                fontFamily="MAK"
                textTransform="uppercase"
              >
                Asih Yuniarti
              </Text>
            </Box>
          </Box>
        </GridItem>
        <GridItem bg="red">
          <Image src={`images/${theme}_larasati.jpg`} fit="cover" />
        </GridItem>
      </Grid>
    </Box>
  );
};
