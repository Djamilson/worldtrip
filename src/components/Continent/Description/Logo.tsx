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
  Icon,  
  StatGroup,
  
} from "@chakra-ui/react";
import { RiInformationLine } from "react-icons/ri";

export function Logo() {
  return (
    <Stack direction="row" h="250px" p={4} mt="80px">
      <Text
        ml={6}       
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

      <Center h="211px" w="490px">
        <StatGroup spacing={10}>
          <Box w="90px" mr={6}>
            <Stat>
              <StatNumber
                fontFamily="Poppins"
                fontSize="48px"
                fontWeight="semibold"
                color="gray.900"
              >
                <Center h="80px">50</Center>
              </StatNumber>
              <StatLabel
                fontFamily="Poppins"
                fontWeight="semibold"
                fontSize="24px"
              >
                <Center w="100%"> Países </Center>
              </StatLabel>
            </Stat>
          </Box>
          <Box w="100px">
            <Stat>
              <StatNumber
                fontFamily="Poppins"
                fontSize="48px"
                fontWeight="semibold"
                color="gray.900"
              >
                <Center h="80px">60</Center>
              </StatNumber>
              <StatLabel
                fontFamily="Poppins"
                fontWeight="semibold"
                fontSize="24px"
              >
                <Center w="100%">Línguas </Center>
              </StatLabel>
            </Stat>
          </Box>
          <Box ml={6}>
            <Stat w="190px">
              <StatNumber
                fontFamily="Poppins"
                fontSize="48px"
                fontWeight="semibold"
                color="gray.900"
              >
                <Center h="80px">27</Center>
              </StatNumber>
              <StatLabel
                fontFamily="Poppins"
                fontWeight="semibold"
                fontSize="24px"
              >
                <Center w="100%">
                  <Text>Cidades +100</Text>
                  <Icon as={RiInformationLine} ml={2} fontSize={16} />
                </Center>
              </StatLabel>
            </Stat>
          </Box>
        </StatGroup>
      </Center>
    </Stack>
  );
}
