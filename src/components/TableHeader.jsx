import { Box, Button, HStack } from "@chakra-ui/react";
import React from "react";

const TableHeader = ({ action, setSelectedMarket }) => {
  return (
    <div>
      <Box>
        <HStack>
          <HStack>
            <Button
              onClick={() => {
                setSelectedMarket("hose");
              }}
              colorScheme="blue"
            >
              HOSE
            </Button>
            <Button
              onClick={() => {
                setSelectedMarket("hnx");
              }}
              colorScheme="blue"
            >
              HNX
            </Button>
            <Button onClick={action} colorScheme="blue">
              Open
            </Button>
          </HStack>
        </HStack>
      </Box>
    </div>
  );
};

export default TableHeader;
