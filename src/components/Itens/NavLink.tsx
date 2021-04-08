import {
  Icon,
  Link as ChakraLink,
  Text,
  LinkProps as ChakraLinkProps,
  SimpleGrid,
  Center,
  WrapItem,
  Image,
  Box,
} from "@chakra-ui/react";
import { ElementType } from "react";

import { ActiveLink } from "./ActiveLink";
interface NavLinkProps extends ChakraLinkProps {
  image?: string;
  children: string;
  href: string;
}

export function NavLink({ children, image, href, ...rest }: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" align="center" {...rest}>
        <WrapItem>
          <Center h="145px">
            <SimpleGrid columns={1} spacing={3} align="center">
              <Box
                w="90px"
                py={8}
                _hover={{
                  marginTop: "1px",
                  borderBottom: "2px",
                  borderColor: "gray.200",
                }}
              >
                <Center>
                  <Image src={image} alt="Logo" w={16} h={16} />
                </Center>
                <Text fontWeight="medium" color="gray.600" align="center">
                  {children}
                </Text>
              </Box>
            </SimpleGrid>
          </Center>
        </WrapItem>
      </ChakraLink>
    </ActiveLink>
  );
}
