import React from "react";
import { Flex, Box, Text, Heading } from "@chakra-ui/layout";
import { SectionHeading } from "../components/SectionHeading";
import { useCountdown, COUNTDOWN_STATUS_MAP } from "../hooks/useCountdown";
import { COLOR_MAP } from "../constants/color";
import isEmpty from "lodash/isEmpty";
import { useColorModeValue } from "@chakra-ui/color-mode";

const Countdown = ({ time, value }) => {
  const size = ["5em", "11.35em"];
  const bgBoxColor = useColorModeValue(
    COLOR_MAP.BEIGE_SHADE_0,
    COLOR_MAP.DARK_GRAY_SHADE_5
  );
  return (
    <Flex
      flexDir="column"
      bg="white"
      rounded=".25em"
      w={size}
      h={size}
      alignItems="center"
      justify="center"
      bg={bgBoxColor}
    >
      <Heading
        textAlign="center"
        fontFamily="Georgia"
        textTransform="uppercase"
        fontSize={["2.25em", "5.5em"]}
      >
        {value}
      </Heading>
      <Text
        mt={[0, "1em"]}
        textAlign="center"
        fontFamily="Georgia"
        textTransform="uppercase"
        fontSize={[".75em", "1em"]}
      >
        {time}
      </Text>
    </Flex>
  );
};

export const DateViews = () => {
  const { countdown, getCountdownEnum } = useCountdown();
  const status = getCountdownEnum();
  const bgBoxColor = useColorModeValue(COLOR_MAP.BEIGE, COLOR_MAP.DARK_GRAY);

  return status === COUNTDOWN_STATUS_MAP.AFTER ? null : (
    <Box mx={[0, "12.5em"]} mt="2em">
      <SectionHeading title="Event Date" label="Countdown to our wedding day" />
      <Flex
        bg={bgBoxColor}
        p={[".5em", "2em"]}
        rounded={[0, ".25em"]}
        justify="space-between"
      >
        {!isEmpty(countdown) &&
          Object.entries(countdown).map(([time, value], idx) => (
            <Countdown key={idx} time={time} value={value} />
          ))}
      </Flex>
    </Box>
  );
};
