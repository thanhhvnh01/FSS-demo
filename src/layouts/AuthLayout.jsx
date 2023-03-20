import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

const AuthLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (!!userData) {
      navigate("/home");
    }
  }, []);

  return (
    <section className="auth-bg">
      <Outlet />
    </section>
  );
};

export default AuthLayout;
