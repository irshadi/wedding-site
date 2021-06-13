import React from "react";
import { Flex, Heading, Text, Box, Divider, Grid } from "@chakra-ui/layout";
import { SectionHeading } from "../components/SectionHeading";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { COLOR_MAP } from "../constants/color";
import { useCountdown, COUNTDOWN_STATUS_MAP } from "../hooks/useCountdown";
import { Button } from "@chakra-ui/button";
import { SiYoutube, SiZoom } from "react-icons/si";
import { CommentViews } from "./Comment";
import { Image } from "@chakra-ui/image";

export const InvitationViews = () => {
  const { getCountdownEnum, getRelativeTime } = useCountdown();
  const isButtonDisabled = !(
    getCountdownEnum() === COUNTDOWN_STATUS_MAP.WEDDING_DAY
  );
  const bgBoxColor = useColorModeValue(COLOR_MAP.BEIGE, COLOR_MAP.DARK_GRAY);

  return (
    <Box mt="6em" mx={["2.5em", "12.5em"]}>
      <Flex flexDir="column" textAlign="center" w="100%" fontFamily="Georgia">
        <Heading w="100%">بسم الله الرحمن الرحيم</Heading>
        <Text w="100%" mt="1em">
          In the name of Allah, most Gracious, the most Merciful.
        </Text>
        <SectionHeading
          title="Hello there !"
          label="we cordially request the honor of your presence to our private wedding"
        />

        <Box>
          <Grid
            gridTemplateColumns={["repeat(1, 1fr)", "repeat(3, 1fr)"]}
            gap={2}
          >
            <Flex flexDir="column" p="2em">
              <Heading
                fontFamily="MAK"
                textTransform="uppercase"
                fontSize="2em"
              >
                Larasati Ayuningrum
              </Heading>
              <Text mt="1em">First Daughter of</Text>
              <Text fontWeight="600" textTransform="uppercase">
                Ismunanto Haribisono
                <br /> {"&"} <br />
                Asih Yuniarti
              </Text>
            </Flex>
            <Flex align="center" justify={["center"]}>
              <Heading fontSize="5em" fontFamily="MAK">
                {"&"}
              </Heading>
            </Flex>
            <Flex flexDir="column" p="2em">
              <Heading
                fontFamily="MAK"
                textTransform="uppercase"
                fontSize="2em"
              >
                Irshadi Bagasputro
              </Heading>
              <Text mt="1em">First Son of</Text>
              <Text fontWeight="600" textTransform="uppercase">
                Rahadi Saputro
                <br /> {"&"} <br />
                Yanita Susanti
              </Text>
            </Flex>
          </Grid>
        </Box>

        <Heading textAlign="center" fontFamily="Georgia" fontSize="1.25em">
          To be held on
        </Heading>
        <Flex
          bg={bgBoxColor}
          p="2em"
          rounded=".25em"
          mt="1.25em"
          flexDir={["column", "row"]}
        >
          <Flex w={["100%", "33%"]} mt={["1.5em", 0]} flexDir="column" px="1em">
            <Heading fontFamily="Georgia" fontSize="1em">
              Date
            </Heading>
            <Divider mt="1em" />
            <Flex justify="center" align="center" h="100%">
              <Heading
                textAlign="center"
                fontFamily="MAK"
                fontSize={["1em", "1.5em"]}
                mt=".5em"
              >
                Saturday <br />
                June 19th 2021
              </Heading>
            </Flex>
          </Flex>
          <Flex w={["100%", "33%"]} mt={["1.5em", 0]} flexDir="column" px="1em">
            <Heading fontFamily="Georgia" fontSize="1em">
              Time
            </Heading>
            <Divider mt="1em" colorScheme={"whiteAlpha"} />
            <Flex justify="center" align="center" h="100%">
              <Heading
                textAlign="center"
                fontFamily="MAK"
                fontSize={["1em", "1.5em"]}
                mt=".5em"
              >
                16:00 – 17:00 WIB
              </Heading>
            </Flex>
          </Flex>
          <Flex w={["100%", "33%"]} mt={["1.5em", 0]} flexDir="column" px="1em">
            <Heading fontFamily="Georgia" fontSize="1em">
              Venue
            </Heading>
            <Divider mt="1em" />
            <Flex justify="center" align="center" h="100%">
              <Heading
                textAlign="center"
                fontFamily="MAK"
                fontSize={["1em", "1.5em"]}
                mt=".5em"
              >
                Aston Priority Simatupang Hotel {"&"} Conference Center
              </Heading>
            </Flex>
          </Flex>
        </Flex>

        <SectionHeading
          title="A few words from us"
          label="Our statement following COVID-19 Pandemic"
        />
        <hr />
        <Box w="100%" mt="2em" justifyContent="start">
          <Text w="100%" textAlign="start" as="i" fontSize="1.25em">
            Dear family and friends,
          </Text>
          <Text as="i" fontSize="1.25em">
            <br />
            <br />
            With COVID-19 still a growing concern, after thoughtful
            consideration, we have opted for an intimate wedding ceremony with
            only immediate family present.
            <br />
            <br />
            While we will definitely miss your presence, we invite you to stream
            our ceremony from the comfort of your home. We can’t wait to see you
            on either Zoom or Youtube! Virtual event details for joining our
            special day are below.
            <br />
            <br />
            We appreciate your understanding as we all try to navigate this
            unprecedented moment.
          </Text>
        </Box>

        <Box w="100%">
          <Flex my="2em" w="100%" justify="center" flexDir={["column", "row"]}>
            <Button
              as="a"
              href="http://bit.ly/selarasdenganbagas"
              isExternal
              target="_blank"
              bg={bgBoxColor}
              py=".5em"
              leftIcon={<SiYoutube />}
              mr={[0, ".25em"]}
              mt={["1em", 0]}
              w={["80%", "100%"]}
              alignSelf="center"
            >
              Stream from Youtube
            </Button>
            <Button
              as="a"
              href="http://bit.ly/selarasdenganbagaszoom"
              isExternal
              target="_blank"
              bg={bgBoxColor}
              py=".5em"
              leftIcon={<SiZoom />}
              ml={[0, ".25em"]}
              mt={["1em", 0]}
              w={["80%", "100%"]}
              alignSelf="center"
            >
              Stream from Zoom
            </Button>
          </Flex>
          {isButtonDisabled && (
            <Flex flexDir={["column", "row"]} justify="center" align="center">
              <Button cursor="default" isLoading variant="ghost" />
              <Text as="i" mt=".25em">
                Will be Live {getRelativeTime()}
              </Text>
            </Flex>
          )}
        </Box>

        <SectionHeading
          title="Digital Gifts"
          label="Following COVID-19 Pandemic"
        />

        <Text fontFamily="Georgia">
          To participate in completing our best moment, you can give digital
          gifts through this website.
        </Text>
        <Flex justify="center" py="2em">
          <Image src="images/qr.jpg" />
        </Flex>
      </Flex>

      {/* <CommentViews /> */}

      <Flex flexDir="column" my="3em" w="100%" fontFamily="Georgia">
        <Text as="i" fontSize="1.25em">
          “And one of His signs is that He created mates for you from yourselves
          that you may find rest in them, and He put between you love and
          compassion; most surely there are signs in this for a people who
          reflect.”
        </Text>
        <br />
        <Text w="100%" as="i" textAlign="end">
          Ar-Ruum: 21
        </Text>
      </Flex>
    </Box>
  );
};
