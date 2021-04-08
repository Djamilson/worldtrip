import {
  Button,
  Center,
  Flex,
  Icon,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";

import { NavLink } from "../Sidebar/NavLink";

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
    <Flex as="header" w="100%" maxWidth={1440} h="100px" px="6" align="center">
      <Center w="100%" h="100px">
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

        <NavLink icon={RiArrowLeftSLine} href="/home"></NavLink>

        <Center w="100%" h="100px">
          <Logo />
        </Center>
      </Center>
    </Flex>
  );
}
