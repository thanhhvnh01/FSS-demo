import { Box, Button, HStack } from "@chakra-ui/react";
import React from "react";

const TableHeader = ({ action }) => {
  return (
    <div>
      <Box>
        <HStack>
          <HStack>
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
