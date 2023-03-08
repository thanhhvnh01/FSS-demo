import { Image } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Logo = (props) => {
  return (
    <div {...props}>
      <Link to="/">
        <Image h="40px" src="/logo.png" />
      </Link>
    </div>
  );
};

export default Logo;
