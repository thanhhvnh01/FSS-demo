import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <section className="auth-bg">
      <Outlet />
    </section>
  );
};

export default AuthLayout;
