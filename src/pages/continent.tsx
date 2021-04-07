import {
  Box,
  Center,
  Flex,
  SimpleGrid,
  Text,
  Wrap,
  WrapItem,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Image,
  HStack,
  Grid,
  GridItem,
  Stack,
  Badge,
} from "@chakra-ui/react";
import { Header } from "../components/Header";

import { Slides } from "../components/Continent/Slides";
import { Itens } from "../components/Itens";

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import { Description } from "../components/Continent/Description";

// install Swiper modules
SwiperCore.use([Autoplay, Navigation, Pagination, Scrollbar, A11y]);

export default function Home() {
  const addItem = () =>
    Array.from(Array(5)).map((el, i) => (
      <Box justify="center" w="100%">
        <SwiperSlide key={i}>
          <Image
            w="100%"
            h="450px"
            src={`https://picsum.photos/id/${i + 1}/500/300`}
            alt={`Slide ${i}`}
          />
        </SwiperSlide>
      </Box>
    ));

  return (
    <SimpleGrid columns={1} spacingX="40px" mb="8">
      <Box height="100px">
        <Header />
      </Box>
      <Box height="500px">
        <Slides />
      </Box>
      <Box height="342px" color="gray.600" mt={-200}>
        <Description />
      </Box>
      <Box w="100%" align="center">
        <Stack h="700px" w="1160px">
          <Text
            fontWeight="medium"
            fontSize="36px"
            color="gray.600"
            align="left"
          >
            Cidades +100
          </Text>

          <SimpleGrid columns={4} spacing={10}>
            <Box maxW="sm" borderRadius="lg" overflow="hidden" height="279px">
              <Image src="/foto01.png" h="173px" alt="foto01.png" />

              <Box
                p="6"
                borderBottom="1px"
                borderLeft="1px"
                borderRight="1px"
                borderColor={`gray.900`}
                h="106px"
                w="98.5%"
                borderBottomLeftRadius="lg"
                borderBottomRightRadius="lg"
              >
                <SimpleGrid columns={2} spacingX="2px" spacingY="20px">
                  <Box bg="tomato">
                    <Box d="flex" alignItems="baseline">
                      <Box
                        color="gray.500"
                        fontWeight="semibold"
                        letterSpacing="wide"
                        fontSize="xs"
                        textTransform="uppercase"
                        ml="2"
                      >
                        Londres
                      </Box>
                    </Box>
                    <Box d="flex" alignItems="baseline">
                      <Box
                        color="gray.500"
                        fontWeight="semibold"
                        letterSpacing="wide"
                        fontSize="xs"
                        textTransform="uppercase"
                        ml="2"
                        mt="2"
                      >
                        Reino Unidos
                      </Box>
                    </Box>
                  </Box>
                  <Box bg="tomato">
                    <Box
                      align="center"
                      justify="left"
                      color="gray.500"
                      fontWeight="semibold"
                    >
                      <Image
                        src="/foto01.png"
                        ml="0"
                        h="13px"
                        alt="foto01.png"
                      />
                    </Box>
                  </Box>
                </SimpleGrid>
              </Box>
            </Box>
          </SimpleGrid>
        </Stack>
      </Box>
      <Center w="100%" h="450">
        <Box w="100%" px="105px" h="450">
          <Center w="100%" h="450" position="relative">
            <Grid
              h="100px"
              templateRows="repeat(2)"
              templateColumns="repeat(1)"
              mt="0px"
              position="absolute"
              spacing="10px"
              zIndex="9"
            >
              <GridItem>
                <Text
                  fontFamily="Poppins"
                  fontWeight="bold"
                  fontSize="48px"
                  color="gray.950"
                  align="center"
                >
                  Europa
                </Text>
              </GridItem>
              <GridItem>
                <Text
                  fontFamily="Poppins"
                  fontWeight="bold"
                  fontSize="24px"
                  color="gray.450"
                  align="center"
                >
                  Ocontinente mais antigo.
                </Text>
              </GridItem>
            </Grid>

            <Swiper
              navigation
              spaceBetween={50}
              slidesPerView={1}
              pagination={{ clickable: false }}
              scrollbar={{ draggable: false }}
              onSlideChange={() => console.log("slide change")}
              autoplay={{ delay: 3000 }}
            >
              {addItem()}
            </Swiper>
          </Center>
        </Box>
      </Center>
    </SimpleGrid>
  );
}
