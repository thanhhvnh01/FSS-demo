import {
  Button,
  Card,
  Checkbox,
  Container,
  HStack,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  // useEffect(() => {
  //   handleResgisterAPI({ username: "test", password: "suppertest" });
  // }, []);

  return (
    <Card className="login-card" centerContent maxW="lg">
      <Image w="30vh" src="/public/logo-company.png" />

      <Stack spacing={3} sx={{ display: "flex", mt: 5 }}>
        <Input variant="filled" placeholder="Tài khoản" />
        <InputGroup>
          <Input
            variant="filled"
            placeholder="Mật khẩu"
            type={show ? "text" : "password"}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Ẩn" : "Hiện"}
            </Button>
          </InputRightElement>
        </InputGroup>
        <Link to="/home">
          <Button w="100%" bg="#125d8e" color="white">
            Đăng nhập
          </Button>
        </Link>
        <HStack sx={{ justifyContent: "space-between" }}>
          <Link to="/register">
            <Text fontSize="xs" color="white">
              Mở tài khoản
            </Text>
          </Link>
          <Link to="/register">
            <Text fontSize="xs" color="white">
              Quên mật khẩu
            </Text>
          </Link>
        </HStack>
      </Stack>
    </Card>
  );
};

export default Login;
