import React from "react";
import { Box, Grid, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { useColorMode } from "../hooks/useColorMode";
import { SectionHeading } from "../components/SectionHeading";
import { FallbackImage } from "../components/Fallback/Image";

export const StoriesViews = () => {
  const { theme } = useColorMode();
  return (
    <Box pt="2.5em" mx={["2.5em", "12.5em"]} id="our-story">
      <SectionHeading title="Our Story" label="A glimpse of our story" />
      <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]} gap={10}>
        <Image
          src={`images/${theme}_our_story.jpg`}
          fit="cover"
          fallback={<FallbackImage />}
        />
        <Text fontFamily="Georgia" textAlign="justify">
          Many people say that, you can find other boyfriends or girlfriends as
          long as you want. However, best friend will always stay by your side.
          People who will act as your last resort when you are in trouble. Now,
          what will happen when your soulmate is also your best friend? Laras
          and Bagas began their relationship from a casual friendship, became
          best friends, and decided to enter the most serious step, marriage. We
          met and hang with each other only after graduating from their Senior
          High School. Our friendship story can be described with one word:
          funny. We sought each other when both of us were in instability.
          <br />
          <br />
          Our story proved the truth said by an old Javanese proverb: “Witing
          Tresno Jalaran Soko Kulino” Love happens through habit. God’s plan is
          always the best. “Let’s grow together,” is our motto. We know, we
          know! Thinking about the turn of events that happened to us never fail
          to put smile in our faces, for it never ceases to amaze us! Knowing
          that both of us have so many things in common to cheer about, and also
          many different things that made us complete each other. We share same
          dreams and that makes us ready for a commitment that will last through
          our lifetimes. Until forever, on it goes.
        </Text>
      </Grid>
    </Box>
  );
};
