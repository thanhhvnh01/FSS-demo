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
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { handleLogin } from "../../api/main";
import { loginAC } from "../../redux/actions/auth";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  // handler
  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = () => {
    const formData = {
      userName: userName,
      password: password,
    };

    const res = handleLogin(formData);
    if (res === 200) {
      dispatch(loginAC(formData));
      navigate("/home");
    }
  };

  return (
    <Card className="login-card" centerContent maxW="lg">
      <Image w="30vh" src="/logo-company.png" />

      <Stack spacing={3} sx={{ display: "flex", mt: 5 }}>
        <Input
          variant="filled"
          placeholder="Tài khoản"
          value={userName}
          onChange={handleUserNameChange}
        />
        <InputGroup>
          <Input
            variant="filled"
            placeholder="Mật khẩu"
            type={show ? "text" : "password"}
            value={password}
            onChange={handlePasswordChange}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Ẩn" : "Hiện"}
            </Button>
          </InputRightElement>
        </InputGroup>

        <Button onClick={onSubmit} w="100%" bg="#125d8e" color="white">
          Đăng nhập
        </Button>

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
