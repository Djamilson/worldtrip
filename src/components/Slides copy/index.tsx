import {
  Box,
  Center,
  Flex,
  Icon,
  IconButton,
  Spacer,
  Text,
  useBreakpoint,
  useBreakpointValue,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

import { Logo } from "./Logo";
import { useSiderbarDrawer } from "../../contexts/SideBarDrawerContext";
import { RiMenuLine } from "react-icons/ri";

export function Slides() {
  const { onOpen } = useSiderbarDrawer();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1440}
      h="36"
      mt="4"
      px="0"
      align="center"
    >
      <Center w="100%" h="20" bg="gray.900">
        <Logo />
      </Center>
    </Flex>
  );
}
