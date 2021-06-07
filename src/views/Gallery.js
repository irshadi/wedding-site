import React from "react";
import { Flex, Box } from "@chakra-ui/layout";
import { SectionHeading } from "../components/SectionHeading";
import { useColorMode } from "../hooks/useColorMode";
import { Grid } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { GridItem } from "@chakra-ui/layout";

export const GalleryViews = () => {
  const { theme } = useColorMode();
  return (
    <Box id="gallery">
      <SectionHeading title="Gallery" label="Taken from our pre wedding session" />

      <Grid templateColumns="repeat(6, 1fr)" gap={0}>
        {Array.from({ length: 6 }).map((_, idx) => (
          <GridItem>
            <Image src={`images/${theme}_${idx + 1}.jpg`} />
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};
