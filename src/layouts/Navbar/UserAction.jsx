import {
  Button,
  Card,
  Checkbox,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  Radio,
  RadioGroup,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { FormattedMessage } from "react-intl";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IntlContext } from "../../utils/Internationalization";

const UserAction = () => {
  const intlContext = useContext(IntlContext);

  const [lang, setLang] = useState(intlContext.locale);

  const handleLangUpdate = (e) => {
    intlContext.switchLanguage(e);
    setLang(e);
  };
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
        <MenuList sx={{ background: "#3a3a3a", px: 2 }}>
          <Stack>
            <Card px={5} py={2}>
              <Text>
                <FormattedMessage id="label.theme" defaultMessage="Giao diện" />
              </Text>
              <RadioGroup>
                <Stack direction="row" justifyContent="space-around">
                  <Radio>Sáng</Radio>
                  <Radio>Tối</Radio>
                </Stack>
              </RadioGroup>
            </Card>
            <Card px={5} py={2}>
              <Text>
                <FormattedMessage
                  id="label.language"
                  defaultMessage="Ngôn ngữ"
                />
              </Text>
              <RadioGroup value={lang} onChange={handleLangUpdate}>
                <Stack direction="row" justifyContent="space-around">
                  <Radio value="vi">Việt</Radio>
                  <Radio value="en">Anh</Radio>
                </Stack>
              </RadioGroup>
            </Card>
          </Stack>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default UserAction;
