import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/layout";
import { Header } from "../components/Header";

import { theme } from "../styles/theme";
import { Slides } from "../components/Slides";

export default function Home() {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Slides />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
          <Box
            p={["6", "8"]}
            bg="gray.950"
            borderRadius={8}
            //pb="4"
          >
            <Text fontSize="lg" mb="4">
              Taxa de Abertura
            </Text>
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
