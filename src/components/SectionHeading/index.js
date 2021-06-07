import React from "react";
import { Flex, Heading, Text } from "@chakra-ui/layout";

export const SectionHeading = ({
  title = "Title",
  label = "This is sample label text",
  ...props
}) => {
  return (
    <Flex
      flexDir="column"
      w="100%"
      justifyContent="center"
      py="2.5em"
      {...props}
    >
      <Heading fontFamily="MAK" textAlign="center">
        {title}
      </Heading>
      <Text textAlign="center" fontFamily="Georgia">
        {label}
      </Text>
    </Flex>
  );
};
