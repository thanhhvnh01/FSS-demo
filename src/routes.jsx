import App from "./App";
import Home from "./views/Home";
import Login from "./views/Login/Login";

const routes = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
];

export default routes;
