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
} from "@chakra-ui/react";
import { Header } from "../components/Header";

import dynamic from "next/dynamic";
const Carousel = dynamic(() => import("@brainhubeu/react-carousel"), {
  ssr: false,
});

import { Slides } from "../components/Slides";
import { Itens } from "../components/Itens";

import { useEffect, useRef, useState } from "react";

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// install Swiper modules
SwiperCore.use([Autoplay, Navigation, Pagination, Scrollbar, A11y]);

export default function Home() {
  const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);

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
      <Box height="342px">
        <Slides />
      </Box>
      <Box height="342px">
        <Itens />
      </Box>
      <Box height="100px">
        <Center h="0px">
          <SimpleGrid columns={1} align="center">
            <Text
              fontWeight="medium"
              fontSize="3xl"
              color="gray.600"
              align="center"
            >
              Vamos nessa?
            </Text>
            <Text
              fontWeight="medium"
              fontSize="3xl"
              color="gray.600"
              align="center"
            >
              Então escolha seu continente
            </Text>
          </SimpleGrid>
        </Center>
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
