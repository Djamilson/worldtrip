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

export function Itens() {
  const { onOpen } = useSiderbarDrawer();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Center
      w="100%"
      justify="center"      
      mt="-10"
      h="342"
    >
      <Logo />
    </Center>
  );
}
