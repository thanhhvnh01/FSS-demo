import React from "react";
import { FormattedMessage } from "react-intl";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <span style={{ color: "white", fontSize: "12px" }}>
          <FormattedMessage
            id="label.footerText"
            values={{
              x: "x1000",
              y: "x10",
              z: "x1",
            }}
          />
        </span>
      </div>
    </div>
  );
};

export default Footer;
