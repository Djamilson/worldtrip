import {
  Badge,
  Box,
  Center,
  Flex,
  Icon,
  Image,
  Link,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import {
  RiAddLine,
  RiBankLine,
  RiDashboardLine,
  RiPencilLine,
} from "react-icons/ri";
import { IoEarth } from "react-icons/io5";

import { NavLink } from "./NavLink";

export function Logo() {
  return (
    <Wrap spacing={10} justify="space-around" mt={6} w="80%">
      <WrapItem>
        <NavLink image="/vector01.png" href="/dashboard">
          vida noturna
        </NavLink>
      </WrapItem>

      <WrapItem>
        <NavLink image="/surf.png" href="/dashboard">
          praia
        </NavLink>
      </WrapItem>

      <WrapItem>
        <NavLink image="/building.png" href="/dashboard">
          moderno
        </NavLink>
      </WrapItem>

      <WrapItem>
        <NavLink image="/vector02.png" href="/dashboard">
          clássico
        </NavLink>
      </WrapItem>

      <WrapItem>
        <NavLink image="/earth.png" href="/dashboard">
          e mais...
        </NavLink>
      </WrapItem>
    </Wrap>
  );
}
