import {
  Divider,
  Box,
  Grid,
  Stack,
  Text,
  Wrap,
  WrapItem,
  Stat,
  StatLabel,
  StatNumber,
  Center,
} from "@chakra-ui/react";


export function Logo() {
  return (
    <Stack
      direction="row"
      h="250px"
      p={4}
      mt="80px"
    >
      <Text
        w="600px"
        h="211px"
        justifyContent="flex-start"
        textAlign="justify"
        fontFamily="Poppins"
        fontSize="23.8px"
        fontWeight="regular"
      >
        A Europa é, por convenção, um dos seis continentes do mundo.
        Compreendendo a península ocidental da Eurásia, a Europa geralmente
        divide-se da Ásia a leste pela divisória de águas dos montes Urais, o
        rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.
      </Text>
      <Box
        w="490px"
        h="211px"
        justify="center"
        spacing={3}
        color="gray.600"
        align={["center"]}
      >
        <Center w="100%" h="211px">
          <Stat
            w={{ base: "80%", md: "40%" }}
            align={["center", "center", "flex-start", "flex-start"]}
          >
            <StatNumber
              fontFamily="Poppins"
              fontSize="48px"
              fontWeight="semibold"
              color="gray.900"
            >
              50
            </StatNumber>
            <StatLabel>Países</StatLabel>
          </Stat>

          <Stat>
            <StatNumber
              fontFamily="Poppins"
              fontSize="48px"
              fontWeight="semibold"
              color="gray.900"
            >
              60
            </StatNumber>
            <StatLabel>Línguas</StatLabel>
          </Stat>
          <Stat>
            <StatNumber
              fontFamily="Poppins"
              fontSize="48px"
              fontWeight="semibold"
              color="gray.900"
            >
              27
            </StatNumber>
            <StatLabel>Cidades +100</StatLabel>
          </Stat>
        </Center>
      </Box>
    </Stack>
  );
}
