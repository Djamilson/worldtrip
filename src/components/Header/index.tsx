import {
  Center,
  Flex,
  Icon,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";

import { Logo } from "./Logo";
import { useSiderbarDrawer } from "../../contexts/SideBarDrawerContext";
import { RiMenuLine, RiArrowLeftSLine } from "react-icons/ri";

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

      <IconButton
        aria-label="Open navigation"
        icon={<Icon as={RiArrowLeftSLine} color="gray.600" />}
        fontSize="32"
        variant="unstyled"
        onClick={onOpen}
        mb={8}
        ml="150px"
      ></IconButton>
      <Center w="100%" h="100px">
        <Logo />
      </Center>
    </Flex>
  );
}
