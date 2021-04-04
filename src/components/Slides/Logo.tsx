import { Badge, Box, Center, Flex, Image, Spacer } from "@chakra-ui/react";

export function Logo() {
  return (
    <Box
      aling="center"
      w="100%"
      h="80"
      mt="160"
      bgImage="url('/background.png')"
    >
      <Center w="100%" h="20">
        <Flex>
          <Box p="4" bg="red.400">
            Box 1
          </Box>

          <Box p="4" bg="green.400">
            <Image src="/airplane.png" alt="Logo" />
          </Box>
        </Flex>
      </Center>

     
    </Box>
  );
}
