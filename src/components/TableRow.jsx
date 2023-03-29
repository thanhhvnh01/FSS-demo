import { Td, Text, Tr } from "@chakra-ui/react";
import React from "react";

const TableRow = ({ blink, refValue, value, columns }) => {
  const textColor = (refPrice, currentPrice) => {
    if (currentPrice > refPrice) {
      return "#0f0";
    }
    if (currentPrice < refPrice) {
      return "red";
    }
    if (currentPrice === value.reference) {
      return "yellow";
    }
    if (currentPrice === value.ceiling) {
      return "purple";
    }
    if (currentPrice === value.floor) {
      return "blue";
    } else {
      return "#0f0";
    }
  };

  const cellColor = (refPrice, currentPrice) => {
    if (currentPrice > refPrice) {
      return "flash-cell-green";
    }
    if (currentPrice < refPrice) {
      return "flash-cell-red";
    }
    if (currentPrice === value.reference) {
      return "flash-cell";
    }
    if (currentPrice === value.ceiling) {
      return "flash-cell";
    }
    if (currentPrice === value.floor) {
      return "flash-cell";
    } else {
      return "aa";
    }
  };

  const roundValue = (value) => {
    return (value / 1000).toFixed(2);
  };

  return (
    <>
      {!!value && (
        <Tr>
          {columns.includes("symbol") && (
            <Td className={cellColor(refValue?.closePrice, value?.closePrice)}>
              <Text
                color={textColor(refValue?.closePrice, value?.closePrice)}
                fontWeight="bold"
              >
                {value.symbol}
              </Text>
            </Td>
          )}
          {columns.includes("reference") && (
            <Td className={cellColor()} sx={{ backgroundColor: "#404040" }}>
              <Text className="cell-text" color="yellow">
                {roundValue(value.reference)}
              </Text>
            </Td>
          )}
          {columns.includes("ceiling") && (
            <Td className={cellColor()} sx={{ backgroundColor: "#404040" }}>
              <Text className="cell-text" color="purple">
                {roundValue(value.ceiling)}
              </Text>
            </Td>
          )}
          {columns.includes("floor") && (
            <Td className={cellColor()} sx={{ backgroundColor: "#404040" }}>
              <Text className="cell-text" color="blue">
                {roundValue(value.floor)}
              </Text>
            </Td>
          )}
          {/* Mua */}
          <Td className={cellColor(refValue?.offerPrice3, value.offerPrice3)}>
            <Text
              className="cell-text"
              color={textColor(refValue?.offerPrice3, value.offerPrice3)}
            >
              {roundValue(value.offerPrice3)}
            </Text>
          </Td>
          <Td className={cellColor(refValue?.offerPrice3, value.offerPrice3)}>
            <Text
              className="cell-text"
              color={textColor(refValue?.offerPrice3, value.offerPrice3)}
            >
              {roundValue(value.offerVol3)}
            </Text>
          </Td>
          <Td className={cellColor()}>
            <Text className="cell-text" color={textColor()}>
              {roundValue(value.offerPrice2)}
            </Text>
          </Td>
          <Td className={cellColor()}>
            <Text className="cell-text" color={textColor()}>
              {roundValue(value.offerVol2)}
            </Text>
          </Td>
          <Td className={cellColor(refValue?.offerPrice1, value.offerPrice1)}>
            <Text
              className="cell-text"
              color={textColor(refValue?.offerPrice1, value.offerPrice1)}
            >
              {roundValue(value.offerPrice1)}
            </Text>
          </Td>
          <Td className={cellColor()}>
            <Text className="cell-text" color={textColor()}>
              {roundValue(value.offerVol1)}
            </Text>
          </Td>
          {/* Khop lenh */}
          <Td
            className={cellColor(refValue?.closePrice, value.closePrice)}
            sx={{
              backgroundColor: "#404040",
            }}
          >
            <Text
              className="cell-text"
              color={textColor(refValue?.closePrice, value.closePrice)}
            >
              {roundValue(value.closePrice)}
            </Text>
          </Td>
          <Td className={cellColor()} sx={{ backgroundColor: "#404040" }}>
            <Text
              className="cell-text"
              color={textColor(refValue?.closePrice, value.closePrice)}
            >
              {roundValue(value.closeVol)}
            </Text>
          </Td>
          <Td className={cellColor()} sx={{ backgroundColor: "#404040" }}>
            <Text
              className="cell-text"
              color={textColor(refValue?.closePrice, value.closePrice)}
            >
              {roundValue(value.change)}
            </Text>
          </Td>
          {/* Ban */}
          <Td className={cellColor()}>
            <Text className="cell-text" color={textColor()}>
              {roundValue(value.bidPrice1)}
            </Text>
          </Td>
          <Td className={cellColor()}>
            <Text className="cell-text" color={textColor()}>
              {roundValue(value.bidVol1)}
            </Text>
          </Td>
          <Td className={cellColor()}>
            <Text className="cell-text" color={textColor()}>
              {roundValue(value.bidPrice2)}
            </Text>
          </Td>
          <Td className={cellColor()}>
            <Text className="cell-text" color={textColor()}>
              {roundValue(value.bidVol2)}
            </Text>
          </Td>
          <Td className={cellColor()}>
            <Text className="cell-text" color={textColor()}>
              {roundValue(value.bidPrice3)}
            </Text>
          </Td>
          <Td className={cellColor()}>
            <Text className="cell-text" color={textColor()}>
              {roundValue(value.bidVol3)}
            </Text>
          </Td>
          <Td className={cellColor()}>
            <Text className="cell-text" color={textColor()}>
              {roundValue(value.TOTAL_BID_QTTY)}
            </Text>
          </Td>
          <Td className={cellColor()}>
            <Text className="cell-text" color={textColor()}>
              {roundValue(value.bidVol3)}
            </Text>
          </Td>
          <Td className={cellColor()}>
            <Text className="cell-text" color={textColor()}>
              {roundValue(value.bidVol3)}
            </Text>
          </Td>
          <Td className={cellColor()}>
            <Text className="cell-text" color={textColor()}>
              {roundValue(value.bidVol3)}
            </Text>
          </Td>
          <Td className={cellColor()}>
            <Text className="cell-text" color={textColor()}>
              {roundValue(value.bidVol3)}
            </Text>
          </Td>
          <Td className={cellColor()}>
            <Text className="cell-text" color={textColor()}>
              {roundValue(value.bidVol3)}
            </Text>
          </Td>
          <Td className={cellColor()}>
            <Text className="cell-text" color={textColor()}>
              {roundValue(value.bidVol3)}
            </Text>
          </Td>
          <Td className={cellColor()}>
            <Text className="cell-text" color={textColor()}>
              {roundValue(value.bidVol3)}
            </Text>
          </Td>
        </Tr>
      )}
    </>
  );
};

export default TableRow;
