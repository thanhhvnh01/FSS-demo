import {
  Checkbox,
  CheckboxGroup,
  HStack,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
} from "@chakra-ui/react";
import React from "react";

const TableSettingModal = ({ isOpen, onClose, columns, setColumns }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <ModalHeader>Ẩn hiện các cột</ModalHeader>
        <ModalBody>
          <CheckboxGroup
            value={columns}
            onChange={(e) => {
              setColumns(e);
              4565;
            }}
          >
            <HStack justifyContent="space-around">
              <Checkbox value="symbol">Mã CK</Checkbox>
              <Checkbox value="reference">TC</Checkbox>
              <Checkbox value="ceiling">Trần</Checkbox>
              <Checkbox value="floor">Sàn</Checkbox>
            </HStack>
          </CheckboxGroup>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default TableSettingModal;
