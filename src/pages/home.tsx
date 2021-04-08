import {
  Box,
  Center,
  SimpleGrid,
  Text,
  Image,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { Header } from "../components/Header";

import { SectionBanner } from "../components/SectionBanner";
import { SectionItens } from "../components/SectionItens";

// install Swiper modules
SwiperCore.use([Autoplay, Navigation, Pagination, Scrollbar, A11y]);

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../styles/home.module.scss";
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
    <SimpleGrid columns={1} spacingX="40px" maxWidth="1440px" mb={8}>
      <Box height="100px" maxWidth="1440px">
        <Header />
      </Box>
      <Box h="368.21px" maxWidth="1440">
        <SectionBanner />
      </Box>
      <Box height="342px">
        <SectionItens />
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
                  O continente mais antigo.
                </Text>
              </GridItem>
            </Grid>

            <Swiper
              navigation
              spaceBetween={50}
              slidesPerView={1}
              pagination={{
                clickable: true,
              }}
              scrollbar={{ draggable: true }}
              onSlideChange={() => console.log("slide change")}
              autoplay={{ delay: 3000 }}
            >
              <style jsx>{`
                swiper-pagination .swiper-pagination-bullet .inner-dot {
                  background-color: #ffffff;
                  height: 4px;
                  width: 4px;
                }
                .swiper-pagination .swiper-pagination-bullet.swiper-pagination-bullet-active {
  background-color: transparent;
  border: 1px solid #ff7800;
  padding: 2px 6px 6px 2px;
}

/*the active square bullet*/
.swiper-pagination .swiper-pagination-bullet.swiper-pagination-bullet-active .inner-dot {
  background-color: #ff7800; /*orange color when active*/
  height: 4px:
  width: 4px;
}
              `}</style>
              {addItem()}
            </Swiper>
          </Center>
        </Box>
      </Center>
    </SimpleGrid>
  );
}
