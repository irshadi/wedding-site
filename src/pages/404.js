import React from "react";
import { Flex } from "@chakra-ui/layout";
import { Heading } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { Link } from "gatsby";

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
