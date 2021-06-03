import React from "react";
import { Flex, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { useColorMode } from "../../hooks/useColorMode";

const SiteModeButton = () => {
  const { isUsingDarkMode, toggleColorMode } = useColorMode();
  // const color = isUsingDarkMode ? 

  return (
    <Button
      onClick={toggleColorMode}
      variant="unstyled"
      opacity="0.65"
      position="relative"
      rounded="full"
      w="40px"
      h="25px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      transition="opacity 0.3s ease"
      border="none"
      bg="none"
      cursor="pointer"
      p={0}
      appearance="none"
      _hover={{ opacity: 1 }}
      _focus={{ opacity: 1 }}
    >
      <Flex
        position="relative"
        w="24px"
        h="24px"
        rounded="full"
        borderRadius="50%"
        border={isUsingDarkMode ? `4px solid gray` : `none`}
        bg={isUsingDarkMode ? `gray` : "transparent"}
        transform={isUsingDarkMode ? "scale(0.55)" : "scale(1)"}
        transition="all 0.45s ease"
        overflow={isUsingDarkMode ? "visible" : "hidden"}
        boxShadow={isUsingDarkMode ? "none" : "inset 8px -8px 0px 0px gray"}
        _before={{
          content: `""`,
          position: "absolute",
          right: "-9px",
          top: "-9px",
          height: "24px",
          width: "24px",
          border: isUsingDarkMode ? "2px solid white" : "none",
          borderRadius: "50%",
          transform: isUsingDarkMode
            ? "translate(14px, -14px)"
            : "translate(0, 0)",
          opacity: isUsingDarkMode ? 0 : 1,
          transition: "transform 0.45s ease"
        }}
        _after={{
          content: `""`,
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          margin: "-4px 0 0 -4px",
          position: "absolute",
          top: "50%",
          left: "50%",
          boxShadow:
            "0 -23px 0 gray, 0 23px 0 gray, 23px 0 0 gray, -23px 0 0 gray, 15px 15px 0 gray, -15px 15px 0 gray, 15px -15px 0 gray, -15px -15px 0 gray",
          transform: isUsingDarkMode ? "scale(1)" : "scale(0)",
          transition: "all 0.35s ease"
        }}
      />
    </Button>
  );
};

export const NavigationBar = () => {
  return (
    <Flex w="100vw" h="3.5em" bg="green" alignItems="center">
      <Flex w="50%" h="100%" alignItems="center">
        <Text>Selaras</Text>
      </Flex>
      <Flex w="50%" justifyContent="flex-end" alignItems="center">
        <Button variant="ghost">Date</Button>
        <Button variant="ghost">Our Story</Button>
        <Button variant="ghost">Gallery</Button>
        <Button variant="ghost" borderRadius="full">
          <SiteModeButton />
        </Button>
      </Flex>
    </Flex>
  );
};
