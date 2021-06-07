import { Box } from "@chakra-ui/layout";
import React from "react";
import { useCountdown } from "../../hooks/useCountdown";

export const Countdown = () => {
  const { countdown, getCountdownEnum, getRelativeTime } = useCountdown();

  return (
    <Box>
      <span>{JSON.stringify(countdown)}</span>
      {JSON.stringify(getCountdownEnum())}
      {JSON.stringify(getRelativeTime())}
    </Box>
  );
};
