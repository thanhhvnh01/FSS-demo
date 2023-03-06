import {
  Button,
  Card,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FormattedMessage } from "react-intl";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const UserAction = () => {
  return (
    <Flex ml="auto">
      <Link to="/">
        <Button colorScheme="blue" size="xs">
          <FormattedMessage id="btn.login" />
        </Button>
      </Link>
      <Menu>
        <MenuButton sx={{ px: 5 }}>
          <FaUserAlt color="#fffff" />
        </MenuButton>
        <MenuList sx={{ background: "black" }}>
          <VStack>
            <Card>Giao diện</Card>
            <Card>Ngôn ngữ</Card>
          </VStack>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default UserAction;
