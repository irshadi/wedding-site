import React from "react";
import { Box, Flex } from "@chakra-ui/layout";
import { Heading } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { useColorMode } from "../hooks/useColorMode";
import { COLOR_MAP } from "../constants/color";
import { Grid } from "@chakra-ui/layout";
import { SectionHeading } from "../components/SectionHeading";

export const StoriesViews = () => {
  const { theme } = useColorMode();
  return (
    <Box pt="2.5em" mx="12.5em">
      <SectionHeading title="Our Story" />
      <Grid templateColumns="repeat(2, 1fr)" gap={10}>
        <Image src={`images/${theme}_main_header.jpg`} fit="cover" />
        <Text fontFamily="Georgia">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          euismod blandit urna, id hendrerit nisi interdum ac. Vivamus at
          tincidunt eros. Proin tincidunt dapibus enim ac porta. Curabitur
          pretium pretium pretium. In hac habitasse platea dictumst. Nam aliquam
          pulvinar magna eu convallis. Maecenas tortor dolor, cursus non leo
          accumsan, fringilla placerat nisl. Sed tempus pretium lectus nec
          vestibulum. Nunc laoreet felis non dolor tristique posuere. Nulla
          aliquam scelerisque sodales. Nullam non enim et nibh rhoncus
          fermentum. Aliquam sed lorem mattis, tincidunt ligula nec, lobortis
          libero. Praesent ac fringilla felis, et cursus nisl.
          <br />
          <br />
          Quisque vitae pretium nunc. Fusce eget massa in leo egestas mattis.
          Nulla quis maximus neque. Sed vitae est vel lorem volutpat molestie a
          eget odio. Mauris nisi nisi, ullamcorper quis mauris in, semper
          porttitor ante. Integer feugiat tortor at arcu fermentum, eu lobortis
          nunc varius. Duis eleifend aliquam ultricies. Maecenas at efficitur
          augue. Fusce pharetra nulla sed eros dignissim ornare ac eget dui.
        </Text>
      </Grid>
      <Flex pt="2em" justify="space-arround">
        <Flex w="50%" justifyContent="start"></Flex>
        <Flex w="50%" flexDir="column"></Flex>
      </Flex>
    </Box>
  );
};
