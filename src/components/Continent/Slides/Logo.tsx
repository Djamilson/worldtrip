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
      mt="100px"
      bgImage="url('/EXdXLrZXS9Q.png')"
      bgPosition="center"
      bgRepeat="no-repeat"
    >
      <Box px={24} mx={10} py={8} justify="center" display={{ md: "flex" }}>
        <Box pr="140px">
          <Text
            mt="190px"
            ml={10}
            fontWeight="bold"
            fontSize="4xl"
            letterSpacing="wide"
            color="gray.950"
          >
            Europa
          </Text>
        </Box>        
      </Box>
    </Box>
  );
}
