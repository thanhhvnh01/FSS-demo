import { Text } from "@chakra-ui/react";
import React from "react";

const data = [
  {
    symbol: "HOSE",
    properties: {
      tradeVol: 3000,
      tradePrice: 5000,
      dealVol: 2500,
      dealPrice: 1000,
    },
  },
  {
    symbol: "HNX",
    properties: {
      tradeVol: 3000,
      tradePrice: 5000,
      dealVol: 2500,
      dealPrice: 1000,
    },
  },
  {
    symbol: "VN30",
    properties: {
      tradeVol: 3000,
      tradePrice: 5000,
      dealVol: 2500,
      dealPrice: 1000,
    },
  },
];

const Content = () => {
  return (
    <span>
      {data.map((d) => (
        <span>
          <span className="orange-txt">{d.symbol}: </span>{" "}
          <span className="yellow-txt">KLGD: </span>{" "}
          <span className="scroll-value">{d.properties.tradeVol} </span>
          <span className="yellow-txt">GTGD: </span>{" "}
          <span className="scroll-value">{d.properties.tradePrice} </span>
          <span className="yellow-txt">KL thỏa thuận: </span>{" "}
          <span className="scroll-value">{d.properties.dealVol} </span>
          <span className="yellow-txt">GT thỏa thuận: </span>{" "}
          <span className="scroll-value">{d.properties.dealPrice} </span>
        </span>
      ))}
    </span>
  );
};

const ScrollingText = () => {
  return (
    <div className="scroll-container">
      <Text className="scroll-text" color="white">
        <Content />
      </Text>
    </div>
  );
};

export default ScrollingText;
