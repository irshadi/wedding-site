import React from "react";
import { Flex, Heading, Text } from "@chakra-ui/layout";

const NotFoundPage = () => {
  return (
    <Flex w="100%" h="40em" justify="center" flexDir="column">
      <Heading textAlign="center" fontSize="15em">
        404
      </Heading>
      <Text textAlign="center" fontFamily="georgia" fontSize="2em">
        {"¯_(ツ)_/¯"} Oops....
      </Text>
      <Text textAlign="center" fontFamily="georgia" mt="3em">
        Page not Found
      </Text>
    </Flex>
  );
};

export default NotFoundPage;
