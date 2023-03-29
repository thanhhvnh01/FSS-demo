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
import { Link, useNavigate } from "react-router-dom";
import { IntlContext } from "../../utils/Internationalization";
import { useDispatch } from "react-redux";
import { logoutAC } from "../../redux/actions/auth";

const UserAction = () => {
  const intlContext = useContext(IntlContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("userData"));

  const [lang, setLang] = useState(intlContext.locale);

  const handleLangUpdate = (e) => {
    intlContext.switchLanguage(e);
    setLang(e);
  };

  return (
    <Flex ml="auto">
      {userData ? (
        <Text color="white">{userData.value.userName}</Text>
      ) : (
        <Link to="/">
          <Button colorScheme="blue" size="xs">
            <FormattedMessage id="btn.login" />
          </Button>
        </Link>
      )}
      <Menu>
        <MenuButton sx={{ px: 5 }} _focus={{ border: "none" }}>
          <FaUserAlt color="#fffff" />
        </MenuButton>
        <MenuList
          sx={{
            background: "#3a3a3a",
            px: 2,
            zIndex: 15,
            position: "relative",
          }}
        >
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
            {!!userData && (
              <Button
                color="white"
                bg="tomato"
                onClick={() => {
                  dispatch(logoutAC());
                  navigate("/");
                }}
              >
                Đăng xuất
              </Button>
            )}
          </Stack>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default UserAction;
