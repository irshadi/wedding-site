import { Flex } from "@chakra-ui/layout";
import { Skeleton } from "@chakra-ui/skeleton";
import React from "react";

export const FallbackImage = ({ ...props }) => {
  return (
    <Flex h="100%" w="100%" {...props}>
      <Skeleton h="100%" w="100%" />
    </Flex>
  );
};
