import React from "react";
import { Box, Grid, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { useColorMode } from "../hooks/useColorMode";
import { SectionHeading } from "../components/SectionHeading";

export const StoriesViews = () => {
  const { theme } = useColorMode();
  return (
    <Box pt="2.5em" mx={["2.5em", "12.5em"]} id="our-story">
      <SectionHeading title="Our Story" label="A glimpse of our story" />
      <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]} gap={10}>
        <Image src={`images/${theme}_main_header.jpg`} fit="cover" />
        <Text fontFamily="Georgia" textAlign="justify">
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
    </Box>
  );
};
