import React from "react";
import { FormattedMessage } from "react-intl";

const Footer = ({ action }) => {
  return (
    <div className="footer">
      <span style={{ color: "white", fontSize: "12px", padding: "5px" }}>
        <FormattedMessage
          id="label.footerText"
          values={{
            x: "x1000",
            y: "x10",
            z: "x1",
          }}
        />
      </span>

      <div
        style={{ color: "white", fontSize: "12px" }}
        onClick={() => {
          action();
        }}
        className="order-btn"
      >
        Đặt lệnh
      </div>
    </div>
  );
};

export default Footer;
