import { Box, Button, HStack } from "@chakra-ui/react";
import React from "react";
import { FiMoreVertical } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const TableHeader = ({ action, setSelectedMarket, selectedMarket }) => {
  const labelHOSE = () => {
    if (selectedMarket === "vn30") {
      return "VN30";
    } else {
      return "HOSE";
    }
  };

  const labelHNX = () => {
    if (selectedMarket === "hnx30") {
      return "HNX30";
    } else {
      return "HNX";
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        background: "#242424",
        zIndex: 0,
      }}
    >
      <Box pt={2}>
        <HStack>
          <span>
            <input className="search-input" placeholder="Tìm kiếm mã CK" />
            {/* <button className="search-btn">+</button> */}
          </span>
          <HStack>
            <div
              className={
                selectedMarket === "hose"
                  ? "has-sub-menu-active"
                  : "has-sub-menu"
              }
            >
              <div
                onClick={() => {
                  setSelectedMarket("hose");
                }}
              >
                {labelHOSE()}
              </div>
              <div className="dropdown-content">
                <div
                  onClick={() => {
                    setSelectedMarket("hose");
                  }}
                  className={
                    selectedMarket === "hose"
                      ? "dropdown-item-active"
                      : "dropdown-item"
                  }
                >
                  HOSE
                </div>
                <div
                  onClick={() => {
                    setSelectedMarket("vn30");
                  }}
                  className={
                    selectedMarket === "vn30"
                      ? "dropdown-item-active"
                      : "dropdown-item"
                  }
                >
                  VN30
                </div>
              </div>
            </div>
            <div
              className={
                selectedMarket === "hnx"
                  ? "has-sub-menu-active"
                  : "has-sub-menu"
              }
            >
              <div
                onClick={() => {
                  setSelectedMarket("hnx");
                }}
              >
                {labelHNX()}
              </div>
              <div className="dropdown-content">
                <div
                  onClick={() => {
                    setSelectedMarket("hnx");
                  }}
                  className={
                    selectedMarket === "hnx"
                      ? "dropdown-item-active"
                      : "dropdown-item"
                  }
                >
                  HNX
                </div>
                <div
                  onClick={() => {
                    setSelectedMarket("hnx30");
                  }}
                  className={
                    selectedMarket === "hnx30"
                      ? "dropdown-item-active"
                      : "dropdown-item"
                  }
                >
                  HNX30
                </div>
              </div>
            </div>
          </HStack>
          <FiMoreVertical
            style={{ display: "flex", marginLeft: "auto", marginRight: 10 }}
            color="white"
            onClick={() => {
              action();
            }}
          />
        </HStack>
      </Box>
    </div>
  );
};

export default TableHeader;
