import App from "./App";
import AuthLayout from "./layouts/AuthLayout";
import Home from "./views/Home";
import Login from "./views/Login/Login";

const routes = [
  {
    path: "/",
    element: <AuthLayout />,
    children: [{ path: "/", element: <Login /> }],
  },
  {
    path: "/home",
    element: <Home />,
  },
];

export default routes;
