import React from "react";
import commentBox from "commentbox.io";
import { useSiteMetadata } from "../../hooks/useSiteMetadata";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { COLOR_MAP } from "../../constants/color";
import { Flex } from "@chakra-ui/layout";
import { SectionHeading } from "../SectionHeading";

export const CommentBox = () => {
  const {
    data: { commentBoxId }
  } = useSiteMetadata();

  const color = useColorModeValue(
    COLOR_MAP.BEIGE_TINT_1,
    COLOR_MAP.DARK_GRAY_SHADE_0
  );
  const darkestColor = useColorModeValue(
    COLOR_MAP.BEIGE_TINT_2,
    COLOR_MAP.DARK_GRAY_SHADE_3
  );

  React.useEffect(() => {
    commentBox(commentBoxId, {
      sortOrder: "newest",
      textColor: color,
      buttonColor: darkestColor,
      className: "my-commentbox"
    });
  }, [commentBox]);

  return (
    <Flex flexDir="column" justify="center" mx={["2.5em", "12.5em"]}>
      <SectionHeading
        title="Comments"
        label="You can leave wishes here !"
      />
      <Flex
        justify="center"
        w="100%"
        flexDir="column"
        className="my-commentbox"
      ></Flex>
    </Flex>
  );
};
