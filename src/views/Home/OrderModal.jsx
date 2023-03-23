import { Drawer, DrawerContent } from "@chakra-ui/react";
import React from "react";

const OrderModal = ({ isOpen, onClose }) => {
  return (
    <Drawer isOpen={isOpen} onClose={onClose}>
      <DrawerContent bg="#FFFFFF"></DrawerContent>
    </Drawer>
  );
};

export default OrderModal;
