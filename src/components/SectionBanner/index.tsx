import {
  Box,
  Center,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

import { useSiderbarDrawer } from "../../contexts/SideBarDrawerContext";

export function SectionBanner() {
  const { onOpen } = useSiderbarDrawer();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Center w="100%" bg="gray.900" h="335px">
      <Box
        justify="center"
        w="100%"
        h="100%"
        bgImage="url('/background.png')"
        bgRepeat="no-repeat"
      >
        <Center w="100%" h="100%">
          <SimpleGrid columns={2} spacing={100} mt={24}>
            <Stack direction={["column", "column"]} spacing="24px">
              <Heading fontWeight="bold" fontSize="4xl" color="gray.950">
                5 Continentes,
              </Heading>

              <Heading fontWeight="bold" fontSize="4xl" color="gray.950">
                infinitas posibilidades.
              </Heading>

              <Stack mt={6} w="490px" spacing={1}>
                <Text color="gray.450" fontSize="lg" fontWeight="regular">
                  Chegou a hora de tirar do papel a viagem que você
                </Text>
                <Text
                  mt={2}
                  fontSize="lg"
                  fontWeight="regular"
                  color="gray.459"
                >
                  sempre sonhou.
                </Text>
              </Stack>
            </Stack>
            <Box>
              <Image src="/airplane.png" alt="Logo" />
            </Box>
          </SimpleGrid>
        </Center>
      </Box>
    </Center>
  );
}
