import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import { Image, Text } from "@chakra-ui/react";
import { TbClockHour9 } from "react-icons/tb";
import Logo from "./Logo";

const Time = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <Logo />
      <TbClockHour9
        color="#568fca"
        style={{ width: "22px", height: "25px", marginRight: 5, marginTop: 8 }}
      />
      <Text color="white" mt={2}>
        {format(date, "dd/MM/yyyy hh:mm:ss")}
      </Text>
    </div>
  );
};

export default Time;
