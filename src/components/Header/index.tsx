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

export function Header() {
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
      h="20"
      mt="4"
      px="6"
      align="center"
    >
      {!isWideVersion && (
        <IconButton
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
        ></IconButton>
      )}

      <Center w="100%" h="20">
        <Logo />
      </Center>
    </Flex>
  );
}
