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
  Icon,
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
import { RiMenuLine } from "react-icons/ri";

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
        <Stack px={8} h="700px" w="1160px">
          <Text
            fontWeight="medium"
            fontSize="36px"
            color="gray.600"
            align="left"
            mb={4}
          >
            Cidades +100
          </Text>

          <SimpleGrid columns={4} spacing={10}>
            <Box maxW="sm" borderRadius="lg" overflow="hidden" height="279px">
              <Image src="/londres.png" h="173px" alt="Londres" />

              <Box
                p="6"
                borderBottom="1px"
                borderLeft="1px"
                borderRight="1px"
                borderColor={`gray.899`}
                h="106px"
                w="100%"
                borderBottomLeftRadius="lg"
                borderBottomRightRadius="lg"
              >
                <SimpleGrid columns={2} spacingX="2px" spacingY="20px">
                  <Box>
                    <Box d="flex" alignItems="baseline">
                      <Box
                        color="gray.500"
                        fontWeight="semibold"
                        letterSpacing="wide"
                        fontSize="20px"
                        ml="2"
                      >
                        Londres
                      </Box>
                    </Box>
                    <Box d="flex" alignItems="baseline">
                      <Box
                        color="gray.500"
                        fontWeight="medium"
                        letterSpacing="wide"
                        fontSize="xs"
                        fontFamily="Barlow"
                        ml="2"
                        mt="2"
                      >
                        Reino Unidos
                      </Box>
                    </Box>
                  </Box>

                  <Wrap spacing="30px" align="center">
                    <WrapItem>
                      <Center ml="60px" h="70px">
                        <Image
                          src="/ellipse.png"
                          ml="0"
                          h="32px"
                          alt="foto01.png"
                        />
                      </Center>
                    </WrapItem>
                  </Wrap>
                </SimpleGrid>
              </Box>
            </Box>
            <Box maxW="sm" borderRadius="lg" overflow="hidden" height="279px">
              <Image src="/paris.png" h="173px" alt="Paris" />

              <Box
                p="6"
                borderBottom="1px"
                borderLeft="1px"
                borderRight="1px"
                borderColor={`gray.899`}
                h="106px"
                w="100%"
                borderBottomLeftRadius="lg"
                borderBottomRightRadius="lg"
              >
                <SimpleGrid columns={2} spacingX="2px" spacingY="20px">
                  <Box>
                    <Box d="flex" alignItems="baseline">
                      <Box
                        color="gray.500"
                        fontWeight="semibold"
                        letterSpacing="wide"
                        fontSize="20px"
                        ml="2"
                      >
                        Paries
                      </Box>
                    </Box>
                    <Box d="flex" alignItems="baseline">
                      <Box
                        color="gray.500"
                        fontWeight="medium"
                        letterSpacing="wide"
                        fontSize="xs"
                        fontFamily="Barlow"
                        ml="2"
                        mt="2"
                      >
                        França
                      </Box>
                    </Box>
                  </Box>

                  <Wrap spacing="30px" align="center">
                    <WrapItem>
                      <Center ml="60px" h="70px">
                        <Image
                          src="/franca_bandeira.png"
                          ml="0"
                          h="32px"
                          alt="Bandeira Franca"
                        />
                      </Center>
                    </WrapItem>
                  </Wrap>
                </SimpleGrid>
              </Box>
            </Box>
            <Box maxW="sm" borderRadius="lg" overflow="hidden" height="279px">
              <Image src="/roma.png" h="173px" alt="Roma" />

              <Box
                p="6"
                borderBottom="1px"
                borderLeft="1px"
                borderRight="1px"
                borderColor={`gray.899`}
                h="106px"
                w="100%"
                borderBottomLeftRadius="lg"
                borderBottomRightRadius="lg"
              >
                <SimpleGrid columns={2} spacingX="2px" spacingY="20px">
                  <Box>
                    <Box d="flex" alignItems="baseline">
                      <Box
                        color="gray.500"
                        fontWeight="semibold"
                        letterSpacing="wide"
                        fontSize="20px"
                        ml="2"
                      >
                        Roma
                      </Box>
                    </Box>
                    <Box d="flex" alignItems="baseline">
                      <Box
                        color="gray.500"
                        fontWeight="medium"
                        letterSpacing="wide"
                        fontSize="xs"
                        fontFamily="Barlow"
                        ml="2"
                        mt="2"
                      >
                        Itália
                      </Box>
                    </Box>
                  </Box>

                  <Wrap spacing="30px" align="center">
                    <WrapItem>
                      <Center ml="60px" h="70px">
                        <Image
                          src="/italia_bandeira.png"
                          ml="0"
                          h="32px"
                          alt="Italia Bandeira"
                        />
                      </Center>
                    </WrapItem>
                  </Wrap>
                </SimpleGrid>
              </Box>
            </Box>
            <Box maxW="sm" borderRadius="lg" overflow="hidden" height="279px">
              <Image src="/praga.png" h="173px" alt="Praga" />

              <Box
                p="6"
                borderBottom="1px"
                borderLeft="1px"
                borderRight="1px"
                borderColor={`gray.899`}
                h="106px"
                w="100%"
                borderBottomLeftRadius="lg"
                borderBottomRightRadius="lg"
              >
                <SimpleGrid columns={2} spacingX="2px" spacingY="20px">
                  <Box>
                    <Box d="flex" alignItems="baseline">
                      <Box
                        color="gray.500"
                        fontWeight="semibold"
                        letterSpacing="wide"
                        fontSize="20px"
                        ml="2"
                      >
                        Praga
                      </Box>
                    </Box>
                    <Box d="flex" alignItems="baseline" w="122px">
                      <Text
                        color="gray.500"
                        fontWeight="medium"
                        letterSpacing="wide"
                        fontSize="xs"
                        fontFamily="Barlow"
                        mt="2"
                        ml={2}
                      >
                        República Tcheca
                      </Text>
                    </Box>
                  </Box>

                  <Wrap>
                    <WrapItem>
                      <Center ml="60px" h="70px">
                        <Image
                          src="/republica_tcheca_bandeira.png"
                          ml="0"
                          h="32px"
                          alt="Republica Tcheca"
                        />
                      </Center>
                    </WrapItem>
                  </Wrap>
                </SimpleGrid>
              </Box>
            </Box>
            <Box maxW="sm" borderRadius="lg" overflow="hidden" height="279px">
              <Image src="/amsterda.png" h="173px" alt="Amsterdã" />

              <Box
                p="6"
                borderBottom="1px"
                borderLeft="1px"
                borderRight="1px"
                borderColor={`gray.899`}
                h="106px"
                w="100%"
                borderBottomLeftRadius="lg"
                borderBottomRightRadius="lg"
              >
                <SimpleGrid columns={2} spacingX="2px" spacingY="20px">
                  <Box>
                    <Box d="flex" alignItems="baseline">
                      <Box
                        color="gray.500"
                        fontWeight="semibold"
                        letterSpacing="wide"
                        fontSize="20px"
                        ml="2"
                      >
                        Amsterdã
                      </Box>
                    </Box>
                    <Box d="flex" alignItems="baseline">
                      <Box
                        color="gray.500"
                        fontWeight="medium"
                        letterSpacing="wide"
                        fontSize="xs"
                        fontFamily="Barlow"
                        ml="2"
                        mt="2"
                      >
                        Olanda
                      </Box>
                    </Box>
                  </Box>

                  <Wrap spacing="30px" align="center">
                    <WrapItem>
                      <Center ml="60px" h="70px">
                        <Image
                          src="/olanda_bandeira.png"
                          ml="0"
                          h="32px"
                          alt="olanda_bandeira.png"
                        />
                      </Center>
                    </WrapItem>
                  </Wrap>
                </SimpleGrid>
              </Box>
            </Box>
          </SimpleGrid>
        </Stack>
      </Box>
    </SimpleGrid>
  );
}
