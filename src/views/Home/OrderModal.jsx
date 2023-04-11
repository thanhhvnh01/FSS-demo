import {
  Button,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  Grid,
  GridItem,
  HStack,
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import ReactSelect from "react-select";

const OrderModal = ({ isOpen, onClose, options }) => {
  const [mode, setMode] = useState("");

  const handleSelectMode = (mode) => {
    setMode(mode);
  };

  return (
    <Drawer isOpen={isOpen} onClose={onClose} placement="bottom">
      <DrawerContent bg="#FFFFFF" pb={20} sx={{ height: "410px" }}>
        <DrawerHeader bg="#e2e2e2" py={1} px={1} mb={2}>
          <Grid templateColumns="repeat(10, 1fr)" gap={2}>
            <GridItem colSpan={2} px={2}>
              <Text fontSize="sm">Đặt lệnh</Text>
            </GridItem>
            <GridItem colSpan={8}>
              <Text fontSize="sm">Lệnh trong ngày</Text>
            </GridItem>
          </Grid>
        </DrawerHeader>
        <Grid templateColumns="repeat(10, 1fr)" gap={2}>
          <GridItem colSpan={2} w="100%" h="10" px={2}>
            <Stack gap={1} pb={2} borderBottom="1px solid grey">
              <div className="toggle-wrapper">
                <div
                  onClick={() => {
                    handleSelectMode("buy");
                  }}
                  className={`buy${mode === "buy" ? "-active" : ""}`}
                >
                  MUA
                </div>
                <div
                  onClick={() => {
                    handleSelectMode("sell");
                  }}
                  className={`sell${mode === "sell" ? "-active" : ""}`}
                >
                  BÁN
                </div>
              </div>
              {/* <Input placeholder="Chọn mã CK"></Input> */}
              <ReactSelect
                placeholder="Chọn mã CK"
                options={options}
                isClearable
              />
            </Stack>
            <div>
              <HStack mt={2}>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="black"
                    height="30px"
                    children="KL:"
                  />
                  <Input size="sm" type="number"></Input>
                </InputGroup>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="black"
                    height="30px"
                    children="Giá:"
                  />
                  <Input size="sm" type="number"></Input>
                </InputGroup>
              </HStack>
              <Stack gap={1} mt={3}>
                <HStack className="row-between">
                  <Text>Tiền mặt có thể mua:</Text>
                  <Text>900,873</Text>
                </HStack>
                <HStack className="row-between">
                  <Text>Sức mua:</Text>
                  <Text>900,873</Text>
                </HStack>
                <HStack className="row-between">
                  <Text>KL mua tối đa:</Text>
                  <Text>0</Text>
                </HStack>
                <HStack className="row-between">
                  <Text>Tỉ lệ vay:</Text>
                  <Text>0</Text>
                </HStack>
                <Button>Mua</Button>
              </Stack>
            </div>
          </GridItem>
          <GridItem colSpan={8} w="100%" h="10" bg="blue.500" />
        </Grid>
      </DrawerContent>
    </Drawer>
  );
};

export default OrderModal;
