import React from "react";
import { Flex } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { useColorMode } from "../../hooks/useColorMode";
import { COLOR_MAP } from "../../constants/color";
import { navigate } from "gatsby-link";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { HiMenuAlt3 } from "react-icons/hi/";
import { IconButton } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody
} from "@chakra-ui/react";

const SiteModeButton = () => {
  const { isUsingDarkMode, toggleColorMode } = useColorMode();
  const color = useColorModeValue(
    COLOR_MAP.BEIGE_TINT_3,
    COLOR_MAP.DARK_GRAY_SHADE_1
  );

  return (
    <Button
      onClick={toggleColorMode}
      variant="unstyled"
      opacity="0.85"
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
        border={isUsingDarkMode ? `4px solid ${color}` : `none`}
        bg={isUsingDarkMode ? color : "transparent"}
        transform={isUsingDarkMode ? "scale(0.55)" : "scale(1)"}
        transition="all 0.45s ease"
        overflow={isUsingDarkMode ? "visible" : "hidden"}
        boxShadow={isUsingDarkMode ? "none" : `inset 8px -8px 0px 0px ${color}`}
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
          boxShadow: `0 -23px 0 ${color}, 0 23px 0 ${color}, 23px 0 0 ${color}, -23px 0 0 ${color}, 15px 15px 0 ${color}, -15px 15px 0 ${color}, 15px -15px 0 ${color}, -15px -15px 0 ${color}`,
          transform: isUsingDarkMode ? "scale(1)" : "scale(0)",
          transition: "all 0.35s ease"
        }}
      />
    </Button>
  );
};

export const NavigationBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const feedbackColor = useColorModeValue(
    COLOR_MAP.BEIGE_SHADE_1,
    COLOR_MAP.DARK_GRAY_SHADE_4
  );

  return (
    <Flex
      w="100%"
      h="3.5em"
      alignItems="center"
      bg="transparent"
      flexDir={["row-reverse", "row"]}
      pos="absolute"
      zIndex="2"
    >
      <IconButton
        variant="ghost"
        display={["flex", "none"]}
        bg={"transparent"}
        fontSize="1.5em"
        _active={{ bg: feedbackColor }}
        _hover={{ bg: feedbackColor }}
        icon={<HiMenuAlt3 />}
        rounded="full"
        mr=".5em"
        onClick={onOpen}
      />
      <Drawer
        display={["visible", "none"]}
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        returnFocusOnClose={false}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody
            display="flex"
            flexDir="column"
            alignItems="center"
            justifyContent="center"
          >
            <Button
              w="100%"
              onClick={() => {
                navigate("/");
                onClose();
              }}
              mx="1em"
              my="1em"
              variant="link"
              fontWeight="700"
              fontSize="1.25em"
              textTransform="uppercase"
            >
              Home
            </Button>
            <Button
              onClick={() => {
                navigate("/#our-story");
                onClose();
              }}
              mx="1em"
              my="1em"
              variant="link"
              fontWeight="700"
              fontSize="1.25em"
              textTransform="uppercase"
            >
              Story
            </Button>
            <Button
              onClick={() => {
                navigate("/#gallery");
                onClose();
              }}
              mx="1em"
              my="1em"
              variant="link"
              fontWeight="700"
              fontSize="1.25em"
              textTransform="uppercase"
            >
              Gallery
            </Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Flex
        w="50%"
        h="100%"
        alignItems="center"
        px="1em"
        display={["none", "flex"]}
      >
        <Button
          onClick={() => navigate("/")}
          my="1em"
          variant="ghost"
          fontWeight="700"
          fontSize="0.9em"
          textTransform="uppercase"
        >
          Home
        </Button>
        <Button
          onClick={() => navigate("/#our-story", "our-story")}
          my="1em"
          variant="ghost"
          fontWeight="700"
          fontSize="0.9em"
          textTransform="uppercase"
        >
          Story
        </Button>
        <Button
          onClick={() => navigate("/#gallery")}
          my="1em"
          variant="ghost"
          fontWeight="700"
          fontSize="0.9em"
          textTransform="uppercase"
        >
          Gallery
        </Button>
      </Flex>
      <Flex
        w={["100%", "50%"]}
        justifyContent={["start", "flex-end"]}
        alignItems="center"
      >
        <Flex m="1em">
          <SiteModeButton />
        </Flex>
      </Flex>
    </Flex>
  );
};
