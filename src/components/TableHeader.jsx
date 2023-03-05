import { Box, Button, HStack } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

const TableHeader = ({ action, setSelectedMarket, selectedMarket }) => {
  return (
    <div style={{ position: "fixed", width: "100%", background: "#242424" }}>
      <Box>
        <HStack>
          <span>
            <input className="search-input" placeholder="Tìm kiếm mã CK" />
            {/* <button className="search-btn">+</button> */}
          </span>
          <HStack>
            <div
              onClick={() => {
                setSelectedMarket("hose");
              }}
              colorScheme="blue"
              className={
                selectedMarket === "hose"
                  ? "has-sub-menu-active"
                  : "has-sub-menu"
              }
            >
              HOSE
            </div>
            <div
              onClick={() => {
                setSelectedMarket("hnx");
              }}
              colorScheme="blue"
              className={
                selectedMarket === "hnx"
                  ? "has-sub-menu-active"
                  : "has-sub-menu"
              }
            >
              HNX
            </div>
            {/* <Button onClick={action} colorScheme="blue">
              Open
            </Button> */}
          </HStack>
        </HStack>
      </Box>
    </div>
  );
};

export default TableHeader;
