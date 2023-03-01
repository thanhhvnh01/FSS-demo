import {
  Button,
  Checkbox,
  Container,
  HStack,
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
    <Container centerContent maxW="lg" mt="250px">
      <Text fontSize="3xl" fontWeight="bold">
        Đăng nhập
      </Text>
      <Stack spacing={3} sx={{ display: "flex", my: "auto" }}>
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
        <VStack sx={{ alignItems: "left" }}>
          <Checkbox>Nhớ mật khẩu</Checkbox>
          <Link to="/register">
            <Text>Chưa có tài khoản ? đăng kí.</Text>
          </Link>
        </VStack>
      </Stack>
      <Button>
        <Link to="/home">Đăng nhập</Link>
      </Button>
    </Container>
  );
};

export default Login;
