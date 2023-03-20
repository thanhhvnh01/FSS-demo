import {
  Button,
  Checkbox,
  CheckboxGroup,
  HStack,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@chakra-ui/react";
import React, { memo, useEffect, useState } from "react";

const TableSettingModal = memo(({ isOpen, onClose, columns }) => {
  const [selectedTab, setSelectedTab] = useState("hose");
  const [hose, setHose] = useState(columns.hose);
  const [vn30, setVn30] = useState(columns.vn30);
  const [hnx, setHnx] = useState(columns.hnx);
  const [hnx30, setHnx30] = useState(columns.hnx30);

  const handleSaveModal = () => {
    const modalResult = {
      hose: hose,
      vn30: vn30,
      hnx: hnx,
      hnx30: hnx30,
    };
    onClose(modalResult);
  };

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  const tabOption = () => {
    if (selectedTab === "hose") {
      return hose;
    }
    if (selectedTab === "vn30") {
      return vn30;
    }
    if (selectedTab === "hnx") {
      return hnx;
    }
    if (selectedTab === "hnx30") {
      return hnx30;
    }
  };

  const setOptions = (e) => {
    if (selectedTab === "hose") {
      return setHose(e);
    }
    if (selectedTab === "vn30") {
      return setVn30(e);
    }
    if (selectedTab === "hnx") {
      return setHnx(e);
    }
    if (selectedTab === "hnx30") {
      return setHnx30(e);
    }
  };

  return (
    <Modal
      closeOnOverlayClick={false}
      isOpen={isOpen}
      onClose={onClose}
      size="2xl"
      isCentered
    >
      <ModalContent bg="#222222">
        <ModalHeader
          color="white"
          fontSize={16}
          pt={0}
          pb={1}
          px={3}
          bg="#3a3a3a"
        >
          Ẩn hiện các cột
        </ModalHeader>
        <ModalBody py={0} pt={1} px={0}>
          <HStack sx={{ borderBottom: "1px solid #616161" }} px={3}>
            <div
              onClick={() => {
                handleTabChange("hose");
              }}
              className={
                selectedTab === "hose" ? "has-sub-menu-active" : "has-sub-menu"
              }
            >
              HOSE
            </div>
            <div
              onClick={() => {
                handleTabChange("vn30");
              }}
              className={
                selectedTab === "vn30" ? "has-sub-menu-active" : "has-sub-menu"
              }
            >
              VN30
            </div>
            <div
              onClick={() => {
                handleTabChange("hnx");
              }}
              className={
                selectedTab === "hnx" ? "has-sub-menu-active" : "has-sub-menu"
              }
            >
              HNX
            </div>
            <div
              onClick={() => {
                handleTabChange("hnx30");
              }}
              className={
                selectedTab === "hnx30" ? "has-sub-menu-active" : "has-sub-menu"
              }
            >
              HNX30
            </div>
          </HStack>
          <CheckboxGroup
            value={tabOption()}
            onChange={(e) => {
              setOptions(e);
            }}
          >
            <HStack color="white" justifyContent="space-around">
              <Checkbox value="symbol">Mã CK</Checkbox>
              <Checkbox value="reference">TC</Checkbox>
              <Checkbox value="ceiling">Trần</Checkbox>
              <Checkbox value="floor">Sàn</Checkbox>
            </HStack>
            {/* <Checkbox color="white" value="buy">
              Bên mua
            </Checkbox>
            <HStack color="white" justifyContent="space-around">
              <Checkbox value="symbol">Giá 1</Checkbox>
              <Checkbox value="reference">Giá 2</Checkbox>
              <Checkbox value="ceiling">Giá 3</Checkbox>
            </HStack>
            <HStack color="white" justifyContent="space-around">
              <Checkbox value="symbol">KL 1</Checkbox>
              <Checkbox value="reference">KL 2</Checkbox>
              <Checkbox value="ceiling">KL 3</Checkbox>
            </HStack> */}
          </CheckboxGroup>
        </ModalBody>
        <ModalFooter>
          <Button onClick={handleSaveModal}>Chấp nhận</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
});
export default TableSettingModal;
