import { Box, Flex, HStack } from "@chakra-ui/react";
import React from "react";
import Logo from "./Logo";
import ScrollingText from "./ScrollingText";
import Time from "./Time";
import UserAction from "./UserAction";

const NavbarContainer = ({ children }) => {
  return (
    <Box
      w="100%"
      sx={{
        position: "fixed",
        top: 0,
        zIndex: 6,
      }}
      bg="#3b3b3b"
    >
      <Flex align="center" wrap="wrap" alignContent="center">
        {children}
      </Flex>
    </Box>
  );
};

const Navbar = () => {
  return (
    <NavbarContainer>
      <Time />
      <ScrollingText />
      <UserAction />
    </NavbarContainer>
  );
};

export default Navbar;
