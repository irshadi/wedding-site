import React from "react";
import { Flex } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/layout";

export const DateViews = () => {
  return (
    <Flex>
      <Flex flexDir="column" justifyItems="center">
        <Text style={{ fontFamily: "MAK" }}>Wedding Date</Text>
        <Text style={{ fontFamily: "Chromate" }}>Wedding Date</Text>
        <Text style={{ fontFamily: "Javassoul" }}>Wedding Date</Text>
      </Flex>
    </Flex>
  );
};
