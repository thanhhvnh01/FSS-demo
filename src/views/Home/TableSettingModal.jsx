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

const TableSettingModal = memo(({ isOpen, onClose, columns, setColumns }) => {
  const [options, setOptions] = useState(columns);

  const handleSaveModal = () => {
    onClose(options);
  };

  return (
    <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <ModalHeader>Ẩn hiện các cột</ModalHeader>
        <ModalBody>
          <CheckboxGroup
            value={options}
            onChange={(e) => {
              setOptions(e);
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
        <ModalFooter>
          <Button onClick={handleSaveModal}>Chấp nhận</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
});
export default TableSettingModal;
