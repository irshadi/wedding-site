import React from "react";
import { Flex, Box, Text, Heading } from "@chakra-ui/layout";
import { SectionHeading } from "../components/SectionHeading";
import { useCountdown } from "../hooks/useCountdown";
import { COLOR_MAP } from "../constants/color";

const Countdown = ({ time, value }) => {
  return (
    <Flex
      flexDir="column"
      bg="white"
      rounded=".25em"
      w="11.35em"
      h="11.35em"
      alignItems="center"
      justify="center"
    >
      <Heading
        textAlign="center"
        fontFamily="Georgia"
        textTransform="uppercase"
        fontSize="5.5em"
      >
        {value}
      </Heading>
      <Text
        mt="1em"
        textAlign="center"
        fontFamily="Georgia"
        textTransform="uppercase"
      >
        {time}
      </Text>
    </Flex>
  );
};

export const DateViews = () => {
  const { countdown, getCountdownEnum, getRelativeTime } = useCountdown();

  return (
    <Box mx="12.5em" mt="2em">
      <SectionHeading title="Event Date" />
      <Flex bg={COLOR_MAP.BEIGE} p="2em" justify="space-between">
        {Object.entries(countdown).map(([time, value], idx) => (
          <Countdown key={idx} time={time} value={value} />
        ))}
      </Flex>
    </Box>
  );
};
