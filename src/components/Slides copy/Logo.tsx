import {
  Badge,
  Box,
  Center,
  Flex,
  Image,
  Link,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";

export function Logo() {
  return (
    <Box
      justify="center"
      w="100%"
      h="80"
      mt="160"
      bgImage="url('/background.png')"
      bgPosition="center"
      bgRepeat="no-repeat"
    >
      <Box px={24} mx={10} py={8} justify="center" display={{ md: "flex" }}>
        <Box pr="140px">
          <Stack spacing={1} mt={6}>
            <Text
              fontWeight="bold"
              fontSize="4xl"
              letterSpacing="wide"
              color="gray.950"
            >
              5 Continentes,
            </Text>

            <Text
              fontWeight="bold"
              fontSize="3xl"
              letterSpacing="wide"
              color="gray.950"
            >
              infinitas posibilidades.
            </Text>
          </Stack>
          <Stack mt={6} w="100%" spacing={1}>
            <Text color="gray.450" fontSize="lg" fontWeight="regular">
              Chegou a hora de tirar do papel a viagem que você
            </Text>
            <Text mt={2} fontSize="lg" fontWeight="regular" color="gray.459">
              sempre sonhou.
            </Text>
          </Stack>
        </Box>
        <Box mt={10}>
          <Image src="/airplane.png" alt="Logo" />
        </Box>
      </Box>
    </Box>
  );
}
