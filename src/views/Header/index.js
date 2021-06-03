import React from "react";
import { Flex } from "@chakra-ui/layout";
// import { Countdown } from "../../components/Countdown";

export const Header = () => {
  return (
    <Flex w="100%">
      <Flex w="50%">Kiri</Flex>
      <Flex w="50%">Kanan</Flex>
      {/* <Countdown /> */}
    </Flex>
  );
};
